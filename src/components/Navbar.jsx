import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => setMobileMenu(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center overflow-hidden">
            <img
              src="/Images/logoimage.jpeg"
              alt="Grand Nirvana Logo"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain block"
            />
          </Link>

          {/* Desktop Right Info */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-700">

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#DC2626]" />
              <span>Mandla Road Jabalpur(MP)</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#DC2626]" />
              <span>+91 98765 43210</span>
            </div>

            <Link
              to="/contact"
              className="bg-[#DC2626] text-white px-4 py-1.5 rounded hover:bg-red-700 transition"
            >
              Enquiry
            </Link>

            <div className="flex items-center gap-3 text-[#0F4C3A] text-lg">
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-600" />
              <FaWhatsapp className="cursor-pointer hover:text-green-600" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden text-[#0F4C3A]">
            {mobileMenu ? (
              <FaTimes size={24} onClick={closeMenu} className="cursor-pointer"/>
            ) : (
              <FaBars size={24} onClick={() => setMobileMenu(true)} className="cursor-pointer"/>
            )}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP MENU ================= */}
      <div className="hidden lg:block bg-[#0F4C3A]">
        <ul className="flex justify-center flex-wrap gap-8 py-3 text-white text-sm font-medium">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/rooms">All Rooms</Link></li>
          <li><Link to="/restaurant">Restaurant</Link></li>
          <li><Link to="/banquet">Banquet / Conference</Link></li>
          <li><Link to="/wedding">Wedding</Link></li>
          <li><Link to="/parking">Parking</Link></li>
          <li><Link to="/tour">Tour & Travel</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#0F4C3A] text-white px-6 py-6 space-y-5 text-base font-medium">

          <Link to="/" onClick={closeMenu} className="block">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block">About</Link>
          <Link to="/rooms" onClick={closeMenu} className="block">All Rooms</Link>
          <Link to="/restaurant" onClick={closeMenu} className="block">Restaurant</Link>
          <Link to="/banquet" onClick={closeMenu} className="block">Banquet / Conference</Link>
          <Link to="/wedding" onClick={closeMenu} className="block">Wedding</Link>
          <Link to="/parking" onClick={closeMenu} className="block">Parking</Link>
          <Link to="/tour" onClick={closeMenu} className="block">Tour & Travel</Link>
          <Link to="/gallery" onClick={closeMenu} className="block">Gallery</Link>
          <Link to="/contact" onClick={closeMenu} className="block">Contact</Link>

        </div>
      )}
    </>
  );
};

export default Navbar;