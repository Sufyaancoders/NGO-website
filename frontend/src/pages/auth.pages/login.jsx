import React from 'react';
import imagesdonation from '../../assets/Randy-.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
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
                    <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">Login</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" 
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" 
                        />
                    </div>
                    <Link to= "/auth/signup" className="text-sm text-blue-800 hover:underline mb-4">
                        Don't have an account? Sign up
                    </Link>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Login
                    </button>
                  
                    <p className="text-xs text-gray-500 mt-3 text-center">
                        Don't have an account? 
                        <Link to="/auth/signup" className="text-indigo-500 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;