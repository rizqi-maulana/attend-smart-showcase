
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { siteData } from '@/data/siteData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/dc05047e-c8e4-458d-8093-0f0bee075292.png" 
                alt={siteData.appName}
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold">{siteData.appName}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Solusi absensi pintar yang mengintegrasikan teknologi QR code dengan verifikasi lokasi untuk manajemen kehadiran yang efisien dan akurat.
            </p>
            <div className="flex space-x-4">
              <a href={siteData.social.github} className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href={siteData.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={siteData.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={`mailto:${siteData.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Produk
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                  Fitur Lengkap
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-300 hover:text-white transition-colors">
                  Aplikasi Mobile
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard Desktop
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">
                  Dokumentasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Dukungan
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white transition-colors">
                  Bantuan Teknis
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">
                  Panduan Pengguna
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {siteData.appName}. Hak cipta dilindungi undang-undang.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Dibuat dengan ❤️ untuk organisasi Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
