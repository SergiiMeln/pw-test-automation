import {test, expect} from "@playwright/test"

test.describe.only("Filter Account Transactions", ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html", {waitUntil:"domcontentloaded"});
        await page.locator("#signin_button").click();
        await page.locator("#user_login").fill("username")
        await page.locator("#user_password").fill("password")
        await page.getByText("Sign in").click()
        await page.goto("http://zero.webappsecurity.com", {waitUntil:"domcontentloaded"})
        await page.click("#account_activity_link");
    })


    test("Check Savings Activities", async({page})=> {
        console.log("Account Savings");
    })
})