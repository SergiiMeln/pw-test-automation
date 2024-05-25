import { test, expect } from "@playwright/test";

test.describe("Login Test Suit", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.locator("#signin_button").click();
  });

  test("Login/Logout Test", {tag:"@Smoke"}, async ({ page }) => {
    await page.locator("#user_login").fill("username")
    await page.locator("#user_password").fill("password")
    await page.getByText("Sign in").click()
    await page.goto("http://zero.webappsecurity.com")
    //const username = page.locator("#settingsBox>ul>li:nth-child(3)>a").textContent()
    //const username = page.textContent("#settingsBox>ul>li:nth-child(3)>a")
    const username = (await (page.locator("#settingsBox>ul>li:nth-child(3)>a").innerText())).trim();
    expect(username).toEqual("username")

    await page.locator("#settingsBox>ul>li:nth-child(3)>a").click();
    await page.locator("#logout_link").click();
    await page.waitForTimeout(2000)
    const signInButton = page.locator("#signin_button")
    await expect(signInButton).toContainText("Signin")
  });

  test("Login. Invalid Credentials Test", async ({ page }) => {
    await page.locator("#user_login").fill("invalid username")
    await page.locator("#user_password").fill("invalid password")
    await page.getByText("Sign in").click()
    await page.waitForTimeout(2000)
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
  });
});
