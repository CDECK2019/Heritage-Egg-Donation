
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Process from './pages/Process';
import Calculator from './pages/Calculator';
import About from './pages/About';
import Contact from './pages/Contact';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcfaf7]/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-serif text-amber-900 tracking-tight">
              Heritage<span className="text-stone-500 font-light">Egg Donation</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-10">
            <Link 
              to="/" 
              className={`text-sm uppercase tracking-widest transition-colors ${isActive('/') ? 'text-amber-800 border-b border-amber-800' : 'text-stone-500 hover:text-stone-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/process" 
              className={`text-sm uppercase tracking-widest transition-colors ${isActive('/process') ? 'text-amber-800 border-b border-amber-800' : 'text-stone-500 hover:text-stone-900'}`}
            >
              The Journey
            </Link>
            <Link 
              to="/calculator" 
              className={`text-sm uppercase tracking-widest transition-colors ${isActive('/calculator') ? 'text-amber-800 border-b border-amber-800' : 'text-stone-500 hover:text-stone-900'}`}
            >
              Valuation
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm uppercase tracking-widest transition-colors ${isActive('/contact') ? 'text-amber-800 border-b border-amber-800' : 'text-stone-500 hover:text-stone-900'}`}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <span className="text-stone-400">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300 py-16 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-2xl font-serif text-amber-200 mb-6">Heritage Egg Donation</h3>
        <p className="text-sm leading-relaxed font-light">
          Connecting extraordinary women with individuals ready to begin their journey into parenthood. We bridge the gap between altruism and elite care.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-white mb-6">Explore</h4>
        <ul className="space-y-4 text-sm font-light">
          <li><Link to="/about" className="hover:text-amber-200 transition-colors">About Us</Link></li>
          <li><Link to="/process" className="hover:text-amber-200 transition-colors">The Donation Process</Link></li>
          <li><Link to="/calculator" className="hover:text-amber-200 transition-colors">Compensation Calculator</Link></li>
          <li><Link to="/contact" className="hover:text-amber-200 transition-colors">Submit Contact Info</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-white mb-6">Contact</h4>
        <p className="text-sm font-light mb-2">info@heritage-eggs.com</p>
        <p className="text-sm font-light italic mt-4">Partnering with elite clinics nationwide.</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
      &copy; {new Date().getFullYear()} Heritage Egg Donation. All rights reserved. 
      <p className="mt-2">Privacy Policy | Terms of Service</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
