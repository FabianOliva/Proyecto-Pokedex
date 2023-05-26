export {PokemonCardMain}
import './index.css'
import Weight from '../../../public/Weight.svg'
import Height from '../../../public/Height.svg'
import { PokemonStat } from '../Pokemon-Stat'

const PokemonCardMain = () => {
    return(
        <main className='pokemon-card-main'>
            <div className='pokemon-card-type'>
                <span>Steel</span>
                <span>Rock</span>
            </div>
            <h2 className='pokemon-card-subtitle'>About</h2>
            <div className='pokemon-card-features'>
                <div className='pokemon-card-features-item'>
                    <div className='pokemon-card-features-item-top'>
                        <img src={Weight} alt="" />
                        <p>60,0 kg</p>
                    </div>
                    <p className='pokemon-card-features-item-bottom'>Weight</p>
                </div>
                <div className='pokemon-card-features-item filter-center'>
                    <div className='pokemon-card-features-item-top'>
                        <img src={Height} alt="" />
                        <p>0,4 m</p>
                    </div>
                    <p className='pokemon-card-features-item-bottom'>Height</p>
                </div>
                <div className='pokemon-card-features-item'>
                    <div className='pokemon-card-features-item-top'>
                        <p>Sturdy</p>
                        <p>Rock-Head</p>
                    </div>
                    <p className='pokemon-card-features-item-bottom'>Moves</p>
                </div>

            </div>
            <p className='pokemon-card-description'>It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.</p>
            <h2 className='pokemon-card-subtitle'>Base stats</h2>
            <div className='pokemon-card-stats'>
                <PokemonStat name={'hp'} value={'10'}/>
                <PokemonStat name={'atk'} value={'255'}/>
                <PokemonStat name={'def'} value={'50'}/>
                <PokemonStat name={'satk'} value={'100'}/>
                <PokemonStat name={'sdef'} value={'150'}/>
                <PokemonStat name={'spd'} value={'70'}/>
            </div>
        </main>
    )
}