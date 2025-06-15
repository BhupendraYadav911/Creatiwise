import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
  const { name, email, password, confirm } = form;
  const newErrors = {};

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();
  const trimmedConfirm = confirm.trim();

  // Name validation
  if (!trimmedName) {
    newErrors.name = 'Full name is required';
  } else if (!/^[A-Za-z\s]{2,}$/.test(trimmedName)) {
    newErrors.name = 'Enter a valid name (letters only)';
  }

  // Email validation
  if (!trimmedEmail) {
    newErrors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
    newErrors.email = 'Enter a valid email';
  }

  // Password validation
  if (!trimmedPassword) {
    newErrors.password = 'Password is required';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(trimmedPassword)) {
    newErrors.password = 'Password must be at least 6 characters and include letters and numbers';
  }

  // Confirm password
  if (!trimmedConfirm) {
    newErrors.confirm = 'Confirm password is required';
  } else if (trimmedConfirm !== trimmedPassword) {
    newErrors.confirm = 'Passwords do not match';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;

  const trimmedEmail = form.email.trim();
  const trimmedPassword = form.password.trim();
  const trimmedName = form.name.trim();

  const user = { name: trimmedName, email: trimmedEmail, password: trimmedPassword };
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  const emailExists = existingUsers.some(u => u.email === trimmedEmail);
  if (emailExists) {
    setErrors({ email: 'Email already exists' });
    return;
  }

  const updatedUsers = [...existingUsers, user];
  localStorage.setItem('users', JSON.stringify(updatedUsers));

  console.log('User registered:', user);
  navigate(`/login?email=${encodeURIComponent(trimmedEmail)}`);
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#010208] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-8 rounded-lg w-full max-w-md shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

        <div>
          <label className="block mb-1">Full Name</label>
          <input
            name="name"
            type="text"
            className={`w-full p-2 bg-[#222] rounded border ${
              errors.name ? 'border-red-500' : 'border-gray-600'
            }`}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            className={`w-full p-2 bg-[#222] rounded border ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            }`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <label className="block mb-1">Password</label>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            className={`w-full p-2 pr-10 bg-[#222] rounded border ${
              errors.password ? 'border-red-500' : 'border-gray-600'
            }`}
            value={form.password}
            onChange={handleChange}
          />
          <div
            className="absolute right-3 top-[38px] cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
        </div>

        <div className="relative">
          <label className="block mb-1">Confirm Password</label>
          <input
            name="confirm"
            type={showConfirm ? 'text' : 'password'}
            className={`w-full p-2 pr-10 bg-[#222] rounded border ${
              errors.confirm ? 'border-red-500' : 'border-gray-600'
            }`}
            value={form.confirm}
            onChange={handleChange}
          />
          <div
            className="absolute right-3 top-[38px] cursor-pointer text-gray-400"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </div>
          {errors.confirm && <p className="text-red-400 text-xs mt-1">{errors.confirm}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-300"
        >
          Sign Up
        </button>

        <p className="text-sm text-center">
          Already have an account?{' '}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
