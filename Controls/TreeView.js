class TreeView extends SimplexControl {

    /**
     * Initializes the instance
     * @param {Element} element The div element which is about to become the control
     */
    constructor(element, allowFolding = false) {
        super(element);
        this.icons = {
            'txt': 'file-text',
            'php': 'dollar',
            'js': 'file-code-o',
            'htm': 'html5',
            'html': 'html5',
            'css': 'css3',
            'java': 'coffee',
            'cs': 'hashtag',
            'py': 'file-code-o fa-py',
        };
        this.allowFolding = allowFolding;
        this.initializeUlElement(this.element);
    }

    /**
     * Prepends icons and control elements to the ul element
     * @param {SimplexSelection} element The ul element
     */
    initializeUlElement(element) {
        element.select('li').each((li) => {
            if (li.hasClass('directory') || li.hasClass('project')) {
                let name = li.getData('name');
                let icon = li.hasClass('directory') ? 'folder' : 'folder-o';
                let iconElement = li.prepend('<i class="fa fa-' + icon + '"></i>' + '<span>' + name + '</span>').getNewElements();
                let arrowElement = li.prepend('<i class="fa fa-caret-down"></i>').getNewElements();
                if (this.allowFolding) {
                    li.select('span').onClick((sender, e) => {
                        if (!sender.parent.hasClass('file')) {
                            li.toggleClass('closed');
                            e.stopPropagation();
                        }
                    });
                }
            } else if (li.hasClass('file')) {
                let icon = this.getFileIcon(li.text.substring(li.text.lastIndexOf('.') + 1));
                let iconElement = li.prepend('<i class="fa fa-' + icon + '"></i> ').getNewElements();
            }
        });
    }

    /**
     * Returns a partial Font awesome classname (e.g. html5) for a given file extension
     * @param {string} extension The file extension without the dot (e.g. txt)
     * @returns {*} The partial class name or the default partial class name
     */
    getFileIcon(extension) {
        if (this.icons.hasOwnProperty(extension))
            return this.icons[extension];
        return 'file';
    }

    /**
     * Executes a given callback once a treeview item is clicked
     * @param {function} callback The callback
     * @returns {TreeView} The instance for method chaining
     */
    onItemSelected(callback) {
        this.element.select('li.file').onClick(callback);
        return this;
    }

}