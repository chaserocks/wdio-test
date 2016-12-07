

var Page = require('./BasePage')

var HomePage = Object.create(Page, {
    
    composeButton: { 
		get: function () { 
			 return browser.element('//div[text()="COMPOSE"]');
		} 
	},
    
    to:{
        get: function () { // CSS:div[class='wO nr l1'] [id=':hm']
			 return browser.element('//textarea[@aria-label="To"]'); 
		} 
	},
    
    subject:{
        get: function(){
            return browser.element('//input[@placeholder="Subject"]');
        }
    },

    body:{
        get: function(){
            return browser.element('//div[@aria-label="Message Body"]');
        }
    },
    
    sendButton:{
        get: function(){
            return browser.element('//div[text()="Send"]');
        }
    },
    
    composemail: { 
        value: function(to,sub,body){
            HomePage.to.setValue(to);
            HomePage.subject.setValue(sub);
			HomePage.body.setValue(body);
		}
	},
    
     searchMsgBody: { 
		get: function () { 
			return browser.element('//span[contains(text(),"How are you")]'); 
		} 
	},
    
      deleteMail: {
		value: function(to,sub,body){
            browser.pause(3000);
            HomePage.searchMsgBody.waitForVisible();
            browser.pause(3000);
			HomePage.searchMsgBody.get;
            HomePage.toField.setValue(to);
            HomePage.subject.setValue(sub);
			HomePage.body.setValue(body);
			HomePage.sendButton.click();
		}
	}
	
});

module.exports = HomePage