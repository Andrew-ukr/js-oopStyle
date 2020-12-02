import Slider from './modules/slider';
import PlayVideo from './modules/playVideo.js';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

const slider = new Slider('.page', '.next');
slider.launchSlider();

const play = new PlayVideo('.play', '.overlay');
play.launchPlayer();

});
