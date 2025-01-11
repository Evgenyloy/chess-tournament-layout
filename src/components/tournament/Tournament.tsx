import tournamentImage from '../../img/tournament-price.png';
import './_tournament.scss';

function Tournament() {
  return (
    <section className="tournament">
      <div className="container">
        <div className="tournament__inner">
          <div className="tournament__img-cont">
            <img
              src={tournamentImage}
              alt="image"
              className="tournament__img"
            />
          </div>
          <div className="tournament__wrapper">
            <h2 className="tournament__title">
              и Сеанс{' '}
              <span>
                {' '}
                одновременной игры в <br />
                шахматы на&nbsp;160&nbsp;досках{' '}
              </span>
              <br />
              гроссмейстера О.&nbsp;Бендера
            </h2>
            <div className="tournament__group">
              <div className="tournament__rows">
                <div className="tournament__column-item tournament__column-item--left">
                  Место проведения:
                </div>
                <div className="tournament__column-item tournament__column-item--right">
                  Клуб «Картонажник»{' '}
                </div>
              </div>
              <div className="tournament__rows">
                <div className="tournament__column-item tournament__column-item--left">
                  Дата и&nbsp;время мероприятия:
                </div>
                <div className="tournament__column-item tournament__column-item--right">
                  22&nbsp;июня 1927&nbsp;г. в&nbsp;18:00
                </div>
              </div>
              <div className="tournament__rows">
                <div className="tournament__column-item tournament__column-item--left">
                  Стоимость входных билетов:
                </div>
                <div className="tournament__column-item tournament__column-item--right">
                  20&nbsp;коп.
                </div>
              </div>
              <div className="tournament__rows">
                <div className="tournament__column-item tournament__column-item--left">
                  Плата за&nbsp;игру:{' '}
                </div>
                <div className="tournament__column-item tournament__column-item--right">
                  50&nbsp;коп.
                </div>
              </div>
              <div className="tournament__rows">
                <div className="tournament__column-item tournament__column-item--left">
                  Взнос на&nbsp;телеграммы:
                </div>
                <div className="tournament__column-item tournament__column-item--right">
                  <span>100руб.</span> 21 руб. 16&nbsp;коп.
                </div>
              </div>
            </div>
            <p className="tournament__text">
              По&nbsp;всем вопросам обращаться в&nbsp;администрацию
              к&nbsp;К.&nbsp;Михельсону
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tournament;
