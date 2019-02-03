/**
 * A manager to manipulate document cookies
 */
class CookieManager {
    /**
     * Returns a cookie as a Cookie wrapper class instance
     * @param string name The name of the cookie
     */
    get(name) {
        let result = document.cookie.split(';').map(function(cookiestring) {
            let cookie = cookiestring.trim().split('=');
            if (cookie.length === 2)
                return new Cookie(cookie[0], cookie[1]);
            return new Cookie(cookiestring, '');
        })
        .filter(function(cookieObject) {
            return (cookieObject.name === name);
        });
        if (result.length === 0)
            return null;
        return result;
    }

    /**
     * Sets a given cookie
     * @param Cookie cookie The cookie to set
     * @param Date expires The expiration date
     */
    set(cookie, expires) {
        let expireDateString = '';
        if (expires)
            expireDateString = 'expires=' + expires.toGMTString() + ';';
        document.cookie = cookie.name + '=' + cookie.value + '; ' + expireDateString + ' path=/';
    }

    /**
     * Removes a given cookie
     * @param string name The name of the cookie to remove
     */
    remove(name) {
        set(new Cookie(name, ''), new Date(1970, 1, 1));
    }
}