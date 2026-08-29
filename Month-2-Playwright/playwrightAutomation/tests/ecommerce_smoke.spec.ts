import {test, expect} from "@playwright/test"


test("verify webste", async ({page}) => {

    const email = 'testbud' + Date.now() + '@qa.com'

    await page.goto("https://tricentis.com"); 


    const link = page.getByRole('link', {name: "Register", exact :true,}).click();

    await page.getByLabel("Gender").check();

    await  page.getByLabel("First name").fill("Testing");

    await page.getByLabel("Last name").fill("Buddy");

    await page.getByLabel("Email").fill(email);

    await page.getByLabel("Password").fill("Testme@123!");

    await page.getByRole("button",{name : "Register", exact :  true,}).click();


    

    

});


