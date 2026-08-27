import {test, expect} from "@playwright/test"

test('verify dynamic element', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    for (let i  = 1 ; i <= 5; i++){


    const nock = page.getByRole("button", {name: /stop|start/i});


        await nock.click();


        await page.waitForTimeout(2000);



    }





});