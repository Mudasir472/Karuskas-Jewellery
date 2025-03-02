import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import Home from "./pages/Home"
import Navbar from "./components/layout/Navbar"
import Footer from './components/layout/Footer'
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Logout from "./components/auth/Logout";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { productsFetch } from "./store/product/productSlice";
import CategoryPage from "./pages/Category";
function App() {
  const dispatch = useDispatch();

  // Fetch products when the app loads
  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Toaster reverseOrder={false} />
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item-details/:itemId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="/category/:category" element={<CategoryPage />} />

          </Routes>
        </div>
        {/* <Footer /> */}
        <Footer />
      </Router>
    </>
  )
}

export default App