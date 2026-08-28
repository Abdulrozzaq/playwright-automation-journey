import {test, expect} from "@playwright/test"


//self axis

test('verfiy table', async ({page}) => {

  await page.goto("https://www.w3schools.com/html/html_tables.asp");

  const Germanycell = page.locator("//td[text()='Germany']/self::td");

  await expect(Germanycell).toBeVisible();



// parent axis 

const Parent =  page.locator("//td[text()='Germany']/parent::tr");

await expect(Parent).toContainText(['Alfreds Futterkiste', 'Maria Anders', 'Germany']);  


});