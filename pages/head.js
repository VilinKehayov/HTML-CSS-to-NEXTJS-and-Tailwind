import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* CSRF Token */}
      <meta name="csrf-token" content="DIKJYKZAsygQGXQQh1EJOdvpxDR12Ybq39SyDwe8" />

      <title>Социални Аптеки Казанлък</title>
      <meta name="keywords" content="Аптеки Казанлък, Аптека Казанлък, Социални Аптеки,Социална Аптека, Социални Аптеки Казанлък,Социална Аптека Казанлък,Фармавист, Хигия, Арника, Фарма 1 Център, Фарма 1 Павел Баня,Фарма 1 Казанлък, ОТС продукти, Лекарско предписание, Лекарства, отпускани със зелени и жълти рецепти, Лекарства, реимбурсирани от НЗОК ,Хранителни добавки ,Козметика ,Санитарни принадлежности ,Ортопедрични принадлежности ,Апарати за измерване на кръвно налягане ,Глюкомери" />

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
      <meta property="og:url" content="https://www.apteki-kazanlak.com/" />
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
      <link href="https://www.apteki-kazanlak.com/css/app.css" rel="stylesheet" />

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
        href="/images/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/images/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/favicon-96x96.png"
      />

      <meta name="msapplication-TileColor" content="#00573e" />
      <meta
        name="msapplication-TileImage"
        content="/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#00573e" />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D8SBZWGTGZ"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D8SBZWGTGZ');
        `}
      </script>
    </Helmet>
  );
};

export default Head;
