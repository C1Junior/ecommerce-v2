import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Function to handle category selection change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Filter products based on search input and selected category
    const filtered = products.filter((product) => {
      // Checking if product title contains search input (case insensitive)
      const title = product.title.toLowerCase();
      const search = searchInput.toLowerCase();
      const isInSearch = title.includes(search);
      
      // Check if product category matches selected category
      const isInCategory = selectedCategory === '' || product.category === selectedCategory;
      
      return isInSearch && isInCategory;
    });

    setFilteredProducts(filtered);
  }, [products, searchInput, selectedCategory]);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        searchInput,
        handleSearchInputChange,
        selectedCategory,
        handleCategoryChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
