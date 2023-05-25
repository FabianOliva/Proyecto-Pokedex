export {PokemonCardHeader}
import './index.css'
import Arrow from '../../../public/arrow-left.svg'
import ArrowLeft from '../../../public/small-arrow-left.svg'
import ArrowRight from '../../../public/small-arrow-right.svg'
import Aron from '../../../public/aron.png'
import BackgroundPokeball from '../../../public/bg-pokeball.png'


const PokemonCardHeader = () => {

    return(
        <header className='pokemon-card-header'>
            <div className='pokemon-card-title'>
                <div className='pokemon-card-name'>
                    <img src={Arrow} alt=""/>
                    <h1>Aron</h1>
                </div>
                <p className='pokemon-card-number'>#304</p>
            </div>
            <div className='pokemon-card-image'>
                <img src={ArrowLeft} alt="" className='pokemon-card-arrow-left'/>
                <img src={Aron} alt="" className='pokemon-card-avatar'/>
                <img src={ArrowRight} alt="" className='pokemon-card-arrow-right'/>
            </div>
            <img src={BackgroundPokeball} alt="" className='header-bg-pokeball'/>
        </header>
    )
}