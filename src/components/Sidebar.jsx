import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import "../Styles/Sidebar.css";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);


  const sidebarClass = isOpen ? "sidebar-div open" : "sidebar-div closed";
  return (
    <div className={sidebarClass}>
      
      <div className="sidebar-div-1">
        <div className="shop-bag-div">Shopping Bag ({itemAmount})</div>
        {/* icon */}
        <div onClick={handleClose} className="arrow-forward-div">
          <IoMdArrowForward className="arrow-forward" />
        </div>
      </div>
      <div className="cart-div">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="main-total-div">
        <div className="total-div">
          {/* total */}
          <div className="total-price-div">
            <span className="total-price-span">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={clearCart} className="delete-icon">
            <FiTrash2 id="trash-icon"/>
          </div>
        </div>
        <div className="btn-div">
        <Link to={'/'} className="view-div">View Cart</Link>
        <Link to={'/'} className="view-div-1">Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
