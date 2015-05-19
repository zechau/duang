(function(global){
	var playing = false;
	var oldPosition = "";
	var clearAnimatation = function(element){
		setTimeout(function(){
			element.className = element.className.replace(/\bduang\b/, "");
			playing = false;
			element.style.position = oldPosition;
		}, 500);
	}
	
	global.duang = function(element){
		oldPosition = element.style.position;
		element.style.position = "relative";
		if(playing === true){
				return;
		}
		element.className += " duang";
		clearAnimatation(element);
	}
})(window);