var homepage = function(){
	
	this.clickButton = function(){
		
		element(By.className('button button-large button-primary has-shield has-shadow')).click;
	};
};
module.exports = new homepage();