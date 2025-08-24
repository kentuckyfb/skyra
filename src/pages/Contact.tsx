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

            <div className="flex justify-center">
              {/* Contact Form - Full width on mobile, takes more space on desktop */}
              <ScrollAnimations className="w-full lg:w-2/3">
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
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;