import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("#-down");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=21&offset=0.")
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, [pokemonData]);

  const toggleChange = () => {
    if (sortType == "#-down") {
      setSortType("#-up");
    } else if (sortType == "#-up") {
      setSortType("A-Z");
    } else if (sortType == "A-Z") {
      setSortType("Z-A");
    } else {
      setSortType("#-down");
    }
  };

  return (
    <div className="main-container">
      {isLoading ? (
        <div className="loading-gif-container">
          <img src="public/isloading.gif" alt="" className="loading-gif" />
        </div>
      ) : (
        <>
          <Header toggleChange={toggleChange} sortType={sortType} />
          <Main pokemonData={pokemonData} sortType={sortType}></Main>
        </>
      )}
    </div>
  );
}

export default App;
