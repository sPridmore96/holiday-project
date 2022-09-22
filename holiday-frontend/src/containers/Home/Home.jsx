import React, {useEffect} from 'react'
import "./Home.scss"
import Calender from '../../components/Calender/Calender'

const Home = ({holidayData}) => {
    

  return (
    <div>
        <Calender holidayData={holidayData}/>
    </div>
  )
}

export default Home