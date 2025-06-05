import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/product-detail" component={ProductDetails} exact />
    </Router>
  );
}

export default App;
