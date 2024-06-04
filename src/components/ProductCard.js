import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: parseInt(quantity) })
    alert("Product Added successfully ")
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div key={product.id} className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="details">
        <span className="price">${product.price}</span>
        <div style={{ display: "flex" }}>
          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <button disabled className="btn btn-primary btn-sm me-2">
            {quantity}
          </button>

          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>

      <button className="addtocart-butt" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
