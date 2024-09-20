import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryShimmer from './CountryShimmer'
export default function CountryList({query}) {
  const[CountryData,setCountryData]=useState([])
  // const[count,setCount]=useState(0)

  // if(CountryData.length==0){
  // fetch('https://restcountries.com/v3.1/all')
  // .then((res)=>res.json())
  // .then((data)=>setCountryData(data))
  // }

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
  .then((res)=>res.json())
  .then((data)=>setCountryData(data))


  // Used for cleanup code

  // const intervalId=setInterval(()=>{
  //   console.log("country project")
  // },[1000])

  // return(()=>{
  //   clearInterval(intervalId)
  //   console.log('cleanup code')
  // })

  },[])

  return (
    <>
    {/* <button onClick={()=>setCount(count+1)}>count</button> */ }
    
    {
    CountryData.length==0 ?<CountryShimmer/> :<div className="countries-container">
        {
            CountryData.filter((country)=>country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)).map((country)=>{
                return <CountryCard
                key={country.name.common}
                flag={country.flags.svg}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
                />
                
            })
        }
    </div>
    }
    </>
  )
}
