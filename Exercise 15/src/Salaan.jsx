import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Salaan = () => {
  const language = useContext(LanguageContext);

  const message = {
    en: "Hello!",
    es: "Hola!",
  };

  const themes = {
    en: { background: "#e8edff", color: "#0d1bdc" },
    es: { background: "#e6f6e8", color: "#054e0c" },
  };

  const style = {
    ...themes[language],
    padding: "32px",
    textAlign: "center",
    borderRadius: "16px",
    maxWidth: "320px",
    margin: "40px auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={style}>
      <h1 style={{ margin: 0, fontSize: "48px" }}>{message[language]}</h1>
    </div>
  );
};

export default Salaan;
