/**
 * BestBooks Accounting Application Framework is registered trademark of PressPage Entertainment Inc.
 */

 "use strict"

 const sqlite3 = require('sqlite3').verbose();
 const path = require('path');
 const fs = require('fs');
 const localStorage = require('localStorage');
 const os = require('os');
 
 class Model {
     LastID;
 
     constructor() {
        if (fs.existsSync(path.join(os.homedir(),'.bestbooks')) == false) {
            fs.mkdirSync(path.join(os.homedir(),'.bestbooks'));
        }
        this.filePath = path.join(os.homedir(),'.bestbooks/bestbooks.db');
         this.db = new sqlite3.Database(this.filePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
            (err) => { 
             // do your thing 
             console.error(err);
            });         
     }
 
     getFilePath() {
         return this.filePath;
     }
 
     deleteDatabaseFile() {
         if (fs.existsSync(this.filePath)) {
             fs.rm(this.filePath);
             return true;
         }
         return false;
     }
 
     query(sql, callback) {
         this.db.all(sql, (err, rows) => {
             if (err) callback([]);
             callback(rows);
         });
     }
 
     querySync(sql) {
         return new Promise((resolve, reject) => {
             this.db.all(sql, (err, rows) => {
                 if (err) reject(err);
                 resolve(rows);
             });
         });
     }
 
     /**
      * To prevent SQL injection, using parameterized queries.
      * 
      * @param {*} sql       'INSERT INTO your_table (column1, column2) VALUES (?, ?)'
      * @param {*} params   [value1, value2]; // These are your actual values
      * @param {*} callback 
      */
     insert(sql, params, callback) {
         this.db.run(sql, params, (err, rows) => {
             if (err) throw new Error(err);
             localStorage.setItem('lastID',this.lastID);
             localStorage.setItem('changes',this.changes);
             callback(this.lastID,this.changes);
         });
     }
 
     /**
      * To prevent SQL injection, using parameterized queries.
      * 
      * @param {*} sql      'INSERT INTO your_table (column1, column2) VALUES (?, ?)'
      * @param {*} params   [value1, value2]; // These are your actual values
      * @returns 
      */
     async insertSync(sql,params) {
         return new Promise((resolve, reject) => {
            //  deepcode ignore Sqli: change to using parameterized queries but Snyk does not recognized this implementation
             this.db.run(sql, params, (err, rows) => {
                 if (err) reject(err);
                 localStorage.setItem('lastID',this.lastID);
                 localStorage.setItem('changes',this.changes);
                 resolve(this.lastID);
             });
         });
     }
 
     getLastID() {
         return this.LastID;
     }
 
     async updateSync(sql) {
         return this.insertSync(sql);
     }

     emptyTable(table,callback) {
        this.insert(`DELETE FROM ${table};`,callback);
     }

     async emptyTableSync(table) {
        return await this.insertSync(`DELETE FROM ${table};`)  
     }

     getAllTables(callback) {
        var sql = `SELECT name FROM sqlite_schema WHERE type='table' AND name NOT LIKE 'sqlite_%';`;
        this.query(sql,callback);
     }

     async getAllTablesSync() {
        var sql = `SELECT name FROM sqlite_schema WHERE type='table' AND name NOT LIKE 'sqlite_%';`;
        return await this.querySync(sql);
     }

     async emptyAllTablesSync() {
        var rows = await this.getAllTablesSync();
        rows.forEach(async row => {
            await this.emptyTableSync(row.name);
        })
     }
 }
 
 module.exports = Model;