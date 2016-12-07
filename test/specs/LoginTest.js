/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var expect = require('chai').expect;
var LoginPage = require('../../pages/LoginPage');

describe("Login Page",function(){
    it("Should login to the application",function(){
        LoginPage.open();
        LoginPage.loginun("rimbola12345");
		LoginPage.next.click();
		LoginPage.loginpw("rimbola54321");
		LoginPage.loginButton.click();
		LoginPage.searchsm("rimbola");
		browser.pause(5000);
		LoginPage.searchButton.click();
         browser.pause(5000);		
    });
});