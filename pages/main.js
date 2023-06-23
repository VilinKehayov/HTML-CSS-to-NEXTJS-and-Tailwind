import React from 'react';

const Main = () => {
  return (
    <main>
      <div className="splide splide--slide splide--ltr splide--draggable is-active" id="splide01" style={{ visibility: 'visible' }}>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev" type="button" aria-controls="splide01-track" disabled="" aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next" type="button" aria-controls="splide01-track" aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
        </div>
        <div className="splide__track" id="splide01-track">
          <ul className="splide__list" id="splide01-list" style={{ transform: 'translateX(0px)' }}>
            <li className="splide__slide is-active is-visible" id="splide01-slide01" aria-hidden="false" tabIndex="0" style={{ width: '845px', height: '338px' }}>
              <section className="sm-12 main">
                <div className="sm-6"></div>
                <figure className="sm-12 wide-banner wall" style={{ backgroundImage: 'url("/images/slide1.jpg")' }}>
                  <figcaption className="sm-12">
                    <div className="row">
                      <div className="sm-12 md-8">
                        <div>
                          <h1>
                            <span>Вашите аптеки <br />с нашите грижи</span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </section>
            </li>
            <li className="splide__slide" id="splide01-slide02" style={{ width: '845px', height: '338px' }}>
              <section className="sm-12 main">
                <div className="sm-6"></div>
                <figure className="sm-12 wide-banner wall" style={{ backgroundImage: 'url("/images/slide2.jpg")' }}>
                  <figcaption className="sm-12">
                    <div className="row">
                      <div className="sm-12 md-8">
                        <div>
                          <h1>
                            <span>Интересно</span>
                          </h1>
                        </div>
                        <a href="/interesno" className="button">Виж още</a>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </section>
            </li>
            <li className="splide__slide" id="splide01-slide03" style={{ width: '845px', height: '338px' }}>
              <section className="sm-12 main">
                <div className="sm-6"></div>
                <figure className="sm-12 wide-banner wall" style={{ backgroundImage: 'url("/images/promo-banner-centrum.jpg")' }}>
                  <figcaption className="sm-12">
                    <div className="row">
                      <div className="sm-12 md-8">
                        <div>
                          <h1>
                            <span>Промоции</span>
                          </h1>
                        </div>
                        <a href="/promo" className="button">Виж още</a>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </section>
            </li>
          </ul>
        </div>
        <ul className="splide__pagination">
          <li>
            <button className="splide__pagination__page is-active" type="button" aria-current="true" aria-controls="splide01-slide01" aria-label="Go to slide 1"></button>
          </li>
          <li>
            <button className="splide__pagination__page" type="button" aria-controls="splide01-slide02" aria-label="Go to slide 2"></button>
          </li>
          <li>
            <button className="splide__pagination__page" type="button" aria-controls="splide01-slide03" aria-label="Go to slide 3"></button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
