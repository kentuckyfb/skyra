import { Camera, Users, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import ImageGallery from '../components/ImageGallery';
import SuggestedContent from '../components/SuggestedContent';
import ScrollAnimations from '../components/ScrollAnimations';
import SectionSeparator from '../components/ui/SectionSeparator';
import portraitsHero from '../assets/portraits-hero.jpg';
import corporateHero from '../assets/corporate-hero.jpg';
import concertsHero from '../assets/concerts-hero.jpg';
import productHero from '../assets/product-hero.jpg';

const Portraits = () => {
  const galleryImages = [
    { id: '1', src: portraitsHero, alt: 'Professional individual portrait with natural lighting', aspectRatio: '3/4' },
    { id: '2', src: portraitsHero, alt: 'Family portrait session in outdoor setting', aspectRatio: '4/3' },
    { id: '3', src: portraitsHero, alt: 'Creative portrait with artistic composition', aspectRatio: '3/4' },
    { id: '4', src: portraitsHero, alt: 'Couple portrait session with romantic mood', aspectRatio: '4/3' },
    { id: '5', src: portraitsHero, alt: 'Children portrait capturing genuine expressions', aspectRatio: '3/4' },
    { id: '6', src: portraitsHero, alt: 'Senior portrait with elegant styling', aspectRatio: '3/4' },
    { id: '7', src: portraitsHero, alt: 'Group family portrait with multiple generations', aspectRatio: '16/9' },
    { id: '8', src: portraitsHero, alt: 'Studio portrait with professional lighting', aspectRatio: '3/4' },
  ];

  const services = [
    {
      icon: Camera,
      title: 'Individual Portraits',
      description: 'Professional headshots and personal portraits that capture your unique personality.',
      features: ['Professional headshots', 'Personal branding', 'Multiple looks', 'Studio & outdoor']
    },
    {
      icon: Users,
      title: 'Family Sessions',
      description: 'Beautiful family portraits that preserve precious moments and relationships.',
      features: ['Multi-generational', 'Natural interactions', 'Various locations', 'Lifestyle approach']
    },
    {
      icon: Heart,
      title: 'Special Occasions',
      description: 'Capture milestone moments, celebrations, and life\'s important events.',
      features: ['Milestone birthdays', 'Graduations', 'Anniversaries', 'Pregnancy portraits']
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
      title: 'Product Photography',
      description: 'High-quality product shots for your business',
      href: '/product',
      image: productHero,
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
      <section className="relative pt-20 md:pt-32 pb-24 text-center bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Portrait <span className="text-primary">Photography</span></h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stunning individual and family portrait sessions that capture authentic moments and genuine emotions.
            </p>
          </ScrollAnimations>
        </div>
        <SectionSeparator />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <ImageGallery images={galleryImages} title="Portrait" />
          </ScrollAnimations>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Portrait Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Portrait <span className="text-primary">Sessions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
                Professional portrait photography that celebrates life's precious moments and captures the authentic beauty of human connection.
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

      {/* Suggested Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SuggestedContent items={suggestedItems} />
        </div>
      </section>
    </Layout>
  );
};

export default Portraits;