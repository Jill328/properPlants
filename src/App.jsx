import { useState } from 'react';
import plants from './data';
import PlantGrid from "./components/Plants/PlantGrid"; //displays grid of all plants; maps thru plant data and renders a PlantCard for each plant
import Cart from "./components/ShoppingCart/Cart";//Displays all items in cart; maps through cart items and renders CartItem for each
import "./index.css";

 function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id
           ? {...item, quantity: item.quantity + 1 }
           : item
        );
      } else {
        return [...prevCart, {...plant, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (plantId) => {
    setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === plantId
          ? {...item, quantity: item.quantity +1 }
          : item
        ) 
    );
  };
  
  const decrementQuantity = (plantId) => {
    setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === plantId
          ? {...item, quantity: item.quantity -1 }
           : item
        )
        .filter((item) => item.quantity > 0)
      );
  };

  return (
    <div className="app">
      <div className="plant-section">
      <h1>Proper Plants</h1>
      <h2>Plants</h2>
      <PlantGrid plants={plants} onAddToCart={addToCart} />
      </div>

      <Cart
        cartItems={cart}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
      />
    </div>
  );
}

export default App;