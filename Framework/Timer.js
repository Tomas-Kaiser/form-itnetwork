/**
 * Represents a simple timer object
 */
class Timer {

	/**
	 * Initializes the instance
	 * @param {number} duration The interval duration is milliseconds
	 * @param callback // TODO: How to jsdoc a callback?
	 */
	constructor(duration, callback, autoReset = true) {
		this.duration = duration;
		this.callback = callback;
		this.autoReset = autoReset;
		this.interval = null;
	}

	/**
	 * Starts the timer
	 */
	start() {
		this.stop();
		if (this.autoReset)
		    this.interval = setInterval(this.callback, this.duration);
		else
            this.interval = setTimeout(this.callback, this.duration);
	}

	/**
	 * Ends the timer
	 */
	stop() {
		if (this.interval)
        {
            if (this.autoReset)
                clearInterval(this.interval);
            else
                clearTimeout(this.interval);
        }
	}

	/**
	 * Resets the timer
	 */
	reset() {
		this.start();
	}

}