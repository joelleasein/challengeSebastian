class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality(){
    this.items.forEach(item => {
      this.updateItemQuality(item);
      this.updateSellIn(item);
    });
    return this.items;
  }

  updateItemQuality(item) {
    switch (item.name) {
      case 'Aged Brie':
        this.updateQualityAged(item, item.sellIn);
        break;

      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateQualityBacks(item, item.sellIn)   
        break;

      case 'Sulfuras, Hand of Ragnaros':
        break; //no changes

      case 'Conjured Mana Cake':
        this.decreaseQualityConjured(item, item.sellIn);
        break;
      
      default:
        this.decreaseQualityDefault(item, item.sellIn);
        break;

    }

    this.checkQuality(item.quality, item.name);

  }

  decreaseQualityConjured(item, sellIn ) {
    item.quality = sellIn >= 0 ? this.decreaseQualityAll(item,2) : this.decreaseQualityAll(item,4);
  }

  decreaseQualityDefault(item, sellIn ) {
    item.quality = sellIn >= 0 ? this.decreaseQualityAll(item) : this.decreaseQualityAll(item,2);
  }

  decreaseQualityAll( item, rate = 1 ) {
    item.quality -= rate
    return item.quality
  }

  checkQuality(quality, name){
    if( name === 'Sulfuras, Hand of Ragnaros'){
      quality = 80;
    }else{
      quality = Math.min(Math.max(quality, 0), 50)
    }
  }

  updateQualityBacks(item,sellIn){

    if( sellIn > 10){
      this.updateQualityAll(item);
    }else if(sellIn <= 10 && sellIn >5){
      this.updateQualityAll(item,2);
    }else if(sellIn <= 5 && sellIn >=0){
      this.updateQualityAll(item,3); 
    }else{
      item.quality = 0;
    }

  }

  updateQualityAged( item ,sellIn ){
    if( sellIn > 0){
      this.updateQualityAll(item);
    }else{
      this.updateQualityAll(item,2);
    }
  }

  updateQualityAll( item , rate =1){
    item.quality += rate;
  }

  updateSellIn(item) {
    if (item.name !== 'Sulfuras, Hand of Ragnaros'  ) {
      item.sellIn -= 1;
    }
  }

  
}

  // updateQuality() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
// }


module.exports = {
  Item,
  Shop
}
