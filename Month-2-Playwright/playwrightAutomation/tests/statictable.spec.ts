import {test, expect} from '@playwright/test'

test("static table", async ({page}) => {

   await page.goto("https://testautomationpractice.blogspot.com/");

   const table =  page.locator("table[name='BookTable'] tbody");

   await expect(table).toBeVisible();

   

// const tablerow = page.locator("table[name='BookTable'] tbody tr");

   //chaining locator 
 const row  = table.locator('tr');

   const count = await  row.count();

   console.log("rows number :",count);

   //count the columns/header 

   const columns = row.locator('th');

   const columncount = await columns.count();

  expect(columncount).toBe(4);

  ///Read All data from second row 


  const secondrow= row.nth(2).locator('td');

  const secondrowtext = await secondrow.allInnerTexts();

  console.log("All secondrow text:", secondrowtext);

  await expect(secondrow).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);


  //Reading all data from the table (excluding header)

  const dataformat =await row.all(); // return  array of locators 

  for(let text of dataformat.slice(1)){

    const colu = await text.locator('td').allInnerTexts();

    console.log(colu.join('\t'));
  }


  //Print book name where author is Mukesh 

  const mukeshbook = []

  for(let text of dataformat.slice(1)){

    const colu = await text.locator('td').allInnerTexts();

    const book = colu[0];
    const author = colu[1];

    if(author=== 'Mukesh'){
        console.log(`${book}\t ${author}`);
        mukeshbook.push(book);
    }

    
  }


  // Print price column total 
let totalprice  = 0;
 
  for(let text of dataformat.slice(1)){

    const colu = await text.locator('td').allInnerTexts();

    const price = colu[3];

    totalprice=totalprice+parseInt(price);
    
  }

  console.log(totalprice);

expect(totalprice).toBe(7100);


    
});
