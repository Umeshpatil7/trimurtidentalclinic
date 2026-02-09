import { CheckCircle, Clock, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: string) => void;
}

export function ServiceDetailPage({ serviceId, onNavigate }: ServiceDetailPageProps) {
  const serviceData: Record<string, any> = {
    'root-canal': {
      name: 'Root Canal Treatment',
      icon: '🦷',
      image: 'https://images.unsplash.com/photo-1758205307804-097f5437189f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGFpciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI2OTg0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Root canal treatment is a dental procedure to save a tooth that has become infected or badly decayed. Our painless root canal therapy uses advanced techniques and modern equipment to ensure your comfort throughout the procedure.',
      benefits: [
        'Saves your natural tooth',
        'Eliminates tooth pain and infection',
        'Prevents spread of infection',
        'Restores normal biting and chewing',
        'Natural appearance maintained',
      ],
      process: [
        'Initial examination and X-ray',
        'Local anesthesia for pain-free procedure',
        'Removal of infected pulp',
        'Cleaning and shaping of root canals',
        'Filling and sealing',
        'Crown placement (if needed)',
      ],
      duration: '1-2 sittings',
      price: '₹3,000 - ₹8,000',
      faqs: [
        {
          q: 'Is root canal treatment painful?',
          a: 'No, with modern anesthesia and techniques, root canal treatment is virtually painless. Most patients report feeling comfortable during the procedure.',
        },
        {
          q: 'How long does a root canal take?',
          a: 'A typical root canal can be completed in one or two appointments, each lasting 60-90 minutes.',
        },
        {
          q: 'How long will the treated tooth last?',
          a: 'With proper care, a tooth treated with root canal therapy can last a lifetime.',
        },
      ],
    },
    'dental-implants': {
      name: 'Dental Implants',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50fGVufDF8fHx8MTc2MjY3ODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Dental implants are the best permanent solution for missing teeth. Made from titanium, they are surgically placed into the jawbone and function just like natural teeth.',
      benefits: [
        'Permanent and long-lasting solution',
        'Looks and feels like natural teeth',
        'Prevents bone loss',
        'Doesn\'t affect adjacent teeth',
        'Improved chewing and speaking',
      ],
      process: [
        'Comprehensive evaluation and planning',
        'Implant placement surgery',
        'Healing period (3-6 months)',
        'Abutment placement',
        'Custom crown fabrication',
        'Final crown placement',
      ],
      duration: '3-6 months (complete process)',
      price: '₹25,000 - ₹50,000 per tooth',
      faqs: [
        {
          q: 'Are dental implants safe?',
          a: 'Yes, dental implants are very safe with a success rate of over 95%. They are made from biocompatible titanium.',
        },
        {
          q: 'How long do implants last?',
          a: 'With proper care and maintenance, dental implants can last 20-30 years or even a lifetime.',
        },
        {
          q: 'Is the procedure painful?',
          a: 'The procedure is performed under local anesthesia. You may experience mild discomfort after surgery, which is manageable with medication.',
        },
      ],
    },
    'teeth-whitening': {
      name: 'Teeth Whitening',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZ3xlbnwxfHx8fDE3NjI2Nzk0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Professional teeth whitening is a safe and effective way to brighten your smile. We offer both in-office and take-home whitening options to suit your needs.',
      benefits: [
        'Brighter, whiter teeth in one session',
        'Safe for tooth enamel',
        'Long-lasting results',
        'Boosts confidence and self-esteem',
        'Non-invasive procedure',
      ],
      process: [
        'Dental examination and cleaning',
        'Shade selection',
        'Application of whitening gel',
        'LED light activation (for in-office)',
        'Multiple applications for best results',
        'Final polish',
      ],
      duration: '1 hour (in-office)',
      price: '₹8,000 - ₹15,000',
      faqs: [
        {
          q: 'Is teeth whitening safe?',
          a: 'Yes, professional teeth whitening is completely safe when done by a dentist. It does not damage tooth enamel.',
        },
        {
          q: 'How long do results last?',
          a: 'Results typically last 1-3 years, depending on your oral hygiene and lifestyle habits.',
        },
        {
          q: 'Will it cause sensitivity?',
          a: 'Some patients may experience temporary sensitivity, which usually subsides within a few days.',
        },
      ],
    },
    'orthodontics': {
      name: 'Orthodontics (Braces & Aligners)',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1598531228433-d9f0cb960816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RvbnRpYyUyMGJyYWNlc3xlbnwxfHx8fDE3NjI2Nzk0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Orthodontic treatment corrects misaligned teeth and improves your bite. We offer traditional metal braces, ceramic braces, and invisible aligners.',
      benefits: [
        'Straight, properly aligned teeth',
        'Improved bite and jaw function',
        'Easier cleaning and maintenance',
        'Enhanced facial appearance',
        'Reduced risk of dental problems',
      ],
      process: [
        'Initial consultation and X-rays',
        'Treatment plan creation',
        'Braces/aligner placement',
        'Regular adjustment visits',
        'Monitoring progress',
        'Retainer after treatment',
      ],
      duration: '12-24 months',
      price: '₹30,000 - ₹80,000',
      faqs: [
        {
          q: 'What age is best for braces?',
          a: 'While braces are often associated with teenagers, adults can also benefit. The best time varies for each individual.',
        },
        {
          q: 'Are invisible aligners effective?',
          a: 'Yes, invisible aligners are very effective for mild to moderate alignment issues and offer a discreet option.',
        },
        {
          q: 'Will braces hurt?',
          a: 'You may experience mild discomfort after initial placement and adjustments, but this is temporary.',
        },
      ],
    },
    'smile-makeover': {
      name: 'Smile Makeover',
      icon: '😊',
      image: 'https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxlfGVufDF8fHx8MTc2MjY4MTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'A complete smile transformation that combines multiple cosmetic procedures to give you the smile of your dreams.',
      benefits: [
        'Complete smile transformation',
        'Customized to your face and features',
        'Combines multiple procedures',
        'Dramatic confidence boost',
        'Long-lasting beautiful results',
      ],
      process: [
        'Comprehensive smile analysis',
        'Digital smile design',
        'Treatment plan discussion',
        'Sequential procedures',
        'Progress monitoring',
        'Final adjustments',
      ],
      duration: 'Varies (2-6 months)',
      price: '₹50,000 - ₹2,00,000',
      faqs: [
        {
          q: 'What procedures are included?',
          a: 'Smile makeovers can include teeth whitening, veneers, crowns, implants, gum contouring, and orthodontics.',
        },
        {
          q: 'How long does it take?',
          a: 'The timeline varies based on the procedures needed, typically 2-6 months for complete transformation.',
        },
        {
          q: 'Can I see results beforehand?',
          a: 'Yes, we use digital smile design to show you a preview of your new smile before starting treatment.',
        },
      ],
    },
    'tooth-extraction': {
      name: 'Tooth Extraction',
      icon: '🪥',
      image: 'https://images.unsplash.com/photo-1758205307804-097f5437189f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGFpciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI2OTg0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'When a tooth cannot be saved, extraction may be necessary. We perform safe, painless extractions including wisdom teeth removal.',
      benefits: [
        'Relief from pain and infection',
        'Prevents spread of decay',
        'Protects surrounding teeth',
        'Painless procedure',
        'Quick recovery time',
      ],
      process: [
        'Examination and X-ray',
        'Local anesthesia',
        'Tooth extraction',
        'Socket cleaning',
        'Gauze placement',
        'Post-operative instructions',
      ],
      duration: '30-60 minutes',
      price: '₹1,500 - ₹5,000',
      faqs: [
        {
          q: 'Is tooth extraction painful?',
          a: 'No, the area is completely numbed with local anesthesia, so you won\'t feel pain during the procedure.',
        },
        {
          q: 'How long is recovery?',
          a: 'Most patients recover within 3-7 days. Wisdom teeth may take slightly longer.',
        },
        {
          q: 'What should I do after extraction?',
          a: 'Follow post-operative instructions, avoid hard foods, and maintain gentle oral hygiene.',
        },
      ],
    },
    'pediatric-dentistry': {
      name: 'Pediatric Dentistry',
      icon: '👶',
      image: 'https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxlfGVufDF8fHx8MTc2MjY4MTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Specialized dental care for children from infancy through adolescence. We create a friendly, comfortable environment for young patients.',
      benefits: [
        'Early detection of dental issues',
        'Preventive care and education',
        'Child-friendly environment',
        'Builds positive dental habits',
        'Specialized pediatric techniques',
      ],
      process: [
        'Gentle introduction to dentistry',
        'Comprehensive oral examination',
        'Cleaning and fluoride treatment',
        'Cavity prevention',
        'Parent education',
        'Regular follow-ups',
      ],
      duration: '30-45 minutes',
      price: '₹500 - ₹2,000',
      faqs: [
        {
          q: 'When should my child first visit?',
          a: 'The first dental visit should be around the child\'s first birthday or when the first tooth appears.',
        },
        {
          q: 'How to prepare my child?',
          a: 'Explain the visit positively, read books about dentist visits, and arrive early to help them relax.',
        },
        {
          q: 'Are treatments different for children?',
          a: 'Yes, we use child-friendly techniques and equipment designed specifically for young patients.',
        },
      ],
    },
    'cosmetic-dentistry': {
      name: 'Cosmetic Dentistry',
      icon: '💄',
      image: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZ3xlbnwxfHx8fDE3NjI2Nzk0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Enhance the appearance of your teeth with cosmetic procedures including veneers, bonding, and gum contouring.',
      benefits: [
        'Enhanced smile aesthetics',
        'Improved tooth shape and color',
        'Minimal tooth reduction',
        'Natural-looking results',
        'Boosts self-confidence',
      ],
      process: [
        'Smile consultation',
        'Treatment planning',
        'Preparation (if needed)',
        'Impressions or digital scans',
        'Custom fabrication',
        'Final placement and adjustments',
      ],
      duration: '1-3 visits',
      price: '₹5,000 - ₹25,000 per tooth',
      faqs: [
        {
          q: 'What are veneers?',
          a: 'Veneers are thin shells of porcelain or composite that cover the front surface of teeth to improve appearance.',
        },
        {
          q: 'How long do veneers last?',
          a: 'Porcelain veneers can last 10-15 years with proper care and maintenance.',
        },
        {
          q: 'Is cosmetic dentistry only aesthetic?',
          a: 'While primarily aesthetic, many cosmetic procedures also improve function and oral health.',
        },
      ],
    },
    'scaling-polishing': {
      name: 'Scaling & Polishing',
      icon: '🪥',
      image: 'https://images.unsplash.com/photo-1758205307804-097f5437189f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGFpciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI2OTg0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Professional deep cleaning to remove plaque, tartar, and stains for healthier teeth and gums.',
      benefits: [
        'Removes plaque and tartar',
        'Prevents gum disease',
        'Fresher breath',
        'Brighter teeth',
        'Healthier gums',
      ],
      process: [
        'Oral examination',
        'Ultrasonic scaling',
        'Manual scaling',
        'Polishing',
        'Fluoride treatment (optional)',
        'Oral hygiene instructions',
      ],
      duration: '30-45 minutes',
      price: '₹800 - ₹2,000',
      faqs: [
        {
          q: 'How often should I get scaling?',
          a: 'Generally every 6 months, but your dentist may recommend more frequent visits based on your oral health.',
        },
        {
          q: 'Does scaling damage teeth?',
          a: 'No, professional scaling is safe and does not damage tooth enamel when done correctly.',
        },
        {
          q: 'Will my teeth be sensitive after?',
          a: 'Some patients experience mild sensitivity for a day or two, which is normal and temporary.',
        },
      ],
    },
    'crowns-bridges': {
      name: 'Crowns & Bridges',
      icon: '👑',
      image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50fGVufDF8fHx8MTc2MjY3ODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Restore damaged teeth or replace missing teeth with custom-made crowns and bridges that look and function like natural teeth.',
      benefits: [
        'Restores tooth function',
        'Natural appearance',
        'Durable and long-lasting',
        'Protects weak teeth',
        'Fills gaps from missing teeth',
      ],
      process: [
        'Initial consultation',
        'Tooth preparation',
        'Impressions or digital scans',
        'Temporary crown/bridge placement',
        'Custom fabrication in lab',
        'Final placement and adjustment',
      ],
      duration: '2-3 visits',
      price: '₹5,000 - ₹15,000 per unit',
      faqs: [
        {
          q: 'How long do crowns last?',
          a: 'With proper care, dental crowns can last 10-15 years or even longer.',
        },
        {
          q: 'What materials are used?',
          a: 'We offer porcelain, ceramic, metal, and porcelain-fused-to-metal options based on your needs.',
        },
        {
          q: 'Is the procedure painful?',
          a: 'The procedure is done under local anesthesia, so you won\'t feel pain during treatment.',
        },
      ],
    },
    'gum-treatment': {
      name: 'Gum Treatment',
      icon: '🩺',
      image: 'https://images.unsplash.com/photo-1758205307804-097f5437189f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGFpciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI2OTg0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Specialized periodontal care to treat gum diseases and maintain healthy gums for overall oral health.',
      benefits: [
        'Treats gum disease',
        'Prevents tooth loss',
        'Reduces inflammation',
        'Eliminates bad breath',
        'Improves overall health',
      ],
      process: [
        'Comprehensive gum evaluation',
        'Deep cleaning (scaling & root planing)',
        'Medication if needed',
        'Surgical treatment (if severe)',
        'Maintenance therapy',
        'Regular monitoring',
      ],
      duration: 'Varies by severity',
      price: '₹3,000 - ₹15,000',
      faqs: [
        {
          q: 'What are signs of gum disease?',
          a: 'Red, swollen, or bleeding gums, bad breath, receding gums, and loose teeth are common signs.',
        },
        {
          q: 'Is gum disease reversible?',
          a: 'Early stages (gingivitis) are reversible with treatment. Advanced stages require ongoing management.',
        },
        {
          q: 'How to prevent gum disease?',
          a: 'Regular brushing, flossing, professional cleanings, and avoiding tobacco are key prevention methods.',
        },
      ],
    },
    'dental-fillings': {
      name: 'Dental Fillings',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm58ZW58MXx8fHwxNzYyNjcyMTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Repair cavities with tooth-colored composite fillings that blend naturally with your teeth.',
      benefits: [
        'Stops cavity progression',
        'Natural tooth color',
        'Restores tooth function',
        'Pain-free procedure',
        'Long-lasting results',
      ],
      process: [
        'Examination and X-ray',
        'Local anesthesia',
        'Decay removal',
        'Tooth preparation',
        'Filling placement',
        'Shaping and polishing',
      ],
      duration: '30-60 minutes',
      price: '₹800 - ₹3,000',
      faqs: [
        {
          q: 'How long do fillings last?',
          a: 'Composite fillings typically last 5-10 years with proper care and oral hygiene.',
        },
        {
          q: 'Are tooth-colored fillings strong?',
          a: 'Yes, modern composite materials are very durable and suitable for both front and back teeth.',
        },
        {
          q: 'Will I feel pain during the procedure?',
          a: 'No, we use local anesthesia to ensure you are comfortable throughout the procedure.',
        },
      ],
    },
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Service Not Found</h2>
          <button
            onClick={() => onNavigate('services')}
            className="text-blue-600 hover:text-blue-700"
          >
            ← Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('services')}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h1 className="text-gray-900 mb-4">{service.name}</h1>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Book Appointment
              </button>
            </div>
            <div>
              <ImageWithFallback
                src={service.image}
                alt={service.name}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step: string, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq: any, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards a healthier smile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Book Appointment
            </button>
            <a
              href="tel:+919876543210"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
