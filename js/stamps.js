KiddoPaint.Stamps.grouping = {
  stamp1: { stamps: [ '🚂', '🚃', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚛', '🚚', '🚒', '🚑', '🚐', '🚜', '⛵', '🚤', '🚀', '✈️', '🚁' ] },
  stamp2: { stamps: [ '🏠', '🎪', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏨', '🏬', '🏤', '🏭', '🛁', '🚽', '📱', '🇺🇸', '🚏', '📭', '📦' ] },
  stamp3: { stamps: [ '🏃', '🚶', '💃', '🏇', '🏂', '🏊', '🏄', '🎃', '⛄', '🚧', '⛽', '🐓', '🐄', '🐐', '🐏', '🐅', '🐖', '🐊', '🐫' ] },
  stamp4: { stamps: [ '🌲', '🌳', '🌴', '🎄', '⛳', '🌼', '🌷', '🍀', '🌻', '🌺', '🌿', '🌾', '🍄', '🌵', '❄️', '💧', '☁️', '🌞', '🌛' ] }
  }


KiddoPaint.Stamps.stamp = function(stamp, alt, size) {
	stamp = stamp || '';
	var canvasBrush = document.createElement('canvas');
	canvasBrush.width = size + (size * 0.05);
	canvasBrush.height = size + (size * 0.05);

	var contextBrush = canvasBrush.getContext('2d');
	contextBrush.font = size + 'px sans-serif';

	contextBrush.save();
	if(alt) {
	  contextBrush.translate(size, size);
  	  contextBrush.scale(-1, 1);
	  contextBrush.fillText(stamp, 0, 0);
	}
	else {
	  contextBrush.fillText(stamp, 0, size);
	}
	contextBrush.restore();

	return canvasBrush;
}
