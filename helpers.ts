export async function loadHomePage(page){
    await page.goto("https://example.com")
    await page.waitForTimeout(3000);
    console.log("Home page Loaded...")
}

export async function assertTitle(page){
    await page.waitForSelector("h1")
    const title = await page.locator("h1").textContent()
    console.log("Home page Title asserted... " + title)
}
