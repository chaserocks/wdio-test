
var Page = require('./BasePage')
var LoginLogoutPage = Object.create(Page, {
    
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
			Page.open.call(this, '/'); // this, '/' is additional url + login.do (concatinate) 
		}
	},

    login: {
		value: function(un,pw){
			LoginLogoutPage.username.setValue(un);
            LoginLogoutPage.next.click();
			LoginLogoutPage.password.setValue(pw);
			LoginLogoutPage.loginButton.click();
		}
	},
	
	search: {
	   get: function(){
		   return browser.element('#gbqfq');
	   	   }	
	},
	
	searchsm: {
	value: function(sc){
		   LoginLogoutPage.search.waitForVisible();
		   browser.pause(2000);
		   LoginLogoutPage.search.setValue(sc);
	}
	},
	
	searchButton: {
		get: function(){
			return browser.element('#gbqfb');
		}
    },
	
logoutButton: { 
		get: function () { 
			return browser.element('#gb_71'); 
		} 
	},
    
    userlogo:{
        get: function() {
            return browser.element('.gb_8a.gbii');
        }
    },
    
	logout: {
		value: function(){
			LoginLogoutPage.logoutButton.waitForVisible();
			browser.pause(3000);
			LoginLogoutPage.logoutButton.click();
		}
	}
});
    
module.exports = LoginLogoutPage