import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Camera, ArrowUp, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  ];

  const quickLinks = [
    { name: 'Corporate Photography', href: '/corporate' },
    { name: 'Portrait Sessions', href: '/portraits' },
    { name: 'Concert Coverage', href: '/concerts' },
    { name: 'Product Shoots', href: '/product' },
    { name: 'Sports Photography', href: '/sports' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+94 77 123 4567', href: 'tel:+94771234567' },
    { icon: Mail, text: 'hello@skyra.lk', href: 'mailto:hello@skyra.lk' },
    { icon: MapPin, text: 'Colombo 07, Sri Lanka', href: '#' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Camera className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">SKYRA</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Professional photography studio based in Sri Lanka, specializing in capturing 
              life's most precious moments with artistic excellence and technical precision.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-muted/50 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-primary-foreground ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                    <contact.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
            
            {/* Business Hours */}
            <div className="space-y-2 pt-4 border-t border-border/30">
              <h5 className="font-medium text-sm">Studio Hours</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p>Sun: By appointment</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get the latest photography tips, behind-the-scenes content, and special offers.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>

            {/* Quick Contact CTA */}
            <Link
              to="/contact"
              className="w-full bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary px-4 py-3 rounded-xl text-sm font-medium text-center transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowUp className="w-4 h-4 rotate-45" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
              © 2024 SKYRA Photography Studio. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;