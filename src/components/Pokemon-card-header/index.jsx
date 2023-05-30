export { PokemonCardHeader };
import "./index.css";
import Arrow from "../../../public/arrow-left.svg";
import ArrowLeft from "../../../public/small-arrow-left.svg";
import ArrowRight from "../../../public/small-arrow-right.svg";
import BackgroundPokeball from "../../../public/bg-pokeball.png";
import { Link } from "react-router-dom";

const PokemonCardHeader = ({ pokemonData }) => {
  return (
    <header className="pokemon-card-header">
      <div className="pokemon-card-title">
        <div className="pokemon-card-name">
          <Link to={"/"}>
            <img src={Arrow} alt="" />
          </Link>
          <h1>{pokemonData.name}</h1>
        </div>
        <p className="pokemon-card-number">#{pokemonData.id.toString().padStart(3, "0")}</p>
      </div>
      <div className="pokemon-card-image">
        {pokemonData.id !== 1 && 
        <Link to={`/pokemon/${pokemonData.id - 1}`}>
          <img src={ArrowLeft} alt="" className="pokemon-card-arrow-left" />
        </Link>
}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
          alt=""
          className="pokemon-card-avatar"
        />
        <Link to={`/pokemon/${pokemonData.id + 1}`} className="pokemon-card-arrow-right-container">
          <img src={ArrowRight} alt="" className="pokemon-card-arrow-right" />
        </Link>
      </div>
      <img src={BackgroundPokeball} alt="" className="header-bg-pokeball" />
    </header>
  );
};
