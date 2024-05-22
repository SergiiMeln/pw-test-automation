import { test, expect } from "@playwright/test";

test.describe.only("Login | Logout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.locator("#signin_button").click();
  });

  test("Log in Test", async ({ page }) => {
    
    console.log("Login test");
  });

  test("Login. Invalid Credentials Test", async ({ page }) => {
    await page.locator("#user_login").fill("invalid username")
    await page.locator("#user_password").fill("invalid password")
    await page.getByText("Sign in").click()
    await page.waitForTimeout(3000)
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
    console.log("Invalid Login test");
  });
});
