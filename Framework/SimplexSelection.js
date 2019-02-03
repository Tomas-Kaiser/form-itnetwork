/**
 * Represents a result from a query
 */
class SimplexSelection {
	/**
	 * Gets the first element's ID
	 * @returns {number} The first element's ID
	 */
	get id() { return this.getAttribute('id'); }
	/**
	 * Sets the elements' IDs
	 * @param {number} id The ID to be set to all the elements in the selection
	 */
	set id(id) { this.setAttribute('id', id); }
	/**
	 * Gets the first element's title
	 * @returns {string} The first element's ID
	 */
	get title() { return this.getAttribute('title'); }
	/**
	 * Sets the elements' titles
	 * @param {string} title The title to be set to all the elements in the selection
	 */
	set title(title) { for (let i = 0; i < this.raws.length; i++) this.raws[i].setAttribute('title', title); }
	/**
	 * Gets the first element's inner HTML
	 * @returns {string} The first element's inner HTML
	 */
	get html() { return this.raws[0].innerHTML; }
	/**
	 * Sets the elements' inner HTML code
	 * @param {string} html The inner HTML to be set to all the elements in the selection
	 */
	set html(html) { for (let i = 0; i < this.raws.length; i++) this.raws[i].innerHTML = html; }
    /**
     * Gets the first element's inner HTML
     * @returns {string} The first element's inner HTML
     */
    get text() { return this.raws[0].textContent; }
    /**
     * Sets the elements' inner HTML code
     * @param {string} html The inner HTML to be set to all the elements in the selection
     */
    set text(html) { for (let i = 0; i < this.raws.length; i++) this.raws[i].textContent = html; } // Todo: shouldn't it be txt instead of html (param name) ?
	/**
	 * Gets the first element's inner width
	 * @returns {number} The first element's inner width
	 */
	get width() { return this.raws[0].clientWidth; }
	/**
	 * Sets the elements' widths
	 * @param {number} width The width to be set to all the elements in the selection
	 */
	set width(width) { for (let i = 0; i < this.raws.length; i++) this.raws[i].style.width = width; }
	/**
	 * Gets the first element's inner height
	 * @returns {number} The first element's inner height
	 */
	get height() { return this.raws[0].clientHeight; }
	/**
	 * Sets the elements' heights
	 * @param {number} height The height to be set to all the elements in the selection
	 */
	set height(height) { for (let i = 0; i < this.raws.length; i++) this.raws[i].style.height = height + "px"; }
	/**
	 * Gets the first element's inner height
	 * @returns {number} The first element's inner height
	 */
	get attributes() { return this.raws[0].attributes; }
	/**
	 * Gets the number of elements in the selection
	 * @returns {number} The number of elements in the selection
	 */
	get length() { return this.raws.length; }

    /**
     * Returns the value of the first input/textarea in the selection
     * @returns {string} The value
     */
	get value() { return this.raws[0].value };

    /**
     * Sets the value of all the elements in the selection (have to be inputs/textareas)
     * @param {(string|number)} value The value to be set
     */
	set value(value) { for (let i = 0; i < this.raws.length; i++) this.raws[i].value = value; };
    /**
     * Returns whether the first element in the selection is a checkbox and is checked
     * @returns {string} Whether the first checkbox is checked
     */
    get checked() { return this.raws[0].checked };

