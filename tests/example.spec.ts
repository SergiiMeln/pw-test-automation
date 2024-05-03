import {test, expect} from '@playwright/test'

test ("Simple basic test", async ({page}) => {
    await page.goto("https://www.example.com", {waitUntil: "domcontentloaded"});
    const pageTitle = page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
    await page.waitForTimeout(3000);
})

test ("Click on Element", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html", {waitUntil: "domcontentloaded"});
    await page.click("#signin_button");
    await page.click("text=Sign in");
    const errorMessage = page.locator(".alert-error")
    const errorText = errorMessage.textContent()
    await expect(errorMessage).toContainText("Login")
    //await page.waitForTimeout(3000);
    // to write in console use await in front of text variable
    console.log("Error message: " + await errorText);
})

test ("Click on Element by Text", async ({page}) => {
    await page.goto("https://www.example.com", {waitUntil: "domcontentloaded"});
    await page.click("text=More information...")
    //to make a pause on the page ->
    await page.waitForTimeout(3000);
})

test ("Working with inputs", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")

    await page.fill("#user_login", "Senya")
    await page.fill("#user_password", "Babba")
    await page.click("text=Sign in")
    
    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong")
})

//For Assertion the element should be store in var
test ("Assertions", async ({page}) => {
    await page.goto("https://example.com/")
    await expect(page).toHaveURL('https://example.com')
    await expect(page).toHaveTitle("Example Domain")

    const element = await page.locator('h1')
    await expect(element).toBeVisible()
    await expect(element).toHaveText("Example Domain")
    await expect(element).toHaveCount(1)
    const nonExistingElement = page.locator("h5")
    await expect(nonExistingElement).not.toBeVisible()
})


// Test Suit
test.describe.only("My Test Suit", ()=> {
    test ("Test One", async ({page}) => {
        console.log("Fist Test Runs")
    })

    test ("Test Two", async ({page}) => {
        console.log("Second Test Runs")
    })

    test ("Test Three", async ({page}) => {
        console.log("Theard Test Runs")
    })
})