import "./index.css";
import Main_Card from "../Main_Card";
import { Link } from "react-router-dom";

const Main = ({ filteredData }) => {
  return (
    <main className="Main_Cont">
      {filteredData.map((pokemon) => {
        return (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            <Main_Card name={pokemon.name} id={pokemon.id} url={pokemon.url} />
          </Link>
        );
      })}
    </main>
  );
};

export default Main;
