import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuthStore } from '../store/useAuthStore';

const SignupPage = () => {

  const {signup}=useAuthStore();


  const handleSignup = (formData) => {
    // console.log('Signup Data:', formData);
    signup(formData);
  };

  return (
    <AuthForm
      title="Create a New Account"
      onSubmit={handleSignup}
      buttonText="Sign Up"
      isSignup={true} // It's a signup form
    />
  );
};

export default SignupPage;
