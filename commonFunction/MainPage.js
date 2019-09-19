export default class MainPage {
    constructor() {
        this.title = 'Weather Page';
    }

    open() {
        browser.url('http://localhost:3000/');
    }

    pageTitle() {
        return browser.getTitle();
    }
}