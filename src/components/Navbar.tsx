
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 duration-300 py-4 px-6 md:px-12 lg:px-24",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold text-gray-900">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md transition-colors inline-block text-center"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
