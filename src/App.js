import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
