import React from "react";
import imagesdonation from "../../assets/Randy-.jpg";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { setSignupData } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/opreations/authAPI";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
   const navigate = useNavigate();
const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Validate all required fields
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill all required fields');
      return;
    }

    // Save to Redux
    dispatch(setSignupData(formData));

    // Destructure form data for API call
    const { name, email, password } = formData;
    
    // Call signup API
    const signupPromise = dispatch(
      signUp(name, email, password, navigate)
    );
    
    signupPromise.then(
      (result) => {
        console.log("Signup success:", result);
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      },
      (error) => {
        console.error("Signup failed:", error);
      }
    );
  };
    

  return (
    <div>
      <section className="text-gray-600 body-font pt-8">
        <div className="container mx-auto gap-8 flex flex-wrap items-center lg:flex-nowrap">
          {/* Left Section: Image with Heading */}
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center p-15 mt-6 lg:mt-8">
            <img
              src={imagesdonation}
              alt="hero"
              className="object-cover object-center rounded w-full mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-900 text-center">
              Welcome to Our Platform
            </h1>
            <p className="text-gray-700 text-center mt-4">
              Join us to explore amazing features and opportunities.
            </p>
          </div>

          {/* Right Section: Form */}
          <form onSubmit={handleSubmit}>
            <div className="lg:w-2/2 w-full bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto mt-8 mr-1 lg:mr-2 md:mt-0">
              <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign Up
              </button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Already have an account?{" "}
                <a href="/auth/login" className="text-indigo-500 hover:underline">
                  Login here
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
