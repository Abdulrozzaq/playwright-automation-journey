import {test, expect} from "@playwright/test"

test("verify  logo", async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");


    const logo = page.locator("//img[@alt='Tricentis Demo Web Shop']");

    await expect(logo).toBeVisible();


    //contains

    const products= page.locator("//h2//a[contains(@href, 'computer')]");

    const productcount = await products.count();

     expect(productcount).toBeGreaterThan(0);

    console.log("first product:", await products.first().textContent());
    console.log ("last product", await products.last().textContent());
    console.log("nth product:", await products.nth(0).textContent());


   const productTitles : string[] = await  products.allTextContents();

   for(let pt of productTitles){
    console.log(pt);
   }


   //start-with 

   const probuild = page.locator("//h2//a[starts-with(@href, '/build')]"); 

   const buildlsit =  probuild.count();


   





});