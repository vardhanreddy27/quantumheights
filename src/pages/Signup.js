import React from 'react';
import Link from 'next/link';

function Signup() {
  return (
    <>
      <Link href="/">
        <h1 id="title" className="font-bold text-4xl pl-4 pt-4 logo bg-gray-100">EduAdapt</h1>
      </Link>
      <div className="flex justify-center bg-gray-100">
        <div className="bg-white mb-16 mt-2 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">SignUp for EduAdapt</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="academic-studying" className="block text-sm font-medium text-gray-700">Education</label>
              <input
                type="text"
                id="academic-studying"
                name="academic-studying"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full mb-3 flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                SignUp
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">Already a user? </span>
            <Link href="/login" className="text-sm text-cyan-600 hover:text-cyan-800">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
