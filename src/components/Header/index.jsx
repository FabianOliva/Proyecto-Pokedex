import "./index.css";
import pokeball from "../../../public/Pokeball.png";
import vectorSearch from "../../../public/Vectorsearch-icon.svg";
import { Sort } from "./sort";
import { LANGUAGES } from "../../App";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const Header = ({ toggleChange, sortType, setSearchInput, searchInput }) => {
  const {language, toggleLanguage} = useContext(LanguageContext)
  
  return (
    <header className="Header">
      <div className="Header_Top">
        <img className="Header_Logo-img" src={pokeball} alt="Pokeball Icon" />
        <h1 className="Header_Logo-title">Pokédex</h1>
        <Sort toggleChange={toggleChange} sortType={sortType} language={language} toggleLanguage={toggleLanguage} />
      </div>
      <div className="Header_Bottom">
        <input
          className="Header_Input"
          type="text"
          placeholder={LANGUAGES[language].search}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <span className="Input_PlaceholderIcon">
          <img
            className={`Input_SearchIcon ${searchInput !== "" ? "Input_Active" : ""}`}
            src={vectorSearch}
            alt="SearchIcon"
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
