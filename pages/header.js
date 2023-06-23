import React from 'react';

const Header = () => {
  return (
    <header className="sm-12">
      <div className="h-bundle sm-12">
        <div className="row">
          <div className="sm-12 col">
            <a href="https://www.apteki-kazanlak.com" className="logo">
              <div className="logo-wrap">
                <img src="/images/logo.png" alt="Logo" />
              </div>
              <span>
                <span className="font-32">Социални Аптеки</span> <br />
                <span className="font-24">Казанлък</span>
              </span>
            </a>
            <nav className="float-right">
              <ul className="no-bullet">
                <li>
                  <a href="/za-nas">За нас</a>
                </li>
                <li>
                  <a href="/history">История</a>
                </li>
                <li id="dropdown">
                  <a href="/pharmacies">Аптеки</a>
                  <div className="dropdown-menu sm-12" id="dropdownMenu">
                    <div className="dropdown sm-12">
                      <div className="sm-12 md-4 float-left">
                        <div className="sm-12 fixed-img"></div>
                      </div>
                      <div className="sm-12 md-4 float-left menu-wrap">
                        <ul className="no-bullet">
                          <li>
                            <a href="/pharmacies/xigiya">Хигия</a>
                          </li>
                          <li>
                            <a href="/pharmacies/farma-1-kazanlk">Фарма 1 Казанлък</a>
                          </li>
                          <li>
                            <a href="/pharmacies/arnika">Арника</a>
                          </li>
                          <li>
                            <a href="/pharmacies/farmavist">Фармавист</a>
                          </li>
                          <li>
                            <a href="/pharmacies/farma-1-pavel-banya">Фарма 1 Павел Баня</a>
                          </li>
                          <li>
                            <a href="/pharmacies/farma-1-centr">Фарма 1 Център</a>
                          </li>
                        </ul>
                      </div>
                      <div className="sm-12 md-4"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/interesno">Интересно</a>
                </li>
                <li>
                  <a href="/promo">Промоции</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hamburger-wrap hide-for-large">
            <button className="hamburger hamburger--slider no-active" type="button" id="menuButton">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
