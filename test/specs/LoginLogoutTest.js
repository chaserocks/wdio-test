
var expect = require('chai').expect;

var LoginLogoutPage = require('../../pages/LoginLogoutPage');
var HomePage = require('../../pages/HomePage');

 describe("Home Page",function(){
    it("Should login and display the home page and send a mail to the user",function(){
        browser.windowHandleMaximize();
        LoginLogoutPage.open();
        LoginLogoutPage.login("rimbola12345","rimbola54321"); 
     //   LoginLogoutPage.searchsm("rimbola");
    //    LoginLogoutPage.searchButton.click();
    //    browser.pause(5000);
        HomePage.composeButton.click();
        browser.pause(2000);
        HomePage.composemail("rbk.2389@gmail.com","Hi Bharath","How are you");
        HomePage.sendButton.click();
        browser.pause(5000);
        LoginLogoutPage.userlogo.click();
        LoginLogoutPage.logout();				        
    });
});