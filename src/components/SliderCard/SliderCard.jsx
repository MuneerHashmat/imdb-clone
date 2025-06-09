import React from 'react'
import "./SliderCard.css"
import { SMALL_IMG_BASE_URL } from '../../utils/constants'

const SliderCard = ({type,item}) => {
  if(type==="people") return (
    <div className='slider-card-people'>
        <img src={`${SMALL_IMG_BASE_URL}${item.profile_path}`} alt="person" />

        <div>
            <p>{item.name}</p>
            <p>Rank: <span>#{Math.round(item.popularity)}</span></p>
        </div>

    </div>
  )

  return (
    <div>Slider card</div>
  )
}

export default SliderCard