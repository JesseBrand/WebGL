/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.MyControls = function ( camera ) {

	var scope = this;

	camera.rotation.set( 0, 0, 0 );

	var yawObject = camera;
	yawObject.rotation.order = 'YXZ';
	
	var moveFactor = .002;

	var onMouseMove = function ( event ) {

		if ( scope.enabled === false ) return;

		var dX = (event.movementX || event.mozMovementX || event.webkitMovementX || 0) * moveFactor;
		var dY = (event.movementY || event.mozMovementY || event.webkitMovementY || 0) * moveFactor;
		
		var rotX = yawObject.rotation.x;
		yawObject.rotateX(-rotX);
		yawObject.rotateY(-dX);
		camera.rotateX(rotX - dY);
		yawObject.rotation.z = 0;
	};

	this.dispose = function() {
		document.removeEventListener( 'mousemove', onMouseMove, false );
	};

	document.addEventListener( 'mousemove', onMouseMove, false );

	this.enabled = false;

	this.getObject = function () {

		return yawObject;

	};

	this.getDirection = function() {

		// assumes the camera itself is not rotated

		var direction = new THREE.Vector3( 0, 0, - 1 );
		var rotation = new THREE.Euler( 0, 0, 0, "YXZ" );

		return function( v ) {

			rotation.set( yawObject.rotation.x, yawObject.rotation.y, 0 );

			v.copy( direction ).applyEuler( rotation );

			return v;

		};

	}();

};
