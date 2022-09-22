import React, {useState} from 'react'
import "./Carousel.scss"

const Carousel = ({givenArr, titleToSet, title, startPosition}) => {
    const [counter, setCounter] = useState(startPosition)


    const handleLeftArrow = () => {
        if (counter === 0) {
            setCounter(givenArr.length - 1);
            titleToSet(title - 1)
          } else {
            setCounter(counter - 1);
          }
    }
    const handleRightArrow = () => {
          if (counter === givenArr.length - 1) {
            setCounter(0);
            titleToSet(title + 1)
          } else {
            setCounter(counter + 1);
          }
    }

  return (
    <div className='slide'>
    <button className='slide__arrow' onClick={handleLeftArrow} >left</button>
    <div className='slide__container'>
            <div className='slide__item'>
            {givenArr[counter]}
            </div>
    </div>
    <button className='slide__arrow' onClick={handleRightArrow} >right</button>
    </div>
  )
}

export default Carousel