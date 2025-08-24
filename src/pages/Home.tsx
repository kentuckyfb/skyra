import { Link } from 'react-router-dom';
import { Camera, Users, Music, Package, Trophy, ArrowRight, Star, Award, Building2, User } from 'lucide-react';
import Layout from '../components/Layout';
import ScrollAnimations from '../components/ScrollAnimations';
import SectionSeparator from '../components/ui/SectionSeparator';

const Home = () => {
  const categories = [
    {
      name: 'Corporate',
      description: 'Business & events',
      icon: Building2,
      href: '/corporate',
    },
    {
      name: 'Portraits',
      description: 'Individual & family',
      icon: User,
      href: '/portraits',
    },
    {
      name: 'Concerts',
      description: 'Live music & events',
      icon: Music,
      href: '/concerts',
    },
    {
      name: 'Product',
      description: 'Commercial & detail',
      icon: Package,
      href: '/product',
    },
    {
      name: 'Sports',
      description: 'Action & moments',
      icon: Trophy,
      href: '/sports',
    },
  ];

  return (
    <Layout>
      {/* Hero Section - More compact on mobile */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden py-12 sm:py-0">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-24 sm:w-32 md:w-64 h-0.5 bg-gradient-to-r from-primary/10 to-transparent rounded-full"
            style={{ animation: 'gentle-float 12s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/5 w-16 sm:w-24 md:w-48 h-0.5 bg-gradient-to-l from-primary/8 to-transparent rounded-full"
            style={{ animation: 'subtle-drift 15s ease-in-out infinite', animationDelay: '3s' }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <ScrollAnimations>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm">
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                <span className="text-[11px] sm:text-xs text-muted-foreground">Professional Studio</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="text-primary">SKYRA</span>
                  <span className="text-foreground/90">.</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                  Visual Stories from Sri Lanka
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-primary text-primary-foreground px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5 whitespace-nowrap"
                >
                  Start Project
                  <ArrowRight size={12} className="hidden sm:block" />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="border border-border px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-muted/50 transition-colors whitespace-nowrap"
                >
                  View Work
                </Link>
              </div>
            </div>
          </ScrollAnimations>
        </div>
        <SectionSeparator />
      </section>

      {/* Services Section - More compact */}
      <section className="py-12 sm:py-14 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
          <ScrollAnimations>
            <div className="text-center mb-6 sm:mb-8 md:mb-10 space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Our <span className="text-primary">Work</span>
              </h2>
            </div>
          </ScrollAnimations>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <ScrollAnimations key={category.name} delay={(index + 1) * 75}>
                <Link
                  to={category.href}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl border border-border/40 hover:border-primary/30 transition-all hover:shadow-sm sm:hover:shadow-md"
                >
                  <div className="aspect-square bg-muted/5 flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 gap-1.5 sm:gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <category.icon size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-sm sm:text-base text-center">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center leading-tight">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </ScrollAnimations>
            ))}
          </div>
        </div>
        <SectionSeparator />
      </section>

      {/* CTA Section - More compact */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-5">
          <ScrollAnimations>
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-center text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-12 sm:w-16 md:w-24 h-0.5 bg-primary-foreground rounded-full transform rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-8 sm:w-12 md:w-20 h-0.5 bg-primary-foreground rounded-full transform -rotate-45" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 flex items-center justify-center gap-2">
                  Ready to create? <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
                </h2>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Start Project
                  <ArrowRight size={12} className="hidden sm:block" />
                </Link>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>
    </Layout>
  );
};

export default Home;