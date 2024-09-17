import React, { useContext } from 'react'
import React, { useState } from 'react'
import '../Style.css'
import SearchBar from './SearchBar'
import Select from './Select'
import CountryList from './CountryList'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
export default function Home() {
    const [query,setQuery]=useState('')
    // const [isDark]=useOutletContext()
    const [isDark]=useContext(ThemeContext)
    // console.log(theme)
    return (
      <> 
          <main className={`${isDark?'dark':''}`}>
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
