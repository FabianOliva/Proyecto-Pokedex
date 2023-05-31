import "./index.css";
import Main_Card from "../Main_Card";
import { Link } from "react-router-dom";
import { Sort } from "../Header/sort";

const Main = ({ pokemonData, sortType }) => {
  const sortedPokemonData = pokemonData.map((pokemon, index) => {
    return { ...pokemon, index };
  });

  if (sortType === "#-up") {
    sortedPokemonData.sort((a, b) => a.index - b.index);
  } else if (sortType === "A-Z") {
    sortedPokemonData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "Z-A") {
    sortedPokemonData.sort((a, b) => b.name.localeCompare(a.name));
  }

  // const SORT_TYPE = {
  //   "#-down": (a, b) => {
  //     return a.id < b.id ? -1 : 1;
  //   },
  //   "#-up": (a, b) => {
  //     return a.id > b.id ? -1 : 1;
  //   },
  // };

  return (
    <main className="Main_Cont">
      {sortedPokemonData
        // .sort((a, b) => {
        //   return a.id > b.id ? -1 : 1;
        // })
        .map((pokemon, index) => {
          return (
            <Link to={`/pokemon/${pokemon.name}`}>
              <Main_Card name={pokemon.name} id={index + 1} url={pokemon.url} />
            </Link>
          );
        })}
    </main>
  );
};

export default Main;
