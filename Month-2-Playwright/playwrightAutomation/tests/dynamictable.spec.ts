import {test, expect, Locator}from '@playwright/test'

test("verify chrome CPU load on dyanmc table", async ({page}) =>{
    

    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table =  page.locator(".table-responsive tbody");

    expect(table).toBeVisible();


    //Step 1 For Chrome process get value of  CPU load.


    const row =  await table.locator('tr').all()

   let cpuload = '';

    for(let data of row){

        const rowdata : string  = await data.locator('td').nth(0).innerText();

        if(rowdata==="chrome")
            {
                
                cpuload = await  data.locator('td', {hasText : '%'}).innerText();

                console.log("CPU load of chrome: ",cpuload);
                break;
               
            }
        }






    /// step 2 


    let chromeCPUtxt =await  page.locator("#chrome-cpu").innerText();

    console.log("Chrome CPU text", chromeCPUtxt);

    if((chromeCPUtxt).includes(chromeCPUtxt)){
        console.log("Chrome cpu equals")

    }
    else{
        console.log("Chrome does not equals")
    }

    expect(chromeCPUtxt).toContain(cpuload);

    await page.waitForTimeout(5000);
});