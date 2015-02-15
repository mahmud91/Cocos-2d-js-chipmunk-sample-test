var isMenuSceneLoaded = false;
var MenuScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		if(isMenuSceneLoaded == false){
			isMenuSceneLoaded = true;
			this.addChild(new MenuLayer());
		}				
	}
});