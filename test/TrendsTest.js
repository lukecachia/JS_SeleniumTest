const LandingPage = require('../pageobjects/LandingPage');
const {By, until } = require('selenium-webdriver');


describe('Asserting that JavaScript is the most searched term when compared to WebDriverIO', function(){
    this.timeout(50000);
    // beforeEach(function(){
    //     console.log('before')
    //     //Enter actions performed before test
    // });

    afterEach(function(){
        console.log('after')
        //LandingPage.quit();
    });

    it('Google Trends Test', function(){
        LandingPage.navigateTo('https://trends.google.com/')

        //Inputting Keyboard and pressing Enter
        LandingPage.inputTextAndClick(By.id('input-254'), 'Selenium WebDriver');

        //Inputting the compare keyword
        LandingPage.clickBy(By.className('add-term-button'));
        LandingPage.getListOfElementsAndClick(By.xpath('//input[contains(@id,"input-")]'), 'Javascript WebDriverIO');

        //Setting the country
        LandingPage.clickBy(By.className('compare-picker'));
        LandingPage.inputTextAndSelectFromResult(By.css('div.hierarchy-autocomplete input'), 'New York');

        //Setting the timeframe
        LandingPage.clickBy(By.css('custom-date-picker'));
        //This didnt not work but left it commented
        //as I believe its the best approach for such action
        //LandingPage.selectOptionFromDropdownByText(By.css('md-option.custom-date-picker-select-option div'), ' Past 90 days ');
        LandingPage.selectTimeframeOptionByText('Past 90 days');

        //
        //LandingPage.hoverOverElement(By.className('progress-bar-multi-heat-volume'));
        LandingPage.hoverOverElement2();
    });

});