import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import NextBtn from '../../img/next.svg?react';
import PrevBtn from '../../img/previous.svg?react';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/pagination.scss';
import './transformationSlider.scss';

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="transformation__slider-btn"
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
      className="transformation__slider-btn"
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
      slidesPerView={1}
      pagination={{ clickable: true }}
      speed={300}
      loop
    >
      <SwiperSlide className="transformation__slider-item">
        <p className="transformation__slider-text transformation__slider-text-1">
          Строительство железнодорожной магистрали Москва-Васюки
        </p>
        <p className="transformation__slider-text transformation__slider-text-2">
          Открытие фешенебельной гостиницы «Проходная пешка» и других
          небоскрёбов{' '}
        </p>
      </SwiperSlide>
      <SwiperSlide className="transformation__slider-item">
        <p className="transformation__slider-text transformation__slider-text-3">
          Поднятие сельского хозяйства в радиусе на тысячу километров:
          производство овощей, фруктов, икры, шоколадных конфет
        </p>
      </SwiperSlide>
      <SwiperSlide className="transformation__slider-item">
        <p className="transformation__slider-text transformation__slider-text-4">
          Строительство дворца для турнира
        </p>
        <p className="transformation__slider-text transformation__slider-text-5">
          Размещение гаражей для гостевого автотранспорта
        </p>
      </SwiperSlide>
      <SwiperSlide className="transformation__slider-item">
        <p className="transformation__slider-text transformation__slider-text-6">
          Постройка сверхмощной радиостанции для передачи всему миру
          сенсационных результатов
        </p>
      </SwiperSlide>
      <SwiperSlide className="transformation__slider-item">
        <p className="transformation__slider-text transformation__slider-text-7">
          Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых
          самолётов и дирижаблей во все концы света, включая Лос-Анжелос
          и Мельбурн
        </p>
      </SwiperSlide>
      <div className="transformation__slider-btn-wrapper">
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
};
