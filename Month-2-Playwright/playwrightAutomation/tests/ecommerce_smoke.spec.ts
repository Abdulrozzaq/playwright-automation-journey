import {test, expect} from "@playwright/test"


test("verify webste", async ({page}) => {

    //Navigate and Register 

    const email = 'testbud' + Date.now() + '@qa.com'

    await page.goto("https://demowebshop.tricentis.com");

    await  page.getByRole('link', {name: "Register", exact :true,}).click();

    await page.getByLabel("Male",{exact:true}).check();

    await  page.getByLabel("First name").fill("Testing");

    await page.getByLabel("Last name").fill("Buddy");

    await page.getByLabel("Email").fill(email);

    await page.locator("label[for='Password']").fill("Testeme@123!");

    await page.getByLabel("Confirm password").fill("Testme@123!");

    await page.getByRole("button",{name : "Register", exact :  true,}).click();


});


test("'verify search", async ({page}) => {

    const productName  = "Computing and Internet";

     await page.goto("https://demowebshop.tricentis.com");


    const searchinput = page.locator("#small-searchterms")

    await searchinput.fill(productName);

    await page.getByRole("button",{name:"Search"}).click();


    const complink = page.getByRole("link", {name: productName, exact:true,}); 

    await expect(complink).toBeVisible();

    await complink.click();

    // Adding item to cart 

    const booknum = page.locator(".qty-input");


    await booknum.fill('3');

    await page.getByRole("button", {name : "Add to cart"}).first().click();


    //verify cart page

    await page.getByRole("link", {name: "Shopping cart", exact : true,}).click();
    await expect(page).toHaveURL(/\/cart/);

    const catitem = page.locator(".cart-item-row", {hasText : productName}); 

    await expect(catitem).toBeVisible();



});

