import { Package, Camera, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import ImageGallery from '../components/ImageGallery';
import SuggestedContent from '../components/SuggestedContent';
import ScrollAnimations from '../components/ScrollAnimations';
import productHero from '../assets/product-hero.jpg';
import corporateHero from '../assets/corporate-hero.jpg';
import portraitsHero from '../assets/portraits-hero.jpg';
import concertsHero from '../assets/concerts-hero.jpg';

const Product = () => {
  const galleryImages = [
    { id: '1', src: productHero, alt: 'Professional product photography setup with lighting', aspectRatio: '4/3' },
    { id: '2', src: productHero, alt: 'Commercial product shot with clean background', aspectRatio: '1/1' },
    { id: '3', src: productHero, alt: 'E-commerce photography for online store', aspectRatio: '3/4' },
    { id: '4', src: productHero, alt: 'Lifestyle product shot in natural setting', aspectRatio: '16/9' },
    { id: '5', src: productHero, alt: 'Studio product photography with dramatic lighting', aspectRatio: '1/1' },
    { id: '6', src: productHero, alt: 'Product detail shots highlighting features', aspectRatio: '4/3' },
    { id: '7', src: productHero, alt: 'Multiple product arrangement', aspectRatio: '16/9' },
    { id: '8', src: productHero, alt: 'Macro photography showing product texture', aspectRatio: '3/4' },
  ];

  const services = [
    {
      icon: Target,
      title: 'E-commerce Photography',
      description: 'Clean, professional product shots optimized for online stores and marketplaces.',
      features: ['White background shots', 'Multiple angles', 'Consistent lighting', 'High resolution']
    },
    {
      icon: Camera,
      title: 'Lifestyle Product Shots',
      description: 'Products captured in real-world settings to show scale and usage.',
      features: ['Natural environments', 'Lifestyle contexts', 'Brand storytelling', 'Authentic feel']
    },
    {
      icon: Zap,
      title: 'Detail Photography',
      description: 'Macro and close-up shots highlighting product features and quality.',
      features: ['Macro lens work', 'Texture details', 'Material highlights', 'Quality showcase']
    }
  ];

  const suggestedItems = [
    {
      title: 'Corporate Photography',
      description: 'Professional business and executive photography',
      href: '/corporate',
      image: corporateHero,
    },
    {
      title: 'Portrait Photography',
      description: 'Individual and family portrait sessions',
      href: '/portraits',
      image: portraitsHero,
    },
    {
      title: 'Concert Photography',
      description: 'Dynamic live event and music photography',
      href: '/concerts',
      image: concertsHero,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productHero}
            alt="Product Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        </div>

        {/* Subtle background curves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/3 w-56 h-1 bg-gradient-to-r from-primary/12 to-transparent rounded-full"
            style={{ animation: 'gentle-float 11s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/4 w-40 h-1 bg-gradient-to-l from-primary/10 to-transparent rounded-full"
            style={{ animation: 'subtle-drift 16s ease-in-out infinite', animationDelay: '4s' }}
          />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <ScrollAnimations>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">Commercial Product Photography</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Product <span className="text-primary">Showcase</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                High-quality product photography that showcases your items in the best light. 
                Perfect for e-commerce, catalogs, and marketing materials that drive sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  Our Services
                </a>
                <a 
                  href="#gallery" 
                  className="border border-primary/20 text-foreground hover:bg-primary/10 px-8 py-4 rounded-full transition-all duration-300 font-medium"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <ImageGallery images={galleryImages} title="Product" />
          </ScrollAnimations>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 relative">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Product Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Product <span className="text-primary">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
                Comprehensive product photography services designed to enhance your brand and increase sales across all platforms.
              </p>
            </div>
          </ScrollAnimations>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimations key={service.title} delay={index * 100}>
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/20 group">
                  <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                                  </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      {/* Suggested Content */}
          </Layout>
  );
};

export default Product;