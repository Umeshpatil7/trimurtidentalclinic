import { MapPin, Phone, Mail, Instagram, Clock, Star } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <div className="font-bold">Trimurti Dental Clinic</div>
                <div className="text-gray-400 text-xs">Nashik</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted dental care provider in Nashik. We offer comprehensive dental services with the latest technology and expert care.
            </p>
            <a
              href="https://share.google/zLC67Vv7R8APT35d7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 text-sm font-medium border border-gray-700 px-3 py-2 rounded-lg transition-colors"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Rate us on Google</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">
                  Trimurti Chowk, Nashik, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919420692977" className="text-gray-400 hover:text-white transition-colors">
                  +91 94206 92977
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:patilur99999@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  patilur99999@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Instagram className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="https://instagram.com/trimurti_dental_clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @trimurti_dental_clinic
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">Mon - Sat: 10:00 AM - 1:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">Mon - Sat: 6:00 PM - 9:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Trimurti Dental Clinic Nashik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
