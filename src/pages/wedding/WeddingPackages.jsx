import { useState } from "react";
import { FaUsers, FaBed, FaCalendarAlt } from "react-icons/fa";

/* ================= STATIC DATA ================= */
const weddingPackagesData = [
  /* ================= HALDI & MEHNDI ================= */
  {
    title: "Haldi & Mehndi Ceremony",
    plans: [
      {
        name: "Haldi Basic Plan",
        price: "₹1,25,000",
        guests: "Up to 100 Guests",
        days: "Half Day Event",
        rooms: "3 Rooms Included",
        features: [
          "Traditional Haldi Setup",
          "Floral Seating Decor",
          "Veg Catering",
          "Welcome Drinks",
          "Background Music",
          "Basic Lighting",
          "Service Staff",
          "Event Coordination",
        ],
      },
      {
        name: "Mehndi Classic Plan",
        price: "₹1,75,000",
        guests: "Up to 150 Guests",
        days: "Half Day Event",
        rooms: "4 Rooms Included",
        features: [
          "Mehndi Artist",
          "Colorful Theme Decor",
          "Veg Snacks & Drinks",
          "Dhol & Music",
          "Photo Booth Setup",
          "Stage Seating",
          "Lighting Decoration",
          "Event Support Team",
        ],
      },
      {
        name: "Haldi–Mehndi Premium",
        price: "₹2,25,000",
        guests: "Up to 200 Guests",
        days: "1 Day Event",
        rooms: "5 Rooms Included",
        features: [
          "Designer Theme Decor",
          "Professional Mehndi Artists",
          "Live Snacks Counter",
          "Floral Jewelry Setup",
          "DJ & Sound System",
          "Premium Lighting",
          "Photography Support",
          "Dedicated Event Manager",
        ],
      },
    ],
  },

  /* ================= WEDDING ================= */
  {
    title: "Wedding Ceremony",
    plans: [
      {
        name: "Wedding Silver Plan",
        price: "₹2,50,000",
        guests: "Up to 150 Guests",
        days: "1 Day Event",
        rooms: "5 Rooms Included",
        features: [
          "Basic Stage Decoration",
          "Veg Catering",
          "Welcome Drinks",
          "Sound System",
          "Floral Entrance",
          "Standard Lighting",
          "Service Staff",
          "Event Coordination",
        ],
      },
      {
        name: "Wedding Gold Plan",
        price: "₹3,75,000",
        guests: "Up to 250 Guests",
        days: "1 Day Event",
        rooms: "8 Rooms Included",
        features: [
          "Theme Based Decoration",
          "Veg + Non-Veg Catering",
          "DJ & Music System",
          "Bride & Groom Entry",
          "Premium Stage Decor",
          "LED Lighting",
          "Welcome Drinks Counter",
          "On-Site Event Manager",
        ],
      },
      {
        name: "Wedding Platinum Plan",
        price: "₹5,00,000",
        guests: "Up to 350 Guests",
        days: "1 Day Event",
        rooms: "12 Rooms Included",
        features: [
          "Premium Theme Decor",
          "Live Food Counters",
          "DJ & Lighting Setup",
          "Bridal Entry Concept",
          "Luxury Seating",
          "Customized Stage",
          "Mocktail Counter",
          "Dedicated Supervisor",
        ],
      },
    ],
  },

  /* ================= RECEPTION ================= */
  {
    title: "Reception Ceremony",
    plans: [
      {
        name: "Reception Classic",
        price: "₹2,75,000",
        guests: "Up to 200 Guests",
        days: "Evening Event",
        rooms: "6 Rooms Included",
        features: [
          "Elegant Stage Decor",
          "Veg Catering",
          "Soft Music System",
          "Welcome Drinks",
          "Table Seating Setup",
          "Lighting Decoration",
          "Service Staff",
          "Event Coordination",
        ],
      },
      {
        name: "Reception Premium",
        price: "₹4,25,000",
        guests: "Up to 350 Guests",
        days: "Evening Event",
        rooms: "10 Rooms Included",
        features: [
          "Designer Stage Setup",
          "Veg + Non-Veg Buffet",
          "DJ & Sound",
          "Live Food Counter",
          "Premium Lighting",
          "Floral Decoration",
          "Photography Area",
          "Dedicated Event Manager",
        ],
      },
      {
        name: "Royal Reception",
        price: "₹6,00,000",
        guests: "Up to 500 Guests",
        days: "Evening Event",
        rooms: "15 Rooms Included",
        features: [
          "Royal Theme Decoration",
          "Unlimited Buffet",
          "Celebrity DJ",
          "Luxury Seating",
          "Grand Entry Setup",
          "Live Counters",
          "Valet Parking",
          "Personal Event Manager",
        ],
      },
    ],
  },

  /* ================= COMPLETE WEDDING ================= */
  {
    title: "Complete Wedding Package",
    plans: [
      {
        name: "Complete Wedding Silver",
        price: "₹6,50,000",
        guests: "Up to 200 Guests",
        days: "2 Days Event",
        rooms: "15 Rooms Included",
        features: [
          "Haldi, Mehndi & Wedding",
          "Theme Decoration",
          "Veg Catering",
          "DJ & Music",
          "Stage & Lighting",
          "Guest Accommodation",
          "Service Staff",
          "Event Coordinator",
        ],
      },
      {
        name: "Complete Wedding Gold",
        price: "₹9,00,000",
        guests: "Up to 300 Guests",
        days: "3 Days Event",
        rooms: "22 Rooms Included",
        features: [
          "All Wedding Functions",
          "Premium Decor Themes",
          "Veg + Non-Veg Catering",
          "Live Food Counters",
          "DJ & Lighting",
          "Photography Support",
          "Luxury Seating",
          "Dedicated Wedding Manager",
        ],
      },
      {
        name: "Complete Wedding Royal",
        price: "₹12,50,000",
        guests: "Up to 400 Guests",
        days: "3 Days Event",
        rooms: "30 Rooms Included",
        features: [
          "All Ceremonies Included",
          "Luxury Designer Decor",
          "International Cuisine",
          "Celebrity DJ",
          "Live Performances",
          "Premium Hospitality",
          "Airport Transfers",
          "Personal Wedding Planner",
        ],
      },
    ],
  },
];


const WeddingPackages = () => {
  const [packages] = useState(weddingPackagesData);

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= MAIN HEADING ================= */}
        <div className="flex justify-center">
          <h2 className="relative inline-block text-3xl sm:text-4xl font-extrabold text-center mb-20 px-4 text-[#0F4C3A] font-serif">
            Wedding & Event Packages
            <span className="absolute left-1/2 -bottom-4 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
          </h2>
        </div>

        {/* ================= PACKAGES ================= */}
        {packages.map((event) => (
          <div key={event.title} className="mb-24">

            {/* SECTION TITLE */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F4C3A] mb-4">
                {event.title}
              </h3>
              <div className="flex items-center justify-center gap-4">
                <span className="w-20 h-[2px] bg-[#0F4C3A]"></span>
                <span className="w-4 h-4 rotate-45 bg-[#DC2626]"></span>
                <span className="w-20 h-[2px] bg-[#0F4C3A]"></span>
              </div>
            </div>

            {/* PLANS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
              {event.plans.map((plan, i) => (
                <div
                  key={i}
                  className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    border border-gray-200
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition duration-300
                    w-full max-w-sm
                  "
                >
                  {/* PLAN NAME */}
                  <h4 className="text-xl font-bold text-[#0F4C3A] mb-1">
                    {plan.name}
                  </h4>

                  {/* PRICE */}
                  <p className="text-3xl font-extrabold text-[#DC2626] mb-4">
                    {plan.price}
                  </p>

                  {/* META */}
                  <div className="text-sm text-gray-600 space-y-2 mb-6">
                    <p className="flex items-center gap-2">
                      <FaUsers className="text-[#DC2626]" /> {plan.guests}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#DC2626]" /> {plan.days}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaBed className="text-[#DC2626]" /> {plan.rooms}
                    </p>
                  </div>

                  {/* FEATURES */}
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#DC2626] font-bold">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-gray-500 mt-4">
                    Note: Guest count & pricing may vary based on customization.
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ================= NOTES ================= */}
        <div className="mt-10 max-w-4xl mx-auto bg-[#0F4C3A] p-10 rounded-3xl shadow text-sm text-gray-200 space-y-3">
          <p>📌 All packages are customizable as per guest requirements.</p>
          <p>📌 Event duration & room availability depend on package selection.</p>
          <p>📌 Government taxes applicable as per norms.</p>
          <p>📌 Advance payment mandatory to block dates.</p>
          <p className="font-semibold text-[#FFDADA]">
            ⚠ Venue availability subject to confirmation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WeddingPackages;
