import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import Book1 from "../Images/Book1.jpeg"
import Book2 from "../Images/Book2.jpeg"
import Shirt1 from "../Images/Shirt1.jpeg"
import shooes1 from "../Images/shooes1.jpeg"
import Camera from "../Images/Camera.jpeg"
import Shirt2 from "../Images/Shirt2.jpeg"
import Shirt3 from "../Images/Shirt3.jpeg"
import shooes2 from "../Images/shooes2.jpeg"
import shooes3 from "../Images/shooes3.jpeg"
import Watch from "../Images/Watch.jpeg"
import ProductCard from "./ProductCard"

const ProductList = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const products = [
    {
      id: 1,
      name: "Book 1",
      price: 10,
      image: Book1,
      category: "book",
    },
    {
      id: 2,
      name: "Blue Shirt",
      price: 20,
      image: Shirt1,
      category: "shirt",
    },
    {
      id: 3,
      name: "White Shoes",
      price: 30,
      image: shooes1,
      category: "shoes",
    },
    {
      id: 4,
      name: "Camera",
      price: 40,
      image: Camera,
      category: "camera",
    },
    {
      id: 5,
      name: "White Shirt",
      price: 50,
      image: Shirt2,
      category: "shirt",
    },
    {
      id: 6,
      name: "Shoes",
      price: 20,
      image: shooes2,
      category: "shoes",
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 100,
      image: Watch,
      category: "watch",
    },
    {
      id: 8,
      name: "Shirt 3",
      price: 250,
      image: Shirt3,
      category: "shirt",
    },
    {
      id: 9,
      name: "shooes 3",
      price: 90,
      image: shooes3,
      category: "shooes",
    },
    {
      id: 10,
      name: "New Book",
      price: 500,
      image: Book2,
      category: "book",
    },
  ]

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const filterProductsByCategory = () => {
    if (selectedCategories.length === 0) {
      return products
    }
    const filteredProducts = products.filter((product) =>
      selectedCategories.includes(product.category)
    )
    return filteredProducts
  }

  return (
    <div className="home-container">
      <div style={{ display: "flex" }}>
        <div className="category-checkboxes">
          <h5>Filter</h5>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("shoes")}
              onChange={() => handleCategoryChange("shoes")}
            />
            Shoes
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("camera")}
              onChange={() => handleCategoryChange("camera")}
            />
            Camera
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("watch")}
              onChange={() => handleCategoryChange("watch")}
            />
            Watch
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes("shirt")}
              onChange={() => handleCategoryChange("shirt")}
            />
            Shirt
          </label>
        </div>
        <div className="products">
          {filterProductsByCategory().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
