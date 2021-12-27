const puppeteer= require('puppeteer');

async function login() {
    const browser  = await puppeteer.launch(
        {
            headless:false,
            args:["--start-maximized"],
            defaultViewport:false,
            executablePath:"/usr/lib/chromium/chromium",
            slowMo:250
        }
    );
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto("https://nados.pepcoding.com/");
//     await tab.waitForSelector('button.MuiButton-text');
//     tab.click('button.MuiButton-text');
//     await tab.waitForSelector("input.form-control");
//     tab.click('input.form-control');
//    await tab.type("input.form-control","7557559458");
//     tab.click('span.MuiButton-label');
       let newTab = await browser.newPage();
       await newTab.goto("https://mail.google.com");
        console.log(tabs.length);

}
login();