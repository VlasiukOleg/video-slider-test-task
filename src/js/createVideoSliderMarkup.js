const swiperWrapper = document.querySelector('.swiper-wrapper');

export const createSliderMarkup = movies => {
  const videoMarkup = movies
    .map(video => {
      return `<div class="swiper-slide">
  
    <img src="${video.pictures.base_link}" data-uri="${video.uri}" class="gallery-video" alt="${video.name}" />
 
</div>`;
    })
    .join('');

  swiperWrapper.insertAdjacentHTML('beforeend', videoMarkup);
};
