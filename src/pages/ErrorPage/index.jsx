import BlackPikachu from "../../../public/BlackPikachu.png";
import ArrowLeft from "../../../public/small-arrow-left.svg";
import ArrowRight from "../../../public/small-arrow-right.svg";
import Arrow from "../../../public/arrow-left.svg";
import Weight from "../../../public/Weight.svg";
import Height from "../../../public/Height.svg";
import { PokemonStat } from "../../components/Pokemon-Stat";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="pokemon-404-cont"
      style={{
        backgroundColor: "#DC211E",
        height: "100vh",
        backgroundImage: "url(../../../public/WhosThatPokemon.png)",
        backgroundSize: "112%",
      }}>
      <header className="pokemon-card-header">
        <div className="pokemon-card-title">
          <div className="pokemon-card-name">
            <Link to={"/"}>
              <img style={{ filter: "drop-shadow(rgb(0, 0, 1) 0px 2px 10px)" }} src={Arrow} alt="" />
            </Link>
            <h1 style={{ textShadow: "0px 0px 10px #000" }}>Error 404</h1>
          </div>
          <p className="pokemon-card-number">#???</p>
        </div>
        <div className="pokemon-card-image">
          <img src={ArrowLeft} alt="" className="pokemon-card-arrow-left" />
          <img src={BlackPikachu} alt="" className="pokemon-card-avatar" />
          <img src={ArrowRight} alt="" className="pokemon-card-arrow-right" />
        </div>
      </header>

      <main className="pokemon-card-main">
        <div className="pokemon-card-type">
          <span style={{ backgroundColor: "#DC211E" }}>???</span>
        </div>
        <h2 className="pokemon-card-subtitle" style={{ color: "#DC211E" }}>
          About
        </h2>
        <div className="pokemon-card-features">
          <div className="pokemon-card-features-item">
            <div className="pokemon-card-features-item-top">
              <img src={Weight} alt="" />
              <p>??? kg</p>
            </div>
            <p className="pokemon-card-features-item-bottom">Weight</p>
          </div>
          <div className="pokemon-card-features-item filter-center">
            <div className="pokemon-card-features-item-top">
              <img src={Height} alt="" />
              <p>??? m</p>
            </div>
            <p className="pokemon-card-features-item-bottom">Height</p>
          </div>
          <div className="pokemon-card-features-item">
            <div className="pokemon-card-features-item-top">
              <p>???</p>
              <p>???</p>
            </div>
            <p className="pokemon-card-features-item-bottom">Moves</p>
          </div>
        </div>
        <p className="pokemon-card-description">Error 404 this pokemon is not available on our Database</p>
        <h2 className="pokemon-card-subtitle" style={{ color: "#DC211E" }}>
          Base stats
        </h2>
        <div className="pokemon-card-stats">
          <PokemonStat name={"hp"} value={"255"} pokemonType={"???"} />
          <PokemonStat name={"atk"} value={"255"} pokemonType={"???"} />
          <PokemonStat name={"def"} value={"255"} pokemonType={"???"} />
          <PokemonStat name={"satk"} value={"255"} pokemonType={"???"} />
          <PokemonStat name={"sdef"} value={"255"} pokemonType={"???"} />
          <PokemonStat name={"spd"} value={"255"} pokemonType={"???"} />
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
