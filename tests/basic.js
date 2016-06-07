module.exports = {
  'Basic test for Lush' : function (browser) {
    browser
      .url('../examples/robotShop-full.html')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'lush')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Lush')
      .end();
  }
};