import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login({ setUser, darkMode, setDarkMode }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would make an API call to authenticate the user
      // For demo purposes, we'll just set a mock user
      setUser({
        id: 0,
        name: 'Rana Islam',
        email: email,
        profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
        coverPhoto: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        bio: 'Web Developer | Photography Enthusiast | Travel Lover',
        location: 'Dinajpur Sadar, Bangladesh',
        friends: [1, 2, 3, 4, 5]
      })
      setIsLoading(false)
    }, 1500)
  }
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand info */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 flex flex-col justify-center p-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SocialConnect</h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Connect with friends and the world around you on SocialConnect.
          </p>
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <h2 className="text-xl font-semibold text-white mb-4">Why join our community?</h2>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Connect with friends and family
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Share your moments with the world
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Discover events happening near you
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Buy and sell items in the marketplace
              </li>
            </ul>
          </div>
          
          <div className="mt-8 flex space-x-4">
            <div className="animate-bounce delay-100">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div className="animate-bounce delay-200">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div className="animate-bounce delay-300">
              <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div className="animate-bounce delay-400">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div className="animate-bounce delay-500">
              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white font-medium">
                1M+
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : 'Sign in'}
              </button>
            </div>
            
            <div className="mt-4">
              <button
                type="button"
                onClick={() => {
                  setEmail('demo@example.com');
                  setPassword('password');
                }}
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Fill Demo Credentials
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md shadow-sm text-sm font-medium"
              >
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </button>
              
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md shadow-sm text-sm font-medium"
              >
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md shadow-sm text-sm font-medium"
              >
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978c-.532-.511-1.467-1.102-2.708-1.102-2.31 0-4.187 1.956-4.187 4.313 0 2.357 1.877 4.313 4.187 4.313 2.688 0 3.697-1.92 3.847-2.937h-3.847v-2.598h6.404c.06.34.107.68.107 1.128.001 3.887-2.605 6.112-6.511 6.112z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 