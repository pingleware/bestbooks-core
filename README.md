# BestBooks Accounting Application Framework - CORE

BestBooks is an open source accounting application framework based on accounting terminology. Originally developed in Java to support multiple database because at the time the accounting applications had a close data model. Then migrated to PHP and as a WordPress plugin. BestBooks grew and matured as a WordPress plugin and became to cumbersome for a multiple site bookkeeping record system. A decision to rearchitect the framework with minimal web functionality interacting with a backend desktop-server component that can be placed behind a firewall.

NodeJS was chosen for the code base of the architecture because of one-code-base multiple platforms, as well as to breakup the functionality into node modules for easier maintenance with the base module beginning as the core.

The core module is a migration of the PHP classes from the WordPress plugin.

# Test Driven Development

TDD will be utilized during the development and maintenance, using the mocha test framework.

# Package Naming Convention

The BestBooks packages prefix the name with @pingleware, for PressPage Entertainment Inc DBA PINGLEWARE which is the branded operations responsible for IT development.

# Digital Currency Support Added

When Chairman Gensler testified at the House Financial Services Committee, he was ask a question to define Ether, see at [https://www.coindesk.com/video/sec-chair-gensler-refuses-to-say-if-ether-is-a-security-during-house-hearing/](https://www.coindesk.com/video/sec-chair-gensler-refuses-to-say-if-ether-is-a-security-during-house-hearing/), he could not define whether ether is a commodity or security, according to then Professor Gensler at MIT Blockchain course [(https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/](https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/)), Professor Gensler explains that both Bitcoin and Ether are not securiies but a [unit of account.](https://en.wikipedia.org/wiki/Unit_of_account)

Actually Ether like Bitcoin, like Cash is neither a commodity or security. Ether like Bitcoin and Cash and all other foreign currency denominations is a unit of account and is consider a liquid asset like Cash on the balance sheet.

Hence, Digital Currency is derived as a Cash asset for which Bitcoin and Ether is derived from DigitalCurrency class.

# Logging is now available

The log file is named bestbooks.log and resides in the system directory identified as .bestbooks located in the home directory. On a Mac, to view dot directories, open finder and and press CTRL-CMD-. (the dot or period key). Toggle this key combination will toggle the view of the dot directories

There are three levels of logging

| Level | Description                        | Example                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn  | For warning, non-critical messages | 2024-04-06T09:42:55.628Z [WARN] {}                                                                                                                                                                                                                                                                                                                                                                                        |
| info  | For informational messages         | 2024-04-06T09:42:55.586Z [INFO] INSERT OR IGNORE INTO ledger (company_id,office_id,account_name,account_code,txdate,note,credit,balance) VALUES (0,0,'Google Adsense Revenue',(SELECT code FROM accounts WHERE name='Google Adsense Revenue'),'2013-05-27','Service Adjustment','71.12',(SELECT IIF(SUM(debit)-SUM(credit),SUM(debit)-SUM(credit)+71.12,71.12) FROM ledger WHERE account_name='Google Adsense Revenue')); |
| error | For critical messages              | 2024-04-06T09:42:55.628Z [ERROR] {}                                                                                                                                                                                                                                                                                                                                                                                       |

# GAAP Compliance

Creating a chart of accounts in accordance with GAAP is the first step towards GAAP complaince and including entries for  FOREX trading to create operational budgets as well as digital currencies

### Chart of Accounts

#### **1000 - Assets**

* **1100 - Current Assets**

  * **1110 - Cash and Cash Equivalents**

    * 1111 - Petty Cash
    * 1112 - Checking Account
    * 1113 - Savings Account
    * 1114 - Money Market Account
    * **1115 - FOREX Trading Accounts**

      * 1115.1 - FOREX Account - RESERVES
      * 1115.2 - FOREX Account - OPERATIONS
  * **1120 - Digital Currencies**

    * 1121 - Bitcoin
    * 1122 - Ether
    * 1123 - Other Digital Currencies
  * **1130 - Accounts Receivable**

    * 1131 - Accounts Receivable - Trade
    * 1132 - Allowance for Doubtful Accounts
  * **1140 - Inventory**

    * 1141 - Raw Materials Inventory
    * 1142 - Work-in-Progress Inventory
    * 1143 - Finished Goods Inventory
  * **1150 - Prepaid Expenses**

    * 1151 - Prepaid Insurance
    * 1152 - Prepaid Rent
  * **1160 - Other Current Assets**

    * 1161 - Short-term Investments
    * 1162 - Notes Receivable (due within one year)
* **1200 - Non-Current Assets**

  * **1210 - Property, Plant, and Equipment (PP&E)**

    * 1211 - Land
    * 1212 - Buildings
    * 1213 - Machinery and Equipment
    * 1214 - Furniture and Fixtures
    * 1215 - Accumulated Depreciation
  * **1220 - Intangible Assets**

    * 1221 - Goodwill
    * 1222 - Patents
    * 1223 - Trademarks
    * 1224 - Accumulated Amortization
  * **1230 - Long-term Investments**
  * **1240 - Other Non-Current Assets**
  * **1242 - Long-term FOREX Investments**

    * 1243 - Long-term Digital Currency Investments
  * **1250 - Other Non-Current Assets**

    * 1251 - Long-term Notes Receivable

#### **2000 - Liabilities**

* **2100 - Current Liabilities**

  * **2110 - Accounts Payable**

    * 2111 - Accounts Payable - Trade
    * 2112 - Accounts Payable - Other
  * **2120 - Short-term Debt**

    * 2121 - Short-term Loans Payable
    * 2122 - Current Portion of Long-term Debt
  * **2130 - Accrued Liabilities**

    * 2131 - Accrued Salaries and Wages
    * 2132 - Accrued Interest Payable
    * 2133 - Accrued Taxes Payable
  * **2140 - Deferred Revenue (current)**

    * 2145 - Unrealized FOREX Gains
    * 2146 - Unrealized FOREX Losses
  * **2150 - Other Current Liabilities**

    * 2151 - Customer Deposits
* **2200 - Non-Current Liabilities**

  * 2210 - Long-term Debt
    * 2211 - Bonds Payable
    * 2212 - Long-term Loans Payable
  * 2220 - Deferred Revenue (non-current)
  * 2230 - Other Non-Current Liabilities
    * 2231 - Deferred Tax Liabilities

#### **3000 - Equity**

* **3100 - Shareholders' Equity**
  * 3110 - Common Stock
  * 3120 - Preferred Stock
  * 3130 - Additional Paid-in Capital
  * 3140 - Retained Earnings
  * 3150 - Treasury Stock
  * **3160 - Accumulated Other Comprehensive Income**
    * 3161 - Cumulative Translation Adjustments

#### **4000 - Revenue**

* **4100 - Sales Revenue**

  * 4110 - Product Sales
  * 4120 - Service Sales
* **4200 - Other Revenue**

  * **4210 - Interest Income**
  * **4220 - Dividend Income**
  * **4230 - Rental Income**
  * **4240 - Gain on Sale of Assets**
  * **4250 - FOREX Trading Gains**
    * 4251 - Realized FOREX Gains
    * 4252 - Unrealized FOREX Gains
  * **4260 - Digital Currency Gains**
    * 4261 - Realized Digital Currency Gains
    * 4262 - Unrealized Digital Currency Gains

#### **5000 - Cost of Goods Sold (COGS)**

* **5100 - COGS**
  * 5110 - Direct Materials
  * 5120 - Direct Labor
  * 5130 - Manufacturing Overhead

#### **6000 - Operating Expenses**

* **6100 - Selling Expenses**
  * 6110 - Advertising Expense
  * 6120 - Sales Commissions
  * 6130 - Travel Expense
* **6200 - General and Administrative Expenses**
  * 6210 - Salaries and Wages
  * 6220 - Rent Expense
  * 6230 - Utilities Expense
  * 6240 - Insurance Expense
  * 6250 - Depreciation Expense
  * 6260 - Amortization Expense
  * 6270 - Office Supplies Expense

#### **7000 - Other Expenses**

* **7300 - Other Expenses**
  * **7100 - Interest Expense**
  * **7200 - Tax Expenses**
  * **7300 - Other Expenses**
    * 7310 - Loss on Sale of Assets
    * 7320 - FOREX Trading Losses
      * 7321 - Realized FOREX Losses
      * 7322 - Unrealized FOREX Losses
    * 7330 - Digital Currency Losses
      * 7331 - Realized Digital Currency Losses
      * 7332 - Unrealized Digital Currency Losses

# About the Disclousres table
The `Disclosures` table holds crucial financial information that must comply with regulatory and accounting standards. It is designed to track the company's public disclosures related to financial statements, which are required for audits, SEC filings, and general financial transparency.

## Use Cases for the `Disclosures` Table

1. **Tracking Financial Disclosures Compliance**  
   The primary use case for the `Disclosures` table is to ensure that financial disclosures (such as income statements, balance sheets, and cash flow statements) are compliant with applicable standards like GAAP, GAAS, and SEC regulations.
   
   **Example**:  
   The company must disclose the financial health of the company by publishing a **Cash Flow Statement**. The table tracks whether the disclosure was made on time, whether it's compliant, and if any issues were found (like missing notes or improper methodology).
   
   **Disclosure Record**:
   ```json
   {
     "name": "Cash Flow Statement",
     "description": "Cash Flow Statement for FY 2023",
     "is_compliant": 1,
     "date_disclosed": "2023-01-15",
     "compliance_note": "Compliant"
   }
   ```

2. **Monitoring Non-Compliant Disclosures**  
   Identifying and monitoring disclosures that have failed to comply with the necessary accounting or regulatory standards is critical for audits and assessments.
   
   **Example**:  
   If an **Income Statement** lacks proper notes on revenue recognition, the audit team may flag this as non-compliant, and the company will be required to correct it before final approval.

   **Non-compliant Disclosure Record**:
   ```json
   {
     "name": "Income Statement",
     "description": "Income Statement for FY 2023",
     "is_compliant": 0,
     "date_disclosed": "2023-03-01",
     "compliance_note": "Methodology not disclosed"
   }
   ```

3. **Reporting on Disclosure History**  
   The `Disclosures` table can provide a historical record of all financial statements and other disclosures the company has made over a period of time. This helps auditors and regulatory bodies to review the company’s compliance with financial reporting over time.

   **Example**:  
   The audit team retrieves all financial disclosures made by the company over the last five years to confirm continuous compliance.

   **Historical Disclosure Records**:
   ```json
   [
     {
       "name": "Balance Sheet",
       "description": "Balance Sheet for FY 2022",
       "is_compliant": 1,
       "date_disclosed": "2022-03-01",
       "compliance_note": "Compliant"
     },
     {
       "name": "Income Statement",
       "description": "Income Statement for FY 2022",
       "is_compliant": 1,
       "date_disclosed": "2022-03-01",
       "compliance_note": "Compliant"
     }
   ]
   ```

4. **Generating Compliance Reports for Audits**  
   The disclosures data can be used to generate detailed reports for external audits, including management and public audit reports. These reports indicate whether the company is in compliance with disclosure requirements, pinpointing areas of improvement.

   **Example**:  
   A **Management Audit Report** is generated, summarizing which disclosures were compliant and which required corrective actions.
   
   **Audit Report Example**:
   ```json
   {
     "total_disclosures": 10,
     "compliant_disclosures": 9,
     "non_compliant_disclosures": 1,
     "non_compliant_details": [
       {
         "disclosure": "Income Statement",
         "compliance_note": "Methodology not disclosed"
       }
     ]
   }
   ```

5. **Ensuring Timeliness of Disclosures**  
   The `Disclosures` table allows tracking the timeliness of financial disclosures, which is important for SEC reporting deadlines. Late filings can lead to penalties or regulatory scrutiny.
   
   **Example**:  
   The **Balance Sheet** for Q2 is supposed to be disclosed by the end of the quarter. If it is delayed beyond the disclosure deadline, the company may face penalties.

   **Late Disclosure Record**:
   ```json
   {
     "name": "Balance Sheet",
     "description": "Balance Sheet for Q2 2023",
     "is_compliant": 0,
     "date_disclosed": "2023-07-15",
     "compliance_note": "Late submission"
   }
   ```

6. **Tracking Disclosure Corrections**  
   Companies may need to revise their disclosures if auditors or regulators find errors. Tracking when disclosures were corrected helps maintain an audit trail.
   
   **Example**:  
   The **Cash Flow Statement** initially failed to disclose a cash outflow correctly. After a revision, it was marked as compliant.

   **Corrected Disclosure Record**:
   ```json
   {
     "name": "Cash Flow Statement",
     "description": "Revised Cash Flow Statement for FY 2023",
     "is_compliant": 1,
     "date_disclosed": "2023-04-01",
     "compliance_note": "Revised disclosure"
   }
   ```

7. **Tracking Key Financial Metrics and Their Presentation**  
   Ensure that key financial metrics such as earnings per share (EPS), total assets, liabilities, and cash flows are properly disclosed and are consistent across the disclosures.
   
   **Example**:  
   The company's **Equity Statement** must include the proper breakdown of share transactions and equity changes. If some key equity metrics are omitted, it would be considered non-compliant.

   **Equity Statement Disclosure**:
   ```json
   {
     "name": "Equity Statement",
     "description": "Equity Statement for FY 2023",
     "is_compliant": 1,
     "date_disclosed": "2023-01-15",
     "compliance_note": "Includes EPS, dividends, and other changes in equity"
   }
   ```

8. **Ensuring Compliance with Regulatory Changes**  
   As regulations evolve, the company must ensure that disclosures are updated to reflect new accounting standards or regulatory requirements.
   
   **Example**:  
   New SEC regulations may require additional disclosure of **Related Party Transactions**. The `Disclosures` table tracks whether this new requirement has been implemented.

   **Related Party Transaction Disclosure**:
   ```json
   {
     "name": "Related Party Transactions",
     "description": "Disclosures of transactions with related parties for FY 2023",
     "is_compliant": 1,
     "date_disclosed": "2023-01-15",
     "compliance_note": "Compliant with new SEC regulations"
   }
   ```

9. **Support for Public Disclosure Reporting**  
   The `Disclosures` table is also useful for generating **Public Disclosure Audit Reports**, which summarize the financial information made available to investors and the public, ensuring transparency and accountability.
   
   **Example**:  
   A **Public Disclosure Report** is generated to confirm that all mandatory filings have been made and publicly disclosed by the company in accordance with SEC regulations.
   
   **Public Disclosure Report Example**:
   ```json
   {
     "total_disclosures": 12,
     "compliant_disclosures": 11,
     "non_compliant_disclosures": 1,
     "non_compliant_details": [
       {
         "disclosure": "Income Statement",
         "compliance_note": "Disclosure methodology missing"
       }
     ],
     "date": "2023-12-31"
   }
   ```

### Summary of Use Cases
1. **Tracking Financial Disclosures Compliance** (e.g., Balance Sheet, Income Statement)
2. **Monitoring Non-Compliant Disclosures** (e.g., flagging incomplete/missing disclosures)
3. **Reporting on Disclosure History** (e.g., view historical disclosure records)
4. **Generating Compliance Reports for Audits** (e.g., create audit reports)
5. **Ensuring Timeliness of Disclosures** (e.g., track on-time vs late disclosures)
6. **Tracking Disclosure Corrections** (e.g., track revisions to disclosures)
7. **Tracking Key Financial Metrics** (e.g., EPS, liabilities, cash flows)
8. **Ensuring Compliance with Regulatory Changes** (e.g., adaptation to new regulations)
9. **Support for Public Disclosure Reporting** (e.g., ensure investor disclosures are accurate)

These use cases are essential for maintaining financial transparency, ensuring regulatory compliance, and assisting in internal and external audits.