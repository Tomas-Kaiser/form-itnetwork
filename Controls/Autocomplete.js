/**
 * A simple autocomplete input
 */
class Autocomplete extends SimplexControl {
    /**
     * Initializes the instance
     * @param {Element} element The div element which is about to become the control
     */
    constructor(element) {
        super(element);
        this.apiUrl = this.element.getData('url');
        this.items = [];
        this.minQueryLength = 1;
        this.searchAtTheBeginningOfWordsOnly = true;
        this.cache = true;
        this.cacheStorage = {};
        this.delay = 250;
        this.timer = new Timer(this.delay, () => {
            this._makeAjaxCall()
        }, false);

        this.element.onEvent('keyup', (sender, e) => {
            if (sender.value.length < this.minQueryLength) {
                this.items = [];
                this._updateItems();
            } else {
                this.timer.start();
            }
        });

        this.element.setAttribute('autocomplete', 'nope');
        this.autocompleteItems = this.element.after('<ul class="autocomplete-items hidden-important"></ul>').getNewElements();
        this.autocompleteItems.wrap('<div class="autocomplete-items-wrapper"></div>');
        this._updateItems();

        this.element.onEvent('blur', () => {
            this.autocompleteItems.hide();
        });
        this.element.onEvent('focus', () => {
            this.autocompleteItems.show();
        });
    }

    _makeAjaxCall() {
        let value = this.element.value;
        if (this.cache && this.cacheStorage.hasOwnProperty(value)) {
            this._updateData(this.cacheStorage[value]);
        } else {
            Ajax.get(this.apiUrl + "/" + value, (data) => {
                if (this.cache)
                    this.cacheStorage[value] = data;
                this._updateData(data);
            }, undefined, {}, 'json');
        }
    }

    _updateData(data) {
        this.items = data;
        this.autocompleteItems.show();
        this._updateItems();
    }

    _updateItems() {
        this.autocompleteItems.html = '';
        for (let item of this.items) {
            let liElement = this.autocompleteItems.append('<li></li>').getNewElements();
            liElement.text = item.title;
            liElement.setData('value', item.value);
            liElement.setData('title', item.title);
            this._highlightItem(liElement, this.element.value);
            liElement.onEvent('mousedown', (sender, e) => {
                if (this.element.getAttribute('type') === 'text')
                    this.element.value = sender.getData('title');
                else // TODO: select
                    this.element.value = sender.getData('value');
                this.autocompleteItems.hide();
            });
        }
        if (!this.items.length) {
            this.autocompleteItems.append('<li class="autocomplete-item-nothing">' + T.NO_ITEMS + '</li>');
        }
    }

    _highlightItem(item) {
        if (this.element.value.length > 0) {
            let queryValueNormalized = Strings.removeAccents(this.element.value.toLowerCase()).trim();
            let itemValueNormalized = Strings.removeAccents(item.text.toLowerCase()).trim();
            let index = itemValueNormalized.indexOf(queryValueNormalized);
            if (index !== 0 && this.searchAtTheBeginningOfWordsOnly) {
                index = itemValueNormalized.indexOf(' ' + queryValueNormalized);
                if (index !== -1)
                    index++;
            }
            if (index >= 0) {
                item.html = item.text.substring(0, index) + '<mark>' + item.text.substring(index, index + this.element.value.length) + '</mark>' + item.text.substring(index + this.element.value.length);
            }
        }
    }

}