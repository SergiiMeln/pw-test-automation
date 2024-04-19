import {test, expect} from '@playwright/test'

test ("Simple basic test", async ({page}) => {
    await page.goto("https://www.example.com", {waitUntil: "domcontentloaded"});
    const pageTitle = page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
    await page.waitForTimeout(3000);
})

test.only ("Click on Element", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html", {waitUntil: "domcontentloaded"});
    await page.click("#signin_button");
    await page.click("text=Sign in");
    await page.waitForTimeout(3000);
})

test ("Click on Element by Text", async ({page}) => {
    await page.goto("https://www.example.com", {waitUntil: "domcontentloaded"});
    await page.click("text=More information...")
    await page.waitForTimeout(3000);
})