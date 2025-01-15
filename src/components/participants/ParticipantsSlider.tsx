import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import NextBtn from '../../img/next.svg?react';
import PrevBtn from '../../img/previous.svg?react';
import image from '../../img/participants.png';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/pagination.scss';
import { participantsData } from './participantsData';

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="participants__slider-btn"
      onClick={() => swiper.slideNext()}
    >
      <NextBtn />
    </button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="participants__slider-btn"
      onClick={() => swiper.slidePrev()}
    >
      <PrevBtn />
    </button>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true, type: 'fraction' }}
      speed={300}
      loop
    >
      {participantsData.map(({ name, rank }) => (
        <SwiperSlide>
          <div
            className="participants__item slide-item"
            data-index={1}
            key={name}
          >
            <div className="participants__img-cont">
              <img
                src={image}
                alt="participant"
                className="participants__img"
              />
            </div>
            <p className="participants__item-name ">{name}</p>
            <p className="participants__item-text">{rank}</p>
            <a href="#" className="participants__item-link">
              Подробнее
            </a>
          </div>
        </SwiperSlide>
      ))}

      <div className="participants__slider-btn-wrapper">
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
};
