const LandingPage = require('../pageobjects/LandingPage');
const {By, until } = require('selenium-webdriver');
const { sleep } = require('../pageobjects/LandingPage');


describe('This is the describe block', function(){
    this.timeout(50000);
    beforeEach(function(){
        console.log('before')
        //Enter actions performed before test
    });

    afterEach(function(){
        console.log('after')
        //homepage.quit();
    });

    it('POM Test Check', function(){
        LandingPage.navigateTo('https://trends.google.com/')

        //Inputting Keyboard and pressing Enter
        LandingPage.inputTextAndClick(By.id('input-254'), 'Selenium WebDriver');

        //Inputting the compare keyword
        LandingPage.click(By.className('add-term-button'));
        LandingPage.getListOfElementsAndClick(By.xpath('//input[contains(@id,"input-")]'), 'Javascript WebDriverIO');

        //Setting the country
        LandingPage.click(By.className('compare-picker'));
        LandingPage.inputTextAndSelectFromResult(By.css('div.hierarchy-autocomplete input'), 'New York');

        //
        LandingPage.click(By.id('select_value_label_11'));
        //LandingPage.selectOptionFromDropdownByText(By.css('md-option.custom-date-picker-select-option div'), ' Past 90 days ');
        LandingPage.selectTimeframeOptionByText('Past 90 days');
    });

});