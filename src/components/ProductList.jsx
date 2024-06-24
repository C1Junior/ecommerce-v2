import React, { useContext } from 'react';
import { ProductContext } from './ProductProvider';
import '../Styles/ProductList.css';

function ProductList() {
  const { products, searchInput, handleSearchInputChange, selectedCategory, handleCategoryChange } = useContext(ProductContext);

  return (
    <div className="product-list-container">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchInput}
        onChange={handleSearchInputChange}
        className="search-input"
      />

      {/* Category filter */}
      <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} className="category-select">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {/* Product list */}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.category}</p>
            </div>
            <img src={product.image} alt={product.title} className="product-image" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
