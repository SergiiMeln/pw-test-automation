import {test, expect} from "@playwright/test"

test.describe("TryMe Test Suit", ()=> {
    
    test("First", {tag:"@Smoke"}, async ({page}) => {
        console.log("Fist test runs");
    })

    test("Second", async ({page}) => {
        console.log("Second test runs");
    })

    test("Third", async ({page}) => {
        console.log("Third test runs");
    })

    test("Forth", async ({page}) => {
        console.log("Forth test runs");
    })

    test("Fifth", async ({page}) => {
        console.log("Fifth test runs");
    })
})