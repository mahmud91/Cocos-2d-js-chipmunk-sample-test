var isGameSceneLoaded = false;
var GameScene = cc.Scene.extend({
	ctor:function(){
		this._super ( );
		this.initWithPhysics ();
	},
	onEnter:function () {
		this._super();
		if(isGameSceneLoaded == false){
			isGameSceneLoaded = true;
			this.addChild(new GameView());
		}				
	}
});