var isLevelSceneLoaded = false;
var LevelScene = cc.Scene.extend({
	onEnter:function () {
		this._super();		
		if(isLevelSceneLoaded == false){
			isLevelSceneLoaded = true;
			this.addChild(new LevelLayer());
		}				
	}
});