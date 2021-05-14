export default class Page {

    open(path) {
        browser.url(path);
    }


    getWatchesCategoryListText(elementList) {
        return elementList
            .map(element => console.log(element.getText())
            );
    }

    getElementText(element) {
        return element.getText();
    }

    getBrowserUrl() {
        return browser.getUrl();
    }

    //getWatchesCategoryListToArray(elementList) {
    //    const watchesList = [];
    //
    //    elementList
    //        .map(element => watchesList.push(element.getText())
    //        );
    //    return watchesList;
    //}


}