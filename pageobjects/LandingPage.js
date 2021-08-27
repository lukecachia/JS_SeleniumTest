const {Key} = require('selenium-webdriver');
var BasePage = require ('./basepage');

class LandingPage extends BasePage{

    searchField = 'input[name=q]';

    enter_search(searchText){
        //This will enter text into the search field
        this.enterTextByCss(this.searchField, searchText);
        //this will send the enter key to the element
        this.enterTextByCss(this.searchField, Key.RETURN);
    }

    inputTextAndClick(element, text){
        driver.findElement(element).sendKeys(text);
        driver.findElement(element).sendKeys(Key.RETURN);
    }

    clickAndInputText(element, text){
        //driver.sleep(15);
        driver.findElement(element).sendKeys(Key.RETURN);
        
        //driver.findElement(element).click();
        //driver.findElement(element).sendKeys(text);

    }

    inputText(element, text){
        this.sleep(5);
        driver.findElement(element).sendKeys(text);
    }

    getElementText(element) {
        return driver.findElement(element).getText();
    }
}
module.exports = new LandingPage();