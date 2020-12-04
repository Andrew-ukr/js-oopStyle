export default class Difference {
  constructor(blockName, blockItem, btn) {
    this.blockName = document.querySelector(blockName);
    this.blockItem = this.blockName.querySelectorAll(blockItem);
    this.btn = this.blockName.querySelector(btn);
  }

  init() {
    this.blockItem.forEach(elem => {
      elem.style.display = 'none';
    });
    this.blockItem[this.blockItem.length - 1].style.display = 'flex';
  }

  clickAction() {
    let counter = 0;
    this.btn.addEventListener('click', () => {
      if (this.blockItem.length - 2 === counter) {
        this.blockItem[this.blockItem.length - 1].style.display = 'none';
        this.blockItem[counter].style.display = 'flex';
        this.blockItem[counter].classList.add('animated', 'fadeIn');
      } else {
        this.blockItem[counter].style.display = 'flex';
        this.blockItem[counter].classList.add('animated', 'fadeIn');
        counter++;
      }
    });
  }

  run() {
    this.init();
    this.clickAction();
  }
}