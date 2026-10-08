import {test,expect, Locator } from  '@playwright/test'

test('autosuggest dropdown',  async ({page}) => {

    await page.goto("https://www.flipkart.com/");

     page.waitForTimeout(5000);
    const search = page.locator("input[name='q']").first();
    await search.fill('mobiles');

   await  page.waitForTimeout(7000);

    const suggest =  page.locator("ul>li");


    const count = await suggest.count();

    console.log("autosuggested option: ", count);

    console.log("Printing out all auto sugeestion options--------")

    //Printing all the autosuggestion 

     for(let i = 0; i<count; i++){
        console.log( await suggest.nth(i).textContent());
     }

    await page.waitForTimeout(5000);



});