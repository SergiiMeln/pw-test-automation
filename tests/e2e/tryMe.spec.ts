import {test, expect} from "@playwright/test"

test.describe("TryMe test suit", ()=> {
    
    test("First", async ({page}) => {
        console.log("Fist test runs");
    })

    test("Second", async ({page}) => {
        console.log("Second test runs");
    })

    test("Third", async ({page}) => {
        console.log("Third test runs");
    })
})