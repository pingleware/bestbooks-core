/**
 * BestBooks Accounting Application Framework is registered trademark of PressPage Entertainment Inc.
 */

 "use strict"

/**
 * See: http://www.keynotesupport.com/accounting/accounting-basics-debits-credits.shtml
 * 
 * Asset and Expense
 * -----------------
 * Because Asset and Expense accounts maintain positive balances, 
 * they are positive, or debit accounts. Accounting books will say 
 * “Accounts that normally have a positive balance are increased with a Debit 
 * and decreased with a Credit.” Of course they are! Look at the number line. 
 * If you add a positive number (debit) to a positive number, 
 * you get a bigger positive number. But if you start with a positive number 
 * and add a negative number (credit), you get a smaller positive number 
 * (you move left on the number line). The asset account called Cash, 
 * or the checking account, is unique in that it routinely receives debits 
 * and credits, but its goal is to maintain a positive balance.
 * 
 */

const AccountTypes = require('./accountTypes');
const Asset = require('./asset');

class Expense extends Asset {
    constructor(name) {
        super(name,AccountTypes.Expense);
        this.group = 400;
    }

    getGroup() {
        return this.group;
    }
}

module.exports = Expense;