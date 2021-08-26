const homepage = require('../pageobjects/homepage');
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
        homepage.go_to_url(baseurl);
        homepage.inputTextAndClick(By.id('input-254'), 'Selenium WebDriver');
        homepage.clickAndInputText(By.xpath('//*[@id="explorepage-content-header"]//div/button'), 'test');
        homepage.inputText(By.className('trends-wrapper'), 'tesasdasd');

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