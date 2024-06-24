import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductProvider";
import "./ProductDetails.css";
import ProductsData from "../components/Product Filter/Product.json";
import { Link } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className="loading-section">Loading...</section>;
  }
  const productData = ProductsData.find((item) => item.id === product.id);
  // destructure product
  const { title, price, description, image } = product;
  const inStock = productData ? productData.inStock : false;

  const handleAddToCart = () => {
    if (inStock){
    addToCart(product, product.id);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); 
  }
  };

  return (
    <section className="image-section">
      <div className="image-section-div">
        {/* image and text wrapper */}
        <div className="image-text-div">
          {/* image */}
          <div className="description-img-div">
            <img className="description-img" src={image} alt="" />
          </div>
          {/* text */}
          <div className="txt-div">
            <h1 className="title-div">{title}</h1>
            <div className="price-div-1">$ {price}</div>
            <p className="description">{description}</p>
            
            <button disabled={!inStock} onClick={handleAddToCart} className="btn">
              {inStock ? 'Add To Cart' : 'Unavailable'}
            </button>
            <Link to={'/Contact Me'} className="contact-us-txt">Contact Us</Link>

          </div>       
        </div>
      </div>
      {showToast && (
        <div className="toast-notification">
          Product added to cart!
        </div>
      )}
    </section>
  );
}

export default ProductDetails;
