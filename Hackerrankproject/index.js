const puppy  = require("puppeteer");
async function openBrowser(){
    
    const browser = await puppy.launch(
        {
            headless:false, // for seen whats happing while running this code
            args:['--start-maximized'],//open Browser in full screen
            defaultViewport:false
        }
    ); //open browser

    let pages = await browser.pages();
    
   
    // console.log(browser.pages); 
    let pages = browser.pages();
    console.log((await pages).length);
    await page.goto("https://google.com");
    await page.screenshot({path:'example.png'});

    await page.close();

}
openBrowser();

