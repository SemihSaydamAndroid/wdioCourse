import {expect as chaiExpect} from 'chai';
import WatchesPage from '../pages/watches.page';
import resources from '../resources/index';

describe('Watches page', () => {
    before(() => {
        WatchesPage.open();
    });

    beforeEach(() => {
        
    });

    it('should shot the banner container', () => {
        expect(WatchesPage.bannerLeft).toBeDisplayed();
    
    }); 

    it('should show the banner', () => {
        expect(WatchesPage.bannerText).toHaveTextContaining(resources.bannerTextRes);
    });

    it('should contain link on banner button and verify its clickable', () => {
        expect(WatchesPage.bannerButton).toHaveLinkContaining('-off-coupon'); 
        expect(WatchesPage.bannerButton).toBeClickable(); 
    });

    it('should click on the shop button and verify the new url', () => {
        WatchesPage.bannerButton.click();
        const url = browser.getUrl();
        chaiExpect(url).to.include('-off-coupon')
    });

    it('control category list', () => {
        const categoryListText = WatchesPage.categoryList[2].getText();
        chaiExpect(categoryListText).to.equal(resources.categoryListRes);
    });


    it('should verify the watches category list', () => {
        //WatchesPage.getWatchesCategoryListText();
        //console.log(WatchesPage.getWatchesCategoryListToArray());
        
        const WatchesCategoryList = 
        WatchesPage.getTextListFromElementList();

        chaiExpect(WatchesCategoryList).to.deep.equal(resources.WatchesCategoryList);
    });


});