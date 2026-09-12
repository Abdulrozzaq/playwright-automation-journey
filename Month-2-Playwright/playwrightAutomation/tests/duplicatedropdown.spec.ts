import {test, expect} from '@playwright/test'

test('verify duplicate options', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //const dupoption = (await page.locator("#colors>option").allTextContents()).map(input => input.trim());
    const dupoption = (await page.locator("#animals>option").allTextContents()).map(input => input.trim());


    const myset = new Set();

    const mydup = [];

    for(const text of dupoption){
        if(myset.has(text)){
            mydup.push(text);
        }
        else{
            myset.add(text);
        }
    }

    console.log("duplicates :",  mydup);

    if(mydup.length>0){
        console.log("duplicates are found", mydup);

    }

    else{
        console.log("No duplicate found");
    }

 
    expect(mydup).toHaveLength(0);
});