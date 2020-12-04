export default class Form {
  constructor(form, path) {
    this.form = document.querySelectorAll(form);
    this.massage = {
      sending: `Надсилання даних ...`,
      successfully: `Дані надіслані успішно`,
      unsuccessful: `Сталася помилка, спробуте ще раз`,
      sendingImg: 'assets/img/spinner.gif',
      successfullyImg: 'assets/img/ok.png',
      unsuccessfulImg: 'assets/img/fail.png',
    };
    this.path = path;
    this.input = document.querySelectorAll('[name="email"]');
  }
  checkEmailInput() {
    this.input.forEach(item => {
      item.addEventListener('keypress', (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  run() {
    this.checkEmailInput();
    this.form.forEach(item => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();
        let createMassageBlock = document.createElement('div');
        let creaateImgTag = document.createElement('img');
        let statusMassage = document.createElement('div');
        createMassageBlock.append(creaateImgTag);
        createMassageBlock.append(statusMassage);
        createMassageBlock.style.textAlign = 'center';
        statusMassage.textContent = this.massage.sending;
        creaateImgTag.setAttribute('src', this.massage.sendingImg);
        item.parentNode.append(createMassageBlock);
        item.style.display = 'none';

        function closeStatusMessage() {
          setTimeout(() => {
            createMassageBlock.remove();
            item.style.display = 'block';
          }, 5000);
        }

        const formData = new FormData(item);

        fetch(this.path, {
            method: "POST",
            body: formData,
          }).then(data => data.text())
          .then(data => {
            console.log(this.path);
            console.log(data);
            statusMassage.textContent = this.massage.successfully;
            creaateImgTag.setAttribute('src', this.massage.successfullyImg);
          }).catch(() => {
            statusMassage.textContent = this.massage.unsuccessful;
            creaateImgTag.setAttribute('src', this.massage.unsuccessfulImg);
          }).finally(() => {
            closeStatusMessage();
            item.reset();
          });
      });
    });
  }
}