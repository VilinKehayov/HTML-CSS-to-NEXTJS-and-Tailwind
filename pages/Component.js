import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.apteki-kazanlak.com/js/app.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id='mainMenuModal' className='is-reveal-closed'>
        <ul className='no-bullet'>
          <li>
            <a href="/za-nas">За нас</a>
          </li>
          <li>
            <a href="/history">История</a>
          </li>
          <li>
            <a href="/pharmacies">Аптеки</a>
            <ul className='no-bullet'>
              <li className='font-16'>
                <a href="/pharmacies/xigiya" className='font-18 upper'>
                  Хигия
                </a>
              </li>
              <li className='font-16'>
                <a href="/pharmacies/farma-1-kazanlk" className='font-18 upper'>
                  Фарма 1 Казанлък
                </a>
              </li>
              <li className='font-16'>
                <a href="/pharmacies/arnika" className='font-18 upper'>
                  Арника
                </a>
              </li>
              <li className='font-16'>
                <a href="/pharmacies/farmavist" className='font-18 upper'>
                  Фармавист
                </a>
              </li>
              <li className='font-16'>
                <a href="/pharmacies/farma-1-pavel-banya" className='font-18 upper'>
                  Фарма 1 Павел Баня
                </a>
              </li>
              <li className='font-16'>
                <a href="/pharmacies/farma-1-centr" className='font-18 upper'>
                  Фарма 1 Център
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/interesno">Интересно</a>
          </li>
          <li>
            <a href="/promo">Промоции</a>
          </li>
        </ul>
      </div>
      <div className="gdpr-cookie-wrapper col">
        Този сайт използва 'Бисквитки' (Cookies).
        <a href="javascript:;" className='gdpr-cookie-accept' id='cc_btn_accept_all'>Разбрах</a>
      </div>
    </>
  );
};

export default Component;
