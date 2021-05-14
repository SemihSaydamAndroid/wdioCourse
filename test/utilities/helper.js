//çalıştırma fonks dursun burda : 
// npx wdio run wdio.conf.js --spec fashion.js

export const waitForTextChange = (el, text, timeout) => {
    browser.waitUntil(
        function(){
            return el.getText() === text
        },{ timeout: timeout }
        //js'de {timeout} bıraksan da kabul ediyor 7nci satırdaki gibi yapmaktansa
    );
};

export const waitForDisplayedAndClick = (el, timeout) => {
    el.waitForDisplayed({ timeout: timeout}); 
    el.click();
};
