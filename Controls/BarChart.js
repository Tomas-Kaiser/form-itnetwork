class BarChartItem {

    constructor(values, texts) {
        this._values = values;
        this._texts = texts;
    }

    get values() { return this._values }
    get totalValue() { return this._values.reduce((a, b) => a + b, 0) }
    get texts() { return this._texts }
}


/**
 * A simple bar chart for all occasions
 */
class BarChart extends SimplexControl {
    /**
     * Initializes the instance
     * @param {Element} element The div element which is about to become the control
     */
    constructor(element, multicolor = false) {
        super(element);
        this.height = 120;
        if (this.element.getData('multicolor')) // TODO: Introduce some parrent setter se easily set properties
            multicolor = this.element.getData('multicolor');
        this.multicolor = multicolor;
        this.defaultColorIndex = 2; // TODO: ...
        this.compoundValues = this.element.getData('compound-values');
        if (this.element.getData('color-index'))
            this.defaultColorIndex = this.element.getData('color-index');

        this.bars = this.element.select('li');
        this.colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6'];
        this.colorsDark = ['#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'];

        this.items = [];
        // Harvesting values and texts
        this.bars.each((element, i) => {
            let valueData = element.getData('value');
            let textData = element.text;
            let values = [];
            let texts = [];
            if (this.compoundValues) {
                values = valueData.split(/;/g);
                texts = textData.split(/;/g);
            } else {
                values = [valueData];
                texts = [textData];
            }
            for (let i = 0; i < values.length; i++) {
                values[i] = parseFloat(values[i]);
            }
            this.items.push(new BarChartItem(values, texts));
        });

        this.minValue = Math.min(...this.items.map(a => a.totalValue));
        this.maxValue = Math.max(...this.items.map(a => a.totalValue));
        let range = this.maxValue - this.minValue;
        this.columnWidth = 40;

        this.ratio = this.height / this.maxValue;
        this.element.height = this.height;
        // Changing colors
        this.bars.each((element, i) => {
            let color = this.colors[this.defaultColorIndex];
            if (this.multicolor)
                color = this.colors[(i + this.defaultColorIndex) % this.colors.length];
            element.text = '';
            for (let j = 0; j < this.items[i].values.length; j++) {
                // element.setStyle('background', color); TODO: why this doesn't work???
                let subBar = element.prepend('<span></span>').getNewElements();
                subBar.title = this.items[i].texts[j];
                subBar.raw.style.background = this.colors[(j + this.defaultColorIndex) % this.colors.length];
                subBar.raw.style.transition = 'height .5s ease-in';
                subBar.raw.style.height = (this.items[i].values[j] * this.ratio) + 'px';
                //subBar.raw.style.width = this.columnWidth + 'px';
                // TODO: !!!!!!!!!!!!!!!!!!!!!!! setStyle doesn't work!!! !!!!!!!!!!!!!!!!!!!!!!!
            }
            let formattedValue = element.title;
            element.title += '\n' + this.items[i].totalValue
            // TODO: Move styles to CSS
            element.append('<span class="sjs-bar-chart-title">' + formattedValue + '</span>'); // TODO: Escaped? Use .text = ... instead
            // element.setStyle('height', (value * this.ratio) + 'px');
        });
        this.element.raw.style.margin = '10px 0 80px 0';
        this.descriptionElement = this.element.wrap('<div class="sjs-bar-chart-wrapper"></div>').getNewElements().prepend('<div></div>').getNewElements();
        this.descriptionElement.append('<span>' + this.maxValue + '</span>');
        this.descriptionElement.append('<span>' + (this.maxValue / 2) + '</span>');
        this.descriptionElement.append('<span>0</span>');
        // TODO: CSS animation
    }

    setClickHandler(handler) {
        this.bars.onClick(handler);
    }

    remove() {
        this.element.parent.remove();
    }

}