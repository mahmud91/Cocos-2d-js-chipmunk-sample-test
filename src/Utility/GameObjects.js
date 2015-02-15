var makeBall = function(self,point, radius, material){
	var ball = null;
	if ( self._ball ){
		ball = new cc.Sprite ( self._ball.texture );
	}
	else{
		ball = new cc.Sprite ( res.iBall );
	}
	var body = cc.PhysicsBody.createCircle ( radius, material );		
	ball.setScale ( 0.13 * radius );
	ball.setPhysicsBody ( body );				
	ball.setPosition ( point );
	return ball;
}
var makeBox = function ( point, size, color, material ){
	var yellow = false;
	if ( color == 0 ){
		yellow = cc.random0To1 ( ) > 0.5;
	}
	else{
		yellow = color == 1;
	}
	var box = yellow ? new cc.Sprite ( res.iBox ) : new cc.Sprite ( res.iBox );
	box.setScaleX ( size.width  / 100.0 );
	box.setScaleY ( size.height / 100.0 );
	var body = cc.PhysicsBody.createBox ( size, material );
	box.setPhysicsBody ( body );
	box.setPosition ( point );
	return box;		
}