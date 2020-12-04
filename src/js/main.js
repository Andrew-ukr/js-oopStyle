import MainSlider from './modules/sliders/slider-main';
import MiniSlider from './modules/sliders/slider-mini';
import PlayVideo from './modules/playVideo.js';
import Difference from './modules/difference';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const sliderMain = new MainSlider({
    wrapper: ".page", 
    btns: '.next',
  });
  sliderMain.launchSlider();

  const sliderShowUp = new MiniSlider({
    wrapper: ".showup__content-slider", 
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: "card-active",
  });
  sliderShowUp.launchSlider();

  const sliderModules = new MiniSlider({
    wrapper: ".modules__content-slider", 
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: "card-active",
    autoplay: '2000',
  });
  sliderModules.launchSlider();

  const sliderFeed = new MiniSlider({
    wrapper: ".feed__slider", 
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: "feed__item-active",
  });
  sliderFeed.launchSlider();

  const play = new PlayVideo('.play', '.overlay');
  play.launchPlayer();

  const differenceBlockOld = new Difference('.officerold', '.officer__card-item', '.card__click');
  differenceBlockOld.run();

  const differenceBlockNew = new Difference('.officernew', '.officer__card-item', '.card__click');
  differenceBlockNew.run();
});