import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaHotel,
} from "react-icons/fa";

const Footer = () => {

  /* ================= WHATSAPP FUNCTION ================= */
  const openWhatsApp = () => {
    const phoneNumber = "917771824784";
    const message =
      "Hello Grand Nirvana Team! 👋\nI want to know more about rooms, weddings & services.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <footer className="bg-[#0F4C3A] text-gray-200">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* BRAND */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="bg-white/10 p-3 rounded-xl">
              <FaHotel className="text-[#DC2626] text-2xl" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Grand Nirvana
            </h2>
          </Link>

          <p className="text-sm leading-relaxed text-gray-300 mb-8 text-justify">
            Grand Nirvana is a premium luxury hotel offering elegant rooms,
            fine dining, weddings, banquet halls and world-class hospitality
            designed for comfort, celebrations and memorable stays.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#DC2626] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#DC2626] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#DC2626] transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-[#DC2626] mb-6">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/rooms" className="hover:text-white">Luxury Rooms</Link></li>
            <li><Link to="/restaurant" className="hover:text-white">Restaurant</Link></li>
            <li><Link to="/banquet" className="hover:text-white">Banquet & Conference</Link></li>
            <li><Link to="/wedding" className="hover:text-white">Wedding Events</Link></li>
            <li><Link to="/parking" className="hover:text-white">Parking Facility</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#DC2626] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/tour" className="hover:text-white">Tour & Travel</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/order-parcel" className="hover:text-white">Order & Parcel</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-[#DC2626] mb-6">
            Contact Us
          </h3>

          <p className="flex items-start gap-3 text-sm mb-4 text-justify">
            <FaMapMarkerAlt className="mt-1 text-white" />
            <span>
              Grand Nirvana Hotel,<br />
              Mandla Road , Jabalpur<br />
              Madhya Pradesh, India
            </span>
          </p>

          <p className="flex items-center gap-3 text-sm mb-3">
            <FaPhoneAlt />
            <a href="tel:+919876543210" className="hover:text-white">
              +91 98765 43210
            </a>
          </p>

          <p className="flex items-center gap-3 text-sm mb-6">
            <FaEnvelope />
            <a href="mailto:support@Grand Nirvana.com" className="hover:text-white">
              support@GrandNirvana.com
            </a>
          </p>

          {/* WHATSAPP BUTTON */}
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 bg-[#DC2626]
                       text-white px-6 py-3 rounded-full
                       hover:opacity-90 transition text-sm font-medium"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6
                        flex flex-col md:flex-row
                        items-center justify-between gap-4">

          <p className="text-sm text-gray-300 text-center md:text-left">
            © {new Date().getFullYear()} Grand Nirvana Hotel. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/refund-cancellation-policy" className="hover:text-white">
              Refund & Cancellation
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
