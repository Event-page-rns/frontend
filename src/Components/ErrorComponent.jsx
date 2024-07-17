import React from 'react';
import ErrorImg from '../assets/illustration.svg'
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
  return (
    <section className="bg-white overflow-hidden overscroll-none">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2">
          <p className="text-sm font-medium text-red-500">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Page not found</h1>
          <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn't exist. Here are some helpful links:</p>

          <div className="flex items-center mt-6 gap-x-3">

            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg sm:w-auto hover:bg-blue-600">
              <Link to="/">Take me home</Link>
            </button>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img className="w-full max-w-lg lg:mx-auto" src={ErrorImg} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default ErrorComponent;
