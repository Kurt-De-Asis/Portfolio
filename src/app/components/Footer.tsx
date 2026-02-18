"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook} from "lucide-react";
import { socialLinks } from "@/constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-800/20 bg-background/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-violet-400">Contact Me</h3>
            <div className="space-y-2 text-foreground/70">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-violet-400" />
                <a href={`mailto:${socialLinks.email}`} className="hover:text-violet-400 transition-colors">
                  {socialLinks.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-violet-400" />
                <span>{socialLinks.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span className="text-sm">Santa Rosa, Laguna</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-violet-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-foreground/70 hover:text-violet-400 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-foreground/70 hover:text-violet-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-foreground/70 hover:text-violet-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-foreground/70 hover:text-violet-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-violet-400">Follow Me</h3>
            <div className="flex space-x-4">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-violet-600/30 hover:bg-violet-600/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-violet-400" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-violet-600/30 hover:bg-violet-600/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-violet-600/30 hover:bg-violet-600/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.323v21.354C0 23.407.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.793.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.323V1.323C24 .592 23.405 0 22.675 0z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-violet-400">Stay Updated</h3>
            <p className="text-foreground/70 text-sm">
              Get the latest updates on my projects and achievements.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-black/40 border border-violet-600/30 rounded-lg text-sm focus:outline-none focus:border-violet-500"
              />
              <motion.button
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-violet-800/20 mt-8 pt-8 text-center text-foreground/60 text-sm">
          <p>
            &copy; {currentYear} Kurt Russel De Asis.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;