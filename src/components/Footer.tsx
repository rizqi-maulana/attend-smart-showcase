
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { siteData } from '@/data/siteData';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/dc05047e-c8e4-458d-8093-0f0bee075292.png" 
                alt={siteData.appName}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gray-900">{siteData.appName}</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {siteData.description}
            </p>
            <div className="flex space-x-4">
              <a href={siteData.social.github} className="text-gray-400 hover:text-gray-600">
                <Github className="h-5 w-5" />
              </a>
              <a href={siteData.social.twitter} className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteData.social.linkedin} className="text-gray-400 hover:text-gray-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${siteData.contact.email}`} className="text-gray-400 hover:text-gray-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-600 hover:text-gray-900">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${siteData.contact.support}`} className="text-gray-600 hover:text-gray-900">
                  Contact Support
                </a>
              </li>
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900">
                  User Guide
                </Link>
              </li>
              <li>
                <a href={siteData.contact.website} className="text-gray-600 hover:text-gray-900">
                  Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteData.appName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
