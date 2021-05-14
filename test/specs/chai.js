import {expect as chaiExpect,assert} from 'chai';
import 'chai/register-should';

describe('Watches page', () => {
    it('should shot the banner container', () => {
        browser.url('https://www.ebay.com');
        const bannerLeft = $('.hl-banner__text');
        expect(bannerLeft).toBeDisplayed();
    
    });

    it('should show the banner', () => {
        const bannerTextElement = $('.ebayui-ellipsis-3');
        const bannerText = bannerTextElement.getText();
        expect(bannerTextElement).toHaveTextContaining('Deserve a Deal');
        chaiExpect(bannerText).to.not.be.empty;
        bannerText.should.not.be.empty;
        assert.isNotEmpty(bannerText);
    });

    it('should contain link on banner button and verify its clickable', () => {
        const bannerButton = $('div.hl-cta.hl-banner__cta.ebayui-ellipsis > a');
        const tagName = bannerButton.getTagName();
        expect(bannerButton).toHaveLinkContaining('-off-coupon'); 
        expect(bannerButton).toBeClickable(); 
        chaiExpect(tagName).to.equal('a');
        tagName.should.be.equal('a'); 
    });

    it('should click on the shop button and verify the new url', () => {
        const bannerButton = $('div.hl-cta.hl-banner__cta.ebayui-ellipsis > a');
        bannerButton.click();
        const url = browser.getUrl();
        chaiExpect(url).to.include('-off-coupon')
        // alttaki url değişebilir. O yüzden yukarıdaki gibi chai ile, bu url şu yazıyı içermelidir demeliyiz. 
        //expect(browser).toHaveUrl('https://www.ebay.com/e/row/10-off-coupon?_trkparms=%26clkid%3D1605574098868170408');
    });

});