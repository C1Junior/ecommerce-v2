import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ContactMe from "./components/ContactMe";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Contact Me" element={<ContactMe/>}/>
        <Route path="/Profile Card" element={<ProfileCard/>}/>
      </Routes>
     
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
