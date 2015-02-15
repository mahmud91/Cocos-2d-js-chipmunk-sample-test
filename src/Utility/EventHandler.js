var TouchHandler = cc.LayerGradient.extend({
	self : null,
	ctor:function(self){
		this.self = self;
	},
	onTouchBegan:function ( touch, event )
	{
		var 	location = touch.getLocation ( );
		var 	arr = this._scene.getPhysicsWorld ( ).getShapes ( location );

		var 	body = null;
		for ( var idx in arr )
		{
			var		obj = arr [ idx ];
			if ( ( obj.getBody ( ).getTag ( ) & DRAG_BODYS_TAG ) != 0 )
			{
				body = obj.getBody ( );
				break;
			}
		}

		if ( body != null )
		{
			var mouse = new cc.Node ( );
			mouse.setPhysicsBody ( cc.PhysicsBody.create ( cc.PHYSICS_INFINITY, cc.PHYSICS_INFINITY ) );
			mouse.getPhysicsBody ( ).setDynamic ( false );
			mouse.setPosition ( location );
			this.addChildEx ( mouse );

			var joint = cc.PhysicsJointPin.create ( mouse.getPhysicsBody ( ), body, location );
			joint.setMaxForce ( 5000.0 * body.getMass ( ) );
			this._scene.getPhysicsWorld ( ).addJoint ( joint );
			this._mouses.push ( { first : touch.getID ( ), second : mouse } );

			return true;
		} 

		return false;
	},

	onTouchMoved:function ( touch, event ){
		for ( var i = 0; i < this._mouses.length; i++ ){
			if ( this._mouses [ i ].first == touch.getID ( ) ){
				this._mouses [ i ].second.setPosition ( touch.getLocation ( ) );
			}
		} 
	},

	onTouchEnded:function ( touch, event ){
		for ( var i = 0; i < this._mouses.length; i++ ){
			if ( this._mouses [ i ].first == touch.getID ( ) ){
				this.removeChildEx ( this._mouses [ i ].second );
				this._mouses.splice ( i, 1 );
				i--;
			}
		}
	},	
});
