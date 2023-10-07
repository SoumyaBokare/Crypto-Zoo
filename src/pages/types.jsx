const crypto = {
    ath: 100,
    atl: 10,
    current_price: 50,
    id: "123",
    name: "Bitcoin",
    symbol: "BTC",
    high_24h: 60,
    low_24h: 40,
    owned: 5,
  };
  
  function CryptoComponent() {
    return (
      <div>
        <h1>{crypto.name}</h1>
        <p>Symbol: {crypto.symbol}</p>
        <p>Current Price: ${crypto.current_price}</p>
        <p>Highest Price (24h): ${crypto.high_24h}</p>
        <p>Lowest Price (24h): ${crypto.low_24h}</p>
        <p>Owned: {crypto.owned}</p>
      </div>
    );
  }
  
  export default CryptoComponent;
  