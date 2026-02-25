import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

/* ================= CATEGORIES ================= */
const categories = [
  "All",
  "Rooms",
  "Restaurant",
  "Wedding",
  "Banquet",
  "Swimming Pool",
];

/* ================= STATIC GALLERY DATA ================= */
const galleryImages = [
  /* ===== ROOMS ===== */
  { id: 1, category: "Rooms", image: "/Images/room1-3.avif" },
  { id: 2, category: "Rooms", image: "/Images/room2-4.webp" },
  { id: 3, category: "Rooms", image: "/Images/room3-3.webp" },
  { id: 4, category: "Rooms", image: "/Images/room4-2.jpg" },
  { id: 5, category: "Rooms", image: "/Images/room5-2.jpg" },

  /* ===== RESTAURANT ===== */
  { id: 6, category: "Restaurant", image: "/Images/Restaurant-1.avif" },
  { id: 7, category: "Restaurant", image: "/Images/Restaurant-3.avif" },
  { id: 8, category: "Restaurant", image: "/Images/Restaurant-5.avif" },
  { id: 9, category: "Restaurant", image: "/Images/Restaurant-4.avif" },
  { id: 10, category: "Restaurant", image: "/Images/Restaurant-6.avif" },

  /* ===== WEDDING ===== */
  { id: 11, category: "Wedding", image: "/Images/wedding1.jpg" },
  { id: 12, category: "Wedding", image: "/Images/wedding2.jpg" },
  { id: 13, category: "Wedding", image: "/Images/wedding3.jpg" },
  { id: 14, category: "Wedding", image: "/Images/wedding5.jpg" },
  { id: 15, category: "Wedding", image: "/Images/wedding4.jpg" },

  /* ===== BANQUET ===== */
  { id: 16, category: "Banquet", image: "/Images/Banquet1.webp" },
  { id: 17, category: "Banquet", image: "/Images/Banquet2.webp" },
  { id: 18, category: "Banquet", image: "/Images/Banquet3.webp" },
  { id: 19, category: "Banquet", image: "/Images/Banquet4.webp" },
  { id: 20, category: "Banquet", image: "/Images/Banquet5.webp" },

  /* ===== SWIMMING POOL ===== */
  { id: 21, category: "Swimming Pool", image: "/Images/SwimmingPool1.avif" },
  { id: 22, category: "Swimming Pool", image: "/Images/SwimmingPool2.avif" },
  { id: 23, category: "Swimming Pool", image: "/Images/SwimmingPool3.avif" },
  { id: 24, category: "Swimming Pool", image: "/Images/SwimmingPool5.avif" },
  { id: 25, category: "Swimming Pool", image: "/Images/SwimmingPool4.avif" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [galleryData, setGalleryData] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FILTER LOGIC ================= */
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (activeCategory === "All") {
        setGalleryData(galleryImages);
      } else {
        setGalleryData(
          galleryImages.filter((img) => img.category === activeCategory)
        );
      }
      setLoading(false);
    }, 300); // small delay for smooth UX
  }, [activeCategory]);

  return (
    <div className="bg-gray-50">

      {/* ================= HEADER ================= */}
    <section className="relative py-24 overflow-hidden bg-[#FBF7F4]">
  {/* BACKGROUND CIRCLES */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>
  <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}
      <div>
        <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4 font-extrabold">
          Our Gallery
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6">
          A Glimpse of <br />
          <span className="text-black">
            Grand Nirvana Experience
          </span>
        </h2>

        <p className="text-gray-600 max-w-md">
          Discover moments of luxury, celebrations and premium hospitality.
        </p>
      </div>

      {/* RIGHT VIDEO WITH POSTER */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-[300px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/Images/room4-1.webp"
            className="w-full h-full object-cover"
          >
            {/* <source src="/video/gallery.mp4" type="video/mp4" /> */}
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= FILTER ================= */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-[#0F4C3A]/5 py-6 rounded-2xl mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold border-2 transition
                  ${
                    activeCategory === cat
                      ? "bg-[#0F4C3A] text-white border-[#0F4C3A]"
                      : "bg-white text-[#0F4C3A] border-[#0F4C3A]/40 hover:bg-[#0F4C3A] hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= LOADING ================= */}
        {loading && <p className="text-center text-gray-500">Loading gallery...</p>}

        {/* ================= GALLERY GRID ================= */}
        {!loading && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImg(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full">
            <img src={selectedImg} alt="" className="w-full rounded-lg" />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
