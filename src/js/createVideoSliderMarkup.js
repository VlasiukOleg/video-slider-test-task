const swiperWrapper = document.querySelector('.swiper-wrapper');

export const createSliderMarkup = videos => {
  const videoMarkup = videos
    .map(video => {
      return `<div class="swiper-slide">
  <a href="${video.pictures.base_link}">
    <img src="${video.pictures.base_link}"  alt="" title="" />
  </a>
</div>`;
    })
    .join('');

  console.log(videoMarkup);

  swiperWrapper.insertAdjacentHTML('beforeend', videoMarkup);
};
