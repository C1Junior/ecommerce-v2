import React, { useContext, useState, useEffect, useRef } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../img/Gray_and_Black_Simple_Studio_Logo.png";
import UserProfileLink from "../components/UserProfileLink";
import "../Styles/Header.css";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="main-header-div">
      <div className="logo-div">
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <div className="header-div-icon">
          <div className="home-dropdown" ref={dropdownRef}>
            <Link to={"/"} className="home-txt">
              Home
            </Link>
            <IoIosArrowDown className="arrow-icon" onClick={toggleDropdown} />
            <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              <div className="dropdown-menu-div">
                <Link to={"Contact Me"} className="dropdown-item">
                  Contact Me
                </Link>
              </div>
              <div className="line"></div>
              <div className="dropdown-menu-div">
                <Link to="/SignUp" className="dropdown-item">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <FaFacebookF className="facebook-icon" />
          <UserProfileLink />
          <LanguageSwitcher />
          <div onClick={() => setIsOpen(!isOpen)} className="header-div">
            <BsBag className="bsbag" />
            <div className="item-amount-div">{itemAmount}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
