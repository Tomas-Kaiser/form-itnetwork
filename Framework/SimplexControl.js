/**
 * The base class for all Simplex controls
 */
class SimplexControl {

	/**
	 * Initializes the instance
	 * @param {Element} element The element to be wrapped
	 */
	constructor(element) { // TODO: Doesn't work for multiple components on the website
		this.element = new SimplexSelection(element);
	}

	/**
	 * Performs a query selector to the element's contents
	 * @param {string} selector The selector
	 * @returns {SimplexSelection} A Simplex selection
	 */
	select(selector) {
		return this.element.select(selector);
	}

}