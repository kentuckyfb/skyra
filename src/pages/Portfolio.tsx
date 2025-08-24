import { Link } from 'react-router-dom';
import { Building2, User, Music, Package, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ScrollAnimations from '../components/ScrollAnimations';
import { cn } from '../lib/utils';

// Import available images
import corporate1 from '../assets/corporate-1.jpg';
import corporate2 from '../assets/corporate-2.jpg';
import corporate3 from '../assets/corporate-3.jpg';
import portrait1 from '../assets/portrait-1.jpg';
import portrait2 from '../assets/portrait-2.jpg';
import portraitHero from '../assets/portraits-hero.jpg';
import concert1 from '../assets/concert-1.jpg';
import concertHero from '../assets/concerts-hero.jpg';
import corporateHero from '../assets/corporate-hero.jpg';
import productHero from '../assets/product-hero.jpg';
import sportsHero from '../assets/sports-hero.jpg';

const Portfolio = () => {
  const categories = [
    {
      title: 'Corporate',
      description: 'Business events & executive portraits',
      images: [corporateHero],
      link: '/corporate',
      icon: Building2,
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'Portraits',
      description: 'Individual & group portraits',
      images: [portraitHero],
      link: '/portraits',
      icon: User,
      bgColor: 'bg-amber-50 hover:bg-amber-100'
    },
    {
      title: 'Concerts',
      description: 'Live music & events',
      images: [concertHero],
      link: '/concerts',
      icon: Music,
      bgColor: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      title: 'Product',
      description: 'Commercial & detail shots',
      images: [productHero],
      link: '/product',
      icon: Package,
      bgColor: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Sports',
      description: 'Action & peak moments',
      images: [sportsHero],
      link: '/sports',
      icon: Trophy,
      bgColor: 'bg-emerald-50 hover:bg-emerald-100'
    }
  ];

  // Define grid layout for better space utilization
  const getGridClass = (index: number) => {
    const layouts = [
      'lg:col-span-2 lg:row-span-2', // Large square
      'lg:col-span-1 lg:row-span-1', // Small square
      'lg:col-span-1 lg:row-span-1', // Small square
      'lg:col-span-1 lg:row-span-1', // Small square
      'lg:col-span-2 lg:row-span-2'  // Large square (last item)
    ];
    return layouts[index % layouts.length];
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section with Animated Background */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background to-muted/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float-delay" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 mb-6">
                  <span className="text-xs font-medium text-primary">PORTFOLIO</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Our Creative <span className="text-primary">Work</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Discover our curated collection of professional photography that captures the essence of every moment
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Animated decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10" />
        </section>

        {/* Portfolio Grid with Enhanced Design */}
        <section className="relative py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.5 }
                    }
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <Link to={category.link} className="block h-full">
                    <div className={cn(
                      "h-full rounded-2xl overflow-hidden border border-border/20",
                      "bg-background/80 backdrop-blur-sm",
                      "transition-all duration-300 ease-out",
                      "group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5"
                    )}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.div 
                          className="w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={category.images[0]}
                            alt={category.title}
                            className="w-full h-full object-cover transition-transform duration-700"
                          />
                        </motion.div>
                        
                        {/* Overlay with gradient and content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <motion.div 
                            className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                              <category.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white text-center">
                              {category.title}
                            </h3>
                            <p className="text-white/80 text-sm text-center mt-1">
                              {category.description}
                            </p>
                            <div className="mt-4 flex justify-center">
                              <span className="inline-flex items-center text-xs font-medium text-primary/90 group-hover:text-primary transition-colors">
                                View Gallery
                                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-t-[64px] border-t-primary/5 group-hover:border-t-primary/10 transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-32 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10" />
          <div className="absolute -bottom-20 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10" />
        </section>
        
        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h3>
              <p className="text-muted-foreground mb-8">Let's create something amazing together. Get in touch to discuss your photography needs.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          
          {/* Animated decorative elements */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
