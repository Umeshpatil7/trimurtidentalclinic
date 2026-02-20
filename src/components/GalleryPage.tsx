import { useState } from 'react';
import { X, Instagram } from 'lucide-react';
import clinicImage from '../assets/d74e76532ea3a22d56844a13867595f5f9d4066d.png';
import doctorImage from '../assets/31a64498573c6787ea642688cbbab1e20a2febc4.png';
import patientImage from '../assets/1cf8df4c7b094a491f4a32e78d639a2a40fd8c9f.png';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    {
      category: 'Our Clinic',
      images: [
        clinicImage,
        doctorImage,
      ],
    },
    {
      category: 'Happy Patients',
      images: [
        patientImage,
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-4">Our Gallery</h1>
            <p className="text-gray-600">
              Take a look at our modern clinic and successful treatment results
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {gallery.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-gray-900 mb-6">{section.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.images.map((image, imageIndex) => (
                  <button
                    key={imageIndex}
                    onClick={() => setSelectedImage(image)}
                    className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all aspect-square bg-gray-100"
                  >
                    <img
                      src={image}
                      alt={`${section.category} ${imageIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 px-3 py-1 rounded-full text-sm">
                        View Image
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Follow Us on Instagram</h2>
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

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-gray-900 mb-3">Watch Our Reels & Stories</h3>
            <p className="text-gray-600 mb-4">
              Get dental care tips, see patient testimonials, and stay updated with our latest treatments and offers on Instagram.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Note:</strong> To embed Instagram Reels, you'll need to get the embed code from each specific reel on Instagram and paste it here. Visit Instagram.com, open the reel you want to embed, click the three dots, and select "Embed".
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
