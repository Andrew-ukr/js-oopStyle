import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(wrapper, btns, btnsPrev) {
    super(wrapper, btns, btnsPrev);
  }

  showCurentIndex() {
    try {
      if (this.sliderIndex > this.item.length) {
        this.sliderIndex = 1;
      }
    } catch (error) {}

    if (this.sliderIndex < 1) {
      this.sliderIndex = this.item.length;
    }
  }

  showSliderUp() {
    this.sliderIndex++;
  }

  showSliderDown() {
    this.sliderIndex--;
  }

  hideSlide() {
    try {
      this.item.forEach(element => {
        element.style.display = 'none';
      });
      this.item[this.sliderIndex - 1].style.display = 'block';
    } catch (error) {}
  }

  showTeacherBlock() {
    try {
      this.teacherBlock.style.display = 'none';
      if (this.item[2].style.display === 'block') {
        setTimeout(() => {
          this.teacherBlock.style.display = 'block';
        }, 3000);
      }
    } catch (error) {}
  }

  launchSlider() {
    this.hideSlide();

    this.btns.forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.showSliderUp();
        this.showCurentIndex();
        this.hideSlide();
        this.showTeacherBlock();
      });
    });

    this.btnsPrev.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.showSliderDown();
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