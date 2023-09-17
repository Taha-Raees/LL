import React from 'react'
import "./Menu.scss"

const Menu = () => {
  return (
    <div className="Menu">
      
     <div className="back">
     </div>
      <div className="wrapper">
        <div className="title">
          <h1>Soups, appetizers and entrées</h1>
          <p>GET IN THE MOOD FOR OUR MAIN COURSES WITH A DELICIOUS STARTER</p>
        </div>
        <div className="card">
        <div className="itemTitle">
          <h2>SOUP</h2>
          <h3>SMALL</h3>
          <h3>BIG</h3>
        </div>
        <div className="item">
          <h2>Crustacean soup with shrimp tartare</h2>
          <h3>EUR 13.50</h3>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        <div className="item">
          <h2>Sweet potato cream soup with bacon</h2>
          <h3>EUR 13.50</h3>
          <h3>EUR 13.50</h3>
        </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="title">
          <h1>main courses</h1>
          <p>CHOOSE FROM OUR REGULARLY CHANGING MAIN COURSES</p>
        </div>
        <div className="card">
        <div className="itemTitle">
          <h2>MAIN DISHES</h2>
          <h3>Price</h3>
        </div>
        <div className="item">
          <h2>Mushroom risotto with shrimp</h2>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        <div className="item">
          <h2>Confit halibut with bean risotto and saffron sauce</h2>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        <div className="item">
          <h2>Saddle of venison with potato dumplings, red cabbage and lingonberry sauce</h2>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        <div className="item">
          <h2>Cod with saffron bulgur, pak choi and sherry foam</h2>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        <div className="item">
          <h2>Saddle of Duroc pork, serviette dumplings and winter vegetables</h2>
          <h3>EUR 13.50</h3>
        </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="title">
          <h1>dessert</h1>
          <p>ROUND OFF YOUR EXPERIENCE AT THE PUR WITH A SUITABLE DESSERT</p>
        </div>
        <div className="card">
        <div className="itemTitle">
          <h2>DESSERT</h2>
          <h3>Price</h3>
        </div>
        <div className="item">
          <h2>Crème Brûlée, two kinds of mango</h2>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        <div className="item">
          <h2>Cheesecake with wild berries</h2>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        <div className="item">
          <h2>Cheesecake with wild berries</h2>
          <h3>EUR 13.50</h3>
        </div>
        <hr />
        </div>
        
      </div>
    
    </div>
  )
}

export default Menu