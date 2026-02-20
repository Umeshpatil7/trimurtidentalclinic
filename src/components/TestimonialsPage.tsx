import { Star } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Nashik',
      rating: 5,
      text: 'Excellent service! Dr. [Name] is very skilled and caring. I had a root canal treatment and it was completely painless. The clinic is very clean and modern. Highly recommended!',
      treatment: 'Root Canal Treatment',
      date: 'October 2024',
    },
    {
      name: 'Priya Patel',
      location: 'Nashik',
      rating: 5,
      text: 'Very professional clinic with state-of-the-art equipment. I got dental implants done here and the results are amazing. The staff is friendly and the doctor explains everything clearly.',
      treatment: 'Dental Implants',
      date: 'September 2024',
    },
    {
      name: 'Amit Kumar',
      location: 'Nashik',
      rating: 5,
      text: 'Great experience with teeth whitening treatment. My teeth are now several shades whiter and I feel so much more confident. The clinic is conveniently located at Trimurti Chowk.',
      treatment: 'Teeth Whitening',
      date: 'November 2024',
    },
    {
      name: 'Sneha Deshmukh',
      location: 'Nashik',
      rating: 5,
      text: 'I was very anxious about getting braces, but the doctor made me feel comfortable. The treatment is going great and I can already see improvement. Very happy with the service!',
      treatment: 'Orthodontics',
      date: 'August 2024',
    },
    {
      name: 'Vikram Patil',
      location: 'Nashik',
      rating: 5,
      text: 'Best dental clinic in Nashik! The doctor is very experienced and the staff is extremely professional. I had a tooth extraction and it was completely painless. Thank you!',
      treatment: 'Tooth Extraction',
      date: 'October 2024',
    },
    {
      name: 'Anjali Mehta',
      location: 'Nashik',
      rating: 5,
      text: 'I bring my children here for regular checkups. The doctor is very patient with kids and makes them feel comfortable. Highly recommend for pediatric dentistry.',
      treatment: 'Pediatric Dentistry',
      date: 'September 2024',
    },
    {
      name: 'Rahul Joshi',
      location: 'Nashik',
      rating: 5,
      text: 'Got my smile makeover done here and I am absolutely thrilled with the results! The transformation is incredible. The doctor is a true artist. Worth every rupee!',
      treatment: 'Smile Makeover',
      date: 'July 2024',
    },
    {
      name: 'Meera Singh',
      location: 'Nashik',
      rating: 5,
      text: 'Very clean and hygienic clinic. I go for regular scaling and polishing every 6 months. The staff is friendly and appointments are always on time. Great service!',
      treatment: 'Scaling & Polishing',
      date: 'November 2024',
    },
    {
      name: 'Sanjay More',
      location: 'Nashik',
      rating: 5,
      text: 'I needed a dental crown and the result is perfect. You cannot tell the difference from my natural teeth. The doctor is very skilled and takes time to ensure everything is perfect.',
      treatment: 'Crowns & Bridges',
      date: 'August 2024',
    },
    {
      name: 'Kavita Sharma',
      location: 'Nashik',
      rating: 5,
      text: 'I had severe gum problems and was worried about losing my teeth. Thanks to the expert treatment here, my gums are now healthy. The doctor saved my teeth!',
      treatment: 'Gum Treatment',
      date: 'June 2024',
    },
    {
      name: 'Deepak Jadhav',
      location: 'Nashik',
      rating: 5,
      text: 'Quick and painless dental filling experience. The tooth-colored filling looks completely natural. Very satisfied with the treatment and would definitely recommend.',
      treatment: 'Dental Fillings',
      date: 'October 2024',
    },
    {
      name: 'Pooja Kulkarni',
      location: 'Nashik',
      rating: 5,
      text: 'The best thing about this clinic is that they take time to explain everything. I never feel rushed and all my questions are answered. Professional and caring service!',
      treatment: 'General Checkup',
      date: 'September 2024',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-4">Patient Testimonials</h1>
            <p className="text-gray-600">
              Read what our satisfied patients have to say about their experience
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">5000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl mb-2">4.9★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-gray-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 mt-2">{testimonial.treatment}</div>
                  <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Find Us on Google</h2>
          <p className="text-gray-600 mb-6">
            Check out more reviews from our satisfied patients on Google Reviews
          </p>
          <a
            href="https://www.google.com/search?q=dental+clinic+nashik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            View Google Reviews
          </a>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Had a Great Experience?</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            We'd love to hear about your experience! Your feedback helps us improve and helps others find quality dental care.
          </p>
          <a
            href="https://share.google/zLC67Vv7R8APT35d7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Leave a Review
          </a>
        </div>
      </section>
    </div>
  );
}
