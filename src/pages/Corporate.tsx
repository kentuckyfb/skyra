import { Users, Briefcase, Camera, Award, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import ImageGallery from '../components/ImageGallery';
import SuggestedContent from '../components/SuggestedContent';
import ScrollAnimations from '../components/ScrollAnimations';
import SectionSeparator from '../components/ui/SectionSeparator';
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
      <section className="relative py-20 md:py-32 text-center bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Corporate <span className="text-primary">Photography</span></h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional imagery that elevates your brand and showcases your company's culture.
            </p>
          </ScrollAnimations>
        </div>
        <SectionSeparator />
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <ImageGallery images={galleryImages} title="Our Work" />
          </ScrollAnimations>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We <span className="text-primary">Offer</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Suggested Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SuggestedContent items={suggestedItems} />
        </div>
      </section>
    </Layout>
  );
};

export default Corporate;