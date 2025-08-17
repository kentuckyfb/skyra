import { Users, Briefcase, Camera, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import ImageGallery from '../components/ImageGallery';
import SuggestedContent from '../components/SuggestedContent';
import ScrollAnimations from '../components/ScrollAnimations';
import corporateHero from '../assets/corporate-hero.jpg';
import corporate1 from '../assets/corporate-1.jpg';
import corporate2 from '../assets/corporate-2.jpg';
import corporate3 from '../assets/corporate-3.jpg';
import portraitsHero from '../assets/portraits-hero.jpg';
import concertsHero from '../assets/concerts-hero.jpg';
import productHero from '../assets/product-hero.jpg';

const Corporate = () => {
  const galleryImages = [
    { id: '1', src: corporate1, alt: 'Corporate team meeting in modern boardroom', aspectRatio: '4/3' },
    { id: '2', src: corporate2, alt: 'Executive headshot with professional lighting', aspectRatio: '3/4' },
    { id: '3', src: corporate3, alt: 'Corporate event networking session', aspectRatio: '4/3' },
    { id: '4', src: corporate1, alt: 'Business conference presentation', aspectRatio: '16/9' },
    { id: '5', src: corporate2, alt: 'Professional portrait session', aspectRatio: '3/4' },
    { id: '6', src: corporate3, alt: 'Modern office environment photography', aspectRatio: '4/3' },
    { id: '7', src: corporate1, alt: 'Team collaboration workspace', aspectRatio: '16/9' },
    { id: '8', src: corporate2, alt: 'Executive leadership portraits', aspectRatio: '3/4' },
  ];

  const services = [
    {
      icon: Users,
      title: 'Executive Headshots',
      description: 'Professional headshots that convey confidence and authority for your leadership team.',
      features: ['Studio & on-location', 'Multiple outfit changes', 'Professional retouching', 'Digital delivery']
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Comprehensive coverage of conferences, seminars, and company celebrations.',
      features: ['Full event coverage', 'Candid moments', 'Presentation shots', 'Networking photos']
    },
    {
      icon: Camera,
      title: 'Office Culture',
      description: 'Authentic workplace photography that showcases your company environment and values.',
      features: ['Team interactions', 'Workspace photography', 'Company culture', 'Behind-the-scenes']
    }
  ];

  const suggestedItems = [
    {
      title: 'Portrait Photography',
      description: 'Professional individual and family portraits',
      href: '/portraits',
      image: portraitsHero,
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={corporateHero}
            alt="Corporate Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        </div>

        {/* Subtle background curves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-64 h-1 bg-gradient-to-r from-primary/10 to-transparent rounded-full"
            style={{ animation: 'gentle-float 12s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/5 w-48 h-1 bg-gradient-to-l from-primary/8 to-transparent rounded-full"
            style={{ animation: 'subtle-drift 15s ease-in-out infinite', animationDelay: '3s' }}
          />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <ScrollAnimations>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">Professional Business Photography</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Corporate <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Elevate your brand with professional photography that captures the essence of your 
                company culture, leadership team, and corporate events with sophistication and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  Explore Services
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

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Corporate <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                Comprehensive photography solutions tailored to meet your business needs and elevate your professional image.
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

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <ImageGallery images={galleryImages} title="Corporate" />
          </ScrollAnimations>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollAnimations>
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center text-primary-foreground relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-primary-foreground rounded-full transform rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-1 bg-primary-foreground rounded-full transform -rotate-45" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Ready to Elevate Your <br />
                  <span className="text-primary-foreground/80">Corporate Image?</span>
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90 font-light">
                  Let's create professional photography that represents your company's values and showcases your team's expertise.
                </p>
                <a 
                  href="/contact" 
                  className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Suggested Content */}
      <SuggestedContent items={suggestedItems} title="Explore Other Services" />
    </Layout>
  );
};

export default Corporate;