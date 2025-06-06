import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";
import { CartContext } from "./contextAPIs";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleInc = (product) => {
    const prod = cartItems.find((item) => item._id === product._id);
    if (!prod) {
      return setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
    }
    const _items = cartItems.map((item) => ({
      ...item,
      qty: product._id === item._id ? item.qty + 1 : item.qty,
    }));
    setCartItems(_items);
  };

  const handleDec = (product) => {
    const _items = cartItems.map((item) => ({
      ...item,
      qty: product._id === item._id ? item.qty - 1 : item.qty,
    }));
    setCartItems(_items);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleInc, handleDec }}>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
