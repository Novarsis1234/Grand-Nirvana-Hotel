import React from "react";
import { Link } from "react-router-dom";
import { FaBullseye, FaEye, FaHandsHelping, FaPlay } from "react-icons/fa";
import { FaHotel, FaUserShield, FaChartLine, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full bg-white">
      {/* ================= HERO ================= */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10">
            <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-6 font-extrabold">
              About Us
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-[#0F4C3A]">
              Experience Luxury <br />
              <span className="text-black">Beyond Comfort</span>
            </h1>

            <p className="text-gray-600 max-w-md leading-relaxed mb-10">
              <strong className="text-[#0F4C3A]">
                Grand Nirvana Hotel Management
              </strong>{" "}
              is designed to deliver premium hospitality experiences by
              combining elegant stays, professional services, and smart hotel
              management solutions — all under one roof.
            </p>

            <p className="text-sm text-gray-500 max-w-md">
              From luxury rooms and fine dining to weddings, banquets, and guest
              services, we focus on excellence, comfort, and unforgettable
              moments.
            </p>
          </div>

          {/* ================= RIGHT VIDEO ================= */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -top-10 -right-10 w-full h-full border border-gray-300"></div>

            {/* Video with Poster */}
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/Images/about-homepage.avif"
                className="w-full h-[520px] object-cover"
              >
                {/* <source src="/video/about1.mp4" type="video/mp4" /> */}
              </video>
            </div>

            {/* Background Big Text */}
            <h2 className="absolute -left-24 top-1/2 -translate-y-1/2 text-[120px] font-extrabold text-black/5 select-none">
              ABOUT
            </h2>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-[#FBF7F4] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ================= LEFT IMAGES ================= */}
          <div className="relative flex justify-center lg:justify-start">
            {/* BIG IMAGE (CIRCLE) */}
            <div className="relative z-10 w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                src="/video/about2.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* SMALL CIRCLE IMAGE */}
            <div
              className="absolute -bottom-10 right-0 md:right-10 z-20
                      w-[160px] h-[160px] md:w-[200px] md:h-[200px]
                      rounded-full overflow-hidden shadow-xl
                      border-8 border-white"
            >
              <img
                src="/Images/owner.jpeg"
                alt="Hotel Owner"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Decorative Ring */}
            <div
              className="absolute -top-8 -left-8
                      w-[320px] h-[320px] md:w-[400px] md:h-[400px]
                      rounded-full border border-[#0F4C3A]/20"
            ></div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="text-center lg:text-left">
            <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4 font-extrabold">
              Who We Are
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 text-[#0F4C3A]">
              Built for <br />
              <span className="text-black">Hotel Owners</span>
            </h1>

            <p className="text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed mb-10">
              At <strong className="text-[#0F4C3A]"> Grand Nirvana</strong>,
              we understand the real challenges hotel owners face every day —
              managing rooms, staff, guests, and operations while maintaining
              service quality and profitability.
              <br />
              <br />
              Our smart hotel solutions give owners complete control, clear
              insights, and peace of mind to run hotels efficiently and grow
              with confidence.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <Link
                to="/staff"
                className="bg-[#DC2626] text-white px-8 py-3 rounded-full
                     hover:opacity-90 transition font-medium"
              >
                All Staffs
              </Link>

              <button
                className="flex items-center gap-3 text-[#0F4C3A] font-medium
                     hover:text-[#DC2626] transition"
              >
                <span
                  className="w-11 h-11 flex items-center justify-center
                       border border-[#0F4C3A]/30 rounded-full"
                >
                  <FaPlay className="text-sm" />
                </span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="bg-[#0F4C3A] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {missions.map((item, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur rounded-3xl p-8 text-center
                   border border-white/15 shadow-md
                   hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
                     rounded-full bg-white/15 text-[#DC2626] text-2xl
                     group-hover:bg-[#DC2626] group-hover:text-white transition"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 leading-relaxed text-justify">
                {item.desc}
              </p>

              {/* Accent Line */}
              <div className="w-10 h-0.5 bg-[#DC2626] mx-auto mt-6 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24 mt-12">
        {/* ================= CUSTOM HEADING ================= */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-3 font-extrabold">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A]">
            What Makes Grand Nirvana Different
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT: 2x2 CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 text-center
                     shadow-lg hover:shadow-2xl
                     hover:bg-[#0F4C3A] hover:text-white
                     transition duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mx-auto mb-5 flex items-center justify-center
                       rounded-full bg-blue-50 text-[#DC2626] text-2xl
                       group-hover:bg-white group-hover:text-[#DC2626] transition"
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>

                {/* Description */}
                <p className="text-sm leading-relaxed opacity-90 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ================= RIGHT: VIDEO WITH POSTER ================= */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/Images/about-banner.avif"
              className="w-full h-[420px] lg:h-[520px] object-cover"
            >
              <source src="" type="video/mp4" />
            </video>

            {/* Soft border overlay */}
            <div className="absolute inset-0 ring-1 ring-black/10 rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24 overflow-hidden">
        {/* ================= DECORATIVE CIRCLES ================= */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#0F4C3A]/5"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#DC2626]/5"></div>

        {/* ================= CUSTOM HEADING ================= */}
        <div className="relative mb-16 text-center">
          <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-3 font-extrabold">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A]">
            From Idea to an Industry-Ready Solution
          </h2>

          {/* Small Center Circle */}
          <div className="w-4 h-4 bg-[#DC2626] rounded-full mx-auto mt-6"></div>
        </div>

        {/* ================= CONTENT WITH LEFT CIRCLE LINE ================= */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 h-full w-px bg-[#0F4C3A]/20"></div>

          {/* CONTENT BLOCKS */}
          <div className="space-y-12 pl-10 text-justify">
            <div className="relative">
              <span className="absolute -left-12 top-2 w-5 h-5 rounded-full bg-[#0F4C3A]"></span>
              <p className="text-gray-700 leading-relaxed">
                The journey of{" "}
                <strong className="text-[#0F4C3A]"> Grand Nirvana</strong>{" "}
                began with a simple yet meaningful goal — to solve the real
                operational challenges faced by hotel owners and managers.
                Manual record-keeping, scattered systems, and inefficient
                workflows inspired us to build a unified platform that could
                simplify daily hotel operations.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-12 top-2 w-5 h-5 rounded-full bg-[#DC2626]"></span>
              <p className="text-gray-700 leading-relaxed">
                Over time, this idea evolved into a comprehensive hotel
                management ecosystem. Grand Nirvana brought together room
                management, bookings, guest handling, staff coordination, and
                performance reporting into one seamless system designed for
                clarity, efficiency, and control.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-12 top-2 w-5 h-5 rounded-full bg-[#0F4C3A]"></span>
              <p className="text-gray-700 leading-relaxed">
                Today, Grand Nirvana stands as a modern, reliable, and
                industry-ready solution trusted by hotels and hospitality
                businesses. With continuous innovation, enhanced security, and
                performance at its core, we remain committed to helping hotel
                owners operate smarter, deliver exceptional guest experiences,
                and grow with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative bg-[#0F4C3A] py-24 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5"></div>
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-[#DC2626]/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur rounded-3xl p-10
                     border border-white/10 shadow-md
                     hover:-translate-y-2 hover:bg-white/15
                     transition-all duration-300"
              >
                {/* VALUE */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  {s.value}
                  <span className="text-[#DC2626]">+</span>
                </h2>

                {/* LABEL */}
                <p className="text-gray-200 mt-4 font-medium">{s.label}</p>

                {/* Accent line */}
                <div className="w-10 h-0.5 bg-[#DC2626] mx-auto mt-6 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Subtle Decorative Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0F4C3A]/5"></div>
          <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-[#DC2626]/5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Heading */}
          <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4 font-extrabold">
            Partner With Us
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#0F4C3A]">
            Partner With <span className="text-black"> Grand Nirvana</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you manage a single hotel or operate a growing hotel chain,
            Grand Nirvana provides smart solutions to streamline operations,
            enhance guest experiences, and grow your business with confidence.
          </p>

          {/* CTA Button */}
          <Link to="/contact">
            <button
              className="inline-flex items-center gap-2 bg-[#DC2626]
                   text-white px-10 py-4 rounded-full
                   hover:bg-[#0F4C3A] transition
                   font-medium shadow-md"
            >
              Contact Us
              <span className="text-lg">→</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

/* ================= DATA ================= */
const missions = [
  {
    title: "Our Mission",
    desc: "To simplify hotel operations through smart, reliable, and scalable technology that enhances efficiency and guest satisfaction.",
    icon: <FaBullseye />,
  },
  {
    title: "Our Vision",
    desc: "To become a globally trusted hotel management platform, empowering hotels of all sizes to grow and succeed.",
    icon: <FaEye />,
  },
  {
    title: "Our Values",
    desc: "Innovation, transparency, customer satisfaction, and reliability guide everything we build and deliver.",
    icon: <FaHandsHelping />,
  },
];

const reasons = [
  {
    title: "Designed for Hotels",
    desc: "Built specifically for hotels to manage bookings, rooms, guests, and daily operations seamlessly.",
    icon: <FaHotel />,
  },
  {
    title: "Secure & Reliable",
    desc: "Advanced security, role-based access, and data protection to keep hotel information safe.",
    icon: <FaUserShield />,
  },
  {
    title: "Grow With Your Business",
    desc: "Scalable solution suitable for boutique hotels, resorts, and large hotel chains.",
    icon: <FaChartLine />,
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Round-the-clock technical support to ensure smooth hotel operations anytime.",
    icon: <FaHeadset />,
  },
];

const stats = [
  { value: 45, label: "Luxury Rooms Available (24*7)" },
  { value: 1200, label: "Weddings Successfully Hosted" },
  { value: 950, label: "Banquet (Conference) Events Booked" },
  { value: 500, label: " Tour & Travel " },
];
