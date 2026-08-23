/* 
css Locator 
tag#id or #id 
tag.class or .class
tag with any other attribute tag[attribute= value] or  [attribute=value]
tag with class and attribute tag.class[attribute=value] or .class[attribute=value]


*/

import {test, expect} from "@playwright/test"

test("verify css loactor", async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

// tag#id or #id 
    const searchoutput = page.locator("#small-searchterms");

    await expect(searchoutput).toBeVisible();

    await searchoutput.fill('T-shirt');

// tag.class or .class
const searchItem = page.locator (".search-box-text");

await expect(searchItem).toBeVisible();

await searchItem.fill('T-shirt');


// tag with any other attribute tag[attribute= value] or  [attribute=value]

const searchIT = page.locator("[id='small-searchterms']");

await expect(searchIT).toBeVisible();

await searchIT.fill('jean');


// tag with class and attribute tag.class[attribute=value] or .class[attribute=value]

const searchAM = page.locator(".[class = search-box-text']");

await expect(searchAM).toBeVisible();

await searchAM.fill('shoes');

});