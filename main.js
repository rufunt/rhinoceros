$(document).ready(function () {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	var c = Shape.Circle(50, 50, 300)
	c.fillColor = 'green';

	paper.view.draw();
});
