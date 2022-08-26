// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesData} = this.props
    return (
      <div className="cryptocurrency-bg-container">
        <h1 className="title ">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="cryptocurrencies-list-container">
          <div className="list-header">
            <p className="list-coin-type-heading ">Coin Type</p>
            <div className="usd-and-euro-values-container">
              <p className="list-coin-value-heading">USD</p>
              <p className="list-coin-value-heading">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrencies-list">
            {cryptocurrenciesData.map(eachCryptoCurrency => (
              <CryptocurrencyItem
                CryptocurrencyDetails={eachCryptoCurrency}
                key={eachCryptoCurrency.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
