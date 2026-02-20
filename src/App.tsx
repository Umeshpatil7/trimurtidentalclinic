import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { GalleryPage } from './components/GalleryPage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  // Read initial page from URL or default to 'home'
  const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('page') || 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Service IDs for detail pages
  const serviceIds = [
    'root-canal',
    'dental-implants',
    'teeth-whitening',
    'orthodontics',
    'smile-makeover',
    'tooth-extraction',
    'pediatric-dentistry',
    'cosmetic-dentistry',
    'scaling-polishing',
    'crowns-bridges',
    'gum-treatment',
    'dental-fillings',
  ];

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `?page=${page}`);
  };

  // Listen for browser back/forward navigation
  useEffect(() => {
    // Ensure the initial state is in the history stack
    if (!window.location.search) {
      window.history.replaceState(null, '', '?page=home');
    }

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentPage(params.get('page') || 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Render the appropriate page
  const renderPage = () => {
    // Check if it's a service detail page
    if (serviceIds.includes(currentPage)) {
      return <ServiceDetailPage serviceId={currentPage} onNavigate={handleNavigate} />;
    }

    // Regular pages
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919420692977"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:+919420692977"
        className="fixed bottom-6 left-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40 md:hidden"
        aria-label="Call Now"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
}
