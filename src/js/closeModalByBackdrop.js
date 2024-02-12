import Player from '@vimeo/player';

const backdrop = document.querySelector('.js-backdrop');

export const onCloseModalByBackdrop = e => {
  if (e.currentTarget === e.target) {
    backdrop.classList.remove('is-open');
    const iframe = document.querySelector(
      '.modal-swiper-wrapper .swiper-slide-active'
    );
    if (iframe) {
      const player = new Player(iframe);
      player.pause();
    }
  }
};
