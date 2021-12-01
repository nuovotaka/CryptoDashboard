const ExchangeRate = ({exchangedData}) => {
  return (
    <div className="exchange-rate">
        <h2>Exchange Rate</h2>
        <h3>{exchangedData.exchangeRate}</h3>
        <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
    </div>
  )
}

export default ExchangeRate
