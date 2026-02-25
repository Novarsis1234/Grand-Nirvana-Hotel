import React from "react";
import { Link } from "react-router-dom";
import {
 FaBed,
  FaUsers,
  FaChartLine,
  FaUtensils,
  FaCar ,
  FaGlassCheers,
  FaRing,
  FaStar,
 FaQuoteLeft  ,
  FaAward,
   FaSmile,
   FaConciergeBell,
   FaTruck,
   FaClock,
  } from "react-icons/fa";

 
/* ================= SLIDER IMAGES ================= */

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "Our stay at  Grand Nirvana was absolutely wonderful. The rooms were clean, spacious and beautifully designed. Staff behavior was very polite and helpful.",
  },
  {
    name: "Neha Verma",
    review:
      "Excellent hospitality and delicious food. The restaurant ambiance and service quality truly  our expectations. Highly recommended for families.",
  },
  {
    name: "Rahul Mehta",
    review:
      "Perfect place for both business and leisure stays. Smooth check-in, great amenities and a very relaxing environment. Will definitely visit again.",
  },
];

const Home = () => {
    return (
    <div className="bg-gray-50 overflow-hidden">

      {/* ================= HERO VIDEO ================= */}
       <section className="relative h-[95vh] w-full overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/Home.mp4" type="video/mp4" />
      </video>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C3A]/85 via-[#0F4C3A]/60 to-black/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">
            <p className="uppercase tracking-widest font-extrabold text-sm text-[#DC2626] mb-4">
              Welcome to Grand Nirvana
            </p>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Luxury Hotel <br />
              & Smart Management
            </h1>

            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
              Premium rooms, restaurant, banquet & wedding venues  
              designed for comfort, elegance and smart hospitality.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link to="/rooms">
                <button className="bg-[#DC2626] px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
                  Explore Rooms
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-white px-10 py-4 rounded-full text-lg hover:bg-white hover:text-[#0F4C3A] transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT EMPTY SPACE (VIDEO FOCUS) */}
          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
      {/* ================= SERVICES BUTTONS ================= */}
    <section className="relative bg-white py-24 overflow-hidden">
  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0F4C3A]/5"></div>
  <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#DC2626]/5"></div>
  <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#0F4C3A]/5"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* ================= SECTION TITLE ================= */}
    <div className="text-center mb-16">
      <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4 font-extrabold">
        Our Facilities
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A]">
        Everything You Need for a Perfect Stay
      </h2>
      <div className="w-20 h-1 bg-[#DC2626] mx-auto mt-6 rounded-full"></div>
    </div>

    {/* ================= FACILITIES GRID ================= */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
      {[
        { icon: <FaBed />, label: "Luxury Rooms", link: "/rooms" },
        { icon: <FaUtensils />, label: "Fine Dining", link: "/restaurant" },
        { icon: <FaGlassCheers />, label: "Banquet Hall", link: "/banquet" },
        { icon: <FaRing />, label: "Wedding Venue", link: "/wedding" },
        { icon: <FaCar  />, label: "Tour &  Travel", link: "/tour" },
      ].map((item, i) => (
        <Link to={item.link} key={i}>
          <div
            className="group bg-white p-10 rounded-3xl
                       border border-gray-100
                       shadow-md hover:shadow-2xl
                       hover:-translate-y-2 transition-all duration-300"
          >
            {/* ICON */}
            <div
              className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
                         rounded-full bg-[#0F4C3A]/5 text-[#DC2626] text-3xl
                         group-hover:bg-[#DC2626] group-hover:text-white transition"
            >
              {item.icon}
            </div>

            {/* LABEL */}
            <p className="font-semibold text-[#0F4C3A]">
              {item.label}
            </p>
          </div>
        </Link>
      ))}
    </div>

  </div>
</section>


          
          {/* rooms  */}
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
         <p className="text-sm uppercase tracking-widest text-[#DC2626] mb-4 font-extrabold">
  Our Rooms
</p>

<h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8 text-[#0F4C3A]">
  Luxury Rooms <br /> Designed for Relaxation & Comfort
</h2>

<p className="text-gray-600 leading-relaxed mb-10 max-w-md text-justify">
  <strong className="text-[#0F4C3A]">Grand Nirvana</strong> offers elegantly
  designed luxury rooms that provide the perfect balance of comfort, style,
  and functionality. Each room is thoughtfully crafted with modern interiors,
  premium furnishings, and essential amenities to ensure a relaxing stay.
  <br /><br />
  Whether you are visiting for business or leisure, our rooms offer a calm and
  peaceful environment, personalized services, and all the comforts needed for
  a memorable and pleasant experience.
</p>

<Link
  to="/rooms"
  className="inline-flex items-center gap-2 text-sm font-medium text-[#0F4C3A] border-b-2 border-[#DC2626] hover:text-[#DC2626] transition"
>
  Explore Rooms
  <span className="text-[#DC2626]">→</span>
</Link>


         
        </div>

        {/* ================= RIGHT IMAGES ================= */}
     <div className="relative">

  {/* Decorative Frame */}
  <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#0F4C3A]/20"></div>

  <div className="relative flex justify-end gap-8">

    {/* Main Image */}
    <div className="w-[360px] overflow-hidden rounded-2xl shadow-xl">
      <img
        src="/Images/room4-1.webp"
        alt="Luxury Room"
        className="w-full h-[460px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* Floating Image */}
    <div className="absolute right-[140px] bottom-[-40px] w-[280px] overflow-hidden rounded-2xl shadow-2xl">
      <img
        src="/Images/room4-3.jpg"
        alt="Hotel Interior"
        className="w-full h-[360px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</div>


      </div>
    </section>
  

  {/* food  */}
       <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT IMAGES ================= */}
     {/* ================= LEFT IMAGES ================= */}
<div className="relative">

  {/* Frame */}
  <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#0F4C3A]/20"></div>

  <div className="relative flex gap-8">

    {/* Image 1 */}
    <div className="w-[320px] overflow-hidden rounded-2xl shadow-xl">
      <img
        src="/Images/hotel-food1.avif"
        alt="Hotel Food"
        className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* Image 2 (Overlapping) */}
    <div className="absolute left-[200px] top-[120px] w-[280px] overflow-hidden rounded-2xl shadow-2xl">
      <img
        src="/Images/hotel-food2.avif"
        alt="Dessert"
        className="w-full h-[360px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</div>



        {/* ================= RIGHT CONTENT ================= */}
        <div>
          <p className="text-sm uppercase tracking-widest text-[#DC2626] mb-4 font-extrabold">Delicious Food</p>

         <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8 text-[#0F4C3A]">
  We Serve Fresh and <br /> Delicious Food
</h2>


          <p className="text-gray-500 leading-relaxed mb-10 max-w-md text-justify">
            At <strong className="text-[#0F4C3A]">Grand Nirvana</strong>, our
            restaurant offers a delightful dining experience with freshly
            prepared dishes, premium ingredients, and a warm ambiance.
            <br /><br />
            From breakfast to dinner, enjoy multi-cuisine flavors crafted by
            expert chefs to satisfy every taste and make your stay memorable.
          </p>

          <Link
            to="/restaurant"
            className="text-sm text-gray-600 border-b border-gray-400 hover:text-[#DC2626] transition"
          >
            Explore Restaurant
          </Link> 
          
        </div>

      </div>
       </section>  

       {/* ================= FOOD ORDER ================= */}
<section className="bg-[#0F4C3A] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADING */}
    <div className="text-center mb-16">
      <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-3">
        Food Ordering
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        Delicious Food Delivered to Your Room
      </h2>
    </div>

    {/* FOOD ORDER GRID */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {foodOrderStats.map((item, i) => (
        <div
          key={i}
          className="group bg-white/10 backdrop-blur p-10 rounded-3xl
                     border border-white/10 shadow-md
                     hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
        >
          {/* ICON */}
          <div className="text-4xl text-[#DC2626] flex justify-center mb-6 group-hover:scale-110 transition">
            {item.icon}
          </div>

          {/* VALUE */}
          <h2 className="text-4xl font-extrabold text-white">
            {item.value}
          </h2>

          {/* LABEL */}
          <p className="text-gray-200 mt-3 font-medium">
            {item.label}
          </p>

          {/* ACCENT LINE */}
          <div className="w-10 h-0.5 bg-[#DC2626] mx-auto mt-5 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      ))}
    </div>

  </div>
</section>

  

  {/* car booking  */}
     <section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* ================= LEFT CONTENT ================= */}
    <div>
      <p className="text-sm uppercase tracking-widest text-[#DC2626] mb-4 font-extrabold">
        Car Booking
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8 text-[#0F4C3A]">
        Comfortable, Reliable & <br /> Hassle-Free Travel
      </h2>

      <p className="text-gray-600 leading-relaxed mb-10 max-w-md text-justify">
        Enjoy a smooth and comfortable journey with{" "}
        <strong className="text-[#0F4C3A]">Grand Nirvana</strong> car booking
        services. We offer well-maintained and reliable vehicles to make your
        travel stress-free.
        <br /><br />
        Choose from our premium car options including{" "}
        <strong>Bolero</strong>, <strong>Swift</strong>, and{" "}
        <strong>XL6</strong> — perfect for family trips, business travel, or
        sightseeing with complete comfort and safety.
      </p>

      <Link
        to="/tour"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#0F4C3A] border-b-2 border-[#DC2626] hover:text-[#DC2626] transition"
      >
        Book a Car
        <span className="text-[#DC2626]">→</span>
      </Link>
    </div>

    {/* ================= RIGHT IMAGES ================= */}
    <div className="relative">

      {/* Background Accent Box */}
      <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#0F4C3A]/20"></div>

      <div className="relative grid grid-cols-2 gap-6">

        {/* Image 1 */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/Images/tour1.jpg"
            alt="Car Rental Service"
            className="w-full h-[360px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden rounded-2xl shadow-lg mt-10">
          <img
            src="/Images/tour2.avif"
            alt="Luxury Car Booking"
            className="w-full h-[360px] object-contain hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>

  </div>
</section>
         {/* Banquet Hall  */}
      <section className="relative bg-[#FBF7F4] py-28 overflow-hidden">

  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-40 right-10 w-56 h-56 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* ================= LEFT IMAGES ================= */}
    <div className="relative">

      {/* OUTER BORDER FRAME */}
      <div className="absolute inset-0 border border-[#0F4C3A]/25 rounded-3xl"></div>

      <div className="relative p-8">

        {/* MAIN FULL IMAGE */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/Images/Banquet-homepage.avif"
            alt="Banquet Hall"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* CIRCULAR IMAGE (OVERLAP) */}
        <div className="absolute left-1/2 -bottom-28 -translate-x-1/2 z-20">
          <div className="w-[240px] h-[240px] rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img
              src="/Images/Banquet6.avif"
              alt="Wedding Setup"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

      </div>
    </div>

    {/* ================= RIGHT CONTENT ================= */}
    <div>
      <p className="text-sm uppercase tracking-widest text-[#DC2626] mb-4 font-extrabold">
        Banquet Hall
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8 text-[#0F4C3A]">
        Elegant Spaces for <br /> Weddings & Grand Events
      </h2>

      <p className="text-gray-700 leading-relaxed mb-10 max-w-md text-justify">
        Celebrate your most special moments at{" "}
        <strong className="text-[#0F4C3A]">Grand Nirvana</strong>, where
        elegance meets perfection in our beautifully designed banquet halls.
        Ideal for weddings, receptions, corporate conferences, social
        gatherings, and grand celebrations.
        <br /><br />
        With customizable layouts, modern lighting and sound systems, premium
        décor, and dedicated event planning support, our professional team
        ensures every event is seamless, memorable, and truly stress-free.
      </p>

      <Link
        to="/banquet"
        className="inline-flex items-center gap-2 text-sm font-semibold
                   text-[#0F4C3A] border-b-2 border-[#DC2626]
                   hover:text-[#DC2626] transition"
      >
        Explore Banquet Hall
        <span className="text-[#DC2626]">→</span>
      </Link>
    </div>

  </div>
</section>


      {/* Marriage Garden  */}
       <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className="text-sm uppercase tracking-widest text-[#DC2626] mb-4 font-extrabold">
            Marriage Garden
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8 text-[#0F4C3A]">
            Celebrate Your Dream Wedding <br /> Under the Open Sky
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-md text-justify">
            Host your dream wedding at{" "}
            <strong className="text-[#0F4C3A]">Grand Nirvana</strong> in our
            beautifully landscaped marriage garden, designed to create magical
            moments in a natural and elegant outdoor setting.
            <br /><br />
            Perfect for weddings, receptions, and grand celebrations, our
            garden offers spacious layouts, stunning décor possibilities,
            ambient lighting, and seamless event support to ensure your special
            day is unforgettable, joyful, and stress-free.
          </p>

          <Link
            to="/marriage-garden"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0F4C3A] border-b-2 border-[#DC2626] hover:text-[#DC2626] transition"
          >
            Explore Marriage Garden
            <span className="text-[#DC2626]">→</span>
          </Link>
        </div>

        {/* ================= RIGHT IMAGES ================= */}
        <div className="relative">

          {/* Soft Border Frame */}
          <div className="absolute inset-0 border border-[#0F4C3A]/25 rounded-3xl"></div>

          <div className="relative p-8 grid grid-cols-2 gap-8">

            {/* Image 1 */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/Images/wedding5.jpg"
                alt="Marriage Garden Setup"
                className="w-full h-[380px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Image 2 (Lower Touch Effect) */}
            <div className="overflow-hidden rounded-3xl shadow-xl mt-12">
              <img
                src="/Images/wedding4.jpg"
                alt="Outdoor Wedding Decor"
                className="w-full h-[380px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        </div>

      </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
     <section className="relative bg-white overflow-hidden">
  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0F4C3A]/5"></div>
  <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-[#DC2626]/5"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

    {/* ================= SECTION HEADING ================= */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-3 font-extrabold">
        Our Features
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A]">
        Premium Facilities & Smart Services
      </h2>
      <div className="w-20 h-1 bg-[#DC2626] mx-auto mt-6 rounded-full"></div>
    </div>

    {/* ================= FEATURES GRID ================= */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
      {features.map((item, i) => (
        <div
          key={i}
          className="group bg-white p-12 rounded-3xl
                     border border-[#0F4C3A]/10
                     shadow-md hover:shadow-2xl
                     hover:-translate-y-3 transition-all duration-300"
        >
          {/* ICON */}
          <div
            className="w-16 h-16 mb-6 flex items-center justify-center
                       rounded-2xl bg-[#0F4C3A]/5 text-[#DC2626] text-3xl
                       group-hover:bg-[#DC2626] group-hover:text-white transition"
          >
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-bold mb-4 text-[#0F4C3A]">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed text-justify">
            {item.desc}
          </p>

          {/* ACCENT LINE */}
          <div className="w-14 h-0.5 bg-[#DC2626] mt-8 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      ))}
    </div>

  </div>
</section>

   


    
    


      {/* ================= STATS ================= */}
   <section className="bg-[#0F4C3A] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADING */}
    <div className="text-center mb-16">
      <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-3 font-extrabold">
        Our Achievements
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        Numbers That Speak for Us
      </h2>
    </div>

    {/* STATS GRID */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {stats.map((s, i) => (
        <div
          key={i}
          className="group bg-white/10 backdrop-blur p-10 rounded-3xl
                     border border-white/10 shadow-md
                     hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
        >
          {/* ICON */}
          <div className="text-4xl text-[#DC2626] flex justify-center mb-6 group-hover:scale-110 transition">
            {s.icon}
          </div>

          {/* VALUE */}
          <h2 className="text-4xl font-extrabold text-white">
            {s.value}+
          </h2>

          {/* LABEL */}
          <p className="text-gray-200 mt-3 font-medium">
            {s.label}
          </p>

          {/* ACCENT LINE */}
          <div className="w-10 h-0.5 bg-[#DC2626] mx-auto mt-5 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      ))}
    </div>

  </div>
</section>




      {/* ================= TESTIMONIALS ================= */}
   <section className="relative bg-white py-28 overflow-hidden">

  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0F4C3A]/5"></div>
  <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#DC2626]/5"></div>
  <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#0F4C3A]/5"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* ================= HEADING ================= */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-3 font-extrabold">
        Testimonials
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A]">
        What Our Guests Say
      </h2>
      <div className="w-20 h-1 bg-[#DC2626] mx-auto mt-6 rounded-full"></div>
    </div>

    {/* ================= TESTIMONIALS ================= */}
    <div className="grid md:grid-cols-3 gap-10">
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="group bg-white border border-[#0F4C3A]/10 p-10 rounded-3xl
                     shadow-sm hover:shadow-xl hover:-translate-y-2
                     transition-all duration-300"
        >
          {/* QUOTE ICON */}
          <FaQuoteLeft className="text-3xl text-[#DC2626] mb-6 opacity-80" />

          {/* REVIEW */}
          <p className="text-gray-600 leading-relaxed mb-8 text-justify">
            {item.review}
          </p>

          {/* STARS */}
          <div className="flex gap-1 text-[#DC2626] mb-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          {/* NAME */}
          <h4 className="font-semibold text-[#0F4C3A] text-lg">
            {item.name}
          </h4>

          <p className="text-sm text-gray-500">
            Verified Guest
          </p>

          {/* HOVER ACCENT */}
          <div className="w-12 h-0.5 bg-[#DC2626] mt-6 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      ))}
    </div>

  </div>
</section>



      
    </div>
  );
};

export default Home;





/* ================= DATA ================= */
const features = [
  {
    title: "Luxury Rooms",
    desc: "Spacious and elegantly designed rooms with modern amenities, ensuring comfort, privacy, and a relaxing stay.",
    icon: <FaBed />,
  },
  {
    title: "Restaurant & Fine Dining",
    desc: "Multi-cuisine restaurant offering delicious food, refined dining ambiance, and exceptional service.",
    icon: <FaUtensils />,
  },
 {
  title: "Car Booking",
  desc: "Reliable and comfortable car booking service with well-maintained vehicles including Bolero, Swift, and XL6 for a smooth and hassle-free travel experience.",
  icon: <FaCar />,
},
  {
    title: "Banquet & Weddings",
    desc: "Beautiful banquet halls and venues ideal for weddings, receptions, conferences, and special events.",
    icon: <FaGlassCheers />,
  },
  {
    title: "Staff & Guest Services",
    desc: "Professional staff ensuring smooth check-in, personalized guest care, and 24×7 hospitality support.",
    icon: <FaUsers />,
  },
  {
    title: "Smart Hotel Reports",
    desc: "Real-time reports to monitor bookings, occupancy, revenue, and overall hotel performance efficiently.",
    icon: <FaChartLine />,
  },
];



const stats = [
  {
    value: 500,
    label: "Happy Guests",
    icon: <FaSmile />,
  },
  {
    value: 30,
    label: "Luxury Rooms",
    icon: <FaBed />,
  },
  {
    value: 30,
    label: "Staff Members",
    icon: <FaUsers />,
  },
  {
    value: 15,
    label: "Years of Excellence",
    icon: <FaAward />,
  },
];




const foodOrderStats = [
  {
    value: "24x7",
    label: "Room Service",
    icon: <FaConciergeBell />,
  },
  {
    value: "50+",
    label: "Delicious Dishes",
    icon: <FaUtensils />,
  },
  {
    value: "Fast",
    label: "Quick Delivery",
    icon: <FaTruck/>,
  },
  {
    value: "30 Min",
    label: "Average Service Time",
    icon: <FaClock />,
  },
];










