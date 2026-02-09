import { Award, Users, Heart, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import doctorImage from 'figma:asset/31a64498573c6787ea642688cbbab1e20a2febc4.png';

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-4">About Our Dental Clinic</h1>
            <p className="text-gray-600">
              Providing exceptional dental care to the Nashik community for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                src={doctorImage}
                alt="Dr. Swati Deore - Trimurti Dental Clinic"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Meet Our Expert Dentist</h2>
              <h3 className="text-blue-600 mb-4">Dr. Swati Deore - BDS, Mumbai</h3>
              <p className="text-gray-600 mb-4">
                Dr. Swati Deore is a highly qualified and experienced dentist committed to providing the highest quality dental treatments using the latest technology and techniques. With her expertise and gentle approach, she has helped countless patients achieve their perfect smile.
              </p>
              <p className="text-gray-600 mb-6">
                Specializing in comprehensive dental care including cosmetic dentistry, dental implants, and advanced root canal treatments, Dr. Swati Deore's practice is built on a foundation of trust, excellence, and patient-centered care.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-900">Qualifications</div>
                    <div className="text-gray-600 text-sm">BDS (Bachelor of Dental Surgery), Mumbai</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-900">Experience</div>
                    <div className="text-gray-600 text-sm">Experienced dental professional with thousands of successful treatments</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-900">Specializations</div>
                    <div className="text-gray-600 text-sm">Cosmetic Dentistry, Dental Implants, Root Canal Treatment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide world-class dental care that is accessible, affordable, and delivered with compassion. We strive to create a comfortable environment where patients feel valued and cared for, ensuring every visit is a positive experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted dental clinic in Nashik, known for excellence in patient care, advanced treatments, and a commitment to helping our community achieve optimal oral health and beautiful smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Clinic Features</h2>
            <p className="text-gray-600">State-of-the-art facilities for your comfort and care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-gray-900 mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Fully equipped with the latest dental technology and comfortable treatment rooms
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-gray-900 mb-2">Advanced Equipment</h3>
              <p className="text-gray-600 text-sm">
                Digital X-rays, intraoral cameras, and laser dentistry for precise treatments
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">🧼</div>
              <h3 className="text-gray-900 mb-2">Sterilization Protocols</h3>
              <p className="text-gray-600 text-sm">
                Hospital-grade sterilization and strict infection control measures
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">💺</div>
              <h3 className="text-gray-900 mb-2">Comfortable Environment</h3>
              <p className="text-gray-600 text-sm">
                Relaxing ambiance with comfortable seating and entertainment options
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">🅿️</div>
              <h3 className="text-gray-900 mb-2">Easy Accessibility</h3>
              <p className="text-gray-600 text-sm">
                Centrally located at Trimurti Chowk with ample parking space
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing with flexible payment options and insurance accepted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Patients Choose Us</h2>
            <p className="text-blue-100">
              We go above and beyond to ensure your dental experience is exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">1000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl mb-2">12</div>
              <div className="text-blue-100">Dental Services</div>
            </div>
            <div>
              <div className="text-4xl mb-2">4.9★</div>
              <div className="text-blue-100">Patient Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
