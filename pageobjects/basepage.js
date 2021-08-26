var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }

    go_to_url(theURL){
        driver.get(theURL);
        driver.manage().window().maximize();
    }

    enterTextByCss(css, searchText){
        driver.findElement(By.css(css)).sendKeys(searchText);
    }

    enterTextById(id, searchText){
        driver.findElement(By.id(id)).sendKeys(searchText);
    }

    clickById(id){
        driver.findElement(By.id(id)).click();
    }

    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }

    quit(){
        this.sleep(5);
        driver.quit();
    }

}

module.exports = BasePage;