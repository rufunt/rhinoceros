$(document).ready(function () {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	var tool = new Tool();

	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 30);
		c.fillColor = 'pink';
	};

	paper.view.draw();
});
