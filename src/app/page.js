import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Menu/>
      <main className="flex flex-col gap-20 pb-20">
        {/* Hero Section */}
        <section className="bg-blue-600 dark:bg-blue-800 py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">
                Find the Perfect Massage & Spa Near You
              </h1>
              <p className="text-xl mb-8 text-white">
                Discover top-rated massage therapists and spa services in your
                area
              </p>

              {/* Search Bar */}
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"
                    >
                      <option value="">All Massage & Spa Services</option>
                      <option value="swedish">Swedish Massage</option>
                      <option value="deep-tissue">Deep Tissue Massage</option>
                      <option value="hot-stone">Hot Stone Therapy</option>
                      <option value="aromatherapy">Aromatherapy</option>
                      <option value="thai">Thai Massage</option>
                      <option value="couples">Couples Massage</option>
                    </select>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Enter your address, city or zip code"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      &nbsp;
                    </label>
                    <button className="w-full px-3 py-3 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all">
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                    Near Me
                  </button>
                  <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                    Open Now
                  </button>
                  <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                    Top Rated
                  </button>
                  <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                    Special Offers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className=" bg-white dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
              Popular Services Near You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.jpg"
                    alt="Tranquil Touch Spa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-black">Tranquil Touch Spa</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      0.8 miles
                    </span>
                  </div>

                  <div className="flex items-center mt-1">
                    <div className="text-amber-400">★★★★★</div>
                    <span className="text-sm text-gray-500 ml-1">
                      4.8 (126 reviews)
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Specializing in deep tissue and Swedish massage techniques.
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold">$80-150</span>
                    <Link
                      href="/services/1"
                      className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.jpg"
                    alt="Serenity Day Spa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-black">Serenity Day Spa</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      1.2 miles
                    </span>
                  </div>

                  <div className="flex items-center mt-1">
                    <div className="text-amber-400">★★★★★</div>
                    <span className="text-sm text-gray-500 ml-1">
                      4.7 (98 reviews)
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Holistic treatments including hot stone therapy and
                    aromatherapy.
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold">$90-200</span>
                    <Link
                      href="/services/2"
                      className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.jpg"
                    alt="Wellness Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-black">Wellness Retreat</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      2.3 miles
                    </span>
                  </div>

                  <div className="flex items-center mt-1">
                    <div className="text-amber-400">★★★★★</div>
                    <span className="text-sm text-gray-500 ml-1">
                      4.9 (215 reviews)
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Full-service spa offering massages, facials, and body
                    treatments.
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold">$100-250</span>
                    <Link
                      href="/services/3"
                      className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white dark:bg-zinc-900">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
              Services In Your Area
            </h2>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-center h-96 bg-gray-200 rounded-lg">
                <p className="text-gray-500">
                  Map showing nearby spa & massage services
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2 text-black ">Top 5 Services Near You</h3>
                <ul>
                  <li className="flex justify-between p-2 hover:bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-zinc-700">Tranquil Touch Spa</p>
                      <p className="text-sm text-zinc-400">0.8 miles away</p>
                    </div>
                    <span className="text-amber-400">★★★★★</span>
                  </li>
                  <li className="flex justify-between p-2 hover:bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-zinc-700">Serenity Day Spa</p>
                      <p className="text-sm text-zinc-400">1.2 miles away</p>
                    </div>
                    <span className="text-amber-400">★★★★★</span>
                  </li>
                  <li className="flex justify-between p-2 hover:bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-zinc-700">Wellness Retreat</p>
                      <p className="text-sm text-zinc-400">2.3 miles away</p>
                    </div>
                    <span className="text-amber-400">★★★★★</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white dark:bg-zinc-900">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
              Browse By Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">💆‍♀️</div>
                <h3 className="font-semibold text-black">Swedish Massage</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">🪨</div>
                <h3 className="font-semibold text-black">Hot Stone Therapy</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">👣</div>
                <h3 className="font-semibold text-black">Reflexology</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">🧘‍♀️</div>
                <h3 className="font-semibold text-black">Thai Massage</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="font-semibold text-black">Deep Tissue</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">🫄</div>
                <h3 className="font-semibold text-black">Prenatal Massage</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-semibold text-black">Aromatherapy</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-semibold text-black">Couples Massage</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
