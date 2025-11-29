import React from "react";
import imagesdonation from "../../assets/Randy-.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/opreations/authAPI";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    let isValid = true;

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isValid = false;
    } else if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
      isValid = false;
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      isValid = false;
    }

    if (isValid) {
      setIsLoading(true);
      try {
        // Dispatch Redux login action
        await dispatch(login(email, password, navigate));
      } catch (err) {
        // handle any dispatch errors if necessary
        console.error("Login failed:", err);
      }
      setIsLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap items-center lg:flex-nowrap">
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
        <div className="lg:w-2/5 w-full bg-gray-100 rounded-lg p-10 flex flex-col md:ml-auto mt-8 mr-1 lg:mr-6 md:mt-0">
          <form onSubmit={handleSubmit}>
          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">
            Login
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              autoComplete="email"
              placeholder="Enter email address"
              required
              
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-white rounded border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out`}
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
              autoComplete="current-password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={`w-full bg-white rounded border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <Link
            to="/auth/signup"
            className="text-sm text-blue-800 hover:underline mb-4"
          >
            Don't have an account? Sign up
          </Link>
          <button 
           type="submit"
          disabled={isLoading}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        
              {isLoading ? (
            <span className="flex items-center">
              <svg className="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing In...
            </span>
          ) : (
            'Sign In'
          )}
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Don't have an account?
            <Link to="/auth/signup" className="text-indigo-500 hover:underline">
              Sign up
            </Link>
          </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
