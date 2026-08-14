import { useState, useEffect, useCallback } from 'react';
import { X, Instagram, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

// Optimized Main Assets (compressed from ~4MB total down to lightweight high-res JPEGs)
import doctorImage from '../assets/doctor-portrait.jpg';
import patientImage from '../assets/patient-smile.jpg';

// Curated Distinct Clinic & Equipment Photos
import receptionFull from '../assets/gallery/clinic-07.jpg';
import waitingNotices from '../assets/gallery/clinic-08.jpg';
import consultationDesk from '../assets/gallery/clinic-03.jpg';
import entranceLogo from '../assets/gallery/clinic-11.jpg';
import operatoryWide from '../assets/gallery/clinic-17.jpg';
import treatmentChairFront from '../assets/gallery/clinic-02.jpg';
import operatoryVertical from '../assets/gallery/clinic-15.jpg';
import advancedEquipmentClose from '../assets/gallery/clinic-13.jpg';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  caption?: string;
}

export function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const gallerySections = [
    {
      category: 'Clinic & Reception',
      items: [
        {
          image: entranceLogo,
          title: 'Clinic Welcome & Reception',
          category: 'Clinic & Reception',
          caption: 'Welcoming front entrance and reception desk at Trimurti Dental Clinic',
        },
        {
          image: receptionFull,
          title: 'Comfortable Waiting Lounge',
          category: 'Clinic & Reception',
          caption: 'Clean, spacious, and relaxed seating area for patients and families',
        },
        {
          image: waitingNotices,
          title: 'Patient Education Charts',
          category: 'Clinic & Reception',
          caption: 'Informative guides on modern dental implants, clear aligners & oral hygiene',
        },
        {
          image: consultationDesk,
          title: 'Doctor Consultation Desk',
          category: 'Clinic & Reception',
          caption: 'Private consultation area for personalized smile treatment planning',
        },
      ],
    },
    {
      category: 'Operatory & Dental Units',
      items: [
        {
          image: operatoryWide,
          title: 'Main Operatory & Dental Chair',
          category: 'Operatory & Dental Units',
          caption: 'Ergonomic motorized treatment chair with digital monitor display',
        },
        {
          image: treatmentChairFront,
          title: 'Advanced Sterilization Setup',
          category: 'Operatory & Dental Units',
          caption: 'Strict sterilization protocols & touchless lighting for 100% hygienic treatments',
        },
        {
          image: operatoryVertical,
          title: 'Modern Clinical Suite',
          category: 'Operatory & Dental Units',
          caption: 'Equipped with precision surgical lighting and intraoral instrumentation',
        },
        {
          image: advancedEquipmentClose,
          title: 'High-Tech Dental Suction & Delivery',
          category: 'Operatory & Dental Units',
          caption: 'Advanced automated delivery unit ensuring smooth and painless dental procedures',
        },
      ],
    },
    {
      category: 'Our Doctor & Happy Patients',
      items: [
        {
          image: doctorImage,
          title: 'Dr. Swati Deore',
          category: 'Our Doctor & Happy Patients',
          caption: 'Experienced Dental Surgeon dedicated to gentle, high-quality family dentistry',
        },
        {
          image: patientImage,
          title: 'Painless Treatment & Happy Smiles',
          category: 'Our Doctor & Happy Patients',
          caption: 'Celebrating another confident, healthy smile transformation',
        },
      ],
    },
  ];

  // Flatten items for single modal navigation across all photos
  const allItems: GalleryItem[] = gallerySections.flatMap(section => section.items);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex(prev => (prev !== null ? (prev === 0 ? allItems.length - 1 : prev - 1) : null));
  }, [allItems.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex(prev => (prev !== null ? (prev === allItems.length - 1 ? 0 : prev + 1) : null));
  }, [allItems.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  }, [selectedImageIndex, handlePrev, handleNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, selectedImageIndex]);

  const currentItem = selectedImageIndex !== null ? allItems[selectedImageIndex] : null;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Facility & Advanced Care</span>
            </div>
            <h1 className="text-gray-900 mb-4 font-bold text-3xl md:text-4xl">Our Gallery</h1>
            <p className="text-gray-600">
              Take a look at our modern clinic, advanced equipment, and happy patient smiles
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {gallerySections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-gray-900 mb-6 font-semibold text-2xl">{section.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => {
                  // Find index in flattened array
                  const globalIndex = allItems.findIndex(i => i.image === item.image);

                  return (
                    <div
                      key={item.title}
                      onClick={() => setSelectedImageIndex(globalIndex)}
                      className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all aspect-square bg-gray-100 cursor-pointer text-left relative flex flex-col justify-end"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {/* Subtle hover overlay with informative title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 pointer-events-none">
                        <span className="text-xs font-medium text-blue-300 mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {section.category}
                        </span>
                        <h3 className="text-white font-semibold text-sm line-clamp-1 mb-2">
                          {item.title}
                        </h3>
                        <div>
                          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            View Fullscreen
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After Smile Transformations Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-white border-t border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-gray-900 mb-3 font-semibold text-2xl md:text-3xl">Smile Transformations</h2>
            <p className="text-gray-600">
              Real results delivered with gentle care, aesthetic precision, and modern dental technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-gray-900 mb-1 text-lg">Teeth Whitening</h3>
              <p className="text-gray-500 text-xs mb-4">Instant 3–5 shades brighter smile with painless in-office whitening.</p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <span>✓ 100% Safe Enamel Care</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="font-semibold text-gray-900 mb-1 text-lg">Dental Implants</h3>
              <p className="text-gray-500 text-xs mb-4">Permanent, natural-looking replacement for missing teeth with lifetime durability.</p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <span>✓ Natural Look & Feel</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">🦷</div>
              <h3 className="font-semibold text-gray-900 mb-1 text-lg">Smile Makeover</h3>
              <p className="text-gray-500 text-xs mb-4">Custom ceramic veneers, crowns & aligners to create your ideal smile.</p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                <span>✓ Aesthetic Perfection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4 font-semibold text-2xl">Follow Us on Instagram</h2>
            <p className="text-gray-600 mb-6">
              Watch our latest dental tips, patient transformations, and clinic updates
            </p>
            <a
              href="https://instagram.com/trimurti_dental_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all font-medium shadow-md hover:shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>@trimurti_dental_clinic</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg max-w-4xl mx-auto">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-gray-900 mb-3 font-semibold text-xl">Watch Our Reels & Stories</h3>
            <p className="text-gray-600 mb-4">
              Get dental care tips, see patient testimonials, and stay updated with our latest treatments and offers on Instagram.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Note:</strong> To embed Instagram Reels, you'll need to get the embed code from each specific reel on Instagram and paste it here. Visit Instagram.com, open the reel you want to embed, click the three dots, and select "Embed".
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal with Next / Prev Controls */}
      {currentItem && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 select-none"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Header Controls */}
          <div
            className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                {currentItem.category}
              </span>
              <h3 className="text-base md:text-lg font-bold text-white line-clamp-1">
                {currentItem.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-200">
                {selectedImageIndex + 1} / {allItems.length}
              </span>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="text-white hover:text-gray-300 cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Main Image Frame */}
          <div
            className="relative max-w-5xl max-h-[75vh] flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl transition-transform duration-200"
            />
          </div>

          {/* Caption at Bottom */}
          {currentItem.caption && (
            <div
              className="absolute bottom-4 inset-x-4 max-w-xl mx-auto bg-black/60 backdrop-blur-sm border border-white/10 text-white rounded-xl px-4 py-2.5 text-center text-xs md:text-sm text-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              {currentItem.caption}
            </div>
          )}

          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all cursor-pointer hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all cursor-pointer hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      )}
    </div>
  );
}
