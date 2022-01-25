import './App.css'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Coins from './Coins'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [search, setSearch] = useState('')

  //console.log('search: ', search)

  return (
    <div className="App">
      <div className="container-fluid ">
        <Header search={search} setSearch={setSearch} />

        <Coins
          search={search}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </div>
    </div>
  )
}

export default App
