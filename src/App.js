import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing.js";
import ProductDetails from "./containers/ProductDetails.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />}></Route>
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          ></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
