import {
  FaGlassCheers,
  FaRing,
  FaCameraRetro,
  FaMusic,
  FaUtensils,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import WeddingPackages from "./WeddingPackages";

const services = [
  {
    title: "Luxury Decoration",
    icon: <FaGlassCheers />,
    desc:
      "We provide elegant and customized wedding decoration services designed to match your theme and preferences.",
    points: [
      "Designer stage and mandap decoration",
      "Fresh floral arrangements & premium lighting",
      "Theme-based décor (royal, traditional, modern)",
      "Entrance gate & aisle decoration",
      "Table centerpieces and backdrop setup",
    ],
  },
  {
    title: "Wedding Catering",
    icon: <FaUtensils />,
    desc:
      "Delicious multi-cuisine catering services prepared by expert chefs to delight your guests.",
    points: [
      "Wide range of veg & non-veg menu options",
      "Live food counters & buffet setup",
      "Customized menu as per guest preference",
      "Professional serving staff",
      "Hygienic food preparation & presentation",
    ],
  },
  {
    title: "Photography & Videography",
    icon: <FaCameraRetro />,
    desc:
      "Capture every precious wedding moment with our professional photography and cinematic videography services.",
    points: [
      "Pre-wedding & wedding shoot coverage",
      "Candid & traditional photography",
      "Drone shots & cinematic wedding films",
      "High-resolution edited photos & videos",
      "Customized wedding album design",
    ],
  },
  {
    title: "DJ & Entertainment",
    icon: <FaMusic />,
    desc:
      "Energetic entertainment arrangements to keep your wedding celebration lively and memorable.",
    points: [
      "Professional DJ & music setup",
      "High-quality sound system",
      "Dance floor & lighting effects",
      "Live performances on request",
      "Music selection as per event theme",
    ],
  },
  {
    title: "Wedding Ritual Setup",
    icon: <FaRing />,
    desc:
      "Complete traditional wedding ritual arrangements handled with care and attention to detail.",
    points: [
      "Mandap setup with traditional décor",
      "Arrangement of all ritual items",
      "Coordination with priest / pandit",
      "Comfortable seating for family & guests",
      "Smooth management of rituals timeline",
    ],
  },
  {
    title: "Guest Hospitality",
    icon: <FaHeart />,
    desc:
      "Warm and professional hospitality services ensuring comfort and care for all your guests.",
    points: [
      "Guest accommodation & room allocation",
      "Welcome desk & guest assistance",
      "Transportation & valet coordination",
      "Dedicated hospitality staff",
      "Special care for VIP guests",
    ],
  },
];


const Wedding = () => {
 

  
  return (
    <div className="bg-gray-50">
      {/* ================= HERO SECTION ================= */}
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
          Dream Weddings
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6 leading-tight">
          Celebrate Your <br />
          <span className="text-black">Perfect Wedding Moments</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-md text-justify">
          Turn your special day into a timeless celebration at  Grand Nirvana.
          Our elegant venues, beautiful décor, and dedicated event team
          come together to create unforgettable wedding memories filled
          with love, joy, and luxury.
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
            poster="/Images/wedding1.jpg"
            className="w-full h-full object-cover"
          >
            {/* <source src="/video/marrige-video.mp4" type="video/mp4" /> */}
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= ABOUT SECTION ================= */}
     <section className="bg-[#0F4C3A] py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* ===== CONTENT ===== */}
    <div className="text-center md:text-left">
      <h2 className="relative text-3xl md:text-4xl font-extrabold mb-10 text-white font-serif">
        Weddings Crafted With Love
        <span className="absolute left-1/2 md:left-0 md:translate-x-0 -bottom-4 w-40 h-1 bg-[#DC2626] md:translate-x-0 rounded-full"></span>
      </h2>

      <p className="text-gray-200 mb-6 leading-relaxed text-justify">
        At  Grand Nirvana, we specialize in crafting unforgettable wedding experiences
        that reflect your unique love story. Whether it’s an intimate ceremony or
        a grand destination-style celebration, our expert team ensures every detail
        is thoughtfully planned and flawlessly executed.
      </p>

      <p className="text-gray-200 leading-relaxed text-justify">
        From elegant venues and customized décor to exquisite cuisine and
        personalized hospitality, we combine luxury, creativity, and exceptional
        service to transform your wedding dreams into a truly memorable reality.
      </p>
    </div>

    {/* ===== IMAGE ===== */}
    <div className="flex justify-center">
      <img
        src="/Images/wedding6.jpg"
        alt="Wedding"
        className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</section>


      {/* ================= SERVICES ================= */}
    <section className="relative bg-[#FBF7F4] py-24 overflow-hidden">

  {/* ===== BACKGROUND CIRCLES ===== */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#0F4C3A] font-serif">
      Luxury Wedding Services
      <span className="absolute left-1/2 -bottom-5 w-36 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* SERVICES */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((item, index) => (
        <div
          key={index}
          className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            border border-gray-200
            hover:shadow-2xl
            hover:-translate-y-2
            transition duration-300
            flex flex-col
          "
        >
          {/* ICON */}
          <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#0F4C3A]/10">
            <span className="text-3xl text-[#0F4C3A]">
              {item.icon}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-bold mb-3 text-center text-[#0F4C3A]">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed text-justify">
            {item.desc}
          </p>

          {/* DIVIDER */}
          <div className="w-12 h-1 bg-[#DC2626] mx-auto mb-6 rounded-full"></div>

          {/* POINTS */}
          <ul className="text-sm text-gray-700 space-y-3">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#DC2626] font-bold">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  </div>
</section>



      {/* package  */}
      
     <WeddingPackages/>

      {/* ================= CTA ================= */}
     <section className="bg-[#0F4C3A] text-white py-20 text-center px-6">
  
  {/* HEADING */}
  <h2 className="relative text-3xl md:text-4xl font-extrabold mb-10 font-serif">
    Let’s Plan Your Dream Wedding
    <span className="absolute left-1/2 -bottom-4 w-40 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
  </h2>

  {/* SUBTEXT */}
  <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
    Connect with our wedding experts and begin your journey towards
    a beautifully planned, unforgettable celebration.
  </p>

  {/* CTA BUTTON */}
  <Link to="/weddingbooking">
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
      Contact Wedding Planner
    </button>
  </Link>

</section>

      {/* ================= GALLERY ================= */}
     <section className="relative py-24 bg-[#FBF7F4] overflow-hidden">

  {/* ===== BACKGROUND CIRCLES ===== */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-20 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-6 text-[#0F4C3A] font-serif">
      Captured Wedding Moments
      <span className="absolute left-1/2 -bottom-4 w-28 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* SUBTEXT */}
    <p className="max-w-3xl mx-auto text-center text-gray-700 mb-14 leading-relaxed">
      A glimpse into the magical moments, heartfelt emotions, and
      timeless celebrations hosted at  Grand Nirvana — where every wedding
      becomes a beautiful story.
    </p>

    {/* GALLERY */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      {/* BIG FEATURED IMAGE */}
      <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl shadow-lg">
        <img
          src="/Images/wedding1.jpg"
          alt="Wedding Celebration"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>

      {/* SMALLER IMAGES */}
      {[
        "/Images/wedding2.jpg",
        "/Images/wedding3.jpg",
        "/Images/wedding4.jpg",
        "/Images/wedding5.jpg",
      ].map((img, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl shadow-md"
        >
          <img
            src={img}
            alt="Wedding Moment"
            className="h-64 w-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      ))}
    </div>

  </div>
</section>




     

     
    </div>
  );
};

export default Wedding;
