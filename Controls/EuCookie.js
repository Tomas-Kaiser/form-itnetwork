/**
 * Represents a EU cookie message control
 */
class EuCookie extends SimplexControl {
    /**
     * Initializes the instance
     * @param {Element} element The div element which is about to become the control
     */
    constructor(element) {
        super(element);
        const COOKIE_NAME = 'cookieAccepted';
        this.cookieManager = new CookieManager();
        let cookieAccepted = this.cookieManager.get(COOKIE_NAME) !== null;
        if (!cookieAccepted) {
            this.element.addClass('sjs-eu-cookie');
            this.message = this.element.append('<span>' + T.FLASH_EU_COOKIES + '</span>').getNewElements();
            this.link = this.element.append('<a href="' + T.ARTICLE_TERMS_OF_USE + '">' + T.MORE_INFO + '</a>').getNewElements();
            this.button = this.element.append('<button>' + T.AGREE + '</button>').getNewElements();
            this.button.onClick(() => {
                var cookieDate = new Date;
                cookieDate.setFullYear(cookieDate.getFullYear() + 10);
                this.cookieManager.set(new Cookie(COOKIE_NAME, 1), cookieDate);
                this.element.remove();
            });
        }
    }
}