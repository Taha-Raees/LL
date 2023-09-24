import React from 'react';
import Link from 'next/link';
import "./CenterDisplay.scss";

const CenterDisplay = () => {
  return (
    <div className='Center'>
      <div className="BackgroundDisplay"></div>
      <div className="reservations-container">
        <div className="reservation">
          <div className="desc">
            <h1>ENJOY IN THE RESTAURANT</h1>
            <p>We invite you to enjoy PURE enjoyment in our restaurant or on the terrace during the following opening hours. Our kitchen is open until 9 p.m.</p>
            <Link className="link" href="/reservation"><span>Book A Table</span></Link>
          </div>
        </div>
        <div className="reservation">
          <div className="desc">
            <h1>TO OUR MENU</h1>
            <p>We strive for sustainability in all areas and will always prepare dishes for you that are seasonal. We give priority to suppliers from the region. We wish you a nice time in our restaurant PUR.</p>
            <Link className="link" href="/Menu"><span>Menu</span></Link>
          </div>
        </div>
        <div className="reservation">
          <div className="desc">
            <h1>OUR WINE SELECTION</h1>
            <p>Wines are a mainstay in our restaurant. Our wine list ranges from a simple Tempranillo to complex grape varieties such as an Amarone or a Brunello di Montalcino. If you would like a glass of wine with your menu or main course, we would be happy to advise you.</p>
            <Link className="link" href="/"><span>Drinks</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterDisplay;
