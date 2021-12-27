const puppeteer = require('puppeteer');
async function run(){
const browser = await puppeteer.launch({
    headless:false,
    defaultViewport:false,
    // devtools:true,
    executablePath :'/usr/bin/firefox',
    args:['--start-maximized'],
    slowMo:100
});
let tabs = await browser.pages();
    // console.log(tab.length);
    let tab =  tabs[0]; //tabs array
    await  tab.goto('https://www.hackerrank.com'); //goto page

     await tab.waitForSelector('a[href="https://www.hackerrank.com/access-account/"]'); //wait for nextpage
     await tab.click('a[href="https://www.hackerrank.com/access-account/"]'); //click on selector for login
     

    await tab.waitForSelector('a[href="https://www.hackerrank.com/login"]');
    await tab.click('a[href="https://www.hackerrank.com/login"]');
    // for select and enter id
    await tab.waitForSelector("#input-1");
    await tab.click("#input-1");
   await tab.type("#input-1","bramanrohit@gmail.com");
// for select and enter passward
   await tab.click("#input-2");
    await tab.type("#input-2","Nikhil4597@");
 //click for login
    await tab.click("button.ui-btn.ui-btn-large");
// // scroll dpwn tabs
// await tab.waitForSelector("i.ui-icon-chevron-down");
// await tab.click("i.ui-icon-chevron-down");
//
// await tab.waitForSelector(".username");
// await tab.click(".username");
//logout
// await tab.waitForSelector(".profile-nav-item>.logout-button");
// await tab.click(".profile-nav-item>.logout-button");

console.log("Mission Successful");
// browser.close();
        
}
run();