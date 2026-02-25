import { useState } from "react";
import { Link } from "react-router-dom";

const roomsData = [
  {
    _id: "1",
    name: "Deluxe Room",
    type: "Luxury",
    price: "₹3,500 / Night",
    mainImg: "/Images/room1-4.webp",
    facilities: [
      "Free WiFi",
      "Air Conditioning",
      "Smart TV",
      "Room Service",
      "Tea & Coffee Maker",
      "Work Desk",
      "Wardrobe",
      "Daily Housekeeping",
    ],
  },
  {
    _id: "2",
    name: "Executive Suite",
    type: "Premium",
    price: "₹5,500 / Night",
    mainImg: "/Images/room2-1.jpg",
    facilities: [
      "King Size Bed",
      "Mini Bar",
      "Balcony View",
      "Breakfast Included",
      "Free High-Speed WiFi",
      "Luxury Bathroom",
      "Room Service 24x7",
      "City View",
    ],
  },
  {
    _id: "3",
    name: "Family Room",
    type: "Family",
    price: "₹6,000 / Night",
    mainImg: "/Images/room3-1.avif",
    facilities: [
      "2 Queen Beds",
      "Kids Friendly Space",
      "Large Living Area",
      "Free Parking",
      "Smart TV",
      "Extra Bedding",
      "Mini Refrigerator",
      "Family Seating Area",
    ],
  },
  {
    _id: "4",
    name: "Standard Room",
    type: "Economy",
    price: "₹2,500 / Night",
    mainImg: "/Images/room4-1.webp",
    facilities: [
      "Free WiFi",
      "Attached Bathroom",
      "LED TV",
      "Daily Housekeeping",
      "Comfortable Bedding",
      "24x7 Water Supply",
      "Ceiling Fan",
      "Complimentary Toiletries",
    ],
  },
  {
    _id: "5",
    name: "Honeymoon Suite",
    type: "Romantic",
    price: "₹7,500 / Night",
    mainImg: "/Images/room5-1.webp",
    facilities: [
      "Private Jacuzzi",
      "Candle Light Setup",
      "Ocean View",
      "Private Balcony",
      "King Size Bed",
      "Romantic Room Decor",
      "In-Room Dining",
      "Late Night Room Service",
    ],
  },
];


const AllRooms = () => {
  const [rooms] = useState(roomsData);

  return (
    <div className="bg-gray-50">

      {/* ================= HEADER ================= */}
      <section className="relative py-24 overflow-hidden bg-[#FBF7F4]">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>
        <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4 font-extrabold">
                Our Rooms & Suites
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6">
                Comfort Meets <br />
                <span className="text-black">Elegant Living Spaces</span>
              </h2>

              <p className="text-gray-600 max-w-md">
                Discover thoughtfully designed rooms and luxurious suites
                offering comfort, elegance and modern facilities.
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
            poster="/Images/room4-4.jpg"
            className="w-full h-full object-cover"
          >
            {/* <source src="/video/rooms.mp4" type="video/mp4" /> */}
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* ================= ROOMS LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-20">

        {rooms.map((room) => (
          <div
            key={room._id}
            className="bg-[#FBF7F4] rounded-3xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="grid md:grid-cols-2">

              {/* IMAGE */}
              <div className="p-6">
                <img
                  src={room.mainImg}
                  alt={room.name}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>

              {/* DETAILS */}
              <div className="p-10 flex flex-col justify-between">

                <div>
                  <h2 className="text-3xl font-extrabold text-[#0F4C3A] mb-2">
                    {room.name}
                  </h2>

                  <span className="inline-block bg-[#DC2626]/10 text-[#DC2626] px-4 py-1 rounded-full text-sm mb-4">
                    {room.type}
                  </span>

                  <p className="text-2xl font-bold mb-6">
                    {room.price}
                  </p>

                  <h4 className="font-semibold text-[#0F4C3A] mb-4">
                    Room Amenities
                  </h4>

                  <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                    {room.facilities.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#DC2626]">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/booking" className="mt-8">
                  <button className="w-full sm:w-auto bg-[#0F4C3A] text-white px-10 py-3 rounded-full hover:bg-[#0C3F31] transition">
                    Book This Room
                  </button>
                </Link>

              </div>
            </div>
          </div>
        ))}

      </section>

      {/* ================= NOTES ================= */}
      <div className="bg-white mb-20 px-10 py-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
        <h3 className="text-3xl font-extrabold text-center text-[#0F4C3A] mb-10">
          Important Information for Guests
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li>✔ All room tariffs are subject to applicable taxes.</li>
          <li>✔ Check-in: 12:00 PM | Check-out: 11:00 AM</li>
          <li>✔ Early check-in subject to availability.</li>
          <li>✔ Government photo ID required.</li>
          <li>✔ Cancellation policy may vary.</li>
        </ul>
      </div>

    </div>
  );
};

export default AllRooms;
