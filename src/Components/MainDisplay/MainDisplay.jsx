import React from 'react'
import "./MainDisplay.scss"
import Image from 'next/image';

const MainDisplay = () => {
  return (
    <div className="mainDisplay">
        <div className="disimg">
        <Image src="/main.png" alt='' width={100} height={100} layout="responsive" />
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
    </div>
  )
}

export default MainDisplay