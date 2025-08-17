import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SuggestedItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface SuggestedContentProps {
  items: SuggestedItem[];
  title?: string;
}

const SuggestedContent = ({ items, title = "You Might Also Like" }: SuggestedContentProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="group block glass rounded-xl overflow-hidden hover-lift hover-glow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="font-medium">View Gallery</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestedContent;