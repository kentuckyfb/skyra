import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/', isInternal: false },
    { name: 'Portfolio', href: '/portfolio', isInternal: false },
    { name: 'About', href: '/about', isInternal: false },
  ];

  const services = [
    { name: 'Corporate', href: '/corporate' },
    { name: 'Portraits', href: '/portraits' },
    { name: 'Concerts', href: '/concerts' },
    { name: 'Product', href: '/product' },
    { name: 'Sports', href: '/sports' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-background/80 backdrop-blur-md py-3 shadow-lg border-b border-border/50' 
          : 'py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">SKYRA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.isInternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-300 hover:text-primary text-muted-foreground relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium transition-colors duration-300 hover:text-primary text-muted-foreground relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary transition-colors duration-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 border-t border-border/50 mt-4">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                {navigation.map((item) => (
                  item.isInternal ? (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-3 px-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-3 px-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )
                ))}
              </div>

              {/* Services Grid */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setIsOpen(false)}
                      className="p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 text-center hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group"
                    >
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium text-center hover:scale-[1.02] transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;