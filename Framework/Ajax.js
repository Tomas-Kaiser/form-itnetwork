/**
 * Represents a simple XMLHttpRequest wrapper to make AJAX requests shorter
 */
class Ajax {

	/**
	 * Performs a GET request to a given URL and returns the result
	 * @param {string} url The URL address to send the request to
     * @param {function} callback The callback will be invoked when a code-200 response is ready
     * @param {function} errorCallback The callback will be invoked when an error state code is returned in the response
     * @param {string} type The request type, specify one of the following values: GET, POST, DELETE, PUT
     * @param {object} data The data to be send with the request
     * @param {string} dataType The content data type, possible values are arraybuffer, blob, document - HTML or XML, json, text - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
     * @param {boolean} async Whether to run the request as asynchronous or wait for the response
	 */
	static get(url, callback, errorCallback = undefined, data = {}, dataType = '', async = true) {
		this._request(url, callback, errorCallback, 'GET', data, dataType, async);
	}

    /**
     * Performs a POST request to a given URL and returns the result
     * @param {string} url The URL address to send the request to
     * @param {function} callback The callback will be invoked when a code-200 response is ready
     * @param {function} errorCallback The callback will be invoked when an error state code is returned in the response
     * @param {string} type The request type, specify one of the following values: GET, POST, DELETE, PUT
     * @param {object} data The data to be send with the request
     * @param {string} dataType The content data type, possible values are arraybuffer, blob, document - HTML or XML, json, text - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
     * @param {boolean} async Whether to run the request as asynchronous or wait for the response
     */
    static post(url, callback, errorCallback = undefined, data = {}, dataType = '', async = true) {
        this._request(url, callback, errorCallback, 'POST', data, dataType, async);
    }

    /**
     * Sends a request to a server
     * @param {string} url The URL address to send the request to
     * @param {function} callback The callback will be invoked when a code-200 response is ready
     * @param {function} errorCallback The callback will be invoked when an error state code is returned in the response
     * @param {string} type The request type, specify one of the following values: GET, POST, DELETE, PUT
     * @param {object} data The data to be send with the request
     * @param {string} dataType The content data type, possible values are arraybuffer, blob, document - HTML or XML, json, text - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
     * @param {boolean} async Whether to run the request as asynchronous or wait for the response
     * @private
     */
	static _request(url, callback, errorCallback, type, data, dataType, async) {
        var request = new XMLHttpRequest();

        let types = ['GET', 'POST', 'DELETE', 'PUT'];
        if (types.indexOf(type.toUpperCase()) === -1)
            throw 'Invalid request type';
        type = type.toUpperCase();

        let requestUrl = url;
        let requestData = Ajax._serialize(data);
        if (requestData && type === 'GET') // TODO: what if there is some query string already??
            requestUrl = requestUrl + '?' + requestData;

        request.open(type, requestUrl, async);
        request.responseType = dataType;
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                callback(request.response);
            } else if (request.readyState == 4 ) {
                if (errorCallback)
                    errorCallback();
                else
                    console.log('AJAX error');
            } // TODO: Handle errors better
        };
        if (requestData && type !== 'GET')
            request.send(requestData);
        else
            request.send();
    }

    /**
     * Converts an object to a query string recursively
     * @param {object} obj The object
     * @param {string} prefix A key prefix which will be used like prefix[key]
     * @returns {string} A serialized object
     * @private
     */
    static _serialize(obj, prefix = '') {
        var str = [],
            p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    Ajax._serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }

}