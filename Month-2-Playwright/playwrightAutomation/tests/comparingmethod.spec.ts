import {test, expect} from '@playwright/test'

test("comparing method",async ({page}) => {
   
    await page.goto("https://demowebshop.tricentis.com/");


    const product = page.locator(".product-title");

    //innerText vs textContent
    console.log(await product.nth(1).textContent());
    console.log(await product.nth(2).innerText());


    const count = await product.count();

    for(let i =0; i<count; i++){
   //  const productName= await product.nth(i).innerText();//Extract plain text 
       const productName=await product.nth(i).textContent(); //Extract text including hidden elements 

       console.log(productName?.trim());

    }

    
    
});