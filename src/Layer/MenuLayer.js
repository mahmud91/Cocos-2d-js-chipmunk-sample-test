var MenuLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		this.init();
		return true;
	},
	init:function(){
		var btPlay = new cc.MenuItemFont(Strings.play,play);
		var btHighScore = new cc.MenuItemFont(Strings.highscore,highscore);
		var btQuit = new cc.MenuItemFont(Strings.quit,quit);
		
		var menu = new cc.Menu(btPlay,btHighScore,btQuit);
		menu.alignItemsVerticallyWithPadding(50);
		this.addChild(menu);
	}
});
var play = function(){
	cc.director.pushScene(new LevelScene());
}
var highscore = function(){
	cc.log("highscore Game");
}
var quit = function(){
	cc.log("quit Game");
}