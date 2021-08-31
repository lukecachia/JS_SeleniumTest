# Google Trends Test

## Introduction

I did some research about writing JS Page Object Model automated tests and found this project. I cloned the repo from https://github.com/QAUnderground/JavaScript_Mocha_Selenium and updated the scructure to make it clearer to understand. 

The test directory contains the test class and the page object classes are found under the pageobjects dir. The test is missing the final step as I could not make the move action working and I was not able to debug it. For asserts I planned to use chai. I think as a structure its nearly there, but code wise I believe it needs improvement. Debugging it was very difficult for me due to the lack of language knowledge and VS debbuger.

I attached a screen recording of it running for you in case you have issues running. 

## Dependencies
### Initialize Project
```
npm init
```
### Install Selenium
```
npm install selenium-webdriver
```
### Install Chromedriver
```
npm install chromedriver
```
### Install Chromedriver
```
npm install mocha
```
### Install Chai
```
npm install chai
```

## To Run the tests
```
npm test ./test/TrendsTest.js
```
