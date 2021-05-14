import {expect as chaiExpect} from 'chai';
import FashionPage from '../pages/fashion.page';
import { waitForDisplayedAndClick } from '../utilities/helper';

describe('Watches page', () => {
    before(() => {
        FashionPage.open();
    });

    it('should open the website and move to fashion--> watches tab', () => {
        FashionPage.fashionLink.moveTo();
        //browser.pause(1000); 
        //FashionPage.watchesLink.waitForDisplayed({ timeout: 1000}); 
        //FashionPage.watchesLink.click();
        waitForDisplayedAndClick(FashionPage.watchesLink,1000);
    }); 

});