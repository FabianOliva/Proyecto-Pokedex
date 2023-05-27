import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=21&offset=0.")
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data.results);
      });
  }, []);
  return (
    <div className="main-container">
      <Header />
      <Main pokemonData={pokemonData}></Main>
    </div>
  );
}

export default App;
