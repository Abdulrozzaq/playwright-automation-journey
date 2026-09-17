import {test,expect, Locator } from  '@playwright/test'

test('autosuggest dropdown',  async ({page}) => {

    await page.goto("https://www.flipkart.com/");

    const search = page.locator("input[name='q']").first();
    await search.fill('mobiles');

    page.waitForTimeout(2000);

    const suggest = page.locator("ul>li");

    const count = await suggest.count();

    console.log("autosuggested option: ", count);

    page.waitForTimeout(5000);




});