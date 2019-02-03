class Strings {

	static camelToDashes(text) {
		return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	static escapeRegExp(strToEscape) {
		// Escape special characters for use in a regular expression
		return strToEscape.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	};

	static trim(origString, charToTrim = ' ') {
		charToTrim = Strings.escapeRegExp(charToTrim);
		let regEx = new RegExp("^[" + charToTrim + "]+|[" + charToTrim + "]+$", "g");
		return origString.replace(regEx, "");
	};

    static removeAccents(text) {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
}