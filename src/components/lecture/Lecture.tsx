import tournamentImg from '../../img/tournament-img.png';
import './_lecture.scss';

function Lecture() {
  return (
    <div className="lecture">
      <div className="container">
        <div className="lecture__inner">
          <h2 className="lecture__title" id="tournament">
            Чтобы поддержать <br /> Международный васюкинский
            <br /> турнир
            <span className="lecture__sp-break">
              &nbsp;посетите лекцию на&nbsp;тему: <br />
              <span>«Плодотворная дебютная идея»</span>
            </span>
          </h2>
          <div className="lecture__img-cont">
            <img
              src={tournamentImg}
              alt="tournament-img"
              className="lecture__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lecture;
