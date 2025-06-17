const features = [
  "Verified Profiles",
  "Smart Matchmaking Algorithm",
  "Private & Secure Data",
  "Easy Communication Tools",
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-64">
            <p className="text-lg font-medium">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
