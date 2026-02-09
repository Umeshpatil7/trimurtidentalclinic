import { Phone, Calendar, Award, Shield, Clock, Star } from 'lucide-react';
import clinicImage from '../assets/d74e76532ea3a22d56844a13867595f5f9d4066d.png';
import doctorImage from '../assets/31a64498573c6787ea642688cbbab1e20a2febc4.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    { name: 'Root Canal Treatment', icon: '🦷', id: 'root-canal' },
    { name: 'Dental Implants', icon: '💎', id: 'dental-implants' },
    { name: 'Teeth Whitening', icon: '✨', id: 'teeth-whitening' },
    { name: 'Orthodontics', icon: '🔧', id: 'orthodontics' },
    { name: 'Smile Makeover', icon: '😊', id: 'smile-makeover' },
    { name: 'Tooth Extraction', icon: '🪥', id: 'tooth-extraction' },
    { name: 'Pediatric Dentistry', icon: '👶', id: 'pediatric-dentistry' },
    { name: 'Cosmetic Dentistry', icon: '💄', id: 'cosmetic-dentistry' },
    { name: 'Scaling & Polishing', icon: '🪥', id: 'scaling-polishing' },
    { name: 'Crowns & Bridges', icon: '👑', id: 'crowns-bridges' },
    { name: 'Gum Treatment', icon: '🩺', id: 'gum-treatment' },
    { name: 'Dental Fillings', icon: '🔬', id: 'dental-fillings' },
  ];

  const features = [
    { icon: Award, title: 'Expert Dentist', desc: 'Highly qualified and experienced dental professional' },
    { icon: Shield, title: 'Hygienic & Safe', desc: 'Sterilized equipment and strict safety protocols' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Convenient appointment times for your schedule' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      text: 'Excellent service! The doctor is very skilled and caring. My root canal treatment was painless.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      text: 'Very professional clinic with modern equipment. Highly recommend for dental implants.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      text: 'Great experience with teeth whitening. The staff is friendly and the clinic is very clean.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-blue-900 mb-4">
                Your Trusted Dental Care in Nashik
              </h1>
              <p className="text-gray-600 mb-8">
                Experience world-class dental treatments with advanced technology and expert care.
                Located at Trimurti Chowk, Nashik - your smile is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <a
                  href="tel:+919420692977"
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={clinicImage}
                alt="Trimurti Dental Clinic Interior"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Dental Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigate(service.id)}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center group hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-gray-900 text-sm md:text-base group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('services')}
              className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                src={doctorImage}
                alt="Dr. Swati Deore - Trimurti Dental Clinic"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-gray-600 mb-6">
                At Trimurti Dental Clinic in Trimurti Chowk, Nashik, we combine years of experience with the latest dental technology to provide you with exceptional care. Our mission is to make quality dental care accessible and comfortable for everyone.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">15+ Years of Experience in Dental Care</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Advanced Technology & Modern Equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Painless & Comfortable Treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Affordable Pricing & Flexible Payment Options</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('about')}
                className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
              >
                Learn More About Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 mb-6">Real experiences from real people</p>
            <a
              href="https://share.google/zLC67Vv7R8APT35d7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium"
            >
              <Star className="w-5 h-5 fill-current" />
              <span>4.9/5 Rating on Google Review</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('testimonials')}
              className="bg-white text-blue-600 border border-blue-200 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2 font-medium"
            >
              Read More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready for a Healthier Smile?</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Book your appointment today and experience the best dental care in Nashik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Book Appointment
            </button>
            <a
              href="https://wa.me/919420692977"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
