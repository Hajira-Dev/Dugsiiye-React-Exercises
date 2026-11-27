import React, { useState } from "react";
import LanguageContext from "./LanguageContext";
import Salaan from "./Salaan";

const App = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanaguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={language}>
      <button onClick={toggleLanaguage}>
        Switch to {language === "en" ? "es" : "en"}{" "}
      </button>
      <Salaan />
    </LanguageContext.Provider>
  );
};

export default App;
