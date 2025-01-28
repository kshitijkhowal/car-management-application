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
import { useAuthStore } from './store/useAuthStore.js';


//for hot toast
import { Toaster } from 'react-hot-toast';



const App = () => {
  const {authUser} = useAuthStore();
  // console.log(authUser);

  return (
    <div className='flex flex-col h-screen space-between'>
      <Navbar isAuthenticated={authUser}/>
      <Routes className="flex-grow">
        <Route path="/" element={<HomePage />} />
        <Route
              path="/login"
              element={!authUser ? <LoginPage /> : <Navigate to="/my-products" />}
            />
            <Route
              path="/signup"
              element={!authUser ? <SignupPage /> : <Navigate to="/my-products" />}
            />
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
            <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App