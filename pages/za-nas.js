import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
;

const ZaNasPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CSRF Token */}
        <meta
          name="csrf-token"
          content="DIKJYKZAsygQGXQQh1EJOdvpxDR12Ybq39SyDwe8"
        />

        <title>За Нас | Социални Аптеки Казанлък</title>
        <meta property="og:title" content="За Нас" />
        <meta
          name="keywords"
          content="Аптеки Казанлък, Аптека Казанлък, Социални Аптеки,Социална Аптека, Социални Аптеки Казанлък,Социална Аптека Казанлък,Фармавист, Хигия, Арника, Фарма 1 Център, Фарма 1 Павел Баня,Фарма 1 Казанлък, ОТС продукти, Лекарско предписание, Лекарства, отпускани със зелени и жълти рецепти, Лекарства, реимбурсирани от НЗОК ,Хранителни добавки ,Козметика ,Санитарни принадлежности ,Ортопедрични принадлежности ,Апарати за измерване на кръвно налягане ,Глюкомери"
        />

        <meta property="og:description" content="За Нас" />
        <meta name="description" content="За Нас, Социални Аптеки Казанлък" />

        <meta property="og:site_name" content="apteki-kazanlak.com" />
        <meta property="og:locale" content="bg_BG" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.apteki-kazanlak.com/za-nas"
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

      <main>
        <section className="wide-banner">
          <div className="container mx-auto">
            <div className="wide-banner-inner">
              <h1 className="text-4xl font-semibold mb-4">За Нас</h1>
              <img src="/images/contacts-banner.jpg" alt="Контакти" />
            </div>
          </div>
        </section>

        <section className="about-us py-12">
          <div className="container mx-auto">
            <div className="about-us-content">
              <h2 className="text-3xl font-semibold mb-4">За Нас</h2>
              <p className="mb-4">
                Социалните аптеки в Казанлък са обект на АД "Фарма 1 Център" и
                предлагат разнообразна гама от продукти и услуги в областта на
                здравеопазването и красотата.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Лекарства на хуманна цена</li>
                <li>Лекарства, отпускани по лекарско предписание</li>
                <li>Широка номенклатура лекарства по лекарско предписание</li>
                <li>Лекарства, отпускани със зелени и жълти рецепти</li>
                <li>Лекарства, реимбурсирани от НЗОК</li>
                <li>Хранителни добавки</li>
                <li>Козметика</li>
                <li>Санитарни принадлежности</li>
                <li>Ортопедрични принадлежности</li>
                <li>Апарати за измерване на кръвно налягане</li>
                <li>Глюкомери</li>
              </ul>
              <p>
                Нашите аптеки в Казанлък се гордеят с висококвалифициран и
                отзивчив екип, който е готов да ви помогне и консултира във
                връзка с вашите нужди и здравословни въпроси.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ZaNasPage;
