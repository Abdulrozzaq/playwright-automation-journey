/* 
css Locator 
tag#id or #id 
tag.class or .class
tag with any other attribute tag[attribute= value] or  [attribute-value]
tag with class and attribute tag.class[attribute=value] or .class[attribute=value]


*/

import {test, expect} from "@playwright/test"

test("verify css loactor", async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const searchoutput = page.locator("#small-searchterms");

    await expect(searchoutput).toBeVisible();

    await searchoutput.fill('T-shirt');


});