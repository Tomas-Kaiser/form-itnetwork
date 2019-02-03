/**
 * Represents a simple tabbed control
 */
class TabControl extends SimplexControl {

	/**
	 * Gets the index of the actual tab
	 * @returns {number} The index of the actual tab
	 */
	get tabIndex() { return this.tabs.indexOf(this.currentTab); }

    /**
     * Gets the currently active tab
     * @returns {SimplexSelection} Active tab
     */
	get activeTab() { return this.currentTab; }

	/**
	 * Initializes the instance
	 * @param {Element} element The div element which is about to become the control
	 * @param {boolean} showTabs Whether to display a tab bar or not
	 */
	constructor(element, showTabs = true) {
		super(element);
		this.activeClass = 'active';
		this.tabs = new SimplexSelection();
		let tabs = this.select('li');
		this.element.select('li').remove();
		this.showTabs = showTabs;
		this.tabBarTabs = new SimplexSelection();
		if (showTabs) {
			this.tabBar = this.element.prepend('<nav class="button-bar"></nav>').getNewElements(); // Should append/prepend always return a new element?
		}
        tabs.each((el) => {
            this.addTab(el.html, el.title);
        });
		if (showTabs) {
            this.tabBarTabs = this.tabBar.select('a');
            if (this.tabBarTabs.length)
                this.tabBarTabs.first.addClass(this.activeClass);
        }
        this.currentTab = this.tabs.first;
		this.setOptimalHeight();
		window.addEventListener('resize', () => { this.setOptimalHeight(); });
	}

	/**
	 * Switches to a given tab
	 * @param {SimplexSelection} tabElement The tab element to switch to
	 */
	switchTab(tabElement) {
		this.currentTab.removeClass(this.activeClass);
		this.currentTab = tabElement;
		this.currentTab.addClass(this.activeClass);
		this.tabBarTabs.removeClass(this.activeClass);
		this.tabBarTabs.get(this.tabIndex).addClass(this.activeClass);
	}

	/**
	 * Switches to the next tab
	 */
	nextTab() {
		this.switchTab(this.currentTab.next.length ? this.currentTab.next : this.tabs.first);
	}

	/**
	 * Switches to the previous tab
	 */
	previousTab() {
		this.switchTab(this.currentTab.previous.length ? this.currentTab.previous : this.tabs.last);
	}

	/**
	 * Searching for the optimal height to avoid "jumping" when switched
	 */
	setOptimalHeight() { // TODO: Why the fuck it doesn't recount when the window is resized?
	    let maxHeight = 999;
		var optimalHeight = 0;
		this.tabs.each((tab) => {
		    tab.raw.style.height = 'auto';
			if (tab.height > optimalHeight)
				optimalHeight = tab.height;
            tab.raw.style.height = '100%';
		});
		if (optimalHeight > maxHeight)
			optimalHeight = maxHeight;
		this.element.raw.style.height = 'auto';
		if (this.tabs.length)
            this.element.height = this.element.height - this.tabs.get(this.tabIndex).height + optimalHeight;
	}

    /**
     * Creates a new tab with content at the end of the tab bar. In case that the tab bar is disabled, only content is added.
     * @param {string} content Html content of the tab
     * @param {string} title Title for the bar
     * @returns {SimplexSelection} The created tab
     */
	addTab(content, title) {
	    let tabContent = this.element.select('ul').append('<li></li>').getNewElements();
	    tabContent.setAttribute('title', title);
	    tabContent.html = content;
	    if (this.tabBar) {
            let tab = this.tabBar.append('<a href="#"></a>').getNewElements();
            tab.text = title;
            tab.onClick((sender, e) => { this.switchTab(tabContent); e.preventDefault(); });
	    }
	    this.tabs = this.element.select('li');
	    // if this is the first tab added set it as selected
	    if (this.tabs.length === 1) {
            this.currentTab = this.tabs.first;
            this.switchTab(tabContent);
            this.setOptimalHeight();
        }
        return tabContent;
    }

    /**
     * Removes a tab with its content at a given index.
     * @param {int} tabIndex The tab index
     */
    removeTab(tabIndex) {
        let tab = this.tabs[tabIndex];
        if (tab.hasClass(this.activeClass) && this.tabs.length > 1) {
            this.nextTab();
        }
	    tab.remove();
	    if (this.tabBarTabs) {
            this.tabBarTabs[tabIndex].remove();
            this.tabBarTabs = this.element.select('.button-bar a');
        }
        this.tabs = this.element.select('li');
	    if (!this.tabs.length)
	        this.currentTab = null;
    }

    /**
     * Removes all the tabs
     */
    clearTabs() {
        this.tabBarTabs.remove();
        this.tabs.remove();
        this.currentTab = null;
    }

    /**
     * Returns all the tab elements
     * @returns {SimplexSelection} All the tab elements
     */
    getTabs() {
        return this.tabs;
    }

    /**
     * Returns all the tab bar elements (buttons)
     * @returns {SimplexSelection} All the tab bar elements (buttons)
     */
    getBarTabs() {
        return this.barTabs;
    }

    /**
     * Returns the active tab element
     * @returns {SimplexSelection} The active tab
     */
    getActiveTab() {
        if (this.tabs.length)
            return this.tabs.get(this.tabIndex);
        return null;
    }

    /**
     * Returns the active tab bar element (button)
     * @returns {SimplexSelection} The active tab bar element (button)
     */
    getActiveBarTab() {
        if (this.tabBarTabs.length)
            return this.tabBarTabs.get(this.tabIndex);
        return null;
    }

}