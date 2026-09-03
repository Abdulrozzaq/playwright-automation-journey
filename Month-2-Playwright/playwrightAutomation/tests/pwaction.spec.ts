import {test, expect} from "@playwright/test"


test('radio action', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const gender = page.locator("#male")

    await gender.check();

    await expect(gender).toBeVisible();

    await expect (gender).toBeChecked();




});


test('Checkbox action', async ({page}) => {

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const checkbox = days.map(input => (page.getByLabel(input)));

    for(let chck of checkbox){

        await chck.check();

        await expect(chck).toBeChecked();

    }

    // uncheck last 3 boxes 

    for(const chck of checkbox.slice(-3)){

        await chck.uncheck();

        await expect(chck).not.toBeChecked();

    
    
    }


    // uncheck if checked and check if uncheck 


    for(let chck of checkbox){

        if(await chck.isChecked()){


        await chck.uncheck();

        await expect(chck).not.toBeChecked();


        }

        else{
            await chck.check();

        await expect(chck).toBeChecked();
        }
         

    }


    //

    const weekday = 'Friday';

    for(const label of days){

        if(label.toLowerCase() === weekday.toLowerCase()){
            const checkbo= await page.getByLabel(label);
            await checkbo.check();
            await expect(checkbo).toBeChecked();

        }
    }



});





