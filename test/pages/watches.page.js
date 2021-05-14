import Page from '../pages/page';

class WatchesPage extends Page{

    get bannerLeft(){return $('.hl-banner__text')}; 
    get bannerText(){return $('.ebayui-ellipsis-3')}; 
    get bannerButton(){return $('div.hl-cta.hl-banner__cta.ebayui-ellipsis > a')}; 
    get categoryList(){return $$('.srp-refine__category__list ul li')};

    open(){
        super.open('https://www.ebay.com');
    }

    getWatchesCategoryListText(){
        //super.getWatchesCategoryListText($$('.srp-refine__category__list ul li'));
        super.getWatchesCategoryListText(this.categoryList);
       ///Yani get fonksiyonları çağırırken sağ taraftaki watches.js'de de olduğu gibi,
       // parantez aç kapa yapmıyorsun.

        //Yani aslında asıl amaçlarından birini yapmış gibisin
        //ana page class'ta bir hem de bir element listeli method yaptın
        //Senaryo olcak class'ta ise o methodu buranın elementiyle çağırdık.
        // Asıl amaç buydu ama 12nci bideoda biraz daha net belli olcak. 

    }

    //getWatchesCategoryListToArray(){
    //    super.getWatchesCategoryListToArray(this.categoryList);
    //}

    getTextListFromElementList(){
        const watchesList = [];

        this.categoryList
            .map(element => watchesList.push(element.getText())
            );
        return watchesList;
    }

}
export default new WatchesPage();
