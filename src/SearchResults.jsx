import React from 'react'

function SearchResults({ searchResults }) {
  return (
    <>
      <div className="col-lg-12 mb-4">
        {' '}
        <h2>Search Results:</h2>
      </div>
      {searchResults.map((bitCoin) => {
        return (
          <div className="col-lg-3 mb-3" key={bitCoin.id}>
            <div className="card">
              <img
                src={bitCoin.icon}
                className="card-img-top cardIcon"
                alt={bitCoin.name}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{bitCoin.name}</h5>
                <p className="card-text">{bitCoin.price.toFixed(3)} $</p>
                <p className="card-text">{bitCoin.symbol} </p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SearchResults
