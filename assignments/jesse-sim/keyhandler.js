function keyDownHandler( event ) {
//	console.log('down', event.keyCode);
	switch ( event.keyCode ) {
		case 38: // up
		case 87: // w
			moveForward = true;
			break;
		case 37: // left
		case 65: // a
			moveLeft = true;
			break;
		case 40: // down
		case 83: // s
			moveBackward = true;
			break;
		case 39: // right
		case 68: // d
			moveRight = true;
			break;
		case 17: // ctrl
			moveDown = true;
			break;
		case 80: // p
			pause = true;
			break;
		case 32: // space
			moveUp = true;
			break;
	}
};

function keyUpHandler( event ) {
//	console.log('up', event.keyCode);
	switch( event.keyCode ) {
		case 38: // up
		case 87: // w
			moveForward = false;
			break;
		case 37: // left
		case 65: // a
			moveLeft = false;
			break;
		case 40: // down
		case 83: // s
			moveBackward = false;
			break;
		case 39: // right
		case 68: // d
			moveRight = false;
			break;
		case 17: // ctrl
			moveDown = false;
			break;
		case 80: // p
			pause = false;
			break;
		case 32: // space
			moveUp = false;
			break;
	}
};
