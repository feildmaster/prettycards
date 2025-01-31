
class Utility {
	
	loadCSSFromLink(url) {
		var e = document.createElement("link");
		e.rel  = 'stylesheet';
		e.type = 'text/css';
		e.href = url;
		document.head.appendChild(e);
	}
	
	// Some code I found on stack overflow. Let's see if it works . . . 
	copyCSS(from_element, to_element) {
		const styles = window.getComputedStyle(from_element);
		if (styles.cssText !== "") {
			to_element.style.cssText = styles.cssText;
		} else {
			const to_styles = window.getComputedStyle(to_element);
			const cssText = Object.values(styles).reduce(
				(css, propertyName) =>
					`${css}${propertyName}:${styles.getPropertyValue(
						propertyName
					)};`
			);
			to_element.style.cssText = cssText
		}
	}
	
	completeCopyArray(arr) {
		if (!Array.isArray(arr)) {
			return this.completeCopy(arr);
		}
		var copy = [];
		for (var i=0; i < arr.length; i++) {
			if (typeof(arr[i]) == "object") {
				copy[i] = this.completeCopy(arr[i]);
			} else {
				copy[i] = arr[i];
			}
		}
		return copy;
	}
	
	completeCopy(object) { // WARNING! Does not handle recursive refernces!
		if (Array.isArray(object)) {
			return this.completeCopyArray(object);
		}
		var copy = {};
		for (var id in object) {
			if (typeof(object[id]) == "object") {
				copy[id] = this.completeCopy(object[id]);
			} else {
				copy[id] = object[id];
			}
		}
		return copy;
	}
	
	deleteByValue(arr, item) {
		var index = arr.indexOf(item);
		if (index !== -1) {
			arr.splice(index, 1);
			return true;
		}
		return false;
	}
	
	// This. Code. Is. ANCIENT. What is up with this, Onu!?!?
	addFriend(username, callback) {
		$.post("Friends", {username: "Jazmin290", addFriend: "Add friend"}, callback);
	}
	
}

var utility = new Utility();

export {utility};