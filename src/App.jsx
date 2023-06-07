import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import LoadingGif from "../public/isloading.gif";

const SORT_TYPE = {
  "#-down": (a, b) => a.id - b.id,
  "#-up": (a, b) => b.id - a.id,
  "A-Z": (a, b) => a.name.localeCompare(b.name),
  "Z-A": (a, b) => b.name.localeCompare(a.name),
};

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("#-down");
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const Limit = page * 30;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${Limit}&offset=0`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(
          data.results.map((el, I) => {
            return { name: el.name, url: el.url, id: I + 1 };
          })
        );
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
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
      setPage(prevPage => prevPage+1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

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
        </>
      )}
    </div>
  );
}

export default App;
