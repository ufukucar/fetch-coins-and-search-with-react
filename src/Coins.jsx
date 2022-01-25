import React, { useState, useEffect } from 'react'
import Coin from './Coin'
import SearchResults from './SearchResults'

function Coins(props) {
  const setSearchResults = props.setSearchResults
  const searchResults = props.searchResults
  const search = props.search

  const [bitCoins, setBitCoins] = useState([])

  useEffect(() => {
    // verileri cek
    fetchCoins()
  }, [])

  const fetchCoins = async () => {
    let response = await fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=16`,
      {
        method: 'GET',
      },
    )

    let responseBody = await response.json()

    // state guncelleniyor
    setBitCoins(responseBody.coins)
    //console.log(coins)
  }

  useEffect(() => {
    //console.log('search keys: ', search)
    getSearchResults(search)
  }, [search])

  const getSearchResults = (search) => {
    // console.log('getREsults param: ', search)

    //setSearchResults(bitCoins.toLowerCase().includes(search))

    const filteredResults = bitCoins.filter((bitCoin) => {
      let coin = bitCoin.name.toLowerCase()
      // console.log('coin: ', coin)
      return coin.includes(search.toLowerCase())
    })

    //console.log(filteredResults)

    setSearchResults(filteredResults)
  }

  //console.log('Coins search: ', search)

  //console.log('Search results: ', searchResults)

  //console.log('Coins log: ', bitCoins)

  return (
    <div className="row mt-4">
      {searchResults.length ? (
        <SearchResults searchResults={searchResults} />
      ) : (
        bitCoins.map((bitCoin) => {
          return <Coin bitCoin={bitCoin} key={bitCoin.id} />
        })
      )}
    </div>
  )
}

export default React.memo(Coins)
