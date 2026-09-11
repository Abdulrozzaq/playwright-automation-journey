import {test,expect, Locator} from '@playwright/test'

test('multi select dropdown', async ({page}) => {

    page.goto("https://testautomationpractice.blogspot.com/");

    //1. select option from the dropdown 

   // await page.locator("#colors").selectOption(['Red', 'Blue', 'Green', 'Yellow']); //by visible text
   // await page.locator("#colors").selectOption(['red','blue', 'green', 'yellow']); // by value attributes 
    //await page.locator("#colors").selectOption([{label :  'Red'}, {label: 'Green' }, {label: 'Yellow'}]); //by label 
    await page.locator("#colors").selectOption([{index :  1}, {index : 2  }, {index: 4}]); //by index 



//2. check the option count 

const optiondropdown : Locator = page.locator("#colors>option");

await expect(optiondropdown).toHaveCount(7);



//3. check if an option is present in the dropdown 

const alltext : string[] = (await optiondropdown.allTextContents()).map(input => input.trim());

console.log(alltext);

expect(alltext).toContain('white');



//print option from the dropdown 

for(const option of alltext){

    console.log(option);
}
});