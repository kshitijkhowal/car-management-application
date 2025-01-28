import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {

  const {login}=useAuthStore();

  const handleLogin = (formData) => {
    // console.log('Login Data:', formData);
    login(formData);
  };

  return (
    <AuthForm
      title="Login to Your Account"
      onSubmit={handleLogin}
      buttonText="Login"
      isSignup={false} // Not a signup form
    />
  );
};

export default LoginPage;
