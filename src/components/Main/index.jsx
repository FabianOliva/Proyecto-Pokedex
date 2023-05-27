import "./index.css";
import Main_Card from "../Main_Card";
import { Link } from "react-router-dom";

const Main = ({ pokemonData }) => {
  return (
    <main className="Main_Cont">
      {pokemonData.map((pokemon, index) => {
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
