import {test,expect} from '@playwright/test'

test('verify product sorting', async ({page}) => {

   ///navigate to the webpage 

   await page.goto("https://bstackdemo.com/");

   ///interact with the order by dropdown 

   const order = page.locator(".sort select ");

   await expect(order).toBeEnabled();
   await expect(order).toBeVisible();



   await  page.locator(".sort select ").selectOption("lowestprice");
   await page.waitForTimeout(2000);
 
   /// retrieve and print product information 

   const productprice  = await  page.locator(".shelf-container .shelf-item .val b").allTextContents();
   const productname = await page.locator(".shelf-item .shelf-item__title").allTextContents();

   console.log("--- ALL PRODUCTS (SORTED BY PRICE) ---");

   productname.forEach((productname, index) =>{
      const price = productprice[index];
      console.log(`product: ${productname.trim()} | price ${price.trim()}`)
   });


   expect(productprice).toHaveLength(25);

   expect (productname).toHaveLength(25);

   //ACCESS AND PRINT THE LOWEST PRICED PRODUCT

   console.log(`Lowest price product : ${productname[0].trim()} | price : ${productprice[0].trim()}`);


   //ACCESS AND PRINT THE HIGHEST PRICED PRODUCT


   console.log(`Highest price product : ${productname[24].trim()} | price : ${productprice[24].trim()}`);



   await page.waitForTimeout(5000);
    

});