export { PokemonCard };
import "./index.css";
import { PokemonCardHeader } from "../../components/Pokemon-card-header";
import { PokemonCardMain } from "../../components/pokemon-card-main";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Loading from "../../../public/isloading.gif";
import ErrorPage from "../ErrorPage";
import { LanguageContext } from "../../contexts/LanguageContext";

const PokemonCard = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState();
  const [pokemonDesc, setPokemonDesc] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [moves, setMoves] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setMoves([]);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log(data.abilities);
        for (let i = 0; i < 2; i++) {
          if (data.abilities[i]) {
            fetch(data.abilities[i].ability.url)
              .then((res) => res.json())
              .then((data) => {
                const moveIndex = data.names.findIndex((element) => {
                  return element.language.name == language.toLowerCase();
                });
                const move = data.names[moveIndex].name;
                setMoves((prevMoves) => {
                  return [...prevMoves, move];
                });
              });
          }
        }
        document.title = data.name + " | Pokedex";
      })
      .catch((error) => {
        setError(true);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        const descIndex = data.flavor_text_entries.findIndex((element) => {
          return element.language.name == language.toLowerCase();
        });
        const desc = data.flavor_text_entries[descIndex].flavor_text;
        setPokemonDesc(desc);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((err) =>
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
      );
  }, [pokemonId]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {isLoading ? (
        <div className="loading-gif-container">
          <img src={Loading} alt="" className="loading-gif" />
        </div>
      ) : (
        <div
          className="pokemon-card-container"
          style={{
            backgroundColor: `var(--${pokemonData.types[0].type.name})`,
          }}>
          <PokemonCardHeader pokemonData={pokemonData} />
          <PokemonCardMain pokemonDesc={pokemonDesc} pokemonData={pokemonData} moves={moves} />
        </div>
      )}
    </>
  );
};
