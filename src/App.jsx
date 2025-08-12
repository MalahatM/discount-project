import './App.css';
import { products } from './products';

function App() {
  return (
    <div>
      <h1>Products List</h1>
      <div className="products-container">
        {products.map(product => (
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
