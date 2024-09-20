import React, { useState } from 'react'
import '../Style.css'
import SearchBar from './SearchBar'
import Select from './Select'
import CountryList from './CountryList'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
    const [query,setQuery]=useState('')
    const [isDark]=useTheme();
    return (
      <> 
          <main className={`${isDark?'dark':''}`}>
            <div className="search-filter-container">
              <SearchBar setQuery={setQuery}/>
              <Select setQuery={setQuery}/>
            </div>
            {
               query=='unmount'?'':<CountryList query={query}/>
            }
          </main>
      </>
  )
}
