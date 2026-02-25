import React from "react";
import {
  FaUsers,
  FaProjectDiagram,
  FaWifi,
  FaUtensils,
  FaMicrophone,
  FaGlassCheers,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BanquetPackages from "./BanquetPackages";

const Banquet = () => {
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
          Banquet & Conference
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6 leading-tight">
          Elegant Spaces for <br />
          <span className="text-black">Meetings & Celebrations</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md  text-justify">
          Host successful meetings, conferences, and grand celebrations
          in our beautifully designed banquet and conference halls.
          Equipped with modern amenities, flexible seating, and
          professional support, we ensure every event runs smoothly
          and leaves a lasting impression.
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
            poster="/Images/Banquet6.avif"
            className="w-full h-full object-cover"
          >
            {/* <source src="/video/halls.mp4" type="video/mp4" /> */}
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= HALL TYPES ================= */}
  <section className="max-w-7xl mx-auto px-6 py-24 bg-white">

  {/* HEADING */}
  <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0F4C3A] font-serif">
    Luxury Event Venues
    <span className="absolute left-1/2 -bottom-5 w-28 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
  </h2>

  {/* VENUES */}
  <div className="grid md:grid-cols-3 gap-10">
    {hallTypes.map((hall, i) => (
      <div
        key={i}
        className="
          group
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          border border-gray-200
          transition duration-300 ease-out
          hover:shadow-2xl
          hover:-translate-y-3
          hover:border-[#0F4C3A]
          flex flex-col
        "
      >
        {/* ICON */}
        <div
          className="
            w-16 h-16 mx-auto mb-5
            flex items-center justify-center
            rounded-full
            bg-[#0F4C3A]/10
            transition
            group-hover:bg-[#0F4C3A]
          "
        >
          <span className="text-[#0F4C3A] text-3xl transition group-hover:text-white">
            {hall.icon}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold mb-3 text-center text-[#0F4C3A] transition group-hover:text-black">
          {hall.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-4 text-justify leading-relaxed">
          {hall.desc}
        </p>

        {/* CAPACITY */}
        <p className="text-md font-semibold text-[#DC2626] mb-6 text-center transition group-hover:scale-105">
          Capacity: {hall.capacity}
        </p>

        {/* FACILITIES */}
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-[#0F4C3A] mb-3 text-center">
            Facilities Included
          </h4>

          <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700">
            {hall.facilities.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#DC2626] font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>

</section>

      {/* ================= FACILITIES ================= */}
   <section className="relative bg-white py-24 overflow-hidden">

  {/* ===== BACKGROUND CIRCLES ===== */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-24 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE */}
    <img
      src="/Images/Banquet-banner.avif"
      alt="Conference Hall"
      className="rounded-3xl shadow-lg hover:scale-105 transition duration-500"
    />

    {/* CONTENT */}
    <div className="max-w-3xl mx-auto">

      {/* Heading */}
      <h2 className="relative text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#0F4C3A] font-serif">
        Facilities & Amenities
        <span className="absolute left-1/2 -bottom-5 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
      </h2>

      {/* List */}
      <ul className="space-y-4 text-gray-700 text-base">
        <li className="flex items-start gap-3">
          <FaProjectDiagram className="text-[#DC2626] mt-1" />
          <span>Projector and large screen for professional presentations and events</span>
        </li>

        <li className="flex items-start gap-3">
          <FaMicrophone className="text-[#DC2626] mt-1" />
          <span>High-quality sound system with microphones for clear communication</span>
        </li>

        <li className="flex items-start gap-3">
          <FaWifi className="text-[#DC2626] mt-1" />
          <span>High-speed Wi-Fi connectivity available throughout the venue</span>
        </li>

        <li className="flex items-start gap-3">
          <FaUtensils className="text-[#DC2626] mt-1" />
          <span>Customized catering services with multiple menu options</span>
        </li>

        <li className="flex items-start gap-3">
          <FaGlassCheers className="text-[#DC2626] mt-1" />
          <span>Complete decoration and event setup as per theme requirements</span>
        </li>

        <li className="flex items-start gap-3">
          <FaClock className="text-[#DC2626] mt-1" />
          <span>Flexible event timings with professional on-site support</span>
        </li>
      </ul>

    </div>
  </div>
</section>


       {/* ================= PACKAGES ================= */}
     <BanquetPackages/>


      {/* ================= GALLERY ================= */}
      <section className="relative py-24 bg-[#FBF7F4] overflow-hidden">

  {/* BACKGROUND CIRCLES */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#DC2626]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-6 text-[#0F4C3A] font-serif">
      Our Luxury Event Hall
      <span className="absolute left-1/2 -bottom-4 w-32 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* SUBTEXT */}
    <p className="max-w-3xl mx-auto text-center text-gray-700 mb-14 leading-relaxed">
      Experience elegance and sophistication in our luxury event hall,
      designed to host weddings, conferences, and grand celebrations
      with comfort, style, and modern amenities.
    </p>

    {/* GALLERY GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      {/* FEATURED IMAGE */}
      <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl shadow-lg">
        <img
          src={`${gallery[0]}?auto=format&fit=crop&w=900&q=80`}
          alt="Luxury Event Hall"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>

      {/* OTHER IMAGES */}
      {gallery.slice(1).map((img, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl shadow-md"
        >
          <img
            src={`${img}?auto=format&fit=crop&w=600&q=80`}
            alt="Event Hall"
            className="h-64 w-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      ))}
    </div>

  </div>
</section>

 
   {/* ================= CTA ================= */}
      <section className="bg-[#0F4C3A] py-24 text-center px-6">

  {/* HEADING */}
  <h2 className="relative text-3xl md:text-4xl font-extrabold mb-10 text-white font-serif">
    Plan Your Event With Us
    <span className="absolute left-1/2 -bottom-4 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
  </h2>

  {/* SUBTEXT */}
  <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
    Make your weddings, conferences, and special celebrations truly
    memorable with our elegant banquet and conference facilities.
  </p>

  {/* CTA BUTTON */}
  <Link to="/banquetbooking">
    <button
      className="
        bg-[#DC2626]
        text-white
        px-10
        py-3
        rounded-full
        font-semibold
        hover:bg-white
        hover:text-[#DC2626]
        transition duration-300
      "
    >
      Book Banquet Hall
    </button>
  </Link>

</section>
     
      {/* ================= RULES ================= */}
      <section className="relative py-24 bg-[#FBF7F4] overflow-hidden">

  {/* BACKGROUND DECOR */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute bottom-10 right-0 w-60 h-60 bg-[#DC2626]/10 rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0F4C3A] font-serif">
      Event Policies
      <span className="absolute left-1/2 -bottom-5 w-28 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* POLICIES GRID */}
    <div className="grid sm:grid-cols-2 gap-8">

      {/* POLICY CARD */}
      {[
        "Advance booking is required to confirm banquet or conference hall availability.",
  "Outside catering is not allowed without prior written approval from management.",
  "Event timings must be followed strictly as per the booking agreement.",
  "Late events may attract additional charges as per hotel policy.",
  "Any damage to hotel property or equipment will be charged to the organizer.",
  "All décor materials and setup designs require prior hotel approval."
      ].map((policy, i) => (
        <div
          key={i}
          className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            hover:shadow-2xl
            transition duration-300
            flex gap-4
          "
        >
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0F4C3A]/10 flex-shrink-0">
            <span className="text-[#0F4C3A] text-xl font-bold">✓</span>
          </div>

          {/* TEXT */}
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {policy}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


    

    </div>
  );
};

export default Banquet;

/* ================= DATA ================= */

const hallTypes = [
  {
    title: "Grand Banquet Hall",
    desc: "A luxurious and spacious banquet hall ideal for grand weddings, receptions, anniversaries, and large social celebrations, featuring elegant interiors, customizable décor options, and modern lighting arrangements.",
    capacity: "300 – 500 Guests",
    icon: <FaGlassCheers />,
    facilities: [
      "Central air-conditioning for complete comfort",
      "Elegant interior décor with customizable themes",
      "Advanced lighting and sound system",
      "Spacious stage setup for events & functions",
      "Dedicated backup for uninterrupted functions",
      "On-site event coordination and support staff",
    ],
  },
  {
    title: "Conference Hall",
    desc: "A well-equipped conference hall designed for corporate meetings, seminars, training sessions, and presentations, offering a professional setup with comfortable seating and modern audio-visual support.",
    capacity: "50 – 150 Guests",
    icon: <FaUsers />,
    facilities: [
      "High-speed Wi-Fi connectivity",
      "Projector and large presentation screen",
      "Professional sound system with microphones",
      "Comfortable seating with proper spacing",
      "Whiteboard and presentation tools",
      "Tea, coffee, and refreshment arrangements",
    ],
  },
  {
    title: "Board Room",
    desc: "An exclusive and premium board room tailored for executive meetings, strategy discussions, and private business gatherings, ensuring privacy, comfortable space, and a sophisticated business environment.",
    capacity: "20 – 40 Guests",
    icon: <FaProjectDiagram />,
    facilities: [
      "Premium executive conference table setup",
      "High-quality video conferencing support",
      "Smart display and screen sharing facilities",
      "Soundproof and private meeting environment",
      "Individual charging points and power sockets",
      "Personalized service and refreshments",
    ],
  },
];


const gallery = [
  "/Images/Banquet1.webp",
  "/Images/Banquet2.webp",
  "/Images/Banquet3.webp",
  "/Images/Banquet4.webp",
  "/Images/Banquet5.webp",
 
];

