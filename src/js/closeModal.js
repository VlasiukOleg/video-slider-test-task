import Player from '@vimeo/player';

const backdrop = document.querySelector('.js-backdrop');

export const onCloseModal = () => {
  backdrop.classList.remove('is-open');
  const iframe = document.querySelector(
    '.modal-swiper-wrapper .swiper-slide-active'
  );
  if (iframe) {
    const player = new Player(iframe);
    player.pause();
  }
};
