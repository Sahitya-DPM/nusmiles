export default function PromotionsSection() {
  const promotions = [
    {
      price: "$49",
      title: "Emergency Exam",
      description: "Tooth pain can't wait—same-day emergency appointments available.",
      highlight: true
    },
    {
      price: "$99",
      title: "New Patient Exam",
      description: "Includes a full exam, X-rays, and personalized care plan",
      highlight: false
    },
    {
      price: "FREE",
      title: "Invisalign Consultation",
      description: "Get answers to all your questions—no pressure, no obligation.",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Limited-Time Dental Promotions
          </h2>
          <p className="text-xl text-accent">
            NU SMILE DENTAL is committed to helping patients afford the care they deserve. Take advantage of our current offers:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-8 text-center ${
                promo.highlight ? 'ring-4 ring-warm transform scale-105' : ''
              }`}
            >
              <div className="text-4xl font-bold text-secondary mb-4">{promo.price}</div>
              <h3 className="text-xl font-semibold text-primary mb-4">{promo.title}</h3>
              <p className="text-gray-700">{promo.description}</p>
              <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary-dark transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 