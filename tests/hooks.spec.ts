import {test, expect} from "@playwright/test"


test.describe('Hooks', ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto("https://example.com/")
        console.log("Berfore Each. Open Example page")
    })

    test('Fullscreen shot', async ({page}) => {
        await page.screenshot({path: 'screenshot.png', fullPage: true})
        console.log("Screenshot obtained")
    })

    test("Single element screenshot", async ({page}) => {
        await page.waitForTimeout(3000)
        const element = page.locator('h1')
        await element.screenshot({path: 'h1_element.png'})
        console.log("h1 element screenshot obtained")
    })
})