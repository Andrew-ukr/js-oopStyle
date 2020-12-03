import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(wrapper, prev, next, activeClass) {
    super(wrapper, prev, next, activeClass);
  }

  init() {
    this.wrapper.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    `;
  }

  btnAction() {
    this.next.addEventListener('click', () => {
      this.wrapper.append(this.item[0]);
      this.activeItem();
    });

    this.prev.addEventListener('click', () => {
      this.wrapper.prepend(this.item[this.item.length - 1]);
      this.activeItem();
    });
  }

  activeItem() {
    if (this.activeClass) {
      this.item.forEach(item => {
        item.classList.remove(this.activeClass);
      });
      this.item[0].classList.add(this.activeClass);
    }

    try {
      if (this.activeClass && this.wrapper.classList.contains('showup__content-slider')) {
        this.item.forEach(item => {
          item.lastElementChild.style.opacity = '0.4';
          item.firstElementChild.lastElementChild.style.opacity = '0';
        });
        this.item[0].lastElementChild.style.opacity = '1';
        this.item[0].firstElementChild.lastElementChild.style.opacity = '1';
      }
    } catch (error) {}
  }

  startAutoPlay() {
    if (this.autoplay) {
      let interval = setInterval(() => {
        this.wrapper.append(this.item[0]);
        this.activeItem();
        console.log('start interval');
      }, this.autoplay);

      this.wrapper.addEventListener('mouseover', () => {
        console.log('clear');
        clearInterval(interval);
      });

      this.wrapper.addEventListener('mouseout', () => {
        interval = setInterval(() => {
          this.wrapper.append(this.item[0]);
          this.activeItem();
          console.log('out');
        }, this.autoplay);
      });
    }
  }

  launchSlider() {
    this.init();
    this.btnAction();
    this.activeItem();
    this.startAutoPlay();
  }
}