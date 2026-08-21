import {test, expect} from "@playwright/test"

test('has title', async({page}) => {

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

});


test('has titile', async ({page}) => {

    await page.goto('ttps://automationbookstore.dev/');

    await expect(page).toHaveTitle(/Automation Bookstore/);


});