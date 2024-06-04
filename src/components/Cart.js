import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const navigate = useNavigate()
  console.log(cart)
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  const handleCheckout = () => {
    navigate("/checkout")
  }

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const deleteProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <div className="container">
      <h2>Shopping Cart</h2>

      {cart.length > 0 ? (
        <>
          {" "}
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center mt-3"
              >
                <div>
                  <img className="cart-img" src={item.image} alt="" />
                  <strong style={{ marginLeft: "8px" }}>
                    {item.name}
                  </strong> -{" "}
                  <strong className="text-primary">$ {item.price}</strong>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <button disabled className="btn btn-primary btn-sm me-2">
                    {item.quantity}
                  </button>

                  <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-Summary">
            <h3>Order Summary</h3>
            <hr />
            <div>
              <strong>Total Quantity: </strong>
              <strong className="text-danger">{totalQuantity}</strong>
            </div>
            <div>
              <strong>Total Price: </strong>{" "}
              <strong className="text-danger">${totalPrice}</strong>
            </div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary mt-3"
              disabled={cart.length === 0}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="alert alert-warning bg-light">No Product in Cart</div>
      )}
    </div>
  )
}

export default Cart
