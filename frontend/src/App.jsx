import React from 'react'
import { Router,Routes,Navigate,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductForm from './pages/ProductForm';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllProductList from './pages/AllProductList';
import MyProductList from './pages/MyProductList';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='flex flex-col h-screen space-between'>
      <Navbar />
      <Routes className="flex-grow">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/all-products" element={<AllProductList />} />
        <Route path="/my-products" element={<MyProductList />} />
        <Route path="/product/new" element={<ProductForm />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App