import './App.css';
import { products } from './products';
import React, { useState } from 'react';

function App() {
	const [budget, setBudget] = useState('');
	 const filteredProducts = !budget || budget === '0' 
    ? products 
    : products.filter(product => product.off_price <= Number(budget));
  return (
	
    <div>
      <h1>Products List</h1>
	   <div className="budget-input-container">
  <label htmlFor="budgetInput">Enter your budget:</label>
  <input
    id="budgetInput"
    type="number"
    placeholder="Enter your budget"
    value={budget}
  onChange={(e) => {
            const value = Math.min(Number(e.target.value), 500);
            setBudget(value);
          }}
          max={500}
        /></div>

      <div className="products-container">
        {filteredProducts.map(product => (
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
