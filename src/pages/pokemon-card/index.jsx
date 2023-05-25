export {PokemonCard}
import './index.css'
import { PokemonCardHeader } from "../../components/Pokemon-card-header"
import { PokemonCardMain } from "../../components/pokemon-card-main"



const PokemonCard = () => {
    return( 
        <div className="pokemon-card-container">
            <PokemonCardHeader/>
            <PokemonCardMain/>
        </div>  
    )
}