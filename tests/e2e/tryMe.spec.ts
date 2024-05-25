import {test, expect} from "@playwright/test"

test.describe("TryMe Test Suit", ()=> {
    
    test("First", {tag:"@Smoke"}, async ({page}) => {
        console.log("Fist test runs");
    })

    test("Second", async ({page}) => {
        console.log("Second test runs");
    })

    test("Third @Smoke @Regression", async ({page}) => {
        console.log("Third test runs");
    })

    test("Forth", async ({page}) => {
        console.log("Forth test runs");
    })

    test("Fifth", async ({page}) => {
        console.log("Fifth test runs");
    })

    test("Sixth", async ({page}) => {
        console.log("Sixth test runs");
    })

    test("Seven", async ({page}) => {
        console.log("Seven test runs");
    })
  
    test("Eight", async ({page}) => {
        console.log("Eight test runs");
    })
})