var LevelLayer = cc.LayerGradient.extend({
	ctor:function(){
		this._super ( cc.color ( 0, 0, 0, 255 ), cc.color ( 98 * 0.5, 99 * 0.5, 117 * 0.5, 255 ) );
		this.init();
		return true;
	},
	init:function(){
		var level1 = new cc.MenuItemFont(Strings.level,goToLevel);
		var menu = new cc.Menu(level1);
		menu.alignItemsVerticallyWithPadding(50);
		this.addChild(menu);
	}
});
var goToLevel = function(){
	cc.director.pushScene(new GameScene());
}