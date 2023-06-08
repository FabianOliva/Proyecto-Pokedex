import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import LoadingGif from "../public/isloading.gif";
import ArrowLeft from "../public/arrow-left.svg";

const SORT_TYPE = {
  "#-down": (a, b) => a.id - b.id,
  "#-up": (a, b) => b.id - a.id,
  "A-Z": (a, b) => a.name.localeCompare(b.name),
  "Z-A": (a, b) => b.name.localeCompare(a.name),
};

export const LANGUAGES = {
  ES: {
    search: "Buscar",
    about: "Acerca de",
    baseStats: "Estadisticas base",
    weight: "Peso",
    height: "Altura",
    moves: "Movimientos",
    normal: "Normal",
    fire: "Fuego",
    water: "Agua",
    grass: "Planta",
    electric: "Eléctrico",
    ice: "Hielo",
    fighting: "Lucha",
    poison: "Veneno",
    ground: "Tierra",
    flying: "Volador",
    psychic: "Psíquico",
    bug: "Bicho",
    rock: "Roca",
    ghost: "Fantasma",
    dark: "Siniestro",
    dragon: "Dragón",
    steel: "Acero",
    fairy: "Hada",
  },

  EN: {
    search: "Search",
    about: "About",
    baseStats: "Base stats",
    weight: "Weight",
    height: "Height",
    moves: "Moves",
    normal: "Normal",
    fire: "Fire",
    water: "Water",
    grass: "Grass",
    electric: "Electric",
    ice: "Ice",
    fighting: "Fighting",
    poison: "Poison",
    ground: "Ground",
    flying: "Flying",
    psychic: "Psychic",
    bug: "Bug",
    rock: "Rock",
    ghost: "Ghost",
    dark: "Dark",
    dragon: "Dragon",
    steel: "Steel",
    fairy: "Fairy",
  },
};

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("#-down");
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    const offset = page * 30;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        const pokemons = data.results.map((el) => {
          const urlSplit = el.url.split("/");
          const id = urlSplit[urlSplit.length - 2];
          return { name: el.name, url: el.url, id: id };
        });

        const newPokemonData = [...pokemonData, ...pokemons];
        setPokemonData(newPokemonData);

        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, [page]);

  useEffect(() => {
    if (!pokemonData) return;
    const filterSearch = (el) => {
      return searchInput === "" ? true : el.name.toLowerCase().includes(searchInput.toLowerCase());
    };
    const newFilteredData = pokemonData.filter(filterSearch).sort(SORT_TYPE[sortType]);
    setFilteredData(newFilteredData);
  }, [sortType, pokemonData, searchInput]);

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

  const handleScroll = () => {
    if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight) {
      setPage((prevPage) => prevPage + 1);
    }

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  document.title = "Pokedex";

  return (
    <div className="main-container">
      {isLoading ? (
        <div className="loading-gif-container">
          <img src={LoadingGif} alt="" className="loading-gif" />
        </div>
      ) : (
        <>
          <Header
            toggleChange={toggleChange}
            sortType={sortType}
            setSearchInput={setSearchInput}
            searchInput={searchInput}
          />
          <Main filteredData={filteredData}></Main>
          {buttonState && (
            <button className="scroll-button" onClick={topFunction}>
              <img src={ArrowLeft} alt=" Arrow" className="scroll-button-img" />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
