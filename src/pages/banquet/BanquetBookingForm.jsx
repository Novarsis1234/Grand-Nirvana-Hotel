import React, { useState, useRef } from "react";
import axios from "axios";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaBuilding,
  FaCommentDots,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const API = process.env.REACT_APP_API_URL;

const BanquetBookingForm = () => {
  const [confirmed, setConfirmed] = useState(false);
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    guests: "",
    eventDate: "",
    eventTime: "",
    message: "",
    paymentScreenshot: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "paymentScreenshot") {
      setForm({ ...form, paymentScreenshot: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !form.name ||
      !form.phone ||
      !form.eventType ||
      !form.eventDate ||
      !form.eventTime
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (!form.paymentScreenshot) {
      setError("Please upload payment screenshot");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      await axios.post(`${API}/banquet-booking`, formData);

      setSuccess(
        "Your banquet booking enquiry has been submitted successfully. Our team will verify the payment and contact you shortly."
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        guests: "",
        eventDate: "",
        eventTime: "",
        message: "",
        paymentScreenshot: null,
      });

      setConfirmed(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        {/* ================= HEADING ================= */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#064A8C] mb-4">
          Banquet & Conference Hall Booking
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Please confirm banquet or conference hall availability by calling or
          WhatsApp before filling the booking enquiry form.
        </p>

        {/* ================= AVAILABILITY ================= */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 bg-[#DC2626] text-white px-8 py-4 rounded-full font-semibold"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-semibold"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            📞 Call or WhatsApp us to check date & hall availability, then click below.
          </p>

          <button
            onClick={() => {
              setConfirmed(true);
              setTimeout(() => {
                formRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 200);
            }}
            disabled={confirmed}
            className={`px-10 py-4 rounded-full font-semibold transition
              ${
                confirmed
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-[#064A8C] text-white hover:bg-blue-900"
              }`}
          >
            {confirmed
              ? "✅ Availability Confirmed"
              : "I Have Confirmed Availability"}
          </button>
        </div>

        {/* ================= FORM ================= */}
        {confirmed && (
          <div
            ref={formRef}
            className="border-2 border-[#064A8C] rounded-3xl p-2 animate-fadeIn"
          >
            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl p-8"
            >
              {/* ERROR / SUCCESS */}
              {error && (
                <p className="md:col-span-2 text-red-600 bg-red-100 px-4 py-2 rounded">
                  {error}
                </p>
              )}

              {success && (
                <p className="md:col-span-2 text-green-600 bg-green-100 px-4 py-2 rounded">
                  {success}
                </p>
              )}

              {/* Name */}
              <div className="flex items-center border rounded-xl px-4">
                <FaUser className="text-[#064A8C] mr-3" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full py-3 outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border rounded-xl px-4">
                <FaPhoneAlt className="text-[#064A8C] mr-3" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full py-3 outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex items-center border rounded-xl px-4">
                <FaEnvelope className="text-[#064A8C] mr-3" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full py-3 outline-none"
                />
              </div>

              {/* Event Type */}
              <div className="flex items-center border rounded-xl px-4">
                <FaBuilding className="text-[#064A8C] mr-3" />
                <select
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className="w-full py-3 outline-none bg-transparent"
                >
                  <option value="">Select Event Type *</option>
                  <option>Conference / Seminar</option>
                  <option>Corporate Meeting</option>
                  <option>Retirement Party</option>
                  <option>Kitty Party</option>
                  <option>Birthday Party</option>
                  <option>Anniversary Celebration</option>
                  <option>Family Function</option>
                  <option>Other Social Event</option>
                </select>
              </div>

              {/* Guests */}
              <div className="flex items-center border rounded-xl px-4">
                <FaUsers className="text-[#064A8C] mr-3" />
                <input
                  type="number"
                  name="guests"
                  placeholder="Expected Number of Guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full py-3 outline-none"
                />
              </div>

              {/* Event Date */}
              <div className="flex items-center border rounded-xl px-4">
                <FaCalendarAlt className="text-[#064A8C] mr-3" />
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className="w-full py-3 outline-none"
                />
              </div>

              {/* Event Time */}
              <div className="flex items-center border rounded-xl px-4">
                <FaClock className="text-[#064A8C] mr-3" />
                <input
                  type="time"
                  name="eventTime"
                  value={form.eventTime}
                  onChange={handleChange}
                  className="w-full py-3 outline-none"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 flex items-start border rounded-xl px-4">
                <FaCommentDots className="text-[#064A8C] mt-4 mr-3" />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Special Requirements / Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full py-3 outline-none resize-none"
                />
              </div>

              {/* PAYMENT */}
              <div className="md:col-span-2 border rounded-xl p-6 bg-gray-50 space-y-4">
                <h4 className="text-lg font-bold text-center text-[#064A8C]">
                  Advance Payment (UPI Only)
                </h4>

                <p className="text-center text-red-600 font-semibold">
                  Advance payment required to block the banquet date (Non-Refundable)
                </p>

                <img
                  src="/Images/scanner1.png"
                  alt="UPI QR"
                  className="mx-auto w-44 border rounded-lg"
                />

                <p className="text-center">
                  <strong>UPI ID:</strong>{" "}
                  <span className="text-[#DC2626] font-semibold">
                     Grand Nirvana@upi
                  </span>
                </p>

                <input
                  type="file"
                  name="paymentScreenshot"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#064A8C] text-white py-4 rounded-full font-semibold hover:bg-blue-900 transition"
                >
                  {loading ? "Submitting..." : "Submit Banquet Enquiry"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ================= CONTACT ================= */}
        <div className="text-center mt-12 text-gray-600">
          <p className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-[#064A8C]" />
            +91 98765 43210
          </p>

          <p className="flex justify-center items-center gap-2 mt-2">
            <FaMapMarkerAlt className="text-[#064A8C]" />
             Grand Nirvana Hotel, Jabalpur Road, Katni (MP)
          </p>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default BanquetBookingForm;
