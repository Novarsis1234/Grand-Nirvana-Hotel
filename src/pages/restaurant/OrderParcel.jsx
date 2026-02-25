import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaUtensils,
  FaBoxOpen,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import OrderForm from "./OrderForm";
import FoodAutoSlider from "./FoodAutoSlider";


const OrderParcel = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}
<section className="relative py-28 overflow-hidden bg-[#FBF7F4]">

  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0F4C3A]/10 rounded-full blur-3xl"></div>
  <div className="absolute top-20 right-0 w-80 h-80 bg-[#DC2626]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#DC2626]/5 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-3 gap-16 items-center">

      {/* ================= LEFT CIRCLE IMAGE ================= */}
      <div className="flex justify-center">
        <div className="relative w-[260px] sm:w-[300px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
          <img
            src="/Images/food2.avif"
            alt="Restaurant Parcel Service"
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
          />
        </div>
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="text-center space-y-6">

        <span className="inline-block px-6 py-2 text-xs uppercase tracking-widest 
        bg-[#DC2626]/10 text-[#DC2626] rounded-full font-semibold">
          Order & Parcel Service
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] leading-tight">
          Fresh Food <br />
          <span className="text-black">Fast Pickup & Takeaway</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md mx-auto text-justify">
          Enjoy delicious meals from <strong>Grand Nirvana Restaurant</strong>
          with our quick and convenient order & parcel service.
          Hygienic packaging, freshly prepared dishes, and timely pickup
          — perfect for home or on-the-go dining.
        </p>

       
      </div>

      {/* ================= RIGHT CIRCLE IMAGE ================= */}
      <div className="flex justify-center">
        <div className="relative w-[260px] sm:w-[300px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
          <img
            src="/Images/food1.webp"
            alt="Takeaway Food Service"
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
          />
        </div>
      </div>

    </div>
  </div>
</section>



      {/* ================= MENU PDF ================= */}
<section className="relative bg-white border-b overflow-hidden">

  {/* BACKGROUND CIRCLES */}
  <div className="absolute -top-20 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-10 right-10 w-60 h-60 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Left Text */}
    <div>
      <h2 className="text-2xl font-bold text-[#0F4C3A] mb-2">
        View Our Restaurant Menu
      </h2>
      <p className="text-gray-600 max-w-xl">
        Explore our complete food menu including sabji, snacks, drinks,
        desserts and non-veg items before placing your order.
      </p>
    </div>

    {/* Buttons */}
    <div className="flex gap-4">
      <a
        href="/Images/menucard.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[#DC2626]
          text-white
          px-6
          py-3
          rounded-full
          font-semibold
          hover:bg-red-700
          transition
        "
      >
        View Menu
      </a>

      <a
        href="/Images/menucard.jpg"
        download
        className="
          border border-[#DC2626]
          text-[#DC2626]
          px-6
          py-3
          rounded-full
          font-semibold
          hover:bg-[#DC2626]
          hover:text-white
          transition
        "
      >
        Download Menu
      </a>
    </div>

  </div>
</section>



      

      {/* ================= HOW IT WORKS ================= */}
    <section className="bg-[#0F4C3A] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-white font-serif">
      How Order & Parcel Works
      <span className="absolute left-1/2 -bottom-5 w-40 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* STEPS */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        {
          icon: <FaUtensils />,
          title: "Choose Your Food",
          desc: "Select dishes from our restaurant menu",
        },
        {
          icon: <FaPhoneAlt />,
          title: "Place Order",
          desc: "Call or WhatsApp us to confirm your order",
        },
        {
          icon: <FaBoxOpen />,
          title: "We Prepare & Pack",
          desc: "Fresh cooking with safe packaging",
        },
        {
          icon: <FaClock />,
          title: "Quick Pickup",
          desc: "Collect your order at the given time",
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
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


{/* ================= ABOUT ================= */}
    <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

    {/* CONTENT */}
    <div>
      <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#0F4C3A] font-serif">
        Delicious Food, Ready to Go
        <span className="absolute left-1/2 -bottom-4 w-44 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed">
         Grand Nirvana Restaurant offers a convenient order & parcel
        service for guests who prefer enjoying our food at home
        or on the go.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        From freshly prepared meals to hygienic packing,
        we ensure the same quality, taste, and care in every parcel.
      </p>

      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-3">
          <FaCheckCircle className="text-[#DC2626]" />
          Freshly prepared after order confirmation
        </li>
        <li className="flex items-center gap-3">
          <FaCheckCircle className="text-[#DC2626]" />
          Hygienic & spill-proof packaging
        </li>
        <li className="flex items-center gap-3">
          <FaCheckCircle className="text-[#DC2626]" />
          Fast preparation & pickup service
        </li>
      </ul>
    </div>

    {/* IMAGE */}
    <img
      src="/Images/parsel-b.avif"
      alt="Order & Parcel"
      className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
    />
  </div>
</section>

      {/* ================= CONTACT DETAILS ================= */}
     <section className="relative bg-[#0F4C3A] py-24 overflow-hidden">

  {/* BACKGROUND CIRCLES */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full"></div>
  <div className="absolute top-28 right-10 w-64 h-64 bg-[#DC2626]/20 rounded-full"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white/10 rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-14 text-white font-serif">
      Order Pickup & Contact Information
      <span className="absolute left-1/2 -bottom-4 w-44 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* CONTACT CARDS */}
    <div className="grid md:grid-cols-3 gap-8 text-center">
      
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <FaPhoneAlt className="text-3xl text-[#DC2626] mx-auto mb-4" />
        <h3 className="font-semibold mb-2 text-[#0F4C3A]">
          Call to Order
        </h3>
        <p className="text-gray-600">+91 98765 43210</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <FaWhatsapp className="text-3xl text-[#DC2626] mx-auto mb-4" />
        <h3 className="font-semibold mb-2 text-[#0F4C3A]">
          WhatsApp Order
        </h3>
        <p className="text-gray-600">+91 98765 43210</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <FaMapMarkerAlt className="text-3xl text-[#DC2626] mx-auto mb-4" />
        <h3 className="font-semibold mb-2 text-[#0F4C3A]">
          Pickup Location
        </h3>
        <p className="text-gray-600">
           Grand Nirvana Hotel, Dewas Naka , Indore (MP)
        </p>
      </div>

    </div>
  </div>
</section>

   {/* ================= ORDER FORM ================= */}
     <OrderForm/>
     <FoodAutoSlider/>
    

    </div>
  );
};

export default OrderParcel;
