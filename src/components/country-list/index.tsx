import './styles.scss'
import React from 'react'
import { Country } from '../../types'
import CountryCard from '../country-card'

const CountryList: React.FC<{countries: Country[]}> = ({countries}) => {
  return (
    <div className="list">
      {countries?.map((country,index) => <CountryCard {...country} key={index}/>)}
    </div>
  )
}

export default CountryList