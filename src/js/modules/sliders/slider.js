export default class Slider {
  constructor({
    wrapper = null,
    btns = null,
    prev = null,
    next = null
  } = {}) {
    
    this.wrapper = document.querySelector(wrapper);
    this.prev = this.wrapper.querySelector(prev);
    this.next = this.wrapper.querySelector(next);
    this.item = this.wrapper.children;
    this.btns = document.querySelectorAll(btns);
    this.sliderIndex = 1;
    this.teacherBlock = document.querySelector('.hanson');
  }
}