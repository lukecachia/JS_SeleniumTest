const {Key, By, TouchSequence} = require('selenium-webdriver');
const actions = require('selenium-webdriver/lib/actions');
var BasePage = require ('./basepage');

class LandingPage extends BasePage{

    inputTextAndClick(element, text){
        driver.findElement(element).sendKeys(text, Key.RETURN);
    }

    clickAndInputText(element, text){
        //driver.sleep(15);
        driver.findElement(element).sendKeys(Key.RETURN);

    }

    clickBy(element) {
        this.sleep(5);
        driver.findElement(element).click();
        this.sleep(5);
    }

    getElementText(element) {
        return driver.findElement(element).getText();
    }

    /*
    loops through the elements founds by the
    details provided through the arguments and
    inputs the text provided and clicks the auto-complete
    suggestion (to save the result)
    */
    getListOfElementsAndClick(element, text) {
        driver.findElements(element).then(function (elements){
            for(var i=0; i<elements.length; i++) {
                if(i == 1) {
                    elements[i].sendKeys(text);
                }
            }
        });
        driver.findElement(By.className("autocomplete-entity")).click();
    }

    /*
    this method inputs the provided text in the element
    found and clicks the short-listed result
    */
    inputTextAndSelectFromResult(element, text){
        driver.findElement(element).sendKeys(text);
        //TODO find less fragile locator/way of seleting this element
        driver.findElement(By.className("hierarchy-picker-node")).click();
        
    }

    //this did not work for some reason :(
    selectOptionFromDropdownByText(element, text){
        this.sleep(5);
        driver.findElements(element).then(function (listElems){
            console.log(listElems.length);
            console.log('hello');
            for(var i=0; i<listElems.length; i++){
                console.log('hello1');
                var listElem = listElems[i].getText();
                //console.log(listElem);
                //console.log('hello2');
                listElem.then(function (listElemText) {
                    console.log('dsd' + listElemText);
                    if(listElemText == text) {
                        console.log('hello-f');
                        //do something
                        //listElems[i].click();
                    }

                });
            }
        });
    }

    /*
    this methods finds an elements that contains
    the string provided and loops through all elements
    in this case index 1 was required to select the needed timeframe
    */
    selectTimeframeOptionByText(text) {
        this.sleep(3);
        //var xpath = '//div[contains(string(), "' + text + '")]';
        //console.log(xpath);

        // driver.findElements(By.xpath('//div[contains(string(), "' + text + '")]')).then(function (elements) {
        //     for(var i=0; i<elements.length; i++) {
        //         console.log('test');
        //         if(i == 1) {
        //             elements[i].click();
        //         }
        //     }
        // });

        driver.findElements(By.className('custom-date-picker-select-option')).then(function (elements) {
            for(var i=0; i<elements.length; i++) {
                if(i == 6) {
                    elements[i].click();
                }
            }
        });
    }

    hoverOverElement2(){
        //this.sleep(5);
        //const actions = driver.actions({bridge: true});
        // driver.findElement(By.className('progress-bar-multi-heat-volume')).then(function (element) {
        //     actions.move({duration: 50000, origin: element, x:0, y:0}).perform();
        // });

        //driver.actions().move({duration:5000, origin:element}).perform();

        driver.findElement(By.className('progress-bar-wrapper multi-heat-progress-bar')).then(function (element) {
            actions({async:true}).move({origin:element}).perform();
        });

        this.sleep(5);

    }

}

module.exports = new LandingPage();