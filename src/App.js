import React from "react";
import { Navbar } from "./components";
import { About, Footer, Header, Work } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <About />
      <Footer />
    </div>
  );
};

export default App;
