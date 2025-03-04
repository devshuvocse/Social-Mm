import React, { useState, useEffect } from 'react'
import Post from './Post'

export default function Feed({ user, darkMode }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: 1,
        name: "John Doe",
        profilePicture: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      content: "Just finished a great book! Would recommend to everyone.",
      image: "https://source.unsplash.com/random/600x400?book",
      likes: 24,
      comments: 5,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Jane Smith",
        profilePicture: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      content: "Beautiful day for a hike! 🏔️",
      image: "https://source.unsplash.com/random/600x400?hiking",
      likes: 42,
      comments: 8,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Kamal Hossain",
        profilePicture: "https://randomuser.me/api/portraits/men/41.jpg"
      },
      content: "Just cooked an amazing dinner! Check out this recipe 🍲",
      image: "https://source.unsplash.com/random/600x400?food",
      likes: 35,
      comments: 12,
      timestamp: "8 hours ago"
    }
  ])
  
  const [loading, setLoading] = useState(false)
  const [newPost, setNewPost] = useState("")
  
  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (!newPost.trim()) return
    
    const post = {
      id: posts.length + 1,
      user: {
        id: user.id,
        name: user.name,
        profilePicture: user.profilePicture
      },
      content: newPost,
      likes: 0,
      comments: 0,
      timestamp: "Just now"
    }
    
    setPosts([post, ...posts])
    setNewPost("")
  }
  
  return (
    <div className={`mt-12 max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Create post section */}
      <div className={`mb-8 rounded-xl shadow-lg overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="p-4">
          <div className="flex space-x-4">
            <img 
              src={user.profilePicture || "https://randomuser.me/api/portraits/men/1.jpg"} 
              alt="Profile" 
              className="w-10 h-10 rounded-full" 
            />
            <form onSubmit={handlePostSubmit} className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder={`What's on your mind, ${user.name}?`}
                rows="3"
              ></textarea>
              <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-2">
                  <button type="button" className={`flex items-center space-x-1 p-1 rounded ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Photo</span>
                  </button>
                  <button type="button" className={`flex items-center space-x-1 p-1 rounded ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Video</span>
                  </button>
                </div>
                <button 
                  type="submit" 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  disabled={!newPost.trim()}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Posts feed */}
      <div className="space-y-6">
        {loading ? (
          // Skeleton loading for posts
          Array(3).fill().map((_, index) => (
            <div key={index} className={`rounded-xl shadow-lg overflow-hidden border p-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-full animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <div className="flex-1">
                  <div className={`h-4 w-1/3 mb-2 animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  <div className={`h-3 w-1/4 animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className={`h-4 w-full animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <div className={`h-4 w-full animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <div className={`h-4 w-2/3 animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              </div>
              <div className={`h-48 w-full mt-4 rounded-lg animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            </div>
          ))
        ) : (
          posts.map(post => (
            <Post key={post.id} post={post} darkMode={darkMode} />
          ))
        )}
      </div>
      
      {/* Trending topics section */}
      <div className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Technology', 'Sports', 'Politics', 'Entertainment', 'Science', 'Health'].map((topic, index) => (
              <div 
                key={index} 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 rounded-lg p-3 cursor-pointer"
              >
                <p className="text-white font-medium"># {topic}</p>
                <p className="text-white/80 text-sm">{Math.floor(Math.random() * 1000) + 100} posts</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Who to follow section */}
      <div className={`mt-8 rounded-xl shadow-lg overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="p-6">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Who to follow</h2>
          <div className="space-y-4">
            {[
              { name: 'Ruhul Islam', username: '@ruhul', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Anika Rahman', username: '@anika', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Kamal Hossain', username: '@kamal', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' }
            ].map((person, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{person.name}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{person.username}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-sm font-medium rounded-full transition-colors duration-200">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Events section */}
      <div className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {[
              { name: 'Tech Conference 2023', date: 'Aug 15', location: 'Dhaka Convention Center' },
              { name: 'Music Festival', date: 'Sep 3', location: 'Cox\'s Bazar Beach' },
              { name: 'Food & Culture Expo', date: 'Oct 10', location: 'Gulshan Exhibition Hall' }
            ].map((event, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-white">{event.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-white/90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <button className="mt-3 w-full py-2 bg-white/30 hover:bg-white/40 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  Interested
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 