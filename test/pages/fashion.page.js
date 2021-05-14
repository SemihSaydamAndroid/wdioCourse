import Page from '../pages/page';

class FashionPage extends Page{

    get fashionLink(){return $$(".hl-cat-nav__js-tab a[href*='Fashion']")[0]};
    get watchesLink(){return $(".hl-cat-nav__js-link[href*='Wristwatches']")};
    
    get bannerLeft(){return $('.hl-banner__text')}; 
    get bannerText(){return $('.ebayui-ellipsis-3')}; 
    get bannerButton(){return $('div.hl-cta.hl-banner__cta.ebayui-ellipsis > a')}; 
    get categoryList(){return $$('.srp-refine__category__list ul li')};

    open(){
        super.open('/');
    }

}

export default new FashionPage();