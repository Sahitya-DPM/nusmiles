import Link from 'next/link';
import Header from '../components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
          Page not found
        </p>
        <h1
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
        >
          This page is no longer available
        </h1>
        <p
          className="text-gray-600 mb-10"
          style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
        >
          The page you requested may have moved. Use one of the live pages below to book a visit or continue browsing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/appointment"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Book an appointment
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Contact us
          </Link>
          <Link
            href="/"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
