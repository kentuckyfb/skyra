import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface Image {
  id: string;
  src: string;
  alt: string;
  aspectRatio?: string;
}

interface ImageGalleryProps {
  images: Image[];
  title: string;
}

// Lightbox component that will be portaled
const Lightbox = ({ 
  selectedImage, 
  images, 
  onClose, 
  onNavigate 
}: {
  selectedImage: number;
  images: Image[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          onNavigate('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNavigate('next');
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', checkMobile);
    };
  }, [onClose, onNavigate]);

  const currentImage = images[selectedImage];

  const lightboxStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.96)',
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column'
  };

  // Close button - top right
  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '16px' : '24px',
    right: isMobile ? '16px' : '24px',
    width: isMobile ? '40px' : '48px',
    height: isMobile ? '40px' : '48px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: isMobile ? '18px' : '20px',
    fontWeight: '500',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.2s ease',
    zIndex: 1000002
  };

  // Main content area
  const contentAreaStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '60px 20px 40px 20px' : '80px 40px 60px 40px',
    position: 'relative'
  };

  // Image container with counter
  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '70vh'
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: isMobile ? '12px' : '16px',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)'
  };

  // Counter positioned on top right of image
  const counterStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '12px' : '16px',
    right: isMobile ? '12px' : '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: isMobile ? '6px 12px' : '8px 16px',
    borderRadius: '20px',
    fontSize: isMobile ? '12px' : '14px',
    fontWeight: '600',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 1000001
  };

  // Bottom section with caption and navigation
  const bottomSectionStyle: React.CSSProperties = {
    marginTop: isMobile ? '24px' : '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '16px' : '20px',
    maxWidth: '100%'
  };

  const captionStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: '1.5',
    maxWidth: isMobile ? '280px' : '400px',
    margin: '0 auto'
  };

  const bottomNavigationStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '16px' : '20px'
  };

  const bottomNavButtonStyle: React.CSSProperties = {
    width: isMobile ? '44px' : '50px',
    height: isMobile ? '44px' : '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: isMobile ? '18px' : '20px',
    fontWeight: '500',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.2s ease'
  };

  const dotIndicatorStyle: React.CSSProperties = {
    width: '6px',
    height: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%'
  };

  return (
    <div style={lightboxStyle}>
      {/* CLOSE BUTTON - TOP RIGHT */}
      <button onClick={onClose} style={closeButtonStyle}>
        <X size={24} />
      </button>

      {/* MAIN CONTENT AREA */}
      <div style={contentAreaStyle}>
        {/* IMAGE WITH COUNTER */}
        <div style={imageContainerStyle}>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            style={imageStyle}
          />
          
          {/* COUNTER ON TOP RIGHT OF IMAGE */}
          <div style={counterStyle}>
            {selectedImage + 1} of {images.length}
          </div>
        </div>

        {/* BOTTOM SECTION - CAPTION + NAVIGATION */}
        <div style={bottomSectionStyle}>
          {/* CAPTION */}
          <div style={captionStyle}>
            {currentImage.alt}
          </div>

          {/* BOTTOM NAVIGATION */}
          <div style={bottomNavigationStyle}>
            <button onClick={() => onNavigate('prev')} style={bottomNavButtonStyle}>
              ←
            </button>
            
            <div style={dotIndicatorStyle}></div>
            
            <button onClick={() => onNavigate('next')} style={bottomNavButtonStyle}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'portrait' | 'landscape'>('all');

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'portrait', label: 'Portrait' },
    { key: 'landscape', label: 'Landscape' }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const filteredImages = images.filter(image => {
    if (filter === 'all') return true;
    if (filter === 'portrait') return image.aspectRatio === '3/4';
    if (filter === 'landscape') return image.aspectRatio === '16/9' || image.aspectRatio === '4/3';
    return true;
  });

  return (
    <>
      <div className="space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 text-primary">
            <ZoomIn className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Portfolio Gallery</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">
            {title} <span className="text-primary">Collection</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our curated selection of {title.toLowerCase()} photography showcasing our expertise and creative vision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-1">
            {filters.map((filterOption) => (
              <button
                key={filterOption.key}
                type="button"
                onClick={() => setFilter(filterOption.key as any)}
                className={`px-3 md:px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="group cursor-pointer bg-transparent border-0 p-0 w-full"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 hover:border-primary/20 aspect-square">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none"
                  loading="lazy"
                  draggable={false}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2 md:p-3 lg:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs md:text-sm lg:text-base font-medium line-clamp-2">
                    {image.alt}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* PORTAL LIGHTBOX - RENDERS TO DOCUMENT.BODY */}
      {selectedImage !== null && typeof document !== 'undefined' && createPortal(
        <Lightbox
          selectedImage={selectedImage}
          images={filteredImages}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />,
        document.body
      )}
    </>
  );
};

export default ImageGallery;