import React from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
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
