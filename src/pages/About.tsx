import Layout from '../components/Layout';
import ScrollAnimations from '../components/ScrollAnimations';
import { Building, Mail, Phone, Twitter, Instagram, Facebook, Linkedin, Star } from 'lucide-react';
import SectionSeparator from '../components/ui/SectionSeparator';

const About = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Lead Photographer', image: '/placeholder.svg' },
    { name: 'Jane Smith', role: 'Creative Director', image: '/placeholder.svg' },
    { name: 'Mike Johnson', role: 'Videographer', image: '/placeholder.svg' },
  ];

  const clients = [
    { name: 'Client A', logo: '/placeholder.svg' },
    { name: 'Client B', logo: '/placeholder.svg' },
    { name: 'Client C', logo: '/placeholder.svg' },
    { name: 'Client D', logo: '/placeholder.svg' },
    { name: 'Client E', logo: '/placeholder.svg' },
    { name: 'Client F', logo: '/placeholder.svg' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-24 text-center bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About <span className="text-primary">SKYRA Visions</span></h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of visual storytellers dedicated to capturing moments that matter. Our mission is to deliver exceptional quality and creativity in every project we undertake.
            </p>
          </ScrollAnimations>
        </div>
        <SectionSeparator />
      </section>

      {/* Team Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet the <span className="text-primary">Team</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 bg-muted object-cover" />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              ))}
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Location and Socials Section */}
      <section className="relative py-16 md:py-24 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimations>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-primary">Studio</span></h2>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-4">
                    <Building className="w-6 h-6 text-primary" />
                    <span>123 Galle Road, Colombo 07, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <span>+94 77 123 4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <span>hello@skyra.lk</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimations>
            <ScrollAnimations>
              <div className="w-full h-64 md:h-80 rounded-2xl bg-muted overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385597734!2d79.82118923985404!3d6.921838537633442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1666000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                ></iframe>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 md:py-24 bg-card/10">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our <span className="text-primary">Clients Say</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-background p-6 rounded-xl border border-border/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John D.</h4>
                    <p className="text-sm text-muted-foreground">Corporate Client</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"SKYRA Visions captured our annual conference perfectly. Their attention to detail and ability to capture candid moments was impressive. Highly recommended!"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-background p-6 rounded-xl border border-border/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">SP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah P.</h4>
                    <p className="text-sm text-muted-foreground">Portrait Client</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"The team made me feel so comfortable during my portrait session. The photos turned out better than I could have imagined. Will definitely come back!"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-background p-6 rounded-xl border border-border/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael R.</h4>
                    <p className="text-sm text-muted-foreground">Event Organizer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"We've worked with many photographers, but SKYRA Visions stands out. They captured the energy of our music festival perfectly. Professional and talented team!"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by <span className="text-primary">Awesome Clients</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <div key={index} className="flex justify-center">
                  <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </ScrollAnimations>
        </div>
      </section>
    </Layout>
  );
};

export default About;
