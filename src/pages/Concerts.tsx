import { Music, Camera, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import ImageGallery from '../components/ImageGallery';
import SuggestedContent from '../components/SuggestedContent';
import ScrollAnimations from '../components/ScrollAnimations';
import concertsHero from '../assets/concerts-hero.jpg';
import concert1 from '../assets/concert-1.jpg';
import corporateHero from '../assets/corporate-hero.jpg';
import portraitsHero from '../assets/portraits-hero.jpg';
import sportsHero from '../assets/sports-hero.jpg';

const Concerts = () => {
  const galleryImages = [
    { id: '1', src: concert1, alt: 'Live concert performance with dynamic lighting', aspectRatio: '4/3' },
    { id: '2', src: concert1, alt: 'Stage lighting creating atmospheric mood', aspectRatio: '16/9' },
    { id: '3', src: concert1, alt: 'Musician performing with energy and passion', aspectRatio: '3/4' },
    { id: '4', src: concert1, alt: 'Concert crowd enjoying the performance', aspectRatio: '4/3' },
    { id: '5', src: concert1, alt: 'Backstage moments and preparations', aspectRatio: '3/4' },
    { id: '6', src: concert1, alt: 'Festival atmosphere and energy', aspectRatio: '16/9' },
    { id: '7', src: concert1, alt: 'Close-up performance shots', aspectRatio: '3/4' },
    { id: '8', src: concert1, alt: 'Crowd interaction and engagement', aspectRatio: '4/3' },
  ];

  const services = [
    {
      icon: Music,
      title: 'Live Concert Photography',
      description: 'Dynamic shots of performers, stage lighting, and crowd energy during live concerts.',
      features: ['Stage performance shots', 'Dynamic lighting capture', 'Crowd energy photos', 'Multiple angles']
    },
    {
      icon: Users,
      title: 'Festival Documentation',
      description: 'Comprehensive coverage of music festivals and multi-day events.',
      features: ['Full festival coverage', 'Multiple stage photography', 'Artist documentation', 'Behind-the-scenes']
    },
    {
      icon: Camera,
      title: 'Backstage Access',
      description: 'Behind-the-scenes moments that capture the authentic atmosphere of live events.',
      features: ['Preparation moments', 'Artist interviews', 'Green room shots', 'Equipment setup']
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
      title: 'Sports Photography',
      description: 'Action-packed sports and athletic photography',
      href: '/sports',
      image: sportsHero,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={concertsHero}
            alt="Concert Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        </div>

        {/* Subtle background curves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/3 right-1/5 w-48 h-1 bg-gradient-to-r from-primary/15 to-transparent rounded-full"
            style={{ animation: 'gentle-float 10s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-32 h-1 bg-gradient-to-l from-primary/12 to-transparent rounded-full"
            style={{ animation: 'subtle-drift 14s ease-in-out infinite', animationDelay: '2s' }}
          />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <ScrollAnimations>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
                <Music className="w-4 h-4" />
                <span className="text-sm font-medium">Live Event Photography</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Concert <span className="text-primary">Energy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Capture the raw energy, emotion, and atmosphere of live performances. We specialize 
                in concert, festival, and live event photography that brings the music to life.
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
                  View Gallery
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
            <ImageGallery images={galleryImages} title="Concert" />
          </ScrollAnimations>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 relative">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Live Event Coverage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Concert <span className="text-primary">Coverage</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
                Professional photography services that capture every moment of your live events, from intimate venues to large festivals.
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

export default Concerts;