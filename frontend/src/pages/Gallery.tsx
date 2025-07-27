import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";
import { Camera, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import { apiEndpoint } from '../../apiEndpoint';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  photo: string;
  createdAt: string;
}

export default function Gallery() {
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState<GalleryItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getAllGalleryDataApi = async () => {
    try {
      const res = await axios.get(apiEndpoint.fetchGallery);
      setGalleryData(res.data.galleryData);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    getAllGalleryDataApi();
  }, []);

  // Group gallery items by title
  const groupedGallery = galleryData.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    }
    acc[item.title].push(item);
    return acc;
  }, {} as Record<string, GalleryItem[]>);

  const openLightbox = (title: string, index: number = 0) => {
    setCurrentGroup(groupedGallery[title]);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : currentGroup.length - 1));
    } else {
      setCurrentImageIndex(prev => (prev < currentGroup.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="pt-16">
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox} 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-4xl w-full">
            <img 
              src={currentGroup[currentImageIndex].photo} 
              alt="Gallery" 
              className="max-h-[80vh] w-full object-contain"
            />
            
            <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
              <button 
                onClick={() => navigateLightbox('prev')}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="text-white text-center">
                {currentImageIndex + 1} / {currentGroup.length}
              </div>
              <button 
                onClick={() => navigateLightbox('next')}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <HeroSection
        subtitle="School Gallery"
        title="Capturing Moments of Excellence"
        description="Explore the vibrant life at Siddhartha School through our collection of photos showcasing academic achievements, campus life, and memorable events."
        backgroundImage={heroImage}
        height="md"
      />

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Latest moments and highlights from our school.
            </p>
          </div>

          {galleryData.length === 0 ? (
            <p className="text-center text-muted-foreground">Loading gallery...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(groupedGallery).map(([title, items]) => (
                <Card
                  key={title}
                  className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth cursor-pointer group"
                  onClick={() => openLightbox(title)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={items[0].photo}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    {items.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        +{items.length - 1} more
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-muted-foreground text-xs">{items[0].description}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">School Video Tour</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our campus and see what makes Siddhartha School special.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Campus Virtual Tour</h3>
                  <p className="text-muted-foreground">Click to watch our school tour video</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}