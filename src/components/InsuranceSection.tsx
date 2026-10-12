import Link from 'next/link';

const plans = [
  'Medi-Cal / Denti-Cal',
  'Health Plan of San Joaquin',
  'Blue Cross of California',
  'Medicare (when dental benefits apply)',
  'Most PPO dental plans',
];

export default function InsuranceSection() {
  return (
    <section id="insurance" className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-[27px] md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Dentist That Take Medical in Stockton CA
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p
            className="text-[16px] text-gray-700 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Looking for a dentist that take medical in Stockton CA? NuSmile Dental accepts Medi-Cal,
            Denti-Cal, and the plans named below. We verify your card before treatment so you know
            what is covered.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {plans.map((plan) => (
            <li
              key={plan}
              className="bg-gray-50 rounded-xl px-6 py-4 text-gray-800 text-[16px] font-semibold"
              style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
            >
              {plan}
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/insurance"
            className="bg-primary text-white px-8 py-4 rounded-lg text-[15px] md:text-[16px] font-semibold hover:bg-primary-dark transition-colors inline-block"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            View Accepted Insurance &amp; Medi-Cal
          </Link>
        </div>
      </div>
    </section>
  );
}
