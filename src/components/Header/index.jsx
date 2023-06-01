import "./index.css";
import pokeball from "../../../public/Pokeball.png";
import vectorSearch from "../../../public/Vectorsearch-icon.svg";
import { Sort } from "./sort";

const Header = ({ toggleChange, sortType, setSearchInput, searchInput }) => {
  return (
    <header className="Header">
      <div className="Header_Top">
        <img className="Header_Logo-img" src={pokeball} alt="Pokeball Icon" />
        <h1 className="Header_Logo-title">Pokédex</h1>
        <Sort toggleChange={toggleChange} sortType={sortType} />
      </div>
      <div className="Header_Bottom">
        <input
          className="Header_Input"
          type="text"
          placeholder="Search"
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