	/**
	 * Returns a selection of all next siblings of all the elements in the selection
	 * @returns {SimplexSelection} A selection of all next siblings of all the elements in the selection
	 */
	get next() {
		let elements = [];
		for (let i = 0; i < this.raws.length; i++) {
			let nextElement = this.raws[i].nextElementSibling;
			if (nextElement)
				elements.push(nextElement);
		}
		return new SimplexSelection(elements);
	}
	/**
	 * Returns a selection of all previous siblings of all the elements in the selection
	 * @returns {SimplexSelection} A selection of all previous siblings of all the elements in the selection
	 */
	get previous() {
		let elements = [];
		for (let i = 0; i < this.raws.length; i++) {
			let previousElement = this.raws[i].previousElementSibling;
			if (previousElement)
				elements.push(previousElement);
		}
		return new SimplexSelection(elements);
	}
	/**
	 * Returns a selection of the parents of all the elements in the selection
	 * @returns {SimplexSelection} A selection of the parents of all the elements in the selection
	 */
	get parent() {
		let elements = [];
		for (let i = 0; i < this.raws.length; i++) {
			let parent = this.raws[i].parentNode;
			if (parent)
				elements.push(parent);
		}
		return new SimplexSelection(elements);
	}
	/**
	 * Returns the first element's children
	 * @returns {SimplexSelection} The first element's children
	 */
	get children() { return new SimplexSelection(this.raws[0].children); }
	/**
	 * Returns the first raw element from the selection or null
	 * @returns {Element|null} The first raw element from the selection or null
	 */
	get raw() { return this.raws.length > 0 ? this.raws[0] : null; }
	/**
	 * Returns the first element of the selection or null
	 * @returns {SimplexSelection|null} The first element of the selection or null
	 */
	get first() {
		return (this.raws.length > 0) ? new SimplexSelection(this.raws[0]) : null;
	}
	/**
	 * Returns the last element of the selection or null
	 * @returns {SimplexSelection|null} The last element of the selection or null
	 */
	get last() {
		return (this.raws.length > 0) ? new SimplexSelection(this.raws[this.raws.length - 1]) : null;
	}
    /**
     * Gets the first element's outer HTML. If the element doesn't this property, its inner HTML is returned wrapped in a div tag.
     * @returns {string} The first element's outer HTML
     */
	get outerHtml() {
        let node = this.raws[0];

        if (!node || !node.tagName) return '';
        if (node.outerHTML) return node.outerHTML;

        // polyfill:
        let wrapper = document.createElement('div');
        wrapper.appendChild(node.cloneNode(true));
        return wrapper.innerHTML;
    }

	/**
	 * Creates a new selection from letious input
	 * @param {undefined|HTMLCollection|String|Element} element The input
	 */
	constructor(element) {
		this.raws = [];
		this.newElements = [];
		if (element != undefined) {
			if (element instanceof HTMLCollection || element instanceof Array) { // Collection
				for (let i = 0; i < element.length; i++)
					this.raws.push(element[i]);
			}
			else if (element.constructor === String) { // HTML string
				if (element.length > 0) {
					// let frag = document.createDocumentFragment();
					let el = document.createElement('div');
					this.raws.push(el);
				}
			}
			else
				this.raws.push(element); // Raw element
		}
	}

	/**
	 * Adds a new class all the elements
	 * @param {string} className The class name, you canprovide more classes separated by spaces
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	addClass(classNames) {
		for (let i = 0; i < this.raws.length; i++) {
		    for (let className of classNames.replace(/\s+/g, ' ').trim().split(' '))
                this.raws[i].classList.add(className);
        }
		return this;
	}

	/**
	 * Removes a class from all the elements
	 * @param {string} className The class name
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	removeClass(className) {
		for (let i = 0; i < this.raws.length; i++)
			this.raws[i].classList.remove(className);
		return this;
	}

	/**
	 * Returns whether the first element in the selection has a given class
	 * @param {string} className The class name
	 * @returns {boolean} Whether the first element in the selection has a given class
	 */
	hasClass(className) {
	    if (this.raws.length)
		    return this.raws[0].classList.contains(className);
	    return false;
	}

	/**
	 * Toggles a given class for all the elements in the selection
	 * @param {string} className The class name
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	toggleClass(className) {
		for (let i = 0; i < this.raws.length; i++)
			this.raws[i].classList.toggle(className);
		return this;
	}

	/**
	 * Returns the value of a given attribute of the first element in the selection
	 * @param {string} name The attribute name
	 * @returns {string} The value of a given attribute of the first element in the selection
	 */
	getAttribute(name) {
        return this.raws[0].getAttribute(name);
    }

	/**
	 * Sets the value of a given attribute to all the elements in the selection
	 * @param {string} name The attribute name
	 * @param {*} value The value
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	setAttribute(name, value) {
		for (let i = 0; i < this.raws.length; i++)
			this.raws[i].setAttribute(name, value);
		return this;
	}

	/**
	 * Get the value of a given data attribute of the first element in the selection
	 * @param {string} name The attribute name without the "data-" prefix
	 * @param {undefined|string} def The default value
	 * @returns {string} The value of a given data attribute of the first element in the selection
	 */
	getData(name, def = null) {
		let value = this.raws[0].getAttribute('data-' + name);
		return value !== null ? value : def;
	}

