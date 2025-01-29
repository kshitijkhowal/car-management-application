import React, { useState } from 'react';

const AuthForm = ({ title, onSubmit, buttonText, isSignup }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card w-full max-w-md shadow-md">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
          <form onSubmit={handleSubmit}>
            {/* Full Name Field (Only for Signup) */}
            {isSignup && (
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                  value={formData.fullname}
                  onChange={handleChange}
                  required={isSignup} // Required only during Signup
                />
              </div>
            )}

            {/* Email Field */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">{buttonText}</button>
            </div>
          </form>

          {/* Toggle Between Login and Signup */}
          <p className="text-center mt-4 text-gray-600">
            {isSignup ? (
              <>
                Already have an account?{' '}
                <a href="/login" className="text-primary hover:underline">
                  Login
                </a>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <a href="/signup" className="text-primary hover:underline">
                  Sign Up
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
