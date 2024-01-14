import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Folklore from "./components/folklore/Folklore";
import Contact from "./components/Contact";
import Information from "./components/information/Information";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import { getStorageLanguage } from "./assets/utilities";
import "./style/app.css";
import WhereMushroomsLive from "./components/information/sub-pages/WhereMushroomsLive";

const storageLanguage = getStorageLanguage();

function App() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(
    storageLanguage ? storageLanguage : "Hebrew"
  );

  function hebrewLanguage() {
    setLanguage("Hebrew");
  }

  function englishLanguage() {
    setLanguage("English");
  }

  return (
    <div
      className="App"
      style={{
        direction: language === "Hebrew" ? "rtl" : "ltr",
        fontFamily: language === "Hebrew" ? "MPLUSRounded1c" : "JosefinSlab",
      }}
    >
      <LanguageContext.Provider
        value={{ language, hebrewLanguage, englishLanguage }}
      >
        <Navbar open={open} setOpen={setOpen} />
        <BurgerMenu open={open} setOpen={setOpen} />
        <Switch>
          <Route exact path="/">
            <Header />
            <About />
            <Gallery />
            <Folklore />
            <Information />
            <Contact />
          </Route>
          <Route exact path="/whereMushroomsLive">
            <WhereMushroomsLive />
          </Route>
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
