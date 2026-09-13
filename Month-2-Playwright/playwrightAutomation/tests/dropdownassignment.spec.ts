import {test,expect} from '@playwright/test'

test('verify product sorting', async ({page}) => {

   await page.goto("https://bstackdemo.com/");

   await  page.locator(".sort select ").selectOption("lowestprice");
   //("select>option[value='lowestprice']");

   //await sort.click();


   const productprice  = await  page.locator(".shelf-container .shelf-item .val b").allTextContents();
   const productname = await page.locator(".shelf-item .shelf-item__title").allTextContents();


   console.log(productprice);
   console.log(productname);

   await page.waitForTimeout(5000);
    

});