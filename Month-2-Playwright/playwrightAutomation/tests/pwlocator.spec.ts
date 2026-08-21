import {test, expect} from "playwright/test"
/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test.beforeEach(async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/");

});


//page.getByAltText() to locate an element, usually image, by its text alternative.

test("to have image",async ({page}) => {

   await  page.getByAltText("nopCommerce demo store").click();

});


// page.getByRole() to locate by explicit and implicit accessibility attributes.
 
test("has link", async ({page}) => {
    await page.getByRole( "link", {name: "Register"}).click();

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");

});

//page.getByText() to locate by text content.
test("to be visible", async ({page}) => {

    await page.getByRole( "link", {name: "Register"}).click();

    await expect(page.getByText("Register")).toBeVisible();

});

//page.getByLabel() to locate a form control by associated label's text.

test("have label", async ({page}) => {

    await page.getByLabel("First name").fill('John');
    await page.getByLabel("Last name").fill('jones');
    await page.getByLabel("Email").fill('test@qa.team');


})

//page.getByPlaceholder() to locate an input by placeholder.
test("palceholder", async ({page}) => {
    await page.getByPlaceholder("Search store").fill('Macbook');
    await page.getByRole("button", {name: "search"}).click();

});
