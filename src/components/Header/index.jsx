import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="Header_Top">
        <img className="Header_Logo-img" src="Iconos e imagenes/Pokeball.png" alt="Pokeball Icon" />
        <h1 className="Header_Logo-title">Pokédex</h1>
        <span className="Header_Sort">
          #
          <img src="Iconos e imagenes/Arrow.svg" alt="Arrow" />
        </span>
      </div>
      <div className="Header_Bottom">
        <input className="Header_Input" type="text" placeholder="Search" />
        <span className="Input_PlaceholderIcon">
          <img className="Input_SearchIcon" src="Iconos e imagenes\Vectorsearch-icon.svg" alt="SearchIcon" />
        </span>
      </div>
    </header>
  );
};

export default Header;
