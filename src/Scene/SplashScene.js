var SplashScene = cc.Scene.extend({
	onEnter:function () {
		this._super();		
			this.addChild(new SplashLayer());		
	}
});