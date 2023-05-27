export { PokemonCardMain };
import "./index.css";
import Weight from "../../../public/Weight.svg";
import Height from "../../../public/Height.svg";
import { PokemonStat } from "../Pokemon-Stat";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonCardMain = ({ pokemonData, pokemonDesc }) => {
  return (
    pokemonData && (
      <main className="pokemon-card-main">
        <div className="pokemon-card-type">
          <span style={{ backgroundColor: `var(--${pokemonData.types[0].type.name})` }}>
            {pokemonData.types[0].type.name}
          </span>
          {pokemonData.types[1] && (
            <span style={{ backgroundColor: `var(--${pokemonData.types[1].type.name})` }}>
              {pokemonData.types[1].type.name}
            </span>
          )}
        </div>
        <h2 className="pokemon-card-subtitle" style={{ color: `var(--${pokemonData.types[0].type.name})` }}>
          About
        </h2>
        <div className="pokemon-card-features">
          <div className="pokemon-card-features-item">
            <div className="pokemon-card-features-item-top">
              <img src={Weight} alt="" />
              <p>{pokemonData.weight} kg</p>
            </div>
            <p className="pokemon-card-features-item-bottom">Weight</p>
          </div>
          <div className="pokemon-card-features-item filter-center">
            <div className="pokemon-card-features-item-top">
              <img src={Height} alt="" />
              <p>{pokemonData.height} m</p>
            </div>
            <p className="pokemon-card-features-item-bottom">Height</p>
          </div>
          <div className="pokemon-card-features-item">
            <div className="pokemon-card-features-item-top">
              <p>{pokemonData.abilities[0].ability.name}</p>
              {pokemonData.abilities[1] && <p>{pokemonData.abilities[1].ability.name}</p>}
            </div>
            <p className="pokemon-card-features-item-bottom">Moves</p>
          </div>
        </div>
        <p className="pokemon-card-description">{pokemonDesc}</p>
        <h2 className="pokemon-card-subtitle" style={{ color: `var(--${pokemonData.types[0].type.name})` }}>
          Base stats
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
