// import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="images/Main-logo.png" alt="Logo" />
        </div>
        <ul className="navbar">
          <li>
            <a href="#trade">Trade</a>
          </li>
          <li>
            <a href="#learn">Learn</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#patron">Become a Patron</a>
          </li>
        </ul>
        <div className="line-1 typewriter">
          <h2>
          Enter the cryptocurrency spectrum using Crypto Zoo.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Start now and get a chance to win a free NFT!
          </h2>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
