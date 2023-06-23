import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./main";
import Component from "./Component";
import Headpage from "./head";

const Home = () => {
  return (
    <div>
      <Headpage />

      <Header />
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
      <Component />
    </div>
  );
};

export default Home;
