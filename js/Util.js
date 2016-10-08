/**
 * util function
 */
var Util = {
	addEventHandler :
		function (ele,event,handler) {
			if (ele.addEventListener) {
				ele.addEventListener(event,handler,false);
			} else if (ele.attachEvent) {
				ele.attachEvent("on"+event,handler);
			} else {
				ele["on" + event] = handler;
			}
		},
	getCharCode :
		function (event) {
			if (typeof event.charCode == "number") {
				return event.charCode;
			} else {
				return event.keyCode;
			}
		},
	getTarget :
	function (event) {
		return event.target || event.srcElement;
	}
};