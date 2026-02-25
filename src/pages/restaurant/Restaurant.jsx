import React, { useState } from "react";
import {
  FaUtensils,
  FaLeaf,
  FaWineGlassAlt,
  FaConciergeBell,
  FaClock,
  FaUserFriends,
  FaCheckCircle,
  
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [openInfo, setOpenInfo] = useState(null);

  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}
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
          Restaurant
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6 leading-tight">
          A Delightful Journey of <br />
          <span className="text-black">Taste & Elegance</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md mb-8 text-justify">
          Experience a perfect blend of flavors, freshness, and fine dining
          at our restaurant. From delicious local specialties to
          thoughtfully curated multi-cuisine dishes, every meal is crafted
          to satisfy your taste and elevate your dining experience.
        </p>

        {/* CTA BUTTON */}
        <Link to="/order-parcel">
          <button
            className="
              bg-[#DC2626]
              text-white
              px-10
              py-3
              rounded-full
              font-semibold
              shadow-lg
              hover:bg-red-700
              hover:scale-105
              transition duration-300
            "
          >
            Order Now
          </button>
        </Link>
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
            poster="/Images/Restaurant-3.avif"
            className="w-full h-full object-cover"
          >
            {/* <source src="/video/Restaurant.mp4" type="video/mp4" /> */}
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= ABOUT ================= */}
    <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

    {/* CONTENT */}
    <div>
      <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#0F4C3A] font-serif">
        A Dining Experience Beyond Taste
        <span className="absolute left-1/2 -bottom-4 w-44 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed text-justify">
         Grand Nirvana Restaurant offers a refined dining atmosphere where
        culinary excellence meets luxury hospitality. Every detail is
        carefully curated to deliver comfort, taste, and elegance.
      </p>

      <p className="text-gray-600 mb-4 leading-relaxed text-justify">
        Our chefs combine traditional cooking techniques with modern
        creativity, using premium-quality ingredients to craft memorable
        dishes for every guest.
      </p>

      <ul className="space-y-3 text-gray-700 mt-6">
        <li className="flex items-center gap-3">
          <FaCheckCircle className="text-[#DC2626]" />
          Elegant and spacious dining ambiance
        </li>
        <li className="flex items-center gap-3">
          <FaCheckCircle className="text-[#DC2626]" />
          Premium ingredients & hygienic preparation
        </li>
        <li className="flex items-center gap-3">
          <FaCheckCircle className="text-[#DC2626]" />
          Trained chefs & professional service staff
        </li>
      </ul>
    </div>

    {/* IMAGE */}
    <img
      src="/Images/Restaurant-banner.avif"
      alt="Restaurant"
      className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
    />
  </div>
