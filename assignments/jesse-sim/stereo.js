THREE.StereoEffect = function(renderer, distance) {

	var stereo = new THREE.StereoCamera();
	
	this.setSize = function(width, height) {
		renderer.setSize(width, height);
		stereo.aspect = width / height;
	};

	this.render = function(scene, camera) {
		scene.updateMatrixWorld();
		if (camera.parent === null) {
			camera.updateMatrixWorld();
		}
		stereo.update(camera);

		var size = renderer.getSize();

		renderer.setScissorTest(true);
		renderer.clear();

		renderer.setScissor(0, 0, size.width / 2, size.height);
		renderer.setViewport(0, 0, size.width / 2, size.height);
		renderer.render(scene, stereo.cameraL);

		renderer.setScissor(size.width / 2, 0, size.width / 2, size.height);
		renderer.setViewport(size.width / 2, 0, size.width / 2, size.height);
		renderer.render(scene, stereo.cameraR);
		
		renderer.setScissorTest(false);
	};

};
