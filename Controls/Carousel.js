/**
 * Represents a carousel control
 */
class Carousel extends TabControl {

	/**
	 * Initializes the instance
	 * @param {Element} element The div element which is about to become the control
	 */
	constructor(element) {
		super(element, false);

		// AutoScroll
		this.autoScroll = this.element.getData('auto-scroll', '1');
		this.timer = new Timer(7500, () => {
			if (!this.element.select(".carousel-overlay:hover").length)
				this.nextTab();
		});
		if (this.autoScroll == 1)
			this.timer.start();

		this._addCircles();
		this._updateActualTab();
		this._addButtons();
	}

	/**
	 * Adds circle indicators
	 * @private
	 */
	_addCircles() {
		let circlesList = this.element.append('<ul class="carousel-circles"></ul>').getNewElements();
		// Generating circles
		for (let i = 0; i < this.tabs.length; i++) {
			let circle = circlesList.append('<li></li>').getNewElements();
			circle.onClick(() => { this.switchTab(this.tabs.get(i)); this._updateActualTab(); });
		}
		this.circles = circlesList.select('li');
	}

	/**
	 * Adds overlay buttons
	 * @private
	 */
	_addButtons() {
		this.element.prepend(`
			<div class="carousel-overlay">
				<div><i class="fa fa-angle-left"></i></div><div><i class="fa fa-angle-right"></i></div>
			</div>
		`);
		if (this.tabs.length >= 2) { // Adds buttons only if there are at least 2 items
			let prevButton = this.element.select('div.carousel-overlay div:first-child');
			prevButton.onClick((sender, e) => {
				this.previousTab();
				e.preventDefault();
			});
			let nextButton = this.element.select('div.carousel-overlay div:last-child');
			nextButton.onClick((sender, e) => {
				this.nextTab();
				e.preventDefault();
			});
		}
	}

	/**
	 * Updates the current tab
	 * @private
	 */
	_updateActualTab() {
		this.circles.removeClass('active');
		this.circles.get(this.tabIndex).addClass('active');
		if (this.autoScroll == 1)
			this.timer.reset();
	}

	/**
	 * Switches to the previous tab
	 */
	previousTab() {
		super.previousTab();
		this._updateActualTab();
	}

	/**
	 * Switches to the next tab
	 */
	nextTab() {
		super.nextTab();
		this._updateActualTab();
	}


}