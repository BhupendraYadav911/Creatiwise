import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const emailFromSignup = queryParams.get('email') || '';

  const [form, setForm] = useState({ email: emailFromSignup, password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const { email, password } = form;
    const newErrors = {};

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      newErrors.email = 'Invalid email';
    }

    if (!trimmedPassword) {
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(trimmedPassword)) {
      newErrors.password = 'Password must be at least 6 characters and include letters and numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const inputEmail = form.email.trim();
  const inputPassword = form.password.trim();

  const matchedUser = users.find(
    user => user.email === inputEmail && user.password === inputPassword
  );

  if (matchedUser) {
    console.log('Login successful');
    
    // ✅ Save logged-in user to localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
    
    navigate('/');
  } else {
    setErrors({ password: 'Invalid email or password' });
  }
};




  return (
    <div className="min-h-screen flex items-center justify-center bg-[#010208] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-8 rounded-lg w-full max-w-md shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            className={`w-full p-2 bg-[#222] rounded border ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        <div className="relative">
          <label className="block mb-1">Password</label>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            className={`w-full p-2 pr-10 bg-[#222] rounded border ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
            value={form.password}
            onChange={handleChange}
          />
          <div
            className="absolute right-3 top-[38px] cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-300"
        >
          Login
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{' '}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
