import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import "../Styles/Product.css";
import ProductsData from "../components/Product Filter/Product.json";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastClass, setToastClass] = useState("");

  const { id, image, category, title, price } = product;

  const productData = ProductsData.find((item) => item.id === product.id);
  const inStock = productData ? productData.inStock : false;

  const handleAddToCart = () => {
    if (inStock) {
      addToCart(product, id);
      setToastMessage("Product added to cart!");
      setToastClass("toast-success");
    } else {
      setToastMessage("Product is not available!");
      setToastClass("toast-error");
    }
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <div
        className="product-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-2">
          {/* Image */}
          <div className="product-3">
            <Link to={`/product/${id}`}>
              <img className="img-1" src={image} alt={title} />
            </Link>
          </div>
        </div>
        {/* Buttons */}
        <div className={`div-button-1 ${isHovered ? 'visible' : ''}`}>
          <button 
            onClick={handleAddToCart} 
            className={`button-1 ${isHovered ? 'visible' : ''}`}
            disabled={!inStock}
          >
            <div className={`icon-div ${isHovered ? 'visible' : ''}`}>
              <BsPlus className={`plus-icon ${isHovered ? 'visible' : ''}`} />
            </div>
          </button>
          <Link to={`/product/${id}`} className={`eye-fill ${isHovered ? 'visible' : ''}`}>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className='text-div'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='h2-txt'>{title}</h2>
        </Link>
        {!inStock && (
          <span className="out-of-stock">Not available</span>
        )}
        <div className='price-div'>$ {price}</div>
      </div>
      {showToast && (
        <div className={`toast-notification ${toastClass}`}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default Product;
