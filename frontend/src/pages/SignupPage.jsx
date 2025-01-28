import React from 'react';
import AuthForm from '../components/AuthForm';

const SignupPage = () => {
  const handleSignup = (formData) => {
    // Call your API or handle signup logic here
    console.log('Signup Data:', formData);
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
