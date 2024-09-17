import React from 'react'
import './CountryShimmer.css'
export default function CountryShimmer() {
  let arr=new Array(10).fill(1)
  return (
    <div className='countries-container'>
        {
          Array.from({length:10}).map((ele,i)=><div key={i} className='country-card country-shimmer '></div>)
        }
        
    </div>
  )
}
