import MainSlider from './modules/sliders/slider-main';
import PlayVideo from './modules/playVideo.js';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const sliderMain = new MainSlider({
    wrapper: ".page", 
    btns: '.next',
  });
  sliderMain.launchSlider();

  const play = new PlayVideo('.play', '.overlay');
  play.launchPlayer();
});