	/**
	 * Sets the value of a given data attribute to all the elements in the selection
	 * @param {string} name The attribute name without the "data-" prefix
	 * @param {*} value The value of a given data attribute
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	setData(name, value) {
		for (let i = 0; i < this.raws.length; i++)
			this.raws[i].setAttribute('data-' + name, value);
		return this;
	}

	/**
	 * Removes the given attribute from all the elements in the selection
	 * @param {string} name The attribute name
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	removeAttribute(name) {
		for (let i = 0; i < this.raws.length; i++)
			this.raws[i].removeAttribute(name);
		return this;
	}

	/**
	 * // TODO: Change methods like this to work with all the elements
	 * Returns whether the first element of the selection has a given attribute
	 * @param name
	 */
	hasAttribute(name) {
		return this.raws[0].hasAttribute(name);
	}

	/**
	 * Appends a new element as the last child of all the elements in the selection
	 * @param {Element|string} element The element to be appended or the new element's HTML code
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	append(element) {
		if (element.constructor === String) {
			this.newElements = [];
		}
		for (let i = 0; i < this.raws.length; i++) {
			let el = element;
			// Creates an element if entered as HTML string
			if (element.constructor === String) { // TODO: Add this everywhere
				el = document.createElement('div');
				el = new SimplexSelection(el);
			}
			this.raws[i].appendChild(el.raw);
			if (element.constructor === String) { // TODO: Add this everywhere
				el.raw.outerHTML = element;
				this.newElements.push(this.raws[i].lastElementChild); // Finds the element again because the reference changed
			}
		}
		return this;
	}

	/**
	 * Prepends a new element as the first child of all the elements in the selection
	 * @param {SimplexSelection,Element|string} element The element to be prepended or the new element's HTML code
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	prepend(element) {
		if (element.constructor === String) {
			this.newElements = [];
		}
		for (let i = 0; i < this.raws.length; i++) {
			let el = element;
			// Creates an element if entered as HTML string
			if (element.constructor === String) { // TODO: Add this everywhere
				el = document.createElement('div');
				el = new SimplexSelection(el);
			}
			this.raws[i].insertBefore(el.raw, this.raws[i].firstChild);
			if (element.constructor === String) { // TODO: Add this everywhere
				el.raw.outerHTML = element;
				this.newElements.push(this.raws[i].firstElementChild); // Finds the element again because the reference changed
			}
		}
		return this;
	}

    /**
     * Inserts a new element before all the elements in the selection
     * @param {Element|string} element The element to be inserted or the new element's HTML code
     * @returns {SimplexSelection} The instance for method chaining
     */
	before(element) {
        if (element.constructor === String) {
            this.newElements = [];
        }
        for (let i = 0; i < this.raws.length; i++) {
            let el = element;
            // Creates an element if entered as HTML string
            if (element.constructor === String) { // TODO: Add this everywhere
                el = document.createElement('div');
                el = new SimplexSelection(el);
            }
            this.raws[i].parentNode.insertBefore(el.raw, this.raws[i]);
            if (element.constructor === String) { // TODO: Add this everywhere
                el.raw.outerHTML = element;
                this.newElements.push(this.raws[i].previousSibling); // Finds the element again because the reference changed
            }
        }
        return this;
    }

    /**
     * Inserts a new element after all the elements in the selection
     * @param {Element|string} element The element to be inserted or the new element's HTML code
     * @returns {SimplexSelection} The instance for method chaining
     */
    after(element) {
        if (element.constructor === String) {
            this.newElements = [];
        }
        for (let i = 0; i < this.raws.length; i++) {
            let el = element;
            // Creates an element if entered as HTML string
            if (element.constructor === String) { // TODO: Add this everywhere
                el = document.createElement('div');
                el = new SimplexSelection(el);
            }
            this.raws[i].parentNode.insertBefore(el.raw, this.raws[i].nextSibling);
            if (element.constructor === String) { // TODO: Add this everywhere
                el.raw.outerHTML = element;
                this.newElements.push(this.raws[i].nextSibling); // Finds the element again because the reference changed
            }
        }
        return this;
    }

	/**
	 * Lets all the elements in the selection to lose focus
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	blur() {
		for (let i = 0; i < this.raws.length; i++)
			this.raws[i].blur();
		return this;
	}

	/**
	 * Lets the first element in the selection to gain the focus
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	focus() {
		this.raws[0].focus();
		return this;
	}

    /**
     * Executes the on-click callback on all the elements in the selection
     * @returns {SimplexSelection} The instance for method chaining
     */
    click() { // TODO: Rename to triggerClick()
        for (let i = 0; i < this.raws.length; i++)
            this.raws[i].click();
        return this;
    }

    /**
     * Executes the on-change callback on all the elements in the selection
     * @returns {SimplexSelection} The instance for method chaining
     */
    triggerChange() {
        return this.triggerEvent('change');
    }

    triggerEvent(eventName) {
    	let event = new Event(eventName, {'bubbles': true});
        for (let i = 0; i < this.raws.length; i++)
            this.raws[i].dispatchEvent(event);
        return this;
	}

	/**
	 * Attaches a given callback for a given event to all the elements in the selection
	 * @param {string} eventName The event name // TODO: Introduce enums/constants
	 * @param callback // TODO: How to jsdoc a callback properly?
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	onEvent(eventName, callback) {
        if (!this.events) this.events = {};
        let functionCallback = function (e) {
            callback(new SimplexSelection(this), e);
        };
        this.events[eventName] = functionCallback;
		for (let i = 0; i < this.raws.length; i++) {
            this.raws[i].addEventListener(eventName, functionCallback);
        }
		return this;
	}

    /**
     * Attaches a given on-click callback to all the elements in the selection
     * @param callback The callback to be attached // TODO: How to jsdoc a callback properly?
     * @returns {SimplexSelection} The instance for method chaining
     */
    onClick(callback) {
        return this.onEvent('click', callback);
    }

    /**
     * Attaches a given on-click callback to all the elements in the selection
	 * @param callback The callback to be attached
     * @returns {SimplexSelection} The instance for method chaining
     */
	onChange(callback) {
        return this.onEvent('change', callback);
	}

    /**
	 * Removes the callback previously registered using onEvent() or methods such as onClick() etc.
     * @param {string} eventName The event name
     * @returns {SimplexSelection}
     */
	removeEvent(eventName) {
	    if (!this.events || !this.events.hasOwnProperty(eventName))
	        throw 'Error event ' + eventName + ' not found';
        for (let i = 0; i < this.raws.length; i++) {
            this.raws[i].removeEventListener(eventName, this.events[eventName]);
        }
        return this;
    }

	/**
	 * Performs a query selector to the element's contents
	 * @param {string} selector The selector
	 * @returns {SimplexSelection} The instance for method chaining
	 */
	select(selector) {
		let results = [];
		for (let j = 0; j < this.raws.length; j++) {
			let matches = this.raws[j].querySelectorAll(selector);
			for (let i = 0; i < matches.length; i++)
				results.push(matches[i]);
		}
		return new SimplexSelection(results);
	}

	/**
	 * Returns the index of a given element in the selection
	 * @param {Element|SimplexSelection} element The element to be searched for
	 * @returns {number} The zero-based index of -1 if the element was not found
	 */
	indexOf(element) {
		if (element instanceof SimplexSelection)
			element = element.raw;
		return this.raws.indexOf(element);
	}

	/**
	 * Performs a given callback for all the elements in the selection. If you return false in the callback function, callback will stop (break) the iteration
	 * @param callback The callback where the element will be passed as a parameter // TODO: How to document callbacks in JSDOC properly?
	 */
	each(callback) {
		let that = this;
		for (let i = 0; i < this.raws.length; i++) {
			if (callback(new SimplexSelection(that.raws[i]), i) === false) { // TODO: Probably not good to return the new element, what if we had a reference to the previous one? THere are multiple cases like this
                break;
            }
		}
	}

	/**
	 * Returns the elements added by any last method which adds elements anywhere // TODO: Is this a good idea?
	 * @returns {SimplexSelection} The newly added elements
	 */
	getNewElements() {
		return new SimplexSelection(this.newElements);
	}

	/**
	 * Returns the element at a given index in the selection
	 * @param {number} index The index
	 * @returns {SimplexSelection} The element at a given index in the selection
	 */
	get(index) {
		return new SimplexSelection(this.raws[index]);
	}

    /**
     * Shows all the elements in the selection
     * @returns {SimplexSelection} The instance for method chaining
     */
    show() {
        this.removeClass('hidden-important');
        return this;
    }

    /**
     * Hides all the elements in the selection
     * @returns {SimplexSelection} The instance for method chaining
     */
	hide() {
		this.addClass('hidden-important');
		return this;
	}

    /**
	 * Toggles displaying of the element
     * @returns {SimplexSelection} The instance for method chaining
     */
	toggle() {
		if (this.isVisible())
			return this.hide();
		return this.show();
	}

    /**
     * Fades in an element using an animation with specified duration. The element needs to have an "invisible" class
     * @param duration
     */
	fadeIn(duration = 2000) {
        this.raw.style.opacity=0;
	    this.removeClass('invisible');
        this.raw.style.transition="opacity " + (duration / 1000) + "s ease-in-out 0s";
        this.raw.style.opacity=1;
    }

    /**
     * Fades out an element using an animation with specified duration. The element will be set an "invisible" class
     * after the fade out animation is complete
     * @param duration
     */
    fadeOut(duration = 1000) {
        this.raw.style.transition="opacity " + (duration / 1000) + "s ease-in-out 0s";
        this.raw.style.opacity='0';
        let timer = new Timer(duration, () => {
            this.addClass('invisible');
        }, false);
        timer.start();
    }

    /**
     * Removes all the elements of the selection from the document
     * @returns {SimplexSelection} The instance for method chaining
     */
	remove() {
        for (let i = 0; i < this.raws.length; i++)
            this.raws[i].remove();
        return this;
    }

    /**
     * Relaces the tag of all the elements in the selection with another
     * https://stackoverflow.com/a/15086792/846232
     * @param {String} newTag The new tag
     * @returns {SimplexSelection} The instance for method chaining
     */
    replaceTag(newTag) {
        for (let i = 0; i < this.raws.length; i++) {
            // Grab the original element
            let original = this.raws[i];
            // Create a replacement tag of the desired type
            let replacement = document.createElement('div');

            // Grab all of the original's attributes, and pass them to the replacement
            for (let i = 0, l = original.attributes.length; i < l; ++i) {
                let nodeName = original.attributes.item(i).nodeName;
                let nodeValue = original.attributes.item(i).nodeValue;
                replacement.setAttribute(nodeName, nodeValue);
            }
            // Persist contents
            replacement.innerHTML = original.innerHTML;
            // Switch!
            original.parentNode.replaceChild(replacement, original);

            this.raws[i] = replacement;
        }
        return this;
    }

    /**
     * Wraps all the elements of the selector by separated wrapper elements
     * @param {Element|string} wrapperElement The element to become a wrapper or the new element's HTML code
     * @returns {SimplexSelection} The instance for method chaining
     */
    wrap(wrapperElement) {
        if (wrapperElement.constructor === String) {
            this.newElements = [];
        }
        for (let i = 0; i < this.raws.length; i++) {
            let el = wrapperElement;
            // Creates an element if entered as HTML string
            if (wrapperElement.constructor === String) { // TODO: Add this everywhere
                el = document.createElement('div');
                el = new SimplexSelection(el);
            }
            this.raws[i].parentNode.insertBefore(el.raw, this.raws[i].nextSibling);
            if (wrapperElement.constructor === String) { // TODO: Add this everywhere
                el.raw.outerHTML = wrapperElement;
                this.newElements.push(this.raws[i].nextSibling); // Finds the element again because the reference changed
                this.raws[i].nextSibling.appendChild(this.raws[i]);
            }
        }
        return this;
    }

    /**
     * Returns the value of a given style property of the first element in the selection
     * @param {string} propertyName The property to return the value of
     * @returns {string} The value of the given property or an empty string if not found
     */
    getStyle(propertyName) {
        let styles = this._getStylesAsObject(this.raws[0]);
        if (styles[propertyName])
            return styles[propertyName];
        return '';
    }

    /**
     * Returns style attribute parsed in object in format {key: value}
     * @param {Element} The element to get the style attribute from
     * @returns {{}} An object
     * @private
     */
    _getStylesAsObject(element) {
        let stylesObject = {};
        let styles = element.getAttribute('style');
        if (styles) {
            for (let style of styles.split(';')) {
                let styleArr = style.split(':');
                if (styleArr.length == 2) {
                    styleArr[styleArr[0].trim()] = styleArr[1].trim();
                }
            }
        }
        return stylesObject;
    }

    // TODO: Doesn't work twice, overwiter the previously set values

    /**
     * Set the style attribute for elements in the selection
     * @param {string} propertyName The name of the attribute to be set
     * @param {string} value The value for the attribute
     * @returns {SimplexSelection}
     */
    setStyle(propertyName, value) {
        for (let i = 0; i < this.raws.length; i++) {
            let styles = this._getStylesAsObject(this.raws[i]);
            styles[propertyName] = value;
            let styleString = '';
            for (let style in styles) {
                styleString += style + ':' + styles[style] + ';';
            }
            this.raws[i].setAttribute('style', styleString);
        }
        return this;
    }

    /**
     * Returns whether the first element in selection is visible
     * @returns {boolean}
     */
    isVisible() {
        let e = this.raws[0];
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }

}