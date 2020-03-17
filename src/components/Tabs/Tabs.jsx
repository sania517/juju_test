import React, { useState } from 'react'
import './Tabs.css'

import { Tab } from '../Tab/Tab'

export function Tabs(props) {
  const {cities} = props
  const [currentCity, setCurrentCity] = useState(cities[0])

  return (
    <>
      <ul className="cities__list">
        {cities.map(city => <Tab key={city.name} onClick={() => {setCurrentCity(city)}} city={city} currentCity={currentCity.name}/>)} 
      </ul>
      <table className="cities__table">
        <thead>
          <tr>
            <th colSpan="2">{currentCity.name}</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temperature</td>
            <td>{`${Math.round((currentCity.temp- 273)*100)/100 || ""} °C`}</td>
          </tr>
          <tr>
            <td>Atmospheric pressure</td>
            <td>{`${currentCity.pressure || ""} hPa`}</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{`${currentCity.humidity || ""} %`}</td>
          </tr>
          <tr>
            <td>Wind speed</td>
            <td>{`${currentCity.speed || ""} meter/sec`}</td>
          </tr>
          <tr>
            <td>Wind direction</td>
            <td>{`${currentCity.deg || ""} °`}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}