export {PokemonCardMain}
import './index.css'
import Weight from '../../../public/Weight.svg'
import Height from '../../../public/Height.svg'

const PokemonCardMain = () => {
    return(
        <main className='pokemon-card-main'>
            <div className='pokemon-card-type'>
                <span>Steel</span>
                <span>Rock</span>
            </div>
            <h2 className='pokemon-card-about'>About</h2>
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
        </main>
    )
}