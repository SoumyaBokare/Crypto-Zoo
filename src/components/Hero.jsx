import { useState } from "react";

const Hero = () => {
  const [bitcoinAmount, setBitcoinAmount] = useState(0);
  const [ethereumAmount, setEthereumAmount] = useState(0);
  const [solanaAmount, setSolanaAmount] = useState(0);
  const [tetherAmount, setTetherAmount] = useState(0);
  const [cardanoAmount, setCardanoAmount] = useState(0);
  const [polygonAmount, setPolygonAmount] = useState(0);

  const handleIncrement = (setter) => {
    setter((prevAmount) => prevAmount + 1);
  };

  const handleDecrement = (setter) => {
    setter((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : prevAmount));
  };

  return (
    <div className="Content-container">
      <div className="Content">
        <div className="Hero">
          <h1>Discover the Fascinating World of Crypto Assets</h1>
          <p>Explore Virtual Coins, Tokens, and More in Our Interactive Crypto Showcase.</p>
          <div className="redirect-container">
          <button className="redirect">LETS MINE OFF!</button>
          </div>
        </div>
        <hr />
        <div className="Main-content">
          <section className="market">
            <h2 className="rubik-font">Popular Cryptocurrencies</h2>
            <div className="crypto-list">
              <div className="crypto-row">
                {/* Bitcoin */}
                <div className="crypto-item">
                  <img src="./images/bitcoin.png" alt="Bitcoin Logo" />
                  <p>Animals bougth: {bitcoinAmount}</p>
                  <button className="add" onClick={() => handleIncrement(setBitcoinAmount)}>+</button>
                  <button className="minus" onClick={() => handleDecrement(setBitcoinAmount)}>-</button>
                  <h2>Bitcoin (BTC)</h2>
                  <p>Current Price: $26,000</p>
                </div>
                {/* Ethereum */}
                <div className="crypto-item">
                  <img src="./images/ethereum.png" alt="Ethereum Logo" />
                  <p>Animals bougth: {ethereumAmount}</p>
                  <button className="add" onClick={() => handleIncrement(setEthereumAmount)}>+</button>
                  <button className="minus" onClick={() => handleDecrement(setEthereumAmount)}>-</button>
                  <h2>Ethereum (ETH)</h2>
                  <p>Current Price: $200</p>
                </div>
              </div>
              {/* /SOLANA/ */}
              <div className="crypto-row">
                <div className="crypto-item">
                  <img src="./images/solana.png" alt="Solana Logo" />
                  <p>Animals bougth: {solanaAmount}</p>
                  <button className="add" onClick={() => handleIncrement(setSolanaAmount)}>+</button>
                  <button className="minus" onClick={() => handleDecrement(setSolanaAmount)}>-</button>
                  <h2>Solana (SOL)</h2>
                  <p>Current Price: $20</p>
                </div>
                {/* /TETHER/ */}
                <div className="crypto-item">
                  <img src="./images/tether.png" alt="Tether Logo" />
                  <p>Animals bougth: {tetherAmount}</p>
                  <button className="add" onClick={() => handleIncrement(setTetherAmount)}>+</button>
                  <button className="minus" onClick={() => handleDecrement(setTetherAmount)}>-</button>
                  <h2>Tether (USDT)</h2>
                  <p>Current Price: $1</p>
                </div>
              </div>
              {/* /CARDANO/ */}
              <div className="crypto-row">
                <div className="crypto-item">
                  <img src="./images/cardano.png" alt="Cardano Logo" />
                  <p>Animals bougth: {cardanoAmount}</p>
                  <button className="add" onClick={() => handleIncrement(setCardanoAmount)}>+</button>
                  <button className="minus" onClick={() => handleDecrement(setCardanoAmount)}>-</button>
                  <h2>Cardano (ADA)</h2>
                  <p>Current Price: $2</p>
                </div>
                {/* /POLYGON/ */}
                <div className="crypto-item">
                  <img src="./images/polygon.png" alt="Polygon Logo" />
                  <p>Animals bougth: {polygonAmount}</p>
                  <button className="add" onClick={() => handleIncrement(setPolygonAmount)}>+</button>
                  <button className="minus" onClick={() => handleDecrement(setPolygonAmount)}>-</button>
                  <h2>Polygon (MATIC)</h2>
                  <p>Current Price: $0.5</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr />
      <footer className="footer">

        <div className="company-logo">

          <img src='/public/images/footer_1.png' />

          <p className="company-name">Crypto Zoo © 2023</p>
        </div>

        <div>
          <div className="address">
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
          </div>
          <div className="phone">
            <p>+1.555.555.5555</p>
          </div>
          <div className="mail">
            <p><a href="mailto:support@company.com">cryptozoo@comp.com</a></p>
          </div>
          <p className="company-about">
            <span>CoinDCX </span>
            © 2023 | Crypto Zoo | All rights reserved
          </p>
        </div>

      </footer>
    </div>
  );
};


export default Hero;
