import { useState } from "react";

const banquetPackagesData = [
  {
    _id: "1",
    title: "Silver Package",
    price: "₹799 / Plate",
    note: "Minimum 50 Guests",
    features: [
      "Welcome Drink",
      "Veg Buffet (3 Main Course)",
      "2 Starters",
      "Salad & Papad",
      "Dessert",
      "Basic Decoration",
      "Air Conditioned Hall",
      "Dedicated Service Staff",
    ],
  },
  {
    _id: "2",
    title: "Gold Package",
    price: "₹1,099 / Plate",
    note: "Most Popular",
    features: [
      "Welcome Drink",
      "Veg + Non-Veg Buffet",
      "3 Starters",
      "Live Counter",
      "Premium Dessert",
      "Theme Decoration",
      "Music System",
      "Event Coordinator",
    ],
  },
  {
    _id: "3",
    title: "Platinum Package",
    price: "₹1,499 / Plate",
    note: "Premium Experience",
    features: [
      "Mocktail Counter",
      "Unlimited Veg + Non-Veg",
      "5 Starters",
      "Live Food Counters",
      "Luxury Decor Setup",
      "DJ & Sound System",
      "Valet Parking",
      "Personal Event Manager",
    ],
  },
  {
    _id: "4",
    title: "Diamond Package",
    price: "₹1,899 / Plate",
    note: "Luxury Events",
    features: [
      "Signature Mocktails",
      "Premium Veg + Non-Veg Menu",
      "7 Starters",
      "Live Continental Counter",
      "Designer Theme Decoration",
      "Professional DJ",
      "Valet Parking",
      "Dedicated Event Supervisor",
    ],
  },
  {
    _id: "5",
    title: "Wedding Special Package",
    price: "₹2,199 / Plate",
    note: "Best for Weddings",
    features: [
      "Grand Welcome Setup",
      "Unlimited Premium Buffet",
      "8 Starters",
      "Multi Cuisine Live Counters",
      "Royal Stage Decoration",
      "DJ, Sound & Lighting",
      "Bride & Groom Entry Setup",
      "Personal Wedding Planner",
    ],
  },
  {
    _id: "6",
    title: "Corporate Event Package",
    price: "₹999 / Plate",
    note: "Ideal for Corporate Events",
    features: [
      "Welcome Tea & Coffee",
      "Veg / Non-Veg Lunch",
      "Projector & Screen",
      "Conference Style Seating",
      "Basic Branding Support",
      "PA System & Mic",
      "High Speed WiFi",
      "Dedicated Event Manager",
    ],
  },
];


const BanquetPackages = () => {
  const [packages] = useState(banquetPackagesData);

  return (
    <>
      {/* ================= PACKAGES ================= */}
      <section className="relative bg-[#0F4C3A] text-white py-24 overflow-hidden">

        {/* BACKGROUND DECOR */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#DC2626]/20 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 font-serif">
            Customized Banquet Packages
            <span className="absolute left-1/2 -bottom-5 w-28 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
          </h2>

          {/* NO DATA */}
          {packages.length === 0 && (
            <p className="text-center text-gray-200 text-lg">
              No banquet packages available
            </p>
          )}

          {/* PACKAGE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((p) => (
              <div
                key={p._id}
                className="
                  bg-white
                  text-gray-800
                  rounded-3xl
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-3
                  transition duration-300
                  flex flex-col
                  overflow-hidden
                "
              >
                {/* HEADER */}
                <div className="bg-[#FBF7F4] p-6 text-center border-b">
                  <h3 className="text-xl font-bold text-[#0F4C3A] mb-1">
                    {p.title}
                  </h3>

                  <p className="text-3xl font-extrabold text-[#DC2626]">
                    {p.price}
                  </p>

                  {p.note && (
                    <p className="text-sm text-gray-500 mt-1">
                      {p.note}
                    </p>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1">
                  <ul className="space-y-3 text-sm text-gray-700">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* NOTES */}
          <div className="mt-20 max-w-4xl mx-auto bg-white/95 p-10 rounded-3xl shadow text-sm text-gray-700 space-y-3">
            <p>📌 All banquet packages are customizable as per event requirements.</p>
            <p>📌 Guest capacity & pricing may vary based on seating arrangement.</p>
            <p>📌 Event duration extensions are chargeable.</p>
            <p>📌 Catering services can be arranged separately.</p>
            <p>📌 Government taxes are applicable as per norms.</p>
            <p className="font-semibold text-[#DC2626]">
              ⚠ Advance payment is mandatory to confirm and block the event date.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default BanquetPackages;
