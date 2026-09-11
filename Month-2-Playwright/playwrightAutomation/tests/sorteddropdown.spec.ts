import {test,expect, Locator} from '@playwright/test'

test('multi select dropdown', async ({page}) => {

   await page.goto("https://testautomationpractice.blogspot.com/");


    const optiondropdown = page.locator("#animals>option");

    const optiontext = (await optiondropdown.allTextContents()).map(text => text.trim());

    console.log(optiontext);

    const  sorted = optiontext.sort();

    console.log(sorted);


    expect(sorted).toEqual(optiontext);



   

});