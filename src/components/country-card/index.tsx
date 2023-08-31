import React from 'react'
import { Country } from '../../types'
import './styles.scss'

const CountryCard: React.FC<Country> = ({name,capital,emoji,native,code,currency,languages}) => {
  return (
    <div className="country-card">
        <h2>{name}</h2>
        <p>flag: {emoji}</p>
        <p>capital: {capital}</p>
        <p>code: {code}</p>
        <p>native: {native}</p>
        <p>currency: {currency}</p>
        <p>language code: {languages?.[0]?.code}</p>
        <p>language name: {languages?.[0]?.name}</p>
    </div>
  )
}

export default CountryCard