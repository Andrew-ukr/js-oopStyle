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

  startAutoPlay(area) {
    if (this.autoplay) {
      this.interval = setInterval(() => {
        this.wrapper.append(this.item[0]);
        this.activeItem();
      }, this.autoplay);
      
      area.addEventListener('mouseover', () => {
        clearInterval(this.interval);
      });

      area.addEventListener('mouseout', () => {
        this.interval = setInterval(() => {
          area.append(this.item[0]);
          this.activeItem();
        }, this.autoplay);
      });
    }
  }

  stopAutoPlay(area) {
    if (this.autoplay) {
      area.addEventListener('mouseover', () => {
        clearInterval(this.interval);
      });

      area.addEventListener('mouseout', () => {
        this.interval = setInterval(() => {
          this.wrapper.append(this.item[0]);
          this.activeItem();
        }, this.autoplay);
      });
    }
  }

  launchSlider() {
    this.init();
    this.btnAction();
    this.activeItem();
    this.startAutoPlay(this.wrapper);
    this.stopAutoPlay(this.prev);
    this.stopAutoPlay(this.next);
  }
}