import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function InteresnoPage() {
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

        <title>Интересно | Социални Аптеки Казанлък</title>
        <meta property="og:title" content="Интересно" />
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
          content="https://www.apteki-kazanlak.com/interesno"
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

      <main>
        <div className="content-container">
          <div className="content-wrapper">
            <section className="content">
              <div className="container">
                <div className="section-header">
                  <h1 className="font-36">Интересно</h1>
                </div>
                <div className="articles-list">
                  <ul>
                    <li>
                      <article>
                        <div
                          className="image-wrapper wall"
                          style={{
                            backgroundImage:
                              "url('/storage/articles/EsthedermDermoЕxpert_1950_570.jpg')",
                          }}
                        >
                          <a href="/interesno/dermoanaliz-na-lice"></a>
                        </div>
                        <div className="summary">
                          <p className="font-24 title">
                            <a href="https://www.apteki-kazanlak.com/interesno/dermoanaliz-na-lice">
                              Дермоанализ на лице
                            </a>
                          </p>
                          <p>
                            Професионална диагностика на кожата с ESTHEDERM
                            ДЕРМОЕКСПЕРТ
                          </p>
                        </div>
                      </article>
                    </li>
                    <li>
                      <article>
                        <div
                          className="image-wrapper wall"
                          style={{
                            backgroundImage:
                              "url('/storage/articles/about-us.jpg')",
                          }}
                        >
                          <a href="https://www.apteki-kazanlak.com/interesno/antibiotici"></a>
                        </div>
                        <div className="summary">
                          <p className="font-24 title">
                            <a href="/interesno/antibiotici">Антибиотици</a>
                          </p>
                          <p>
                            Всеки човек поне веднъж в живота си е приемал
                            антибиотик, назначен от лекар ...
                          </p>
                        </div>
                      </article>
                    </li>
                    <li>
                      <article>
                        <div
                          className="image-wrapper wall"
                          style={{
                            backgroundImage:
                              "url('/storage/articles/vitamins.jpg')",
                          }}
                        >
                          <a href="/interesno/vitamini"></a>
                        </div>
                        <div className="summary">
                          <p className="font-24 title">
                            <a href="https://www.apteki-kazanlak.com/interesno/vitamini">Витамини</a>
                          </p>
                          <p>
                            Всеки ден с храната нашият организъм приема известно
                            количество витамини и минерали.
                          </p>
                        </div>
                      </article>
                    </li>
                    <li>
                      <article>
                        <div
                          className="image-wrapper wall"
                          style={{
                            backgroundImage:
                              "url('/storage/articles/vaccine.jpg')",
                          }}
                        >
                          <a href="https://www.apteki-kazanlak.com/interesno/vaksinite"></a>
                        </div>
                        <div className="summary">
                          <p className="font-24 title">
                            <a href="/interesno/vaksinite">Ваксините</a>
                          </p>
                          <p>
                            През 1796 г. английският лекар и учен Едуард Дженър
                            забелязва, че млекарките, преболедували ...
                          </p>
                        </div>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default InteresnoPage;
