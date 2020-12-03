import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(wrapper, btns) {
    super(wrapper, btns);
  }
  
  showCurentIndex() {
    if (this.sliderIndex > this.item.length) {
      this.sliderIndex = 1;
    }

    if (this.sliderIndex < 0) {
      this.sliderIndex = this.item.length;
    }
  }

  showSliderUp() {
    this.sliderIndex++;
  }

  hideSlide() {
    this.item.forEach(element => {
      element.style.display = 'none';
    });
    this.item[this.sliderIndex - 1].style.display = 'block';
  }

  showTeacherBlock() {
    this.teacherBlock.style.display = 'none';
    if (this.item[2].style.display === 'block') {
      setTimeout(() => {
        this.teacherBlock.style.display = 'block';
      }, 3000);
    }
  }

  launchSlider() {
    this.hideSlide();

    this.btns.forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        this.showSliderUp();
        this.showCurentIndex();
        this.hideSlide();
        this.showTeacherBlock();
      });
    });

    this.btns.forEach(elem => {
      elem.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.sliderIndex = 1;
        this.hideSlide();
      });
    });
  }

}