import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function IstoriiPageWithHead() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CSRF Token */}
        <meta
          name="csrf-token"
          content="DIKJYKZAsygQGXQQh1EJOdvpxDR12Ybq39SyDwe8"
        />

        <title>История | Социални Аптеки Казанлък</title>
        <meta property="og:title" content="История" />
        <meta
          name="keywords"
          content="Аптеки Казанлък, Аптека Казанлък, Социални Аптеки, Социална Аптека, Социални Аптеки Казанлък, Социална Аптека Казанлък, Фармавист, Хигия, Арника, Фарма 1 Център, Фарма 1 Павел Баня, Фарма 1 Казанлък, ОТС продукти, Лекарско предписание, Лекарства, отпускани със зелени и жълти рецепти, Лекарства, реимбурсирани от НЗОК, Хранителни добавки, Козметика, Санитарни принадлежности, Ортопедрични принадлежности, Апарати за измерване на кръвно налягане, Глюкомери"
        />

        <meta property="og:description" content="История" />
        <meta name="description" content="История, Социални Аптеки Казанлък" />

        <meta property="og:site_name" content="apteki-kazanlak.com" />
        <meta property="og:locale" content="bg_BG" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.apteki-kazanlak.com/history"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="http://www.apteki-kazanlak.com/images/contacts-banner.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="http://www.apteki-kazanlak.com/images/contacts-banner.jpg"
        />

        {/* Styles */}
        <link
          href="https://www.apteki-kazanlak.com/css/app.css"
          rel="stylesheet"
        />

        <link
          rel="icon"
          type="image/x-icon"
          href="/images/favicons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicons/favicon-96x96.png"
        />

        <meta name="msapplication-TileColor" content="#00573e" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#00573e" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D8SBZWGTGZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D8SBZWGTGZ');
          `,
          }}
        />
      </Head>

      <Header />

      <main className="sm-12">
        <div className="row">
          <div className="col sm-12"></div>
        </div>
        <div className="timeline-wrap sm-12">
          <div className="row">
            <div className="timeline-spine"></div>
            <div
              className="sm-12 tm-box"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            >
              <div className="sm-12 md-6 col">
                <div className="sm-8 col">
                  <p className="font-32">Хигия</p>
                  <p>
                    Отваря врати първата частна аптека в Казанлък. Намира се на
                    Централния Кооперативен пазар.
                  </p>
                </div>
                <div className="sm-4 col">
                  <div className="benzene">
                    <span className="font-32">1991</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sm-12 tm-box"
              data-aos="fade-down-left"
              data-aos-duration="2000"
            >
              <div className="sm-12 md-6 col">
                <div className="sm-8 col">
                  <p className="font-32">Фарма 1 Казанлък</p>
                  <p>
                    Открива се Социална аптека Фарма 1 Казанлък на ул. „Генерал
                    Скобелев“.
                  </p>
                </div>
                <div className="sm-4 col">
                  <div className="benzene">
                    <span className="font-32">1997</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sm-12 tm-box"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            >
              <div className="sm-12 md-6 col">
                <div className="sm-8 col">
                  <p className="font-32">Арника</p>
                  <p>Социална аптека Арника е открита през 1998 г.</p>
                </div>
                <div className="sm-4 col">
                  <div className="benzene">
                    <span className="font-32">1998</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sm-12 tm-box"
              data-aos="fade-down-left"
              data-aos-duration="2000"
            >
              <div className="sm-12 md-6 col">
                <div className="sm-8 col">
                  <p className="font-32">Фармавист</p>
                  <p>
                    Открива се Социална Аптека Фармавист в един от големите
                    жилищни комплекси в Казанлък - ЖК „Роза“.
                  </p>
                </div>
                <div className="sm-4 col">
                  <div className="benzene">
                    <span className="font-32">2013</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sm-12 tm-box"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            >
              <div className="sm-12 md-6 col">
                <div className="sm-8 col">
                  <p className="font-32">Фарма 1 Павел Баня</p>
                  <p>
                    Открива се Социална аптека Фарма 1 Павел Баня на ул. „Стефан
                    Караджа“.
                  </p>
                </div>
                <div className="sm-4 col">
                  <div className="benzene">
                    <span className="font-32">2015</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sm-12 tm-box"
              data-aos="fade-down-left"
              data-aos-duration="2000"
            >
              <div className="sm-12 md-6 col">
                <div className="sm-8 col">
                  <p className="font-32">Фарма 1 Център</p>
                  <p>
                    Открива се Социална аптека Фарма 1 Център в центъра на
                    града.
                  </p>
                </div>
                <div className="sm-4 col">
                  <div className="benzene">
                    <span className="font-32">2016</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default IstoriiPageWithHead;
