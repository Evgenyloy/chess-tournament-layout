import airplane from '../../img/airplane.png';
import { data } from './transformationData';
import { useEffect, useState } from 'react';
import Swiper from './transformationSlider';
import './transformation.scss';

type TransformationItemProps = {
  data: {
    text: string;
    order: number;
    alt: string;
  }[];
};

function TransformationItem({ data }: TransformationItemProps) {
  return (
    <div className="transformation__items-list ">
      {data.map((item, index) => (
        <div key={item.text} className="transformation__item">
          <p className={`transformation__item-text-${index + 1}`}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function Transformation() {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleResize = (e: Event) => {
      if (e.target)
        if ((e.target as Window).innerWidth < 1000) {
          setShowSlider(true);
        } else {
          setShowSlider(false);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="transformation">
      <div className="container">
        <div className="transformation__block">
          <div className="transformation__title-wrapper">
            <h2 className="transformation__title" id="transformation">
              Этапы преображения <br /> Васюков
            </h2>
            <p className="transformation__title-text">
              Будущие источники <br /> обогащения васюкинцев
            </p>
          </div>
          <div className="transformation__items-wrapper ">
            {showSlider ? <Swiper /> : <TransformationItem data={data} />}

            <img
              src={airplane}
              alt="airplane"
              className="transformation__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transformation;
