import {test, expect, Locator} from "@playwright/test"
        let accountList: Locator;
        let pageTitle: string | null;

test.describe.only("Filter Account Transactions", ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html", {waitUntil:"domcontentloaded"});
        await page.locator("#signin_button").click();
        await page.locator("#user_login").fill("username")
        await page.locator("#user_password").fill("password")
        await page.getByText("Sign in").click()
        await page.goto("http://zero.webappsecurity.com", {waitUntil:"domcontentloaded"})
        await page.click("#account_activity_link");
        pageTitle = await page.locator(".board-header").textContent();
        expect(pageTitle).toContain("Show Transactions");
        accountList = page.locator("#aa_accountId");
    })


    test("Verify Checking Account Activities", async({page})=> {
        //await page.selectOption("#aa_accountId", "2");
        await accountList.selectOption("2")
        await expect(accountList).toContainText("Checking");
//assert number of reconds
        const accountActivities = page.locator("#all_transactions_for_account table tbody>tr");
        await expect(accountActivities).toHaveCount(3);

//assert columns titles
        const accountColumn = await page.locator("#all_transactions_for_account table thead>tr>th").allTextContents();
        //console.log(accountColumn);
        await expect(page.locator("#all_transactions_for_account table thead>tr>th")).toHaveText(['Date', 'Description', 'Deposit', 'Withdrawal']);

//assert first row in table
        const accountRecords = await page.locator("#all_transactions_for_account table tbody>tr:first-child>td").allTextContents()
        //console.log(accountRecords);
        await expect(page.locator("#all_transactions_for_account table tbody>tr:first-child>td")).toHaveText([ '2012-09-06', 'CHECK DEPOSIT', '186.7', '' ]);
 
//prints account names
    const all = await page.locator("#aa_accountId>option").all()
    for(let i=0; i<all.length; i++){
        console.log(await all[i].textContent());
    }
    })
})