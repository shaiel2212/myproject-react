import React from 'react'
import { useSelector } from 'react-redux'
import Vacation from '../Vacation/vaction'

function HomePage() {



  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Welcome To Teams Management APP</h1>

      {/* {vacations.map((vac: any) => {
   
      })} */}

      {/* {Array.isArray(vacations) &&
                vacations.map((vacations: any) => <Vacation {...vacations}/>)} */}

    </div>
  )
}

export default HomePage

