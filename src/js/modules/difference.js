export default class Difference {
  constructor(blockName, blockItem, btn) {
    this.blockName = document.querySelector(blockName);
    try {this.blockItem = this.blockName.querySelectorAll(blockItem);} catch (error) {}
    try {this.btn = this.blockName.querySelector(btn);} catch (error) {}
    
  }

  init() {
    try {
      this.blockItem.forEach(elem => {
        elem.style.display = 'none';
      });
      this.blockItem[this.blockItem.length - 1].style.display = 'flex';
    } catch (error) {}
  }

  clickAction() {
    let counter = 0;
    try {
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
    } catch (error) {}
  }

  run() {
    this.init();
    this.clickAction();
  }
}