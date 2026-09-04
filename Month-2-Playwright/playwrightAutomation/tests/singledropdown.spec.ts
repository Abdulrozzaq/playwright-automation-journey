import {test,expect} from '@playwright/test'

test('single dropdown', async ({page}) => {

    await page.locator("#country").selectOption('india');

});