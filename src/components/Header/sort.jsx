export {Sort}
import { useState } from 'react'
import arrow from '../../../public/Arrow.svg'

const Sort = () => {
    
    const[sortType, setSortType] = useState('#-down')

    const toggleChange = () => {
        if (sortType == '#-down') {
            setSortType('#-up')
        } else if (sortType == '#-up') {
            setSortType('A-Z')
        } else if (sortType == 'A-Z') {
            setSortType('Z-A')
        } else {setSortType('#-down')}
    }
    
    return(
        <span className="Header_Sort" onClick={toggleChange}>
        <div className="Header_Sort_text">
            {sortType == '#-down' || sortType == '#-up' ?
            <span>#</span> :
            <>
                <span>A</span>
                <span>Z</span>
            </>
            }
        </div>
          <img src={arrow} alt="Arrow" className={sortType == '#-up' || sortType == 'Z-A' ? 'arrow-rotate' : ''}/>
        </span>
    )
}