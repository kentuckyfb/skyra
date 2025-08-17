import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, User, Calendar, Star } from 'lucide-react';
import Layout from '../components/Layout';
import ScrollAnimations from '../components/ScrollAnimations';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+94 77 123 4567',
      secondary: 'Mon - Fri, 9AM - 6PM',
      action: 'tel:+94771234567',
      cta: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@skyra.lk',
      secondary: 'Response within 24 hours',
      action: 'mailto:hello@skyra.lk',
      cta: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Studio',
      primary: '123 Galle Road',
      secondary: 'Colombo 07, Sri Lanka',
      action: '#map',
      cta: 'Get Directions'
    }
  ];

  const features = [
    { icon: CheckCircle, text: 'Free consultation' },
    { icon: Clock, text: '24-hour response' },
    { icon: Star, text: 'Professional quality' },
    { icon: Calendar, text: 'Flexible scheduling' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours and offer same-day consultations for urgent projects.'
    },
    {
      icon: CheckCircle,
      title: 'Professional Quality',
      description: 'State-of-the-art equipment and professional editing ensure every image meets the highest standards.'
    },
    {
      icon: MessageCircle,
      title: 'Personalized Service',
      description: 'Every project receives individual attention with customized solutions tailored to your specific needs.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Subtle background curves */}
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
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 text-primary">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">Get In Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                Let's Create Something <span className="text-primary">Amazing</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Ready to bring your vision to life? Get in touch with us to discuss your photography needs.
              </p>
              
              {/* Features Grid - Mobile Optimized */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-xs md:text-sm text-muted-foreground text-center">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Quick Contact Methods - Mobile First */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {contactMethods.map((method, index) => (
              <ScrollAnimations key={method.title} delay={index * 100}>
                <a
                  href={method.action}
                  className="group block bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl hover:border-primary/20 active:scale-95"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 group-hover:bg-primary/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 transition-colors duration-300">
                    <method.icon size={24} className="text-primary md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-base md:text-lg text-foreground mb-1">{method.primary}</p>
                  <p className="text-sm text-primary mb-3 md:mb-4">{method.secondary}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                    <span>{method.cta}</span>
                    <Send size={14} />
                  </div>
                </a>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <ScrollAnimations>
              <div className="text-center mb-12 md:mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                </p>
              </div>
            </ScrollAnimations>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form - Full width on mobile, takes more space on desktop */}
              <ScrollAnimations>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone and Service Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="+94 77 123 4567"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="corporate">Corporate Photography</option>
                          <option value="portraits">Portrait Photography</option>
                          <option value="concerts">Concert Photography</option>
                          <option value="product">Product Photography</option>
                          <option value="sports">Sports Photography</option>
                          <option value="other">Other / Custom</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project, timeline, budget range, location, and any specific requirements..."
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium tracking-wide hover:scale-[1.02] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollAnimations>

              {/* Why Choose Us - Sidebar */}
              <ScrollAnimations delay={200}>
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                      Why Choose <span className="text-primary">SKYRA?</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're passionate about creating visual stories that matter. With years of experience 
                      and a commitment to excellence, we deliver photography that exceeds expectations.
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 md:gap-4 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{benefit.title}</h4>
                          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Free Consultation CTA */}
                  <div className="bg-primary/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-primary/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary text-sm md:text-base">Free Consultation Available</h4>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                          Not sure which service is right for you? Book a free consultation where we'll discuss 
                          your project requirements and recommend the best approach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Mobile Optimized */}
      <section id="map" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimations>
            <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 text-primary">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">Visit Our Studio</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Studio <span className="text-primary">Location</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of Colombo, our studio is easily accessible and equipped with state-of-the-art facilities.
              </p>
            </div>
          </ScrollAnimations>
          
          <ScrollAnimations delay={200}>
            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border/50 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.865872624094!2d79.86124431477357!3d6.914993494997094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259664b6d3fdb%3A0x5ae89c8b78b1e2a1!2sColombo%2007%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </ScrollAnimations>

          {/* Contact Info Cards Below Map - Mobile */}
          <ScrollAnimations delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-sm text-muted-foreground">123 Galle Road<br />Colombo 07, Sri Lanka</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Studio Hours</h4>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Appointments</h4>
                <p className="text-sm text-muted-foreground">By appointment<br />Same-day available</p>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;