KiddoPaint.Tools.Toolbox.Magnify = function() {
	var tool = this;
	this.isDown = false;
	this.size = 30;
	this.scale = 2;

	this.mousedown = function (ev) {
		tool.isDown = true;
		tool.mousemove(ev);
	};

	this.mousemove = function (ev) {
		var target = KiddoPaint.Display.main_context.getImageData(ev._x - tool.size, ev._y - tool.size, 2 * tool.size, 2 * tool.size);
		var scaled = scaleImageData(target, tool.scale);
		var ctx = tool.isDown ? KiddoPaint.Display.context : KiddoPaint.Display.previewContext;
		ctx.putImageData(scaled, ev._x - (tool.scale * tool.size), ev._y - (tool.scale * tool.size));
	};

	this.mouseup = function (ev) {
		if (tool.isDown) {
			tool.isDown = false;
			KiddoPaint.Display.saveMain();
		}
	};
};
KiddoPaint.Tools.Magnify = new KiddoPaint.Tools.Toolbox.Magnify();