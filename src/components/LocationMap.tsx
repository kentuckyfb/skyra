import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Visit Our <span className="text-primary">Studio</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="aspect-square lg:aspect-video rounded-2xl overflow-hidden glass">
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
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visit our studio in the heart of Colombo, or reach out to us through any of the 
                channels below. We'd love to discuss your photography needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Studio Address</h4>
                  <p className="text-muted-foreground">
                    123 Galle Road<br />
                    Colombo 07<br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+94 77 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@skyra.lk</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Studio Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM<br />
                    Sun: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;