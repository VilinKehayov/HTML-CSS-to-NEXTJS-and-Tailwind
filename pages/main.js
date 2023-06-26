import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Main = () => {
  const splideRef = useRef(null);

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.go("-1");
    }
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };

  return (
    <main>
      <div className="splide-container">
        <Splide
          options={{
            type: "slide",
            rewind: true,
            arrows: true,
            pagination: false,
          }}
          ref={splideRef}
        >
          <SplideSlide>
            <section className="sm-12 main">
              <div className="sm-6">
                <h2>Slide 1 Content</h2>
                <p>This is the content of Slide 1.</p>
              </div>
              <figure
                className="sm-12 wide-banner wall"
                style={{ backgroundImage: 'url("/images/slide1.jpg")' }}
              >
                <figcaption className="sm-12">
                  <div className="row">
                    <div className="sm-12 md-8">
                      <div>
                        <h1>
                          <span>
                            Вашите аптеки <br />с нашите грижи
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </section>
          </SplideSlide>
          <SplideSlide>
            <section className="sm-12 main">
              <div className="sm-6">
                <h2>Slide 2 Content</h2>
                <p>This is the content of Slide 2.</p>
              </div>
              <figure
                className="sm-12 wide-banner wall"
                style={{ backgroundImage: 'url("/images/slide2.jpg")' }}
              >
                <figcaption className="sm-12">
                  <div className="row">
                    <div className="sm-12 md-8">
                      <div>
                        <h1>
                          <span>Интересно</span>
                        </h1>
                      </div>
                      <a href="/interesno" className="button">
                        Виж още
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </section>
          </SplideSlide>
          <SplideSlide>
            <section className="sm-12 main">
              <div className="sm-6">
                <h2>Slide 3 Content</h2>
                <p>This is the content of Slide 3.</p>
              </div>
              <figure
                className="sm-12 wide-banner wall"
                style={{ backgroundImage: 'url("/images/promo-banner-centrum.jpg")' }}
              >
                <figcaption className="sm-12">
                  <div className="row">
                    <div className="sm-12 md-8">
                      <div>
                        <h1>
                          <span>Промоции</span>
                        </h1>
                      </div>
                      <a href="/promo" className="button">
                        Виж още
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </section>
          </SplideSlide>
        </Splide>
      </div>

      <div className="sm-12 principles-wrap">
        <div className="row">
          <div className="sm-12 md-6 lg-6 lg-offset-3 md-offset-3 col">
            <div className="sm-12">
              <ul className="no-bullet font-32 principles">
                <li>Качествено обслужване</li>
                <li>Професионализъм</li>
                <li>Достъпни цени</li>
                <li>Силно мотивиран екип</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
