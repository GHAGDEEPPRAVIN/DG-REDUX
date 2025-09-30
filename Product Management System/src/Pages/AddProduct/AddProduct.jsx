import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Slices/productSlice';
import './AddProduct.css';

export default function AddProduct() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.price) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addProduct(formData));

    setFormData({
      title: '',
      category: '',
      price: '',
    });

    alert("Product added successfully!");
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
