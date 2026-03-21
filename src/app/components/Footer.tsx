import { Link } from 'react-router';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg">
                <GraduationCap className="size-8 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-white">EduCare</div>
                <div className="text-xs text-gray-400">Consultancy Services</div>
              </div>
            </div>
            <p className="text-sm mb-6 text-gray-400">
              Leading educational consultancy in India, helping students achieve their academic dreams since 2011.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Career Counseling
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                College Admission
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Entrance Exam Prep
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Study Abroad
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Scholarship Guidance
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Documentation Help
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5 text-orange-500" />
                <div>
                  <div className="font-semibold text-white mb-1">Head Office:</div>
                  <span>123 Education Street, Andheri, Mumbai, Maharashtra 400001</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-orange-500" />
                <div>
                  <div>+91 98765 43210</div>
                  <div>+91 98765 43211</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-orange-500" />
                <span>info@educare.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} EduCare Consultancy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
