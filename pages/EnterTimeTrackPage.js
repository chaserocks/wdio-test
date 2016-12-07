
var Page = require('./BasePage')
var gmInPage = Object.create(Page, {
    
/*    logoutLink: { 
		get: function () { 
			return browser.element('#logoutLink'); 
		} 
	},
	logout: {
		value: function(){
			EnterTimeTrackPage.logoutLink.waitForVisible();
			browser.pause(3000);
			EnterTimeTrackPage.logoutLink.click();
		}
	} */
	
});
module.exports = EnterTimeTrackPage