import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const PharmaciesPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          content="https://www.apteki-kazanlak.com/pharmacies"
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
        <title>Социални Аптеки Казанлък</title>
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
      </Head>

      <Header />

      <main className="sm:col-span-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
          <section className="sm:col-span-12 contacts-banner">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="sm:col-span-12">
                <h1 className="font-46">Нашите Аптеки</h1>
              </div>
              <img src="/images/contacts-banner.jpg" alt="Contacts Banner" />
            </div>
          </section>
          <section className="sm:col-span-12 visits">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="sm:col-span-12 table-row">
                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/xigiya">
                      <span className="font-bold uppercase">Хигия</span> <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        гр. Казанлък <br />
                        ул. "Отец Паисий" № 33
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/6 34 95
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:00ч. - 21:00ч. <br />
                        Събота и Неделя: 09:00ч. - 21:00ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Христина Иванова - Теодосиева
                      </p>
                    </div>
                  </p>
                </div>

                {/* Add additional pharmacies below */}
                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/farmavist">
                      <span className="font-bold uppercase">Фармавист</span>{" "}
                      <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        гр. Казанлък <br />
                        ул. "Цар Освободител" № 52
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/6 53 53
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:00ч. - 19:30ч. <br />
                        Събота: 08:00ч. - 14:00ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Дияна Георгиева
                      </p>
                    </div>
                  </p>
                </div>

                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/arnika">
                      <span className="font-bold uppercase">Арника</span> <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        гр. Казанлък <br />
                        ул. "Симеон Велики" № 5
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/6 40 80
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:00ч. - 19:30ч. <br />
                        Събота и Неделя: 08:00ч. - 13:00ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Красимира Петрова
                      </p>
                    </div>
                  </p>
                </div>

                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/farma-1-centar">
                      <span className="font-bold uppercase">
                        Фарма 1 Център
                      </span>{" "}
                      <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        гр. Казанлък <br />
                        ул. "Цар Освободител" № 49
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/6 58 99
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:00ч. - 20:00ч. <br />
                        Събота и Неделя: 09:00ч. - 20:00ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Любка Иванова
                      </p>
                    </div>
                  </p>
                </div>

                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/farma-1-pavel-banya">
                      <span className="font-bold uppercase">
                        Фарма 1 Павел Баня
                      </span>{" "}
                      <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        гр. Павел Баня <br />
                        ул. "Александър Стамболийски" № 44
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/5 28 28
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:30ч. - 18:30ч. <br />
                        Събота: 08:30ч. - 13:30ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Велизара Иванова
                      </p>
                    </div>
                  </p>
                </div>

                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/farma-1-kazanlak">
                      <span className="font-bold uppercase">
                        Фарма 1 Казанлък
                      </span>{" "}
                      <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        гр. Казанлък <br />
                        ул. "Александър Стамболийски" № 9
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/6 40 40
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:00ч. - 19:00ч. <br />
                        Събота: 08:00ч. - 14:00ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Димитрина Димитрова
                      </p>
                    </div>
                  </p>
                </div>

                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/farma-1-selo-voynika">
                      <span className="font-bold uppercase">
                        Фарма 1 с. Войника
                      </span>{" "}
                      <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        с. Войника <br />
                        ул. "Централна" № 10
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/5 53 33
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:00ч. - 19:00ч. <br />
                        Събота: 08:00ч. - 14:00ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Невена Петрова
                      </p>
                    </div>
                  </p>
                </div>

                <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 box">
                  <p className="font-20 font-bold">
                    <a href="/pharmacies/farma-1-shipka">
                      <span className="font-bold uppercase">Фарма 1 Шипка</span>{" "}
                      <br />
                    </a>
                    <div>
                      <p>
                        <span className="font-bold">Адрес:</span> <br />
                        гр. Шипка <br />
                        ул. "Ген. Столетов" № 11
                      </p>
                      <p>
                        <span className="font-bold">Телефон:</span> <br />
                        0431/6 26 26
                      </p>
                      <p>
                        <span className="font-bold">Работно време:</span> <br />
                        Понеделник - Петък: 08:00ч. - 19:00ч. <br />
                        Събота и Неделя: 08:00ч. - 13:00ч.
                      </p>
                      <p>
                        <span className="font-bold">Управител:</span> <br />
                        Милен Тонев
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PharmaciesPage;
