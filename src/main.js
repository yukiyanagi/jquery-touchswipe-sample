import jquery from 'jquery';
const $ = jquery;
import jqueryTouchSwipe from 'jquery-touchswipe';


class IndexPage {
  constructor() {
    this.setParameter();
    this.bindEvent();
  }
  setParameter() {
    this.$target = $('html, body');
  }
  bindEvent() {
    this.$target.swipe({
      swipe: $.proxy(this.swipeEvent, this)  
    });
  }
  swipeEvent(event, direction, distance, duration, fingerCount, fingerData) {
    console.log("swiped :" + direction);
  }
}
$(function(){
  new IndexPage();
});

