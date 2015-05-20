(function(global){
	var on = function(element, types, listener){
			(types.split(" ")).forEach(function(type){
				element.addEventListener(type, listener, false);
			});
	},
	
	off = function(element, types, listener){
				(types.split(" ")).forEach(function(type){
					element.removeEventListener(type, listener, false);
				});
	};
	
	/**
	** @pram element: dom element
	** @pram callback : function,  callback after animation finished
	*/
	global.duang = function(element, callback){
		var onanimationend = function(e){
			element.className = element.className.replace(/\bduang\b/, "");
			off(element, "animationend webkitAnimationEnd", onanimationend);
			typeof callback === "function" && callback();
		};
		
		on(element, "animationend webkitAnimationEnd", onanimationend);
		
		element.className += " duang";
	};
	
})(window);