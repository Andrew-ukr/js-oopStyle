export default class PlayVideo {
  constructor(playBtn, overlay) {
    this.playBtn = document.querySelectorAll(playBtn);
    this.overlayBlock = document.querySelector(overlay);
    this.closeBtn = this.overlayBlock.querySelector('.close');
  }

  createPlayer(ytId) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${ytId}`
    });
  }

  open() {
    this.playBtn.forEach(item => {
      item.addEventListener('click', () => {
        let ytId = item.getAttribute('data-url');
        this.overlayBlock.style.display = 'flex';
        
        if (!document.querySelector('iframe#frame')) {
          this.createPlayer(ytId);
        }
      });
    });
  }

  close() {
    this.closeBtn.addEventListener('click', () => {
      this.overlayBlock.style.display = 'none';
      this.player.stopVideo();
    });

    this.overlayBlock.addEventListener('click', () => {
      this.overlayBlock.style.display = 'none';
      this.player.stopVideo();
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.overlayBlock.style.display === 'flex') {
        this.player.stopVideo();
        this.overlayBlock.style.display = 'none';
      }
    });
  }

  launchPlayer() {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.open();
    this.close();
  }
}