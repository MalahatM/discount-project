import './App.css';
import { products } from './products';
import React, { useState } from 'react';

function App() {
  const [budget, setBudget] = useState('');

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    if (value === '' || Number(value) >= 1) {
      setBudget(value);
    }
  };

  const filteredProducts =
    budget === ''
      ? products
      : products.filter((product) => product.off_price <= Number(budget));

  const filteredAndSortedProducts = filteredProducts.sort((a, b) => {
    const discountPercentA = ((a.price - a.off_price) / a.price) * 100;
    const discountPercentB = ((b.price - b.off_price) / b.price) * 100;
    return discountPercentB - discountPercentA;
  });

  return (
    <div>
      <h1>Products List</h1>
      <div className="budget-input-container">
        <label htmlFor="budgetInput">Please enter your budget ($):</label>
        <input
          id="budgetInput"
          type="number"
          placeholder="Enter your budget"
          value={budget}
          onChange={handleBudgetChange}
          min={1} // more than 1
        />
      </div>

      <div className="products-container">
        {filteredAndSortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}$</p>
            <p className="product-off-price">{product.off_price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
