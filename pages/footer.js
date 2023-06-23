import React from "react";

const Footer = () => {
  return (
    <footer className="sm-12">
      <div className="sm-12 footer-top">
        <div className="row">
          <div className="sm-12">
            <div className="sm-12 md-3 float-left col main-col">
              <h3 className="hedding font-24">Социални Аптеки</h3>
              <ul className="no-bullet vertical menu underline-links">
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
                            <a href="/pharmacies/farma-1-kazanlk">
                              Фарма 1 Казанлък
                            </a>
                          </li>
                          <li>
                            <a href="/pharmacies/arnika">Арника</a>
                          </li>
                          <li>
                            <a href="/pharmacies/farmavist">Фармавист</a>
                          </li>
                          <li>
                            <a href="/pharmacies/farma-1-pavel-banya">
                              Фарма 1 Павел Баня
                            </a>
                          </li>
                          <li>
                            <a href="/pharmacies/farma-1-centr">
                              Фарма 1 Център
                            </a>
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
            </div>
            <div className="sm-12 md-3 float-left col main-col">
              <h3 className="hedding font-24">Нашите Аптеки</h3>
              <ul className="no-bullet vertical menu underline-links">
                <li>
                  <a href="/pharmacies/xigiya" className="upper">
                    Хигия
                  </a>
                </li>
                <li>
                  <a href="/pharmacies/farma-1-kazanlk" className="upper">
                    Фарма 1 Казанлък
                  </a>
                </li>
                <li>
                  <a href="/pharmacies/arnika" className="upper">
                    Арника
                  </a>
                </li>
                <li>
                  <a href="/pharmacies/farmavist" className="upper">
                    Фармавист
                  </a>
                </li>
                <li>
                  <a href="/pharmacies/farma-1-pavel-banya" className="upper">
                    Фарма 1 Павел Баня
                  </a>
                </li>
                <li>
                  <a href="/pharmacies/farma-1-centr" className="upper">
                    Фарма 1 Център
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm-12 md-3 float-left col main-col">
              <h3 className="hedding font-24">Номенклатура</h3>
              <ul className="no-bullet vertical menu underline-links">
                <li>ОТС продукти</li>
                <li>Лекарско предписание</li>
                <li>Лекарства, отпускани със зелени и жълти рецепти</li>
                <li>Лекарства, реимбурсирани от НЗОК</li>
                <li>Хранителни добавки</li>
                <li>Козметика</li>
                <li>Санитарни принадлежности</li>
                <li>Ортопедрични принадлежности</li>
                <li>Апарати за измерване на кръвно налягане</li>
                <li>Глюкомери</li>
              </ul>
            </div>
            <div className="sm-12 md-3 float-left col main-col">
              <h3 className="hedding font-24">Контакти</h3>
              <ol className="no-bullet vertical menu social-list">
                <li>
                  <a
                    href="https://www.facebook.com/%D0%A1%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D0%BD%D0%B8-%D0%90%D0%BF%D1%82%D0%B5%D0%BA%D0%B8-%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D0%BB%D1%8A%D0%BA-101717668415014"
                    className="icon-facebook"
                    target="_blank"
                  ></a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="sm-12 copyright">
        <div className="row">
          <div className="sm-12 col">
            <span className="font-14">
              Developed by{" "}
              <a
                href="https://elevatecompany.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elevate Company Ltd.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
