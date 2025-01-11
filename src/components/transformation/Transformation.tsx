import airplane from '../../img/airplane.png';
import { data } from './transformationData';
import Slider from '../slider/Slider';
import './_transformation.scss';

function Transformation() {
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
            <ul className="transformation__items-list ">
              <Slider slides={data} />
              {/*  {data.map((item) => {
                return (
                  <div key={item.text} className="transformation__item">
                    {item.text}
                  </div>
                );
              })} */}
            </ul>
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