</section>


      {/* ================= HIGHLIGHTS ================= */}
    <section className="bg-[#0F4C3A] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-white font-serif">
      What Makes Our Dining Special
      <span className="absolute left-1/2 -bottom-5 w-28 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* FEATURES */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        {
          icon: <FaUtensils />,
          title: "Multi-Cuisine Dining",
          desc: "Indian, Continental & fusion cuisines",
        },
        {
          icon: <FaLeaf />,
          title: "Fresh Ingredients",
          desc: "Daily sourced vegetables & spices",
        },
        {
          icon: <FaWineGlassAlt />,
          title: "Premium Beverages",
          desc: "Mocktails, coffee & signature drinks",
        },
        {
          icon: <FaConciergeBell />,
          title: "Luxury Service",
          desc: "Professional & courteous staff",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-3
            transition duration-300
          "
        >
          {/* ICON */}
          <div className="text-4xl text-[#DC2626] mb-4 flex justify-center">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-bold mb-2 text-[#0F4C3A]">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= CHEF PHILOSOPHY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/Images/Restaurant-banner-banner.avif"
          alt="Chef"
          className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
        />

        <div>
         <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-10">
  <span className="text-[#0F4C3A] ">
  A Kitchen Driven by Passion
  </span>

  <span className="absolute left-1/2 -bottom-4 w-40 h-1 bg-gradient-to-r from-[#DC2626] to-[#DC2626] -translate-x-1/2 rounded-full"></span>
</h2>


          <p className="text-gray-600 mb-4 leading-relaxed text-justify">
            Our chefs bring years of experience from luxury hotels and
            fine-dining kitchens. Every recipe reflects passion, precision
            and authenticity.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed text-justify">
            We focus on consistency, presentation and flavor to ensure
            each dish exceeds expectations.
          </p>

          <ul className="space-y-3 text-gray-600 mt-6">
            <li className="flex gap-3">
              <FaCheckCircle className="text-[#DC2626]" />
              Authentic flavors with modern presentation
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-[#DC2626]" />
              Seasonal & chef-special menus
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-[#DC2626]" />
              Strict hygiene & quality control
            </li>
          </ul>
        </div>
      </section>

      {/* ================= RESTAURANT INFO ================= */}
    <section className="relative py-24 overflow-hidden bg-white">

  {/* BACKGROUND CIRCLES */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0F4C3A] font-serif">
      Restaurant Information
      <span className="absolute left-1/2 -bottom-5 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {[
      {
        title: "Opening Hours",
        icon: <FaClock />,
        content:
          "Breakfast: 7:00 AM – 10:30 AM | Lunch: 12:30 PM – 3:30 PM | Dinner: 7:00 PM – 11:30 PM",
      },
      {
        title: "Seating & Ambience",
        icon: <FaUserFriends />,
        content:
          "Comfortable indoor seating suitable for families, couples, business meetings and group dining.",
      },
      {
        title: "Special Arrangements",
        icon: <FaConciergeBell />,
        content:
          "Private dining, birthday celebrations, anniversaries and corporate lunches available on request.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="mb-6 bg-white rounded-3xl overflow-hidden shadow-lg"
      >
        <button
          onClick={() => setOpenInfo(openInfo === i ? null : i)}
          className="
            w-full flex items-center justify-between px-6 py-5
            hover:bg-[#FBF7F4] transition
          "
        >
          <div className="flex items-center gap-3 text-[#0F4C3A] font-semibold">
            <span className="text-[#DC2626]">{item.icon}</span>
            {item.title}
          </div>

          <span className="text-xl text-[#DC2626] font-bold">
            {openInfo === i ? "−" : "+"}
          </span>
        </button>

        {openInfo === i && (
          <div className="px-6 py-4 bg-[#FBF7F4] text-gray-600 leading-relaxed">
            {item.content}
          </div>
        )}
      </div>
    ))}
  </div>
</section>


      {/* ================= DINING OPTIONS ================= */}
<section className="bg-[#0F4C3A] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-white font-serif">
      Explore Our Dining Experiences
      <span className="absolute left-1/2 -bottom-5 w-40 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* CARDS */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          icon: <FaUtensils />,
          title: "Fine Dining",
          desc: "Elegant indoor dining experience perfect for families and couples.",
        },
        {
          icon: <FaUserFriends />,
          title: "Group Dining",
          desc: "Spacious seating arrangements for groups, parties and celebrations.",
        },
        {
          icon: <FaConciergeBell />,
          title: "Private Dining",
          desc: "Exclusive private dining setup for birthdays, anniversaries and meetings.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-3
            transition duration-300
            text-center
          "
        >
          {/* ICON */}
          <div className="text-4xl text-[#DC2626] mb-4 flex justify-center">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-bold mb-3 text-[#0F4C3A]">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
 

{/* ================= HYGIENE & SAFETY ================= */}
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
   <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-12">
  <span className="text-[#0F4C3A] ">
    Clean, Safe & Trusted
  </span>

  <span className="absolute left-1/2 -bottom-4 w-32 h-1 bg-gradient-to-r from-[#DC2626] to-[#DC2626] -translate-x-1/2 rounded-full"></span>
</h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
      Your health and safety are our top priorities. We follow strict hygiene
      protocols across our kitchen, dining areas and service operations to
      ensure a safe and comfortable dining experience for every guest.
    </p>

    <ul className="grid sm:grid-cols-2 gap-6 text-gray-600 max-w-4xl mx-auto text-left">
      <li className="flex gap-3"><FaCheckCircle className="text-[#DC2626]" />Regular kitchen sanitization</li>
      <li className="flex gap-3"><FaCheckCircle className="text-[#DC2626]" />Fresh & quality-checked ingredients</li>
      <li className="flex gap-3"><FaCheckCircle className="text-[#DC2626]" />Trained & uniformed staff</li>
      <li className="flex gap-3"><FaCheckCircle className="text-[#DC2626]" />Clean dining & service areas</li>
    </ul>
  </div>
</section>



      {/* ================= GALLERY ================= */}
     <section className="relative bg-white py-24 overflow-hidden">

  {/* ===== BACKGROUND CIRCLES ===== */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#0F4C3A] font-serif">
      Our Restaurant Moments
      <span className="absolute left-1/2 -bottom-5 w-32 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* GALLERY */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        "/Images/Restaurant-1.avif",
        "/Images/Restaurant-2.webp",
        "/Images/Restaurant-3.avif",
        "/Images/Restaurant-4.avif",
        "/Images/Restaurant-5.avif",
        "/Images/Restaurant-6.avif",
      ].map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Restaurant"
          className="
            rounded-3xl
            h-64
            w-full
            object-cover
            shadow-lg
            hover:scale-105
            transition duration-500
          "
        />
      ))}
    </div>

  </div>
</section>
 
 
{/* cta  */}
<section className="bg-[#0F4C3A] py-24 px-6 text-center">
  <div className="max-w-3xl mx-auto">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold mb-10 text-white font-serif">
      Craving Delicious Food?
      <span className="absolute left-1/2 -bottom-4 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* CONTENT */}
    <p className="text-gray-200 leading-relaxed mb-2 text-justify">
      Enjoy freshly prepared, hygienically packed meals from  Grand Nirvana
      Restaurant without waiting.
    </p>

    <p className="text-gray-200 leading-relaxed mb-2 text-justify">
      Simply place your order via call or WhatsApp and pick up your food
      at your convenience.
    </p>

    <p className="text-gray-200 leading-relaxed mb-10 text-justify">
      Quality taste, quick service, and the same  Grand Nirvana experience —
      now available for takeaway and parcel.
    </p>

    {/* CTA */}
    <Link to="/order-parcel">
      <button
        className="
          bg-[#DC2626]
          text-white
          px-12
          py-4
          rounded-full
          text-lg
          font-semibold
          shadow-xl
          hover:bg-white
          hover:text-[#DC2626]
          hover:scale-105
          transition duration-300
        "
      >
        Order Now
      </button>
    </Link>

  </div>
</section>


      {/* ================= TESTIMONIALS ================= */}
<section className="relative bg-gray-50 py-24 overflow-hidden">

  {/* ===== BACKGROUND CIRCLES ===== */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0F4C3A] font-serif">
      Guest Reviews & Testimonials
      <span className="absolute left-1/2 -bottom-5 w-32 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* REVIEWS */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          name: "Amit Verma",
          text: "Amazing food and warm hospitality. The ambiance and service were truly top-notch.",
        },
        {
          name: "Neha Sharma",
          text: "One of the best dining experiences in the city. Every dish was perfectly prepared.",
        },
        {
          name: "Rahul Mehta",
          text: "Excellent service, clean environment and delicious food. Highly recommended!",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition duration-300
          "
        >
          <p className="text-gray-600 mb-4 italic leading-relaxed">
            “{t.text}”
          </p>
          <p className="font-semibold text-[#0F4C3A]">
            {t.name}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>





    </div>
  );
};

export default Restaurant;
