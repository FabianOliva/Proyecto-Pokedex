export { PokemonCard };
import "./index.css";
import { PokemonCardHeader } from "../../components/Pokemon-card-header";
import { PokemonCardMain } from "../../components/pokemon-card-main";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../public/isloading.gif";
import ErrorPage from "../ErrorPage";

const PokemonCard = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState();
  const [pokemonDesc, setPokemonDesc] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        document.title = data.name + " | Pokedex";
      })
      .catch((error) => {
        setError(true);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonDesc(
          data.flavor_text_entries[9]?.flavor_text ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iste sit consectetur cumque quia ab."
        );
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
          }}
        >
          <PokemonCardHeader pokemonData={pokemonData} />
          <PokemonCardMain
            pokemonDesc={pokemonDesc}
            pokemonData={pokemonData}
          />
        </div>
      )}
    </>
  );
};
