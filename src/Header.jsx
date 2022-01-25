import React from 'react'

function Header(props) {
  return (
    <div className="row">
      <div className="col-lg-12 p-0">
        <div className="header d-flex p-3 bd-highlight justify-content-left align-items-center">
          <h3 className=" headerH3">
            {' '}
            <a href="/" className="headerH3">
              CYRIPTO COINS
            </a>{' '}
          </h3>
          <div className="ml-auto">
            <input
              type="text"
              className="form-control w500"
              placeholder="Search here.."
              onChange={(event) => {
                let value = event.target.value.trim()
                // console.log('value: ', value)

                props.setSearch(value)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
