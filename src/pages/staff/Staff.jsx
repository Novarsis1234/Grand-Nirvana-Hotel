import { useState } from "react";
import {
  FaUserTie,
  FaUserNurse,
  FaConciergeBell,
  FaBroom,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

/* ================= ICON MAPPER ================= */
const getIcon = (role) => {
  const r = role.toLowerCase();
  if (r.includes("manager")) return <FaUserTie />;
  if (r.includes("chef")) return <FaUserNurse />;
  if (r.includes("front")) return <FaConciergeBell />;
  if (r.includes("house")) return <FaBroom />;
  return <FaUserTie />;
};

/* ================= STATIC STAFF DATA ================= */
const staffList = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "General Manager",
    number: "+91 98765 43210",
    gmail: "amit@ Grand Nirvana.com",
    image: "/Images/staff-1.jpg",
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Front Office Manager",
    number: "+91 98765 43211",
    gmail: "neha@ Grand Nirvana.com",
    image: "/Images/staff-55.webp",
  },
  {
    id: 3,
    name: "Rohit Singh",
    role: "Executive Chef",
    number: "+91 98765 43212",
    gmail: "chef.rohit@ Grand Nirvana.com",
    image: "/Images/staff-4.webp",
  },
  {
    id: 4,
    name: "Pooja Mehta",
    role: "Housekeeping Manager",
    number: "+91 98765 43213",
    gmail: "pooja@ Grand Nirvana.com",
    image: "/Images/staff-3.jpg",
  },
  {
    id: 5,
    name: "Vikram Patel",
    role: "Banquet Manager",
    number: "+91 98765 43214",
    gmail: "vikram@ Grand Nirvana.com",
    image: "/Images/staff-2.jpg",
  },
  {
    id: 6,
    name: "Anjali Kapoor",
    role: "Guest Relations Manager",
    number: "+91 98765 43215",
    gmail: "anjali@ Grand Nirvana.com",
    image: "/Images/staff-5.jpg",
  },
];

const Staff = () => {
  const [staffData] = useState(staffList);

  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 overflow-hidden bg-[#FBF7F4]">

        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>
        <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-4">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-6">
                Meet Our <br />
                <span className="text-black">Leadership & Hospitality Team</span>
              </h2>
              <p className="text-gray-600 max-w-md">
                Our professionals work passionately to deliver exceptional
                hospitality and memorable guest experiences.
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
            poster="/Images/about-banner.avif"
            className="w-full h-full object-cover"
          >
            <source src="/video/staff.mp4" type="video/mp4" />
          </video>

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

          </div>
        </div>
      </section>

      {/* ================= STAFF LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-20">
          <span className="text-[#0F4C3A]">
            Our Leadership & Management Team
          </span>
          <span className="absolute left-1/2 -bottom-5 w-32 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {staffData.map((staff) => (
            <div
              key={staff.id}
              className="relative bg-white rounded-3xl border border-gray-200 pt-20 pb-8 px-6 text-center hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mt-10">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* ICON */}
              <div className="flex justify-center mb-4 mt-10">
                <div className="bg-[#DC2626] text-white p-3 rounded-full">
                  {getIcon(staff.role)}
                </div>
              </div>

              {/* NAME */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {staff.name}
              </h3>

              {/* ROLE */}
              <p className="inline-block text-xs font-medium bg-red-100 text-[#064A8C] px-4 py-1 rounded-full mb-5">
                {staff.role}
              </p>

              {/* CONTACT */}
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center justify-center gap-2">
                  <FaPhoneAlt className="text-[#DC2626]" />
                  {staff.number}
                </p>
                <p className="flex items-center justify-center gap-2 break-all">
                  <FaEnvelope className="text-[#DC2626]" />
                  {staff.gmail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-[#FBF7F4] py-20">
        <p className="max-w-4xl mx-auto text-center text-lg md:text-xl text-gray-700 font-serif px-6">
          “At <strong className="text-[#0F4C3A]"> Grand Nirvana</strong>, great
          hospitality begins with great people. We believe in service,
          teamwork, and creating memorable guest experiences.”
        </p>
      </section>

    </div>
  );
};

export default Staff;
