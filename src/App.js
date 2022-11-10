import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [items, updateCart] = useState(new Map());
  const [cost, updateCost] = useState(0);

  const addItem = (name, price) => {
    updateCart(new Map(items.set(name, items.get(name) ? items.get(name) + 1 : 1)))
    updateCost(cost + price)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="content">
        <div className="menu">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} updateCart={addItem}/>
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          {Array.from(items).map(([val, key]) => 
            <p>{key}x {val}</p>)
          }
          {cost !== 0 && <div className="total"> Total: {cost}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
