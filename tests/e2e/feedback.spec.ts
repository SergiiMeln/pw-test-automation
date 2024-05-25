import {test, expect} from "@playwright/test"

//fill the form then Clear
//fill the form then Submit

test.describe("FeedbackForm Test Suit", ()=> { 

    test.beforeEach(async ({page})=> {
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.locator("#feedback").click();
    })

    test("Clear Feedback Form", async ({page})=> {
        const name = page.locator("[name=name]");
        const email = page.locator("[name=email]");
        const subject = page.locator("[name=subject]");
        const feedback = page.locator("[name=comment]");
        await name.fill("Sirio Forel");
        await email.fill("sirio@email.com");
        await subject.fill("Very Important Topic");
        await feedback.fill("Positive Feedback Here");
        await page.locator("[name=clear]").click();

        await expect(name).toBeEmpty();
        await expect(email).toBeEmpty();
        await expect(subject).toBeEmpty();
        await expect(feedback).toBeEmpty();
    })

    test("Submit Form", {tag: "@Smoke"}, async({page})=> {
        const nameField = page.locator("[name=name]");
        const emailField = page.locator("[name=email]");
        const subjectField = page.locator("[name=subject]");
        const feedbackField = page.locator("[name=comment]");
        const name = "Sirio Forel";
        await nameField.fill(name);
        await emailField.fill("sirio@email.com");
        await subjectField.fill("Very Important Topic");
        await feedbackField.fill("Positive Feedback Here");
        await page.locator("[name=submit]").click();

        const successText = page.locator("div.offset3");
        await expect(successText).toContainText("Thank you for your comments, " + name);
    })
})