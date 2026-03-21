import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, GraduationCap, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="size-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>info@educare.in</span>
              </div>
            </div>
            <div>
              <span>📍 Mumbai | Delhi | Bangalore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <GraduationCap className="size-8 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-900">EduCare</div>
                <div className="text-xs text-gray-600">Consultancy Services</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg transition-colors relative ${
                    isActive(link.path)
                      ? 'text-orange-500 font-semibold'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"></div>
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="size-6 text-gray-700" />
              ) : (
                <Menu className="size-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 transition-colors ${
                      isActive(link.path)
                        ? 'text-orange-500 font-semibold bg-orange-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mx-4 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors text-center font-semibold"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
