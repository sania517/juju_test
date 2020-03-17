import React, { useState, useEffect } from 'react';
import './App.css';
import { Tabs } from "./components/Tabs/Tabs"

const URL_API = "https://api.openweathermap.org/data/2.5/weather?appid=c2dcf8ffb5cdc3f8977bfd2ae7ea4738&q="

async function getDataCity(city) {
  return fetch(`${URL_API}${city}`)
    .then(response => {
      return response.json()
    })
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] =useState([]);

  useEffect(loadData, [])

  function loadData() {
    setIsError(false)
    setIsLoading(true)
    Promise.all([
      getDataCity("London"),
      getDataCity("Kyiv"),
      getDataCity("New York")
    ]).then (cities => {
      const citiesWeather = cities.map(city => {
        const {  name , main: { temp, pressure, humidity }, wind: { speed, deg } } = city
        return {
          name,
          temp,
          pressure,
          humidity,
          speed,
          deg,
        }
      })
      setData(citiesWeather);
    }).catch(() => {
      setIsError(true)
    }).finally(() => { setIsLoading(false) })
  }

  if(data.length === 0) {
    return (
      <>
        <button disabled={isLoading}>Load</button>
        <p>{isError ? "Error occurred. Try later" : ""}</p>
        <p>{isLoading ? "Loading..." : ""}</p>
      </>
    )
  }
  return (
    <div className="app__container">
      <h1 className="app__title">App</h1>
      <Tabs cities={data} />
    </div>
  );
}

export default App;
