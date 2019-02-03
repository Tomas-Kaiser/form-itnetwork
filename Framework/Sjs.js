/***
 * Represents a service for managing Simplex controls
 */
class Sjs {

	/**
	 * Initializes the service
	 */
	static initialize() {
		Sjs.controls = [];
	}

	/**
	 * Registers a new control
	 * @param {string} controlName The control class name
	 */
	static register(controlName) {
	    // the getElementByClassName() method cannot be used here since its result is updated when the DOM structure changes, causing the loop to stuck
		let elements = document.querySelectorAll('.sjs[data-control=' + Strings.camelToDashes(controlName) + ']');
		for (let i = 0; i < elements.length; i++) {
            eval('var control = new ' + controlName + "(elements[i]); Sjs.controls.push(control);"); // Bleah :-/
		}
	}
}