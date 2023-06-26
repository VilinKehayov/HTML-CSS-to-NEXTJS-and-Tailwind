import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


const PromoPage = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CSRF Token */}
        <meta
          name="csrf-token"
          content="DIKJYKZAsygQGXQQh1EJOdvpxDR12Ybq39SyDwe8"
        />

        <title>Промоции | Социални Аптеки Казанлък</title>
        <meta property="og:title" content="Промоции" />
        <meta
          name="keywords"
          content="Аптеки Казанлък, Аптека Казанлък, Социални Аптеки,Социална Аптека, Социални Аптеки Казанлък,Социална Аптека Казанлък,Фармавист, Хигия, Арника, Фарма 1 Център, Фарма 1 Павел Баня,Фарма 1 Казанлък, ОТС продукти, Лекарско предписание, Лекарства, отпускани със зелени и жълти рецепти, Лекарства, реимбурсирани от НЗОК ,Хранителни добавки ,Козметика ,Санитарни принадлежности ,Ортопедрични принадлежности ,Апарати за измерване на кръвно налягане ,Глюкомери"
        />

        <meta
          name="description"
          content="Аптеки Казанлък, Аптека Казанлък, Социални Аптеки,Социална Аптека, Социални Аптеки Казанлък,Социална Аптека Казанлък, Фармавист, Хигия, Арника, Фарма 1 Център, Фарма 1 Павел Баня,Фарма 1 Казанлък "
        />
        <meta
          property="og:description"
          content="Аптеки Казанлък, Аптека Казанлък, Социални Аптеки,Социална Аптека, Социални Аптеки Казанлък,Социална Аптека Казанлък, Фармавист, Хигия, Арника, Фарма 1 Център, Фарма 1 Павел Баня,Фарма 1 Казанлък "
        />

        <meta property="og:site_name" content="apteki-kazanlak.com" />
        <meta property="og:locale" content="bg_BG" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.apteki-kazanlak.com/promo"
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
          href="/images/apple-icon-57x57.png"
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
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D8SBZWGTGZ');
        `}
        </script>
      </Head>
      <Header />
      <main className="sm-12">
        <div className="row">
          <div className="col sm-12"></div>
        </div>
        <section class="sm-12">
          <div class="row">
            <div class="sm-12">
              <ul class="products-list no-bullet">
                <li class="sm-12 md-3 col float-left">
                  <div id="bdr-top" class="bdr-hover"></div>
                  <div id="bdr-btm" class="bdr-hover"></div>
                  <div id="bdr-left" class="bdr-hover"></div>
                  <div id="bdr-right" class="bdr-hover"></div>
                  <div class="sm-12 text-center">
                    <div class="image-wrapper wall sm-12 banner wall">
                      <span class="discount font-14">-7%</span>
                    </div>
                    <div class="summary">
                      <h2 class="font-24 title">
                        Линекс комплекс капсули х 14
                      </h2>
                      <p class="font-14">
                        Пробиотик, обогатен с витамини В комплекс и цинк
                      </p>
                      <p>
                        <span class="new-price">17.9 лв.</span>
                        <span class="old-price">19.26 лв.</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="sm-12 md-3 col float-left">
                  <div id="bdr-top" class="bdr-hover"></div>
                  <div id="bdr-btm" class="bdr-hover"></div>
                  <div id="bdr-left" class="bdr-hover"></div>
                  <div id="bdr-right" class="bdr-hover"></div>
                  <div class="sm-12 text-center">
                    <div class="image-wrapper wall sm-12 banner wall">
                      <span class="discount font-14">-12%</span>
                    </div>
                    <div class="summary">
                      <h2 class="font-24 title">Имодиум капсули 2 мг х 6</h2>
                      <p class="font-14">Капсули при диария</p>
                      <p>
                        <span class="new-price">5.19 лв.</span>
                        <span class="old-price">5.92 лв.</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="sm-12 md-3 col float-left">
                  <div id="bdr-top" class="bdr-hover"></div>
                  <div id="bdr-btm" class="bdr-hover"></div>
                  <div id="bdr-left" class="bdr-hover"></div>
                  <div id="bdr-right" class="bdr-hover"></div>
                  <div class="sm-12 text-center">
                    <div class="image-wrapper wall sm-12 banner wall">
                      <span class="discount font-14">-16%</span>
                    </div>
                    <div class="summary">
                      <h2 class="font-24 title">Магне Б6 Форте табл.</h2>
                      <p class="font-14">
                        Подпомага намаляването на умората и изтощението
                      </p>
                      <p>
                        <span class="new-price">11.7 лв.</span>
                        <span class="old-price">13.94 лв.</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="sm-12 md-3 col float-left">
                  <div id="bdr-top" class="bdr-hover"></div>
                  <div id="bdr-btm" class="bdr-hover"></div>
                  <div id="bdr-left" class="bdr-hover"></div>
                  <div id="bdr-right" class="bdr-hover"></div>
                  <div class="sm-12 text-center">
                    <div class="image-wrapper wall sm-12 banner wall">
                      <span class="discount font-14">-8%</span>
                    </div>
                    <div class="summary">
                      <h2 class="font-24 title">
                        Имодиум инстант диспергиращи таблетки х 6
                      </h2>
                      <p class="font-14">Диспергиращи таблетки при диария</p>
                      <p>
                        <span class="new-price">6.49 лв.</span>
                        <span class="old-price">7.03 лв.</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="sm-12 md-3 col float-left">
                  <div id="bdr-top" class="bdr-hover"></div>
                  <div id="bdr-btm" class="bdr-hover"></div>
                  <div id="bdr-left" class="bdr-hover"></div>
                  <div id="bdr-right" class="bdr-hover"></div>
                  <div class="sm-12 text-center">
                    <div class="image-wrapper wall sm-12 banner wall">
                      <span class="discount font-14">-11%</span>
                    </div>
                    <div class="summary">
                      <h2 class="font-24 title">Псило балсам гел</h2>
                      <p class="font-14">
                        Псило балсам при изгаряния, сърбеж, ухапвания от
                        насекоми
                      </p>
                      <p>
                        <span class="new-price">8.1 лв.</span>
                        <span class="old-price">9.1 лв.</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="sm-12 md-3 col float-left">
                  <div id="bdr-top" class="bdr-hover"></div>
                  <div id="bdr-btm" class="bdr-hover"></div>
                  <div id="bdr-left" class="bdr-hover"></div>
                  <div id="bdr-right" class="bdr-hover"></div>
                  <div class="sm-12 text-center">
                    <div class="image-wrapper wall sm-12 banner wall">
                      <span class="discount font-14">-17%</span>
                    </div>
                    <div class="summary">
                      <h2 class="font-24 title">
                        Фервекс за възрастни прахчета х 8
                      </h2>
                      <p class="font-14">
                        Прахчета за възрастни при простуда и грип
                      </p>
                      <p>
                        <span class="new-price">7.9 лв.</span>
                        <span class="old-price">9.48 лв.</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PromoPage;
