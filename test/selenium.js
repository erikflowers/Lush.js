'use strict';
/*
 * LUSH
 * Blueprint Parser
 * Frontend JS parser for Blueprint Markdown
 * TEST SCRIPT WITH MOCHA AND SELENIUM
 * @author Bob van Luijt <bob.van.luijt@ing.nl>
 */

/**
 * Include the Selenium Friver
 */
const webdriver = require('selenium-webdriver'),
      By        = webdriver.By,
      until     = webdriver.until;

/**
 * Include the driver for Phantom JS so it can run on Travis
 */
const driver = new webdriver.Builder().forBrowser('phantomjs').build();

/**
 * Require CHAI
 */
require('chai').should();

/**
 * Test the lush example and loop through all custom elements
 */
describe('The Lush example', () => {

  it('should render the page', function(done) {   
    this.timeout(15000); // set timeout to 15 seconds
    driver
    	.get('file://' + __dirname + '/testpage.html')
	    .then(() => driver.getTitle())
	    .then(title => title.should.equal('Lush test page')) // just to validate the page loaded
	    .then(() => {
        setTimeout(() => { // set a timeout to allow the page to fully render
          done()
        }, 2000);
      })
	    .catch(error => done(error));   
  });

  it('should render the Lush element', done => {
    driver.findElement(By.tagName('lush'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a Lush row', done => {
    driver
      .findElement(By.tagName('lush-row'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a Lush layer', done => {
    driver
      .findElement(By.tagName('lush-layer'))
      .then(() => done())
      .catch(error => done(error)) 
  })

  it('should render a lush layer with the class lush-layer-stepdefinition', done => {
    driver
      .findElement(By.className('lush-layer-stepdefinition'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-actor', done => {
    driver
      .findElement(By.className('lush-layer-actor'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-apisystem', done => {
    driver
      .findElement(By.className('lush-layer-apisystem'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-criticalmoment', done => {
    driver
      .findElement(By.className('lush-layer-criticalmoment'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-metric', done => {
    driver
      .findElement(By.className('lush-layer-metric'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-observationfact', done => {
    driver
      .findElement(By.className('lush-layer-observationfact'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-policyrule', done => {
    driver
      .findElement(By.className('lush-layer-policyrule'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-question', done => {
    driver
      .findElement(By.className('lush-layer-question'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should render a lush layer with the class lush-layer-channel', done => {
    driver
      .findElement(By.className('lush-layer-channel'))
      .then(() => done())
      .catch(error => done(error))
  })

  it('should close the test', done => {
    driver
      .quit()
      .then(() => done())
      .catch(error => done(error))
  })

})
