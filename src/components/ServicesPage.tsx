import rootCanalImg from '../assets/services/Root Canal.jpeg';
import dentalImplantImg from '../assets/services/dental Implant.jpeg';
import scalingImg from '../assets/services/Scaling & Polishing.jpeg';
import pediatricImg from '../assets/services/Kids Section.jpeg';
import scannerImg from '../assets/services/In house scanner.jpeg';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: 'root-canal',
      icon: '🦷',
      image: rootCanalImg,
      name: 'Root Canal Treatment',
      description: 'Save your natural tooth with painless root canal therapy using advanced techniques',
      features: ['Painless procedure', 'Single sitting option', 'High success rate'],
    },
    {
      id: 'dental-implants',
      icon: '💎',
      image: dentalImplantImg,
      name: 'Dental Implants',
      description: 'Permanent solution for missing teeth with titanium implants that look and feel natural',
      features: ['Permanent solution', 'Natural appearance', 'Long-lasting results'],
    },
    {
      id: 'scaling-polishing',
      icon: '🪥',
      image: scalingImg,
      name: 'Scaling & Polishing',
      description: 'Professional teeth cleaning to remove plaque, tartar, and stains',
      features: ['Deep cleaning', 'Stain removal', 'Fresh breath'],
    },
    {
      id: 'pediatric-dentistry',
      icon: '👶',
      image: pediatricImg,
      name: 'Pediatric Dentistry (Kids Care)',
      description: 'Specialized dental care for children in a friendly, comfortable and caring environment',
      features: ['Child-friendly approach', 'Dedicated kids setup', 'Painless preventive care'],
    },
    {
      id: 'crowns-bridges',
      icon: '👑',
      image: scannerImg,
      name: 'Digital Scanning & Modern Prosthetics',
      description: 'Advanced in-house digital intraoral 3D scanner for precision crowns, bridges, and aligners',
      features: ['In-house 3D digital scanner', 'Instant impression', 'Precision custom fit'],
    },
    {
      id: 'teeth-whitening',
      icon: '✨',
      name: 'Teeth Whitening',
      description: 'Get a brighter, whiter smile with professional teeth whitening treatments',
      features: ['Instant results', 'Safe & effective', 'Long-lasting whiteness'],
    },
    {
      id: 'orthodontics',
      icon: '🔧',
      name: 'Orthodontics (Braces & Aligners)',
      description: 'Straighten your teeth with traditional braces or invisible aligners',
      features: ['Metal & ceramic braces', 'Invisible aligners', 'Customized treatment'],
    },
    {
      id: 'smile-makeover',
      icon: '😊',
      name: 'Smile Makeover',
      description: 'Complete smile transformation combining multiple cosmetic procedures',
      features: ['Customized plan', 'Complete transformation', 'Boost confidence'],
    },
    {
      id: 'tooth-extraction',
      icon: '🪥',
      name: 'Tooth Extraction',
      description: 'Safe and painless tooth removal including wisdom teeth extraction',
      features: ['Painless extraction', 'Quick recovery', 'Expert care'],
    },
    {
      id: 'pediatric-dentistry',
      icon: '👶',
      name: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a friendly, comfortable environment',
      features: ['Child-friendly approach', 'Preventive care', 'Early intervention'],
    },
    {
      id: 'cosmetic-dentistry',
      icon: '💄',
      name: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, bonding, and aesthetic treatments',
      features: ['Veneers & bonding', 'Gum contouring', 'Aesthetic enhancement'],
    },
    {
      id: 'scaling-polishing',
      icon: '🪥',
      name: 'Scaling & Polishing',
      description: 'Professional teeth cleaning to remove plaque, tartar, and stains',
      features: ['Deep cleaning', 'Stain removal', 'Fresh breath'],
    },
    {
      id: 'crowns-bridges',
      icon: '👑',
      name: 'Crowns & Bridges',
      description: 'Restore damaged teeth or replace missing teeth with custom crowns and bridges',
      features: ['Natural appearance', 'Durable materials', 'Custom-fitted'],
    },
    {
      id: 'gum-treatment',
      icon: '🩺',
      name: 'Gum Treatment',
      description: 'Treat gum diseases and maintain healthy gums with specialized periodontal care',
      features: ['Disease prevention', 'Advanced treatment', 'Healthy gums'],
    },
    {
      id: 'dental-fillings',
      icon: '🔬',
      name: 'Dental Fillings',
      description: 'Repair cavities with tooth-colored fillings that blend naturally',
      features: ['Tooth-colored fillings', 'Pain-free procedure', 'Long-lasting'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-4">Our Dental Services</h1>
            <p className="text-gray-600">
              Comprehensive dental care solutions for all your oral health needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group flex flex-col"
                onClick={() => onNavigate(service.id)}
              >
                {service.image ? (
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center text-xl">
                      {service.icon}
                    </div>
                  </div>
                ) : (
                  <div className="pt-6 px-6">
                    <div className="text-4xl mb-2">{service.icon}</div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-gray-900 mb-2 font-semibold text-lg group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-blue-600 text-sm font-medium group-hover:underline">
                    <span>View Treatment Details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Need a Specific Treatment?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you with personalized treatment plans tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919876543210"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
