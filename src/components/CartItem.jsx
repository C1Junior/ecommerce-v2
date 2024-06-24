import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/CartItem.css";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="cart">
      <div className="cart-main-div">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="cart-img" src={image} alt="" />
        </Link>
        <div className="main-title-div">
          {/*title and remove icon*/}
          <div className="title-div-1">
            {/* title */}
            <Link to={`/product/${id}`} className="link-1">
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className="main-icon-div">
              <IoMdClose className="remove-icon" />
            </div>
          </div>
          <div className="qty-div">
            {/* qty */}
            <div className="minus-icon">
              {/* minus icon */}
              <div onClick={()=> decreaseAmount(id)} className="remove-div">
                <IoMdRemove />
              </div>
              {/* amount  */}
              <div className="amount-div">{amount}</div>
              {/* plus icon */}
              <div onClick={()=> increaseAmount(id)} className="add-icon">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="price-div-2">$ {price}</div>
            {/* final price */}
            {/* make the price at 2 decimals  */}
            <div className="total-price">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
