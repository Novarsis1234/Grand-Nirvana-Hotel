import React, { useState, useRef } from "react";
import axios from "axios";
import {
  FaUser,
  FaPhoneAlt,
  FaBed,
  FaUsers,
} from "react-icons/fa";

const API = process.env.REACT_APP_API_URL;

const RoomBookingForm = () => {
  const [confirmed, setConfirmed] = useState(false);
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    roomType: "",
    guests: "",
    checkIn: "",
    checkOut: "",
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
      !form.roomType ||
      !form.checkIn ||
      !form.checkOut
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

      await axios.post(`${API}/room-booking`, formData);

      setSuccess(
        "Booking request submitted successfully. Our team will verify and confirm."
      );

      setForm({
        name: "",
        phone: "",
        roomType: "",
        guests: "",
        checkIn: "",
        checkOut: "",
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
    <div className="bg-[#FBF7F4] py-24 px-4 sm:px-6">
  <div className="max-w-5xl mx-auto">

    {/* ===== HEADER ===== */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0F4C3A] mb-3 font-serif">
      Book Your Room
    </h2>
    <div className="w-24 h-1 bg-[#DC2626] mx-auto mb-14 rounded-full"></div>

    {/* ===== AVAILABILITY SECTION ===== */}
    <div className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 text-center mb-20">
      <p className="text-gray-700 mb-6 leading-relaxed">
        Please confirm room availability by calling or WhatsApp us  
        <br className="hidden sm:block" />
        before filling out the booking form.
      </p>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <a
          href="tel:+919876543210"
          className="bg-[#DC2626] text-white px-6 py-3 rounded-full font-semibold"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="bg-[#0F4C3A] text-white px-6 py-3 rounded-full font-semibold"
        >
          💬 WhatsApp
        </a>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        After confirming availability, click below to continue.
      </p>

      <button
        disabled={confirmed}
        onClick={() => {
          setConfirmed(true);
          setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }}
        className={`px-8 py-3 rounded-full font-semibold transition
          ${
            confirmed
              ? "bg-[#0F4C3A] text-white cursor-not-allowed"
              : "bg-[#0F4C3A] text-white hover:bg-[#0C3F31]"
          }`}
      >
        {confirmed
          ? "✅ Availability Confirmed"
          : "I Have Confirmed Availability"}
      </button>

      {confirmed && (
        <p className="mt-4 text-sm text-[#0F4C3A] font-medium">
          ✔ Availability confirmed. Please fill the booking form below.
        </p>
      )}
    </div>

    {/* ===== FORM ===== */}
    {confirmed && (
      <div
        ref={formRef}
        className="border border-[#0F4C3A] rounded-3xl p-2 animate-fadeIn"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-6"
        >
          <h3 className="text-2xl font-bold text-center text-[#0F4C3A] mb-6 font-serif">
            Booking Details
          </h3>

          {/* ERROR / SUCCESS */}
          {error && (
            <p className="text-[#DC2626] bg-red-100 px-4 py-3 rounded-lg">
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-700 bg-green-100 px-4 py-3 rounded-lg">
              {success}
            </p>
          )}

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-[#DC2626]" />
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-11 py-3 border rounded-xl"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhoneAlt className="absolute left-4 top-4 text-[#DC2626]" />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number *"
              value={form.phone}
              onChange={handleChange}
              className="w-full pl-11 py-3 border rounded-xl"
            />
          </div>

          {/* Room Type */}
          <div className="relative">
            <FaBed className="absolute left-4 top-4 text-[#DC2626]" />
            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="w-full pl-11 py-3 border rounded-xl"
            >
              <option value="">Select Room Type *</option>
              <option>Deluxe Room</option>
              <option>Luxury Suite</option>
              <option>Executive AC Room</option>
              <option>Non-AC Standard Room</option>
              <option>Budget Room</option>
            </select>
          </div>

          {/* Guests */}
          <div className="relative">
            <FaUsers className="absolute left-4 top-4 text-[#DC2626]" />
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full pl-11 py-3 border rounded-xl"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="border py-3 px-4 rounded-xl"
            />
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="border py-3 px-4 rounded-xl"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Special Request"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          {/* PAYMENT */}
          <div className="border rounded-2xl p-6 bg-[#FBF7F4] space-y-4">
            <h4 className="font-bold text-center text-[#0F4C3A]">
              Advance Payment (UPI Only)
            </h4>

            <p className="text-center text-[#DC2626] font-semibold">
              ₹1000 Advance (Non-Refundable)
            </p>

            <img
              src="/Images/scanner1.png"
              alt="UPI QR"
              className="mx-auto w-40 border rounded-xl bg-white"
            />

            <p className="text-center font-semibold text-[#0F4C3A]">
              UPI ID:  Grand Nirvana@upi
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
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F4C3A] text-white py-3 rounded-full font-semibold hover:bg-[#0C3F31]"
          >
            {loading ? "Submitting..." : "Submit Booking Request"}
          </button>
        </form>
      </div>
    )}
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
</div>

  );
};

export default RoomBookingForm;
