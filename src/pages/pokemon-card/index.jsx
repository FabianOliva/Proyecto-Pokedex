export { PokemonCard };
import "./index.css";
import { PokemonCardHeader } from "../../components/Pokemon-card-header";
import { PokemonCardMain } from "../../components/pokemon-card-main";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonCard = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState();
  const [pokemonDesc, setPokemonDesc] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonDesc(data.flavor_text_entries[9].flavor_text);
      });
  }, []);

  return (
    pokemonData,
    pokemonDesc && (
      <div className="pokemon-card-container" style={{ backgroundColor: `var(--${pokemonData.types[0].type.name})` }}>
        <PokemonCardHeader pokemonData={pokemonData} />
        <PokemonCardMain pokemonDesc={pokemonDesc} pokemonData={pokemonData} />
      </div>
    )
  );
};
