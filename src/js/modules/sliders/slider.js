export default class Slider {
  constructor({
    wrapper = null,
    btns = null,
    btnsPrev = null,
    prev = null,
    next = null,
    activeClass = null,
    autoplay = null,
  } = {}) {
    
    this.wrapper = document.querySelector(wrapper);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    try {this.item = this.wrapper.children;} catch (error) {}
    this.btns = document.querySelectorAll(btns);
    this.btnsPrev = document.querySelectorAll(btnsPrev);
    this.sliderIndex = 1;
    this.teacherBlock = document.querySelector('.hanson');
    this.activeClass = activeClass;
    this.autoplay = autoplay;
    this.interval = '';
  }
}