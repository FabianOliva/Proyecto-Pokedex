import "./index.css";

import pokeball from '../../../public/Pokeball.png'
import arrow from '../../../public/Arrow.svg'
import vectorSearch from '../../../public/Vectorsearch-icon.svg'

const Header = () => {
  return (
    <header className="Header">
      <div className="Header_Top">
        <img className="Header_Logo-img" src={pokeball} alt="Pokeball Icon" />
        <h1 className="Header_Logo-title">Pokédex</h1>
        <span className="Header_Sort">
          #
          <img src={arrow} alt="Arrow" />
        </span>
      </div>
      <div className="Header_Bottom">
        <input className="Header_Input" type="text" placeholder="Search" />
        <span className="Input_PlaceholderIcon">
          <img className="Input_SearchIcon" src={vectorSearch} alt="SearchIcon" />
        </span>
      </div>
    </header>
  );
};

export default Header;
