import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import profileImage from './profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

function App() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Animated Background Droplets */}
      <div className="absolute inset-0 z-0">
        {/* Multiple droplets covering the background */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-indigo-400 opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-2/3 w-40 h-40 bg-purple-600 opacity-10 rounded-full blur-2xl animate-pulse delay-700" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-yellow-500 opacity-10 rounded-full blur-3xl animate-pulse delay-1500" />
        <div className="absolute top-3/4 left-1/4 w-60 h-60 bg-pink-500 opacity-10 rounded-full blur-2xl animate-pulse delay-1200" />
      </div>

      {/* Navbar */}
      <div className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 shadow-lg flex items-center justify-between px-6 py-3">
        
        {/* Logo with contrast background */}
        <div className="w-20 h-20 flex items-center justify-center bg-cyan-600 rounded-full shadow-xl">
          <img 
            src={logo} 
            className="w-12 h-12 animate-spin" 
            alt="Frida's Logo" 
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a 
            href="/projects.html" 
            className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
          >
            Projects
          </a>
          <a 
            href="/about.html" 
            className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
          >
            About
          </a>
          <a 
            href="/contact.html" 
            className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* 3D Card Container */}
      <div className="transition-transform duration-300 transform hover:rotate-y-6 hover:scale-105 shadow-xl bg-gradient-to-tr from-purple-800 via-indigo-800 to-blue-800 rounded-xl p-6 w-full max-w-6xl backface-hidden perspective-1000">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div>
            <p className="text-cyan-400 text-sm uppercase mb-2">Hello, Welcome</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              I'm Frida Mwasaru
            </h1>
            <p className="text-gray-300 mb-6">
              A passionate software developer and AI engineer, focused on building intelligent systems and scalable web applications.
            </p>

            {/* Social Icons with Hover Effects */}
            <div className="mt-3 flex space-x-6 text-2xl">
              <a 
                href="https://www.linkedin.com/in/frida-wawuda-99992b29a" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/Wuda2000" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center">
            <img 
              src={profileImage} 
              alt="Frida Mwasaru" 
              className="w-64 h-64 object-cover rounded-full shadow-lg" 
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-700 text-center text-gray-400 text-sm mt-10 w-full max-w-4xl">
        &copy; {new Date().getFullYear()} Frida Mwasaru. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
