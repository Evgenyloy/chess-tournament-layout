import NextBtn from '../../img/next.svg?react';
import PrevBtn from '../../img/previous.svg?react';
import image from '../../img/participants.png';
import ParticipantsSlider from './ParticipantsSlider';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { useSwiper } from 'swiper/react';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/pagination.scss';
import { participantsData } from './participantsData';
import './participants.scss';
import { useEffect, useRef } from 'react';
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
function Participants() {
  return (
    <section className="participants">
      <div className="container">
        <div className="participants__block">
          <div className="participants__title-inner">
            <h2 className="participants__title">участники турнира</h2>
          </div>
          <div className="participants__slide slide">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              //centeredSlides
              //autoplay
              spaceBetween={50}
              pagination={{ clickable: true, type: 'fraction' }}
              speed={300}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop
            >
              {participantsData.map(({ name, rank }) => (
                <SwiperSlide key={name}>
                  <div className="participants__item slide-item" data-index={1}>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Participants;
