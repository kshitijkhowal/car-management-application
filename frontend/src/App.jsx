import React from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductForm from './pages/ProductForm';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllProductList from './pages/AllProductList';
import MyProductList from './pages/MyProductList';
import Footer from './components/Footer';
import { useAuthStore } from './store/useAuthStore.js';

// For hot toast notifications
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { authUser } = useAuthStore(); // Zustand store for authentication state

  return (
    // <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar isAuthenticated={!!authUser} />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={!authUser ? <LoginPage /> : <Navigate to="/my-products" />}
            />
            <Route
              path="/signup"
              element={!authUser ? <SignupPage /> : <Navigate to="/my-products" />}
            />

            {/* Protected Routes */}
            <Route path="/all-products" element={<AllProductList />} />
            <Route
              path="/my-products"
              element={authUser ? <MyProductList /> : <Navigate to="/login" />}
            />
            <Route
              path="/product/new"
              element={authUser ? <ProductForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/product/:id"
              element={authUser ? <ProductDetails /> : <Navigate to="/login" />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster />
      </div>
    // </Router>
  );
};

export default App;
