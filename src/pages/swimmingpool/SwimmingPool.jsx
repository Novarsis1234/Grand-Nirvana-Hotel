import React from "react";
import {
  FaSwimmingPool,
  FaChild,
  FaUmbrellaBeach,
  FaClock,
  FaShieldAlt,
  FaLifeRing,
  FaWater,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SwimmingPool = () => {
  return (
    <div className="bg-gray-50">
      {/* ================= HEADER ================= */}
   <section className="relative py-24 overflow-hidden bg-[#FBF7F4]">

  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* ================= LEFT CONTENT ================= */}
      <div>
        <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4">
          Swimming Pool
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6 leading-tight">
          Relax & Refresh <br />
          <span className="text-black">Luxury Pool Experience</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md">
          Unwind and rejuvenate at our beautifully designed swimming pool.
          Enjoy a calm and refreshing atmosphere with crystal-clear water,
          comfortable seating, and a perfect space to relax during your stay
          at  Grand Nirvana.
        </p>
      </div>

      {/* ================= RIGHT CIRCULAR IMAGE ================= */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-[300px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/Images/SwimmingPool4.avif"
            className="w-full h-full object-cover"
          >
            <source src="/video/about1.mp4" type="video/mp4" />
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= POOL TYPES ================= */}
   <section className="bg-[#0F4C3A] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-white font-serif">
      Our Exclusive Pool Areas
      <span className="absolute left-1/2 -bottom-5 w-28 h-1 bg-white -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* POOL CARDS */}
    <div className="grid md:grid-cols-3 gap-12">
      {poolTypes.map((item, i) => (
        <div
          key={i}
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-10
            text-center
            border-b-4 border-[#DC2626]
            hover:shadow-2xl
            hover:-translate-y-2
            transition duration-300
          "
        >
          {/* ICON */}
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#0F4C3A]/10">
            <span className="text-[#0F4C3A] text-3xl">
              {item.icon}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-bold text-[#0F4C3A] mb-3">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed text-justify">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>





      {/* ================= FACILITIES ================= */}
    <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* IMAGE */}
    <img
      src="/Images/SwimmingPool2.avif"
      alt="Swimming Pool"
      className="rounded-3xl shadow-lg hover:scale-105 transition duration-300"
    />

    {/* CONTENT */}
    <div className="flex flex-col items-center text-center">

      {/* HEADING */}
      <h2 className="relative text-3xl md:text-4xl font-extrabold mb-14 text-[#0F4C3A] font-serif">
        Pool Facilities & Safety
        <span className="absolute left-1/2 -bottom-5 w-28 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
      </h2>

      {/* LIST */}
      <ul className="space-y-5 text-gray-700 text-lg">
        <li className="flex items-center justify-center gap-4">
          <FaShieldAlt className="text-[#DC2626] text-xl" />
          <span>Certified lifeguards on duty at all times</span>
        </li>

        <li className="flex items-center justify-center gap-4">
          <FaLifeRing className="text-[#DC2626] text-xl" />
          <span>Essential safety equipment readily available</span>
        </li>

        <li className="flex items-center justify-center gap-4">
          <FaWater className="text-[#DC2626] text-xl" />
          <span>Crystal-clean and regularly filtered water</span>
        </li>

        <li className="flex items-center justify-center gap-4">
          <FaUmbrellaBeach className="text-[#DC2626] text-xl" />
          <span>Comfortable poolside loungers with shaded areas</span>
        </li>
      </ul>

    </div>
  </div>
</section>


      {/* ================= GALLERY ================= */}
    <section className="py-24 bg-[#F6FBF9]">
  
  {/* HEADING */}
  <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-6 text-[#0F4C3A] font-serif">
    Pool Gallery
    <span className="absolute left-1/2 -bottom-4 w-24 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
  </h2>

  {/* DESCRIPTION */}
  <p className="max-w-3xl mx-auto text-center text-gray-700 mb-14 px-6 leading-relaxed">
    Take a look at our beautifully designed swimming pool area, where luxury
    meets relaxation. From crystal-clear water to comfortable poolside spaces,
    our pool gallery captures the perfect atmosphere for a refreshing and
    memorable experience.
  </p>

  {/* GALLERY GRID */}
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {gallery.map((img, i) => (
      <img
        key={i}
        src={`${img}?auto=format&fit=crop&w=600&q=80`}
        alt="Pool"
        className="h-64 w-full object-cover rounded-2xl shadow-md 
                   hover:scale-105 transition duration-300"
      />
    ))}
  </div>

</section>


      {/* ================= TIMINGS ================= */}
   <section className="bg-[#0F4C3A] text-white py-24">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold mb-16 font-serif">
      Pool Timings
      <span className="absolute left-1/2 -bottom-5 w-24 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* TIMING CARDS */}
    <div className="grid md:grid-cols-3 gap-10">
      {timings.map((t, i) => (
        <div
          key={i}
          className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <FaClock className="text-[#DC2626] text-3xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-1">{t.title}</h3>
          <p className="text-gray-600">{t.time}</p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= RULES ================= */}
     <section className="py-24 bg-[#F6FBF9]">
  <div className="max-w-4xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0F4C3A] font-serif">
      Pool Rules & Guidelines
      <span className="absolute left-1/2 -bottom-5 w-32 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* RULES LIST */}
    <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Swimwear is mandatory at all times to ensure hygiene, comfort,
        and safety for all guests using the swimming pool.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Guests are required to take a shower before entering the pool
        to maintain water cleanliness and hygiene standards.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Children must always be accompanied and supervised by a
        responsible adult while using the pool facilities.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Consumption of food, beverages, or use of glass items is
        strictly prohibited near the pool area to avoid accidents.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Guests must strictly follow lifeguard instructions and
        displayed safety guidelines for their own safety.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Running, diving in shallow areas, or engaging in unsafe
        activities around the pool is not permitted.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Pool usage is allowed only during designated operating hours
        as displayed by hotel management.
      </li>
    </ul>

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="bg-[#F6FBF9] py-24 text-center">
  
  {/* HEADING */}
  <h2 className="relative text-3xl md:text-4xl font-extrabold mb-10 text-[#0F4C3A] font-serif">
    Enjoy a Refreshing Swim
    <span className="absolute left-1/2 -bottom-4 w-28 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
  </h2>

  {/* SUBTEXT */}
  <p className="text-gray-700 mb-8 text-lg">
    Make your stay memorable with our luxury swimming pool facilities
  </p>

  {/* CTA BUTTON */}
  <Link to={"/contact"}>
    <button className="bg-[#0F4C3A] text-white px-10 py-3 rounded-full font-medium 
                       hover:bg-[#0C3F31] transition duration-300">
      Book Your Stay
    </button>
  </Link>

</section>

    </div>
  );
};

export default SwimmingPool;

/* ================= DATA ================= */

const poolTypes = [
  {
    title: "Adult Pool",
    desc: "A spacious and well-maintained swimming pool designed specifically for adults, featuring a comfortable depth, clean surroundings, and a relaxing environment perfect for leisure swimming and unwinding.",
    icon: <FaSwimmingPool />,
  },
  {
    title: "Kids Pool",
    desc: "A safe, shallow, and supervised swimming pool specially designed for children, allowing them to enjoy water activities in a fun and secure environment under proper safety measures.",
    icon: <FaChild />,
  },
  {
    title: "Poolside Relaxation",
    desc: "Enjoy complete relaxation with poolside loungers, shaded umbrellas, refreshing beverages, and attentive poolside service that enhances your comfort while you soak in the serene atmosphere.",
    icon: <FaUmbrellaBeach />,
  },
];

const gallery = [
  "/Images/SwimmingPool1.avif",
  "/Images/SwimmingPool2.avif",
  "/Images/SwimmingPool3.avif",
  "/Images/SwimmingPool4.avif",
  "/Images/SwimmingPool5.avif",
  "/Images/SwimmingPool6.webp",
];

const timings = [
  { title: "Morning", time: "6:00 AM – 10:00 AM" },
  { title: "Afternoon", time: "12:00 PM – 4:00 PM" },
  { title: "Evening", time: "6:00 PM – 9:00 PM" },
];
