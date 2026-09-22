import {test, expect, Locator} from '@playwright/test'


test("Bootstrap hidden dropdown", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name: 'Login'}).click();

    await page.getByText('PIM').click();

    //Click on title dropdown 
    await page.locator('div>i').nth(4).click();



    await page.waitForTimeout(5000);

    const option : Locator = page.locator("div[role='listbox'] span");

    const count =await option.count();

    console.log("option count :", count);


    console.log("Print all option :", await option.allTextContents());


    console.log("print all the option");

    for(let i =0; count<27;i++){
        console.log(await option.nth(i).textContent());
    }

    for(let i =0; count<27;i++){

         const text = await option.nth(i).textContent();

         if(text=="QA Engineer"){
            console.log(text);
            break;
         }
    }
   


 
});