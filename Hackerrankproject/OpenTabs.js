const puppy = require("puppeteer");
async function openTabs(){
    let browser = await puppy.launch({
        executablePath:'/usr/bin/chromium',
        headless:false,
        args:["--start-maximized",
    
    ]
    });
    
    for(let i =0;i<9;i++)
    {
         browser.newPage().then(function(tab){
            tab.goto("https://google.com");
         });
        }
}
openTabs();