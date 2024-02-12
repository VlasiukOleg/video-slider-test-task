import { fetchVideo } from './fetchvideo';
import { createSliderMarkup } from './createVideoSliderMarkup';
import { createModalSliderMarkup } from './createModalSliderMarkup';
import { onCloseModal } from './closeModal';

import Swiper from 'swiper/swiper-bundle.esm';
import 'swiper/swiper-bundle.min.css';

import Player from '@vimeo/player';

const modalSwiper = document.querySelector('.modal-swiper-wrapper');
const backdrop = document.querySelector('.js-backdrop');
const btnCloseModal = document.querySelector('.js-close-modal');

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  on: {
    slideChangeTransitionEnd: function () {
      const iframe = document.querySelector(
        '.modal-swiper-wrapper .swiper-slide-active'
      );
      if (iframe) {
        const player = new Player(iframe);
        player.play();
      }
    },
  },
});

async function onRenderSlider() {
  const videos = await fetchVideo();

  createSliderMarkup(videos.data);

  const galleryVideo = document.querySelectorAll('.gallery-video');

  galleryVideo.forEach((image, index) => {
    image.addEventListener('click', () => {
      modalSwiper.innerHTML = '';

      galleryVideo.forEach((image, i) => {
        const dataValue = image.dataset.uri.split('/');
        const videoId = dataValue[2];
        const isAutoplay = index === i ? 'autoplay=1' : '';

        createModalSliderMarkup(videoId, isAutoplay);
      });

      swiper2.slideTo(index);

      backdrop.classList.add('is-open');
    });
  });
}

btnCloseModal.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
});

onRenderSlider();
