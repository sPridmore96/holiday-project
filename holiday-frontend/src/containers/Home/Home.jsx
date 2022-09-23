import React, {useEffect} from 'react'
import "./Home.scss"
import Calender from '../../components/Calender/Calender'

const Home = ({holidayData}) => {
    

  return (
    <div className='home'>
      <h1 className='home__title'>Your Yearly Holiday Calender</h1>
        <Calender holidayData={holidayData}/>
        
    </div>
  )
}

export default Home