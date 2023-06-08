export { PokemonCardMain };
import "./index.css";
import Weight from "../../../public/Weight.svg";
import Height from "../../../public/Height.svg";
import { PokemonStat } from "../Pokemon-Stat";
import { LANGUAGES } from "../../App";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const PokemonCardMain = ({ pokemonData, pokemonDesc, moves }) => {
  const { language } = useContext(LanguageContext);
  return (
    pokemonData && (
      <main className="pokemon-card-main">
        <div className="pokemon-card-type">
          <span style={{ backgroundColor: `var(--${pokemonData.types[0].type.name})` }}>
            {LANGUAGES[language][pokemonData.types[0].type.name]}
          </span>
          {pokemonData.types[1] && (
            <span style={{ backgroundColor: `var(--${pokemonData.types[1].type.name})` }}>
              {LANGUAGES[language][pokemonData.types[1].type.name]}
            </span>
          )}
        </div>
        <h2 className="pokemon-card-subtitle" style={{ color: `var(--${pokemonData.types[0].type.name})` }}>
          {LANGUAGES[language].about}
        </h2>
        <div className="pokemon-card-features">
          <div className="pokemon-card-features-item">
            <div className="pokemon-card-features-item-top">
              <img src={Weight} alt="" />
              <p>{pokemonData.weight} kg</p>
            </div>
            <p className="pokemon-card-features-item-bottom">{LANGUAGES[language].weight}</p>
          </div>
          <div className="pokemon-card-features-item filter-center">
            <div className="pokemon-card-features-item-top">
              <img src={Height} alt="" />
              <p>{pokemonData.height} m</p>
            </div>
            <p className="pokemon-card-features-item-bottom">{LANGUAGES[language].height}</p>
          </div>
          <div className="pokemon-card-features-item">
            <div className="pokemon-card-features-item-top">
              {moves.length == 0 ? (
                <p>...</p>
              ) : (
                moves.map((element) => {
                  return <p className="pokemon-card-features-move">{element}</p>;
                })
              )}
            </div>
            <p className="pokemon-card-features-item-bottom">{LANGUAGES[language].moves}</p>
          </div>
        </div>
        <p className="pokemon-card-description">{pokemonDesc}</p>
        <h2 className="pokemon-card-subtitle" style={{ color: `var(--${pokemonData.types[0].type.name})` }}>
          {LANGUAGES[language].baseStats}
        </h2>
        <div className="pokemon-card-stats">
          <PokemonStat
            name={"hp"}
            value={pokemonData.stats[0].base_stat}
            pokemonType={pokemonData.types[0].type.name}
          />
          <PokemonStat
            name={"atk"}
            value={pokemonData.stats[1].base_stat}
            pokemonType={pokemonData.types[0].type.name}
          />
          <PokemonStat
            name={"def"}
            value={pokemonData.stats[2].base_stat}
            pokemonType={pokemonData.types[0].type.name}
          />
          <PokemonStat
            name={"satk"}
            value={pokemonData.stats[3].base_stat}
            pokemonType={pokemonData.types[0].type.name}
          />
          <PokemonStat
            name={"sdef"}
            value={pokemonData.stats[4].base_stat}
            pokemonType={pokemonData.types[0].type.name}
          />
          <PokemonStat
            name={"spd"}
            value={pokemonData.stats[5].base_stat}
            pokemonType={pokemonData.types[0].type.name}
          />
        </div>
      </main>
    )
  );
};
