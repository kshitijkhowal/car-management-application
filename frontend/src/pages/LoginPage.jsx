import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  const handleLogin = (formData) => {
    // Call your API or handle login logic here
    console.log('Login Data:', formData);
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
