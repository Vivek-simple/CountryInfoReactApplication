import React, { useEffect, useState } from 'react'

import './CountryDetail.css'
import { Link, useParams } from 'react-router-dom'

export default function CountryDetail() {
  const params =useParams()
  const [countryData, setCountryData] = useState(null)
  const [found,setFound]=useState(false)
 
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
            borders:[]
          
        })
        // if(data.borders){

        // data.borders.map((border)=>{
        //   fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        //   .then((res) => res.json())
        //   .then(([border])=>
        //     setCountryData((prevState)=>({...prevState,borders:[...prevState.borders,border.name.common]}))
        //   )

        //or

        if(!data.borders) {
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        }))
        .then((borders)=>{
          setCountryData((prevState)=>({...prevState,borders}))
        })
      })
      .catch((err)=>{
        setFound(true)
      })
  }, [params.country])

  if(found){
    return <h1>Data not found</h1>
  }
  return countryData === null ? (
    'loading...'
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={()=>history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            {  countryData.borders.length !=0 && <div             className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {
                countryData.borders.map((border)=><Link to={`/${border}`} key={border}>{border}</Link>)
              }
            </div>
         }
          </div>
        </div>
      </div>
    </main>
  )
}