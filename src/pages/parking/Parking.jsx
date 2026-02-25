import React from "react";
import {
  FaCar,
  FaMotorcycle,
  FaBus,
  FaVideo,
  FaShieldAlt,
  FaClock,
  FaChargingStation,
} from "react-icons/fa";

const Parking = () => {
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
        <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4 font-extrabold">
          Parking Facilities
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6 leading-tight">
          Safe & Convenient <br />
          <span className="text-black">Parking Experience</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md text-justify font-serif">
          Enjoy hassle-free and secure parking facilities at  Grand Nirvana.
          Our spacious parking area ensures easy access, safety, and
          convenience for all our guests throughout their stay.
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
            poster="/Images/parking-banner1.avif"
            className="w-full h-full object-cover"
          >
            {/* <source src="/video/parking.mp4" type="video/mp4" /> */}
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= PARKING TYPES ================= */}
     <section className="max-w-7xl mx-auto px-6 py-24">

  {/* HEADING */}
  <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 font-serif text-[#0F4C3A]">
    Parking Options Available
    <span className="absolute left-1/2 -bottom-5 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
  </h2>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-12">
    {parkingTypes.map((item, i) => (
      <div
        key={i}
        className="
          bg-[#FBF7F4]
          rounded-3xl
          p-10
          text-center
          border border-gray-200
          hover:shadow-xl
          hover:-translate-y-2
          transition duration-300
        "
      >
        {/* ICON */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#DC2626]/10">
          <span className="text-[#DC2626] text-3xl">
            {item.icon}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>

</section>


     
     {/* ================= FACILITIES ================= */}
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT : FEATURES CARD */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#0F4C3A] text-center font-serif">
          Parking Features & Safety
        </h2>

        <ul className="space-y-6 text-gray-700 text-lg">
          <li className="flex items-start gap-4">
            <div className="p-3 bg-[#DC2626]/10 rounded-full">
              <FaVideo className="text-[#DC2626] text-xl" />
            </div>
            <span>24×7 CCTV Surveillance for complete security</span>
          </li>

          <li className="flex items-start gap-4">
            <div className="p-3 bg-[#DC2626]/10 rounded-full">
              <FaShieldAlt className="text-[#DC2626] text-xl" />
            </div>
            <span>Professional security guards on duty at all times</span>
          </li>

          <li className="flex items-start gap-4">
            <div className="p-3 bg-[#DC2626]/10 rounded-full">
              <FaClock className="text-[#DC2626] text-xl" />
            </div>
            <span>24-hour accessible parking for guest convenience</span>
          </li>

          <li className="flex items-start gap-4">
            <div className="p-3 bg-[#DC2626]/10 rounded-full">
              <FaChargingStation className="text-[#DC2626] text-xl" />
            </div>
            <span>Electric vehicle charging available on request</span>
          </li>
        </ul>
      </div>

      {/* RIGHT : IMAGE */}
      <div>
        <img
          src="/Images/parking-homebanner.jpg"
          alt="Parking Safety"
          className="rounded-3xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>


      {/* ================= RULES ================= */}
    <section className="relative py-24 overflow-hidden bg-[#FBF7F4]">

  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-32 right-10 w-56 h-56 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* ================= HEADING ================= */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 font-serif text-[#0F4C3A]">
      Parking Rules & Guidelines
      <span className="absolute left-1/2 -bottom-5 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* ================= RULE LIST ================= */}
    <ul className="space-y-6 max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed font-serif">
      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Parking facilities are available exclusively for registered
        hotel guests to ensure safety and proper space management.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Guests are requested to park their vehicles only in designated
        parking areas as marked by hotel management.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        The hotel management shall not be held responsible for any loss,
        theft, or damage to valuables left inside parked vehicles.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        A maximum speed limit of 10 km/h must be strictly followed
        within the parking premises for the safety of all guests.
      </li>

      <li className="flex gap-3">
        <span className="text-[#DC2626] font-bold">✔</span>
        Guests are required to follow the instructions provided by
        security personnel at all times to maintain order and security.
      </li>
    </ul>

  </div>
</section>

    </div>
  );
};

export default Parking;

/* ================= DATA ================= */

const parkingTypes = [
  {
    title: "Car Parking",
    desc: "Spacious parking slots for sedans, SUVs and premium cars.",
    icon: <FaCar />,
  },
  {
    title: "Two-Wheeler Parking",
    desc: "Dedicated and safe area for bikes and scooters.",
    icon: <FaMotorcycle />,
  },
  {
    title: "Bus / Tempo Parking",
    desc: "Large parking area available for buses and tourist vehicles.",
    icon: <FaBus />,
  },
];
