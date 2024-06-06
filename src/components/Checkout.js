import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  const handleConfirmOrder = () => {
    const { firstName, lastName, phone, address, city, state, zipcode } =
      formData
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !zipcode
    ) {
      alert("Please fill out all the required fields before placing the order.")
      return
    }
    alert("Order confirmed!")
    setCart([])
    navigate("/")
  }

  return (
    <div className="container mt-5">
      {cart.length > 0 ? (
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <h4>Order Summary</h4>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th width="50%">Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price * item.quantity}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="2" className="text-end fw-bold">
                        Grand Total
                      </td>
                      <td colSpan="2" className="text-end fw-bold">
                        ${totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                <h4>Basic Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label> First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label> Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label> Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <label> Full Address</label>
                      <textarea
                        rows="3"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        name="zipcode"
                        className="form-control"
                        value={formData.zipcode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group text-end">
                      <button
                        type="button"
                        className="btn btn-primary mx-1"
                        onClick={handleConfirmOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning bg-light">No Product in Cart</div>
      )}
    </div>
  )
}

export default Checkout
