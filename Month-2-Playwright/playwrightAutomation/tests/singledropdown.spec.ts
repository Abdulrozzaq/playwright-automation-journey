import {test,expect, Locator} from '@playwright/test'

test('single  select dropdown', async ({page}) => {

    page.goto("https://testautomationpractice.blogspot.com/");

    //1. select option from the dropdown 

    await page.locator("#country").selectOption('india'); // using visible text 
   //  await page.locator("#country").selectOption({label : 'uk'}); // using label
  //  await page.locator("#country").selectOption({value : 'Germany'}); // using attribute 
  //  await page.locator("#country").selectOption({index : 3}); // using index 


//2. check the option count 

const optiondropdown : Locator = page.locator("#country>option");

await expect(optiondropdown).toHaveCount(10);



//3. check if an option is present in the dropdown 

const alltextoption : string[] = (await optiondropdown.allTextContents()).map(text => text.trim());

console.log(alltextoption);

expect(alltextoption).toContain('Japan');

await page.waitForTimeout(5000);

});