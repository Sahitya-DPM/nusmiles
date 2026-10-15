import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const plans = [
  'Health Plan of San Joaquin',
  'Blue Cross of California',
  'Most PPO Dental Plans',
];

export default function InsuranceSection() {
  return (
    <section
      id="insurance"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Section Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span
              className="text-sm font-semibold tracking-wide text-primary"
              style={{
                fontFamily: 'Hind, Arial, Helvetica, sans-serif',
              }}
            >
              Dental Insurance Support
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-5 text-[28px] font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl"
            style={{
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            }}
          >
            Dental Insurance in{' '}
            <span className="text-primary">Stockton CA</span>
          </h2>

          <div className="mx-auto mb-7 h-1 w-20 rounded-full bg-primary" />

          {/* Description */}
          <p
            className="mx-auto max-w-3xl text-base leading-8 text-gray-600 md:text-lg"
            style={{
              fontFamily: 'Hind, Arial, Helvetica, sans-serif',
            }}
          >
            Looking for a dentist in Stockton CA that accepts dental insurance?
            NuSmile Dental works with a range of PPO dental plans and can help
            verify your benefits before treatment so you have a clearer
            understanding of your coverage.
          </p>
        </div>

        {/* Insurance Cards */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan}
              className="group flex min-h-[120px] items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 transition-colors duration-300 group-hover:bg-sky-100">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <p
                className="text-base font-semibold leading-6 text-gray-800"
                style={{
                  fontFamily: 'Hind, Arial, Helvetica, sans-serif',
                }}
              >
                {plan}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center md:mt-12">
          <Link
            href="/insurance"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-center text-base font-semibold text-white shadow-lg shadow-sky-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-9"
            style={{
              fontFamily: 'Hind, Arial, Helvetica, sans-serif',
            }}
          >
            View Accepted Dental Insurance
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          
        </div>
      </div>
    </section>
  );
}