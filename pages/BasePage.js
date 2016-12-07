/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function() {
    browser.url('/')
	browser.timeouts('implicit', 10000);
}

module.exports = new Page()

