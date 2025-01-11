import { useState } from 'react';
import NextBtn from '../../img/next.svg?react';
import PrevBtn from '../../img/previous.svg?react';
import './_slider.scss';

type SliderProps = {
  slides: {
    text: string;
    alt: string;
    order: number;
  }[];
};

function Slider({ slides }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  function showNextSlide() {
    setSlideIndex((index) => {
      if (index === slides.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevSlide() {
    setSlideIndex((index) => {
      if (index === 0) return slides.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      className="slider"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <ul className="slider__list">
        {slides.map(({ order, text }) => {
          return (
            <li
              className="slider__item"
              key={order}
              style={{ translate: `${-100 * slideIndex}%` }}
            >
              {text}
            </li>
          );
        })}
      </ul>
      <button className="slider__btn" onClick={showNextSlide}>
        <PrevBtn />
      </button>
      <button className="slider__btn" onClick={showPrevSlide}>
        <NextBtn />
      </button>
    </section>
  );
}

export default Slider;
