var homepage = require('C:/Users/Ayushi/ProtractorPractice/Practice/main/homepage.js');

describe("test", function(){
	
	beforeEach(function(){
	browser.get("https://angularjs.org/");
	browser.waitForAngular();
	
});
	
	it("test#1", function(){
		
		homepage.clickButton();
	});
});