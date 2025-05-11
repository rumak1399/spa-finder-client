// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Spa Finder | Find Your Perfect Relaxation Spot',
  description: 'Learn about Spa Finder - the ultimate platform to discover and book spa centers near you for relaxation, wellness, and self-care.'
};

export default function About() {
  return (
    <main className="bg-gradient-to-br from-gray-50 to-cyan-200">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">About Spa Finder</h1>
            <p className="text-xl text-blue-700 mb-8">Your journey to relaxation starts here.</p>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Spa Finder, we believe everyone deserves a moment of tranquility in today's fast-paced world. 
              Our mission is simple: connect people with the perfect spa experience, whenever and wherever they need it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Founded in 2022, we've grown from a small local directory to a comprehensive platform serving thousands 
              of wellness seekers nationwide.
            </p>
            <Link 
              href="/search" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Find Spas Near You
            </Link>
          </div>

          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-80 w-full">
              <Image 
                src="/about.jpeg" 
                alt="Relaxing spa environment" 
                fill
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">What We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Location-Based Search</h3>
              <p className="text-gray-700">
                Find the perfect spa moments away from your current location or in any city you plan to visit.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Verified Reviews</h3>
              <p className="text-gray-700">
                Make informed decisions with thousands of authentic reviews from real spa-goers.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Easy Booking</h3>
              <p className="text-gray-700">
                Book your appointment directly through our platform with instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Story</h2>
          
          <div className="space-y-8 text-gray-700">
            <p className="leading-relaxed">
              Spa Finder was born from a simple frustration: finding quality spa services when you need them shouldn't be difficult. 
              Our founder, after struggling to find a last-minute massage during a business trip, decided there had to be a better way.
            </p>
            
            <p className="leading-relaxed">
              We started by mapping just a handful of premium spas in major cities. Today, our platform features thousands of 
              spas and wellness centers across the country - from luxury resort spas to hidden neighborhood gems.
            </p>
            
            <p className="leading-relaxed">
              Our team personally vets each spa before it's added to our platform, ensuring that when you book through Spa Finder, 
              you're guaranteed a quality experience. We believe in the power of relaxation and self-care, and our goal is to make 
              these essential practices accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <Image 
                  src="/alex.jpeg" 
                  alt="Team member" 
                  fill
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Alex Morgan</h3>
              <p className="text-blue-600">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <Image 
                  src="/jamie.jpg" 
                  alt="Team member" 
                  fill
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Jamie Chen</h3>
              <p className="text-blue-600">Head of Partnerships</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <Image 
                  src="/taylor.jpg" 
                  alt="Team member" 
                  fill
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Taylor Williams</h3>
              <p className="text-blue-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Relaxation Revolution</h2>
          <p className="text-xl mb-8">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/partners" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}