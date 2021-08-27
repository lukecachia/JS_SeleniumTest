const LandingPage = require('../pageobjects/LandingPage');
const {By, until } = require('selenium-webdriver');


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
        //Enter test steps
        var baseurl = 'https://trends.google.com/';
        LandingPage.go_to_url(baseurl);
        LandingPage.inputTextAndClick(By.id('input-254'), 'Selenium WebDriver');
        LandingPage.clickAndInputText(By.xpath('//*[@id="explorepage-content-header"]//div/button'), 'test');
        LandingPage.inputText(By.className('trends-wrapper'), 'tesasdasd');

        // homepage.enter_search('QA Underground Tutorial for beginners');
    })

    it('POM Test Check 2', function(){
        //Enter test steps
        //var baseurl = 'https://trends.google.com/';
        //homepage.inputTextAndClick(By.id('input-254'), 'Selenium WebDriver');
    })

    it('POM Test Check 3', function(){
        //Enter test steps
        //var baseurl = 'https://trends.google.com/';
        //homepage.clickAndInputText(By.className('add-term-text'), 'test');
    })

})