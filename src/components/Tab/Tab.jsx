import React from 'react'
import './Tab.css'

export function Tab(props) {
  const { currentCity, onClick, city} = props;
  const isActiveClass = currentCity === city.name ? " cities__button--active" : "";
  return (
    <li className="cities__item">
      <button
        type="button"
        className={"cities__button"  + isActiveClass}
        onClick={onClick}
      >
        {city.name}
      </button>
    </li>
  )
}