export default class Slider {
  constructor(sliderBody, SliderBtn) {
    this.body = document.querySelector(sliderBody);
    this.item = this.body.children;
    this.btns = document.querySelectorAll(SliderBtn);
    this.sliderIndex = 1;
    this.teacherBlock = document.querySelector('.hanson');
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
        console.log('111');
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