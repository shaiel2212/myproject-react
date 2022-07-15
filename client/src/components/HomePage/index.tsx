import React from 'react'
import { useSelector } from 'react-redux'

function HomePage() {

  const vacations = useSelector((state: any) => state.vacationsReducer.vacations)

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Welcome To Teams Management APP</h1>
      {vacations.map((v: any) => {
        return (<div className="">
          <h3 key={vacations}>{v.title}</h3>
          <h1 key={vacations}>{v.description}</h1>

        </div>

        )
      })}
    </div>
  )
}

export default HomePage