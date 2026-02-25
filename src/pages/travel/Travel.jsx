import React from "react";
import {
  FaCar,
  FaUserFriends,
  FaSuitcaseRolling,
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaRupeeSign,
} from "react-icons/fa";

const Travel = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative py-24 overflow-hidden bg-[#FBF7F4]">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>
        <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4 font-extrabold">
              Travel & Car Booking
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6">
              Comfortable & Reliable <br />
              <span className="text-black">Travel in Jabalpur</span>
            </h1>

            <p className="text-gray-600 max-w-md leading-relaxed text-justify">
              Grand Nirvana offers premium car booking services in and around
              Jabalpur. Choose Bolero, Swift, or XL6 for local sightseeing,
              business travel, family trips, and outstation journeys.
            </p>
          </div>

        <div className="flex justify-center lg:justify-end">
  <div className="relative w-[300px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">

    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/Images/car3.jpg"
      className="w-full h-full object-contain"
    >
      {/* <source src="/video/travel.mp4" type="video/mp4" /> */}
    </video>

    {/* subtle overlay */}
    <div className="absolute inset-0 bg-black/5"></div>
  </div>
</div>
        </div>
      </section>

      {/* ================= CARS ================= */}
      <section className="bg-[#0F4C3A] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white">
            Our Premium Vehicles
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-14">
            {cars.map((car, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-48 w-full object-cover rounded-2xl mb-6"
                />

                <h3 className="text-xl font-bold text-[#0F4C3A] mb-3">
                  {car.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {car.desc}
                </p>

                <p className="text-[#DC2626] font-semibold text-lg mb-4">
                  ₹15 / km
                </p>

                <div className="flex justify-center gap-6 text-[#DC2626] text-lg">
                  <FaUserFriends />
                  <FaSuitcaseRolling />
                  <FaCar />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#booking">
              <button className="bg-white text-[#0F4C3A] px-12 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Book Now
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* ================= DESTINATIONS (AUTO SCROLL) ================= */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0F4C3A]">
            Popular Destinations Around Jabalpur
          </h2>

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...destinations, ...destinations].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[260px] bg-[#F6FBF9] rounded-2xl shadow-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4 text-center">
                    <FaMapMarkedAlt className="text-[#DC2626] mx-auto mb-2" />
                    <h3 className="font-semibold text-[#0F4C3A]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-[#0F4C3A] py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-white">
          Why Choose Our Travel Service?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-white/10 rounded-2xl p-8">
            <FaShieldAlt className="text-[#DC2626] text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-white">Safe & Reliable</h3>
            <p className="text-white/80 text-sm">Verified drivers & clean cars</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8">
            <FaClock className="text-[#DC2626] text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-white">24/7 Service</h3>
            <p className="text-white/80 text-sm">Anytime booking available</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8">
            <FaRupeeSign className="text-[#DC2626] text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-white">Affordable</h3>
            <p className="text-white/80 text-sm">Just ₹15 per km</p>
          </div>
        </div>
      </section>

      {/* ================= BOOKING ================= */}
      <section id="booking" className="bg-white py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#0F4C3A]">
          Book Your Car Now
        </h2>

        <p className="mb-10 text-gray-600">
          Contact us instantly via WhatsApp or Call
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://wa.me/919999999999?text=Hello%20I%20want%20to%20book%20a%20car%20from%20Grand%20Nirvana%20Jabalpur"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-10 py-4 rounded-full text-white font-semibold flex items-center gap-3 justify-center hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="tel:+919999999999"
            className="bg-[#0F4C3A] text-white px-10 py-4 rounded-full font-semibold flex items-center gap-3 justify-center hover:bg-[#0C3F31] transition"
          >
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default Travel;

/* ================= DATA ================= */

const cars = [
  { name: "Bolero", desc: "Spacious SUV ideal for family & outstation travel.", image: "/Images/car1.webp" },
  { name: "Swift", desc: "Fuel-efficient and perfect for city travel.", image: "/Images/car2.jpg" },
  { name: "XL6", desc: "Premium MPV with luxury seating.", image: "/Images/car3.jpg" },
];

const destinations = [
  { title: "Bhedaghat", image: "/Images/travel1.jpg" },
   { title: "Bargi Dam", image: "/Images/travel2.jpg" },
  { title: "Madan Mahal Fort", image: "/Images/travel3.jpg" },
  { title: "Kanha National Park", image: "/Images/travel4.jpg" },
  { title: "Pachmarhi", image: "/Images/travel5.jpg" },
  { title: "Amarkantak", image: "/Images/travel6.jpg" },
  { title: "Bhopal", image: "/Images/travel7.jpg" },
  { title: "Maihar", image: "/Images/travel8.webp" },
  { title: "Khajuraho", image: "/Images/travel9.jpg" },
  { title: "Ujjain", image: "/Images/travel10.jpg" },
];






