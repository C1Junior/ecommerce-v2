import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductProvider';
import Product from '../components/Product';
import './HomeStyle.css';
import Hero from '../components/Hero';

function Home() {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = products.filter((item) => {
    const matchesCategory = 
      categoryFilter === '' || 
      item.category === categoryFilter;

    const matchesSearchQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearchQuery;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'alphabeticalAZ') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'alphabeticalZA') {
      return b.title.localeCompare(a.title);
    } else if (sortOption === 'priceLowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'priceHighToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className='main-main'>
      <Hero />
      <div className="search-filter-container">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="alphabeticalAZ">Alphabetical: A-Z</option>
          <option value="alphabeticalZA">Alphabetical: Z-A</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
      <section className="box-1">
        <div className="container-mx-auto">
          <div className="product-box">
            {sortedProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
