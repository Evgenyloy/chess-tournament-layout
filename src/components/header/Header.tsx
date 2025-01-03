import logo from '../../img/logo.png';
import mobileImage from '../../img/mobile-screen.png';
import deskImage from '../../img/desktop-screen.jpg';
import './_header.scss';
import './_header-media.scss';

function Header() {
  return (
    <header className="header">
      <img
        src={deskImage}
        alt="header__img"
        className="header__img"
        srcSet={`${mobileImage} 375w, ${deskImage} 1920w`}
        sizes="(max-width: 375px) 375px, (max-width: 1920px) 1920px"
      />
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <img src={logo} alt="" className="logo__img" />
            <span className="logo__text">
              клуб <br /> четырех коней
            </span>
          </div>
          <div className="header__content">
            <h1 className="header__title">
              Превратите <br /> уездный город <br />{' '}
              <span className="header__title-s1">в&nbsp;столицу</span> <br />
              <span className="header__title-s2">земного шара</span>
            </h1>
            <p className="header__text">
              Оплатите взнос на&nbsp;телеграммы для&nbsp;организации
              Международного васюкинского турнира по&nbsp;шахматам
            </p>
            <div className="header__btn-wrapper">
              <a
                className="header__btn-link header__btn-link--left"
                href="#tournament"
              >
                Поддержать <br /> шахматную мысль
              </a>
              <a
                className="header__btn-link header__btn-link--right"
                href="#transformation"
              >
                Подробнее <br /> о&nbsp;турнире
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
