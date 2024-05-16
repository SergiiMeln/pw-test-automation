import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000, // ms for all test to finish
    retries: 0, // how many times PW to rerun tests
    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        actionTimeout: 10000, // ms for PW functions before it errors(click, type, waitForSelector)
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off"
    },
    projects: [
        {
            name: "chromium",
            use: {browserName: "chromium"}
        },
        {
            name: "firefox",
            use: {browserName: "firefox"}
        },
        {
            name: "webkit",
            use: {browserName: "webkit"}
        }
    ]
}

export default config

//command: npx playwright test --config=playwright.config.ts --project=chromium