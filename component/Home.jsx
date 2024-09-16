import React from 'react'
import React, { useState } from 'react'
import '../Style.css'
import SearchBar from './SearchBar'
import Select from './Select'
import CountryList from './CountryList'
export default function Home() {
    const [query,setQuery]=useState('')
    return (
      <> 
          <main>
            <div className="search-filter-container">
              <SearchBar setQuery={setQuery}/>
              <Select/>
            </div>
            {
               query=='unmount'?'':<CountryList query={query}/>
            }
          </main>
      </>
  )
}
