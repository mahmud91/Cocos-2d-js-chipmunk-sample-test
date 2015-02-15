var	DRAG_BODYS_TAG = 0x80;
var GameLayer = cc.LayerGradient.extend({
	ctor:function(){
		this._super( cc.color ( 0, 0, 0, 255 ), cc.color ( 98 * 0.5, 99 * 0.5, 117 * 0.5, 255 ));
		this._mouses = new Array();		
	},
	onEnter:function(){
		this._super();
		this._scene = this.getParent();
	}	
});
var GameView = GameLayer.extend({
	ctor:function (){
		this._super ();
	},
	onEnter:function () {
		this._super (); 	
		touchHandler = new TouchHandler(this);
		cc.eventManager.addListener ({
			event : cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches : true,
			onTouchBegan : touchHandler.onTouchBegan.bind ( this ),
			onTouchMoved : touchHandler.onTouchMoved.bind ( this ),
			onTouchEnded : touchHandler.onTouchEnded.bind ( this )
		}, this );
		// wall 
		var wall = new cc.Node ( );
		wall.setPhysicsBody ( cc.PhysicsBody.createEdgeBox ( VisibleRect.size ( ), cc.PhysicsMaterial ( 0.1, 1.0, 0.0 ) ) );
		wall.setPosition ( VisibleRect.center ( ) ); 
		this.addChildEx ( wall ); 

		// common box
		var targetBox = makeBox ( cp.v (  cc.winSize.width/2, cc.winSize.height-50 ), cc.size ( 50, 50 ), 1 );
	
		this.addChildEx ( targetBox );

		var box = makeBox ( cp.v ( cc.winSize.width/2, cc.winSize.height/2 ), cc.size ( 50, 50 ), 2 );
		box.getPhysicsBody ( ).setMass ( 20 );
		box.getPhysicsBody ( ).setTag ( DRAG_BODYS_TAG );
		box.getPhysicsBody ( ).setGravityEnable ( false );
		box.getPhysicsBody ( ).setContactTestBitmask ( 0xFFFFFFFF );
		this.addChildEx ( box );  
		
		var ball = makeBall (this, cp.v ( cc.winSize.width/2, 100 ), 20 );
		ball.setTag ( 2 ); 
		ball.getPhysicsBody ( ).setTag ( DRAG_BODYS_TAG );
		ball.getPhysicsBody ( ).setGravityEnable ( false );
		ball.getPhysicsBody ( ).setContactTestBitmask ( 0xFFFFFFFF );
		this.addChildEx ( ball );	 
	}
});