var SplashLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		var welcomeMessage = new cc.LabelTTF(Strings.welcomeMessage, "Arial", 38);
		welcomeMessage.setPosition(cc.winSize.width/2, cc.winSize.height/2);
		this.addChild(welcomeMessage,5);		
	//	welcomeMessage.runAction(cc.sequence( cc.scaleTo(2, 1.5, 1.5)),cc.director.pushScene(new MenuScene()));		
	}
});