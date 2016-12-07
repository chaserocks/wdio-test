
var Page = require('./BasePage')

var LoginPage = Object.create(Page, {
    
    username: { 
		get: function () { 
			return browser.element('#Email'); 
		} 
	},
	
	next: {
		get: function () { 
			return browser.element('#next'); 
		} 
	},
	
    password: { 
		get: function () { 
			return browser.element('#Passwd'); 
		} 
	},
	
    loginButton: { 
		get: function () { 
			return browser.element('#signIn'); 
		} 
	},    
    
    open: { 
		value: function() {
			Page.open.call(this, 'login.do');
		}
	},
	loginun: {
		value: function(un){
			LoginPage.username.setValue(un);
		}	
	},
	loginpw: {
		value: function(pw){
			LoginPage.password.setValue(pw);
		}
	},
	
	search: {
	   get: function(){
		   return browser.element('#gbqfq');
	   	   }	
	},
	
	searchsm: {
	value: function(sc){
		   LoginPage.search.waitForVisible();
		   browser.pause(5000);
		   LoginPage.search.setValue(sc);
	}
	},
	
	searchButton: {
		get: function(){
			return browser.element('#gbqfb');
		}
	}
	
	
	
});
module.exports = LoginPage