import {test, expect, Locator} from "@playwright/test"

test.describe.only("Search Test Suit", ()=> {
    let searchField: Locator;

    test.beforeEach(async ({page})=> {
        await page.goto("http://zero.webappsecurity.com/index.html");
        searchField = page.locator("#searchTerm");
        await searchField.clear();
        await expect(searchField).toBeEmpty();
    })

    test("Search", {tag:"@Smoke"}, async ({page}) => {
        await searchField.fill("Bank");
        await page.keyboard.press("Enter");
        //const element = await page.locator("ul>li>a[href='/index.html']").textContent();
        const searchResult = page.locator("ul>li>a[href='/index.html']");
        expect(await searchResult.textContent()).toContain("Bank");
    })
})