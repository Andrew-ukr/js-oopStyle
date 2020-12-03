export default class Slider {
  constructor({
    wrapper = null,
    btns = null,
    prev = null,
    next = null,
    activeClass = null,
    autoplay = null,
  } = {}) {
    
    this.wrapper = document.querySelector(wrapper);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.item = this.wrapper.children;
    this.btns = document.querySelectorAll(btns);
    this.sliderIndex = 1;
    this.teacherBlock = document.querySelector('.hanson');
    this.activeClass = activeClass;
    this.autoplay = autoplay;
  }
}