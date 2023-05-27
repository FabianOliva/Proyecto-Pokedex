import "./index.css";

import aron from "../../../public/aron.png";
import { useEffect, useState } from "react";

const Main_Card = ({ name, id, url }) => {
  const [pokemonType, setPokemonType] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonType(data.types[0].type.name);
      });
  }, []);

  return (
    <div className="Main_Card_Cont" style={{ borderColor: `var(--${pokemonType})` }}>
      <span className="Main_Card-id" style={{ color: `var(--${pokemonType})` }}>
        #{id}
      </span>
      <div className="Main_Card-img_Cont">
        <img
          className="Main_Card-img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="Pokemon Front Img"
        />
      </div>
      <div className="Main_Card-name" style={{ backgroundColor: `var(--${pokemonType})` }}>
        {name}
      </div>
    </div>
  );
};

export default Main_Card;
