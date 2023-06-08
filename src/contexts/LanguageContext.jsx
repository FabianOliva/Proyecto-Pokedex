import { createContext, useState } from "react";

const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    if (language == "EN") {
      setLanguage("ES");
    } else {
      setLanguage("EN");
    }
  };

  return (
    <LanguageContext.Provider value={{
      language,
      toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export {LanguageContext, LanguageProvider}