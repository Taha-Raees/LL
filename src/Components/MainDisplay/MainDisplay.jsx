import React from 'react'
import "./MainDisplay.scss"
import { Link } from "react-router-dom";

const MainDisplay = () => {
  return (
    <div className="mainDisplay">
        <div className="disimg">
        <img src="/Little-Lemon/images/main.png" alt=''/>
        </div>
        <div className="aboutus">
            <h1>Our dishes are unique compositions</h1>
            <div className="pdiv">
            <hr />
            <p >The PUR in Chicago is a relaxed restaurant. We want to give our guests a warm, cheerful and uncomplicated welcome and, with attentive service and a cuisine that we like to enjoy ourselves, make them want a wonderful meal.</p>
            
            <p><span>Gourmet? Yes, but also no</span> - some of our dishes are in the direction of fine, upscale cuisine. However, that is not how we see ourselves. We stand for a relaxed, uncomplicated atmosphere, for a cozy evening and a great experience. Visit us - we have something on the menu for you, for the fine palate, but also for those who enjoy the basics.</p>
            <hr />
            </div>
        </div>
        <div className="welcome">
            <h2>WHETHER ALONE, AS A COUPLE, OR WITH THE WHOLE FAMILY, THERE IS SOMETHING FOR EVERY PALATE HERE.</h2>
            <hr />
            <h1>Fine cuisine in an extraordinary ambience</h1>
        </div>
        <div className="reservation">
          <div className="desc">
          <h1>ENJOY IN THE RESTAURANT</h1>
          <p>We invite you to enjoy PURE enjoyment in our restaurant or on the terrace during the following opening hours. Our kitchen is open until 9 p.m.</p>
          <Link className ="link" to="/reservation"><span>Book A Table</span></Link>
          </div>
        </div>
        <div className="reservation">
          <div className="desc">
          <h1>TO OUR MENU</h1>
          <p>We strive for sustainability in all areas and will always prepare dishes for you that are seasonal. We give priority to suppliers from the region.We wish you a nice time in our restaurant PUR.</p>
          <Link className ="link" to="/Menu"><span>Menu</span></Link>
          </div>
        </div>
        <div className="reservation">
          <div className="desc">
          <h1>OUR WINE SELECTION</h1>
          <p>Wines are a mainstay in our restaurant. Our wine list ranges from a simple Tempranillo to complex grape varieties such as an Amarone or a Brunello di Montalcino. If you would like a glass of wine with your menu or main course, we would be happy to advise you.</p>
          <Link className ="link" to="/"><span>Drinks</span></Link>
          </div>
        </div>
    </div>
  )
}

export default MainDisplay