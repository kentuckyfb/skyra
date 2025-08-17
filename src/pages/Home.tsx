import { Link } from 'react-router-dom';
import { Camera, Users, Music, Package, Trophy, ArrowRight, Star, Award, Clock, CheckCircle, Play } from 'lucide-react';
import Layout from '../components/Layout';
import ScrollAnimations from '../components/ScrollAnimations';

const Home = () => {
  const categories = [
    {
      name: 'Corporate',
      description: 'Professional business photography for companies and events',
      icon: Users,
      href: '/corporate',
      featured: true,
    },
    {
      name: 'Portraits',
      description: 'Stunning individual and family portrait sessions',
      icon: Camera,
      href: '/portraits',
    },
    {
      name: 'Concerts',
      description: 'Dynamic live music and event photography',
      icon: Music,
      href: '/concerts',
    },
    {
      name: 'Product Shoots',
      description: 'High-quality product photography for your business',
      icon: Package,
      href: '/product',
    },
    {
      name: 'Sports & Action',
      description: 'Capturing the energy and excitement of sporting events',
      icon: Trophy,
      href: '/sports',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24h', label: 'Response Time' },
  ];

  const testimonials = [
    {
      quote: "SKYRA captured our corporate event perfectly. Professional, creative, and exceeded our expectations.",
      author: "Sarah Chen",
      position: "Marketing Director, TechCorp",
      rating: 5
    },
    {
      quote: "The portrait session was amazing. They made us feel comfortable and the results were stunning.",
      author: "Michael Fernando",
      position: "Family Portrait Client",
      rating: 5
    }
  ];

  const features = [
    'Professional equipment',
    'Same-day editing',
    'Multiple formats',
    'Free consultation'
  ];

  return (
    <Layout>
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Minimal integrated curves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-32 md:w-64 h-0.5 md:h-1 bg-gradient-to-r from-primary/10 to-transparent rounded-full"
            style={{ animation: 'gentle-float 12s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/5 w-24 md:w-48 h-0.5 md:h-1 bg-gradient-to-l from-primary/8 to-transparent rounded-full"
            style={{ animation: 'subtle-drift 15s ease-in-out infinite', animationDelay: '3s' }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <ScrollAnimations>
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="text-xs md:text-sm text-muted-foreground">Professional Photography Studio</span>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                  <span className="text-primary">SKYRA</span>
                  <br />
                  <span className="text-foreground/90 text-2xl md:text-4xl lg:text-5xl font-light">Studios</span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-4">
                  Creating visual stories that matter. Based in Colombo, Sri Lanka.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center"
                >
                  Start Your Project
                </Link>
                <a 
                  href="#work" 
                  className="w-full sm:w-auto border border-primary/20 text-foreground hover:bg-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 font-medium text-center"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </ScrollAnimations>

          {/* Stats - Mobile Optimized */}
          <ScrollAnimations delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-12 md:mt-16 px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section id="work" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimations>
            <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 text-primary">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">Our Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight px-4">
                What We <span className="text-primary">Create</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
                Specializing in diverse photography styles with unmatched attention to detail
              </p>
            </div>
          </ScrollAnimations>

          {/* Featured Service - Mobile Optimized */}
          <ScrollAnimations delay={100}>
            <div className="mb-8 md:mb-12">
              <Link
                to="/corporate"
                className="group block bg-gradient-to-br from-primary to-primary/80 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-primary-foreground transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary-foreground/5 rounded-full -translate-y-16 md:-translate-y-32 translate-x-16 md:translate-x-32" />
                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-primary-foreground/5 rounded-full translate-y-12 md:translate-y-24 -translate-x-12 md:-translate-x-24" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                    <div className="flex-1 space-y-4 md:space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground/90 text-xs md:text-sm">
                        <Star className="w-3 h-3" />
                        <span>Most Popular</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Corporate Photography
                      </h3>
                      <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                        Professional business photography for companies and events. Elevate your brand with stunning corporate imagery.
                      </p>
                      <div className="flex items-center text-primary-foreground group-hover:translate-x-2 transition-transform">
                        <span className="font-semibold text-base md:text-lg">Explore Corporate Gallery</span>
                        <ArrowRight size={20} className="ml-3" />
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-foreground/20 rounded-xl md:rounded-2xl flex items-center justify-center">
                        <Users size={32} className="text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollAnimations>

          {/* Regular Services Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(1).map((category, index) => (
              <ScrollAnimations key={category.name} delay={(index + 2) * 100}>
                <Link
                  to={category.href}
                  className="group block bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl hover:bg-card/60 hover:border-primary/20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <category.icon size={20} className="text-primary md:w-6 md:h-6" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform text-sm font-medium pt-2">
                      <span>View Work</span>
                      <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </ScrollAnimations>
            ))}
          </div>

          {/* Bottom CTA - Mobile Optimized */}
          <ScrollAnimations delay={700}>
            <div className="text-center mt-12 md:mt-16">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 md:px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <span className="text-muted-foreground text-sm md:text-base">Need something custom?</span>
                <Link 
                  to="/contact" 
                  className="text-primary font-medium hover:underline flex items-center gap-1 text-sm md:text-base"
                >
                  Let's discuss
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollAnimations>
              <div className="space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 text-primary">
                  <Camera className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm font-medium">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Crafting Visual <span className="text-primary">Excellence</span>
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                    Based in the vibrant heart of Colombo, SKYRA Studios combines technical mastery 
                    with artistic vision to deliver photography that tells your unique story.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                    Every frame we capture is a commitment to excellence, whether it's a corporate 
                    milestone, intimate portrait, or dynamic event coverage.
                  </p>
                </div>
                
                {/* Features list - Mobile optimized */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimations>

            <ScrollAnimations delay={300}>
              <div className="relative">
                <div className="aspect-square rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-6 md:p-8">
                  <div className="w-full h-full rounded-xl md:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                    <Camera size={60} className="text-primary/60 md:w-20 md:h-20" />
                  </div>
                </div>
                {/* Floating elements - Adjusted for mobile */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Optimized */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Client <span className="text-primary">Stories</span>
              </h2>
            </div>
          </ScrollAnimations>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimations key={index} delay={index * 200}>
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center text-primary-foreground relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-16 md:w-32 h-0.5 md:h-1 bg-primary-foreground rounded-full transform rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-12 md:w-24 h-0.5 md:h-1 bg-primary-foreground rounded-full transform -rotate-45" />
              </div>
              
              <div className="relative z-10 space-y-6 md:space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Ready to Capture Your <br />
                  <span className="text-primary-foreground/80">Perfect Moment?</span>
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/90 font-light leading-relaxed">
                  Let's collaborate to bring your vision to life with professional photography that exceeds expectations.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  Get Started Today
                  <ArrowRight size={18} />
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