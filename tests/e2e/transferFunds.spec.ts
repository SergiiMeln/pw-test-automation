import {test, expect, Locator} from "@playwright/test"

test.describe.only("Transfer Funds Test Suit", ()=> {

    test.beforeEach(async ({page})=> {
        await page.goto("http://zero.webappsecurity.com/index.html", {waitUntil:"domcontentloaded"});
        await page.locator("#signin_button").click();
        await page.locator("#user_login").fill("username")
        await page.locator("#user_password").fill("password")
        await page.getByText("Sign in").click()
        await page.goto("http://zero.webappsecurity.com", {waitUntil:"domcontentloaded"})
    })

    test("Transfer from Checking to Loan", {tag:"@Smoke"}, async ({page})=> {
        await page.locator("#onlineBankingMenu").click();
        await page.locator("#transfer_funds_link").click();
        await page.locator("#tf_fromAccountId").selectOption("2");
        await page.locator("#tf_toAccountId").selectOption("4");
        await page.locator("#tf_amount").fill("100");
        await page.locator("#tf_description").fill("Monthly payment")
        await page.locator("#btn_submit").click();
        
        const verifyPageTitle = await page.locator(".board-header").textContent();
        expect(verifyPageTitle).toContain("Verify");
        
        await page.locator("#btn_submit").click();
        const confirmPageTitle = await page.locator(".board-header").textContent();
        const successMessage = await page.locator(".alert-success").textContent();
        expect(confirmPageTitle).toContain("Confirm");
        expect(successMessage).toContain("You successfully submitted your transaction");
        await page.waitForTimeout(3000);
    })
})