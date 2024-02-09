import { fetchVideoById } from './fetchvideo';
import { createSliderMarkup } from './createVideoSliderMarkup';

import Swiper from 'swiper/swiper-bundle.esm';
import 'swiper/swiper-bundle.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.swiper-wrapper a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

async function onRenderSlider() {
  const videos = await fetchVideoById();

  console.log(videos.data);

  createSliderMarkup(videos.data);
}

onRenderSlider();
