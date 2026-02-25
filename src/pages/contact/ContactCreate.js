import { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt , FaWhatsapp } from "react-icons/fa";


const API = process.env.REACT_APP_API_URL;

export default function ContactCreate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit() {
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${API}/contact`, form);
      setSuccess("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HEADER ================= */}
<section className="relative min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden">

  {/* ================= BACKGROUND VIDEO WITH POSTER ================= */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/Images/about-homepage.avif"
    className="absolute inset-0 w-full h-full object-cover"
  >
    {/* <source src="/video/contact.mp4" type="video/mp4" />  */}
  </video>

  {/* ================= SOFT OVERLAY ================= */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
    <div
      className="
        bg-white/95 backdrop-blur
        w-full max-w-md
        mx-auto md:mx-0
        p-8 sm:p-10
        rounded-2xl shadow-2xl
        text-left
      "
    >
      {/* LABEL */}
      <p className="uppercase tracking-widest text-xs text-[#DC2626] mb-3 font-extrabold">
        Contact Us
      </p>

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F4C3A] mb-4 leading-tight">
        We’re Here to <br />
        <span className="text-black">Welcome You</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
        At <strong className="text-red-500">Grand Nirvana</strong>, hospitality
        begins with listening. Whether you’re planning a relaxing stay,
        hosting a wedding, reserving a banquet, or simply seeking information,
        our team is available 24×7 to assist you with care, clarity, and
        professionalism.
        <br /><br />
        Reach out to us anytime — we look forward to welcoming you and creating
        a memorable experience tailored just for you.
      </p>
    </div>
  </div>

</section>





      {/* ================= FORM ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Info */}
  <div className="relative flex justify-center overflow-hidden">

  {/* ================= BACKGROUND CIRCLES ================= */}
  <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#0F4C3A]/5"></div>
  <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-[#DC2626]/5"></div>

  {/* ================= SHADOW CARD ================= */}
  <div className="relative z-10 max-w-2xl w-full bg-white rounded-3xl shadow-2xl px-10 py-14 text-center">

    {/* HEADING */}
    <h2 className="relative text-3xl md:text-4xl font-extrabold mb-10 text-[#0F4C3A]">
      Get In Touch
      <span className="absolute left-1/2 -bottom-4 w-24 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-600 mb-6 leading-relaxed text-justify">
      We’d love to hear from you. Whether you are planning a comfortable stay,
      organizing a wedding, booking a banquet, or simply have a question,
      our team at{" "}
      <strong className="text-red-500"> Grand Nirvana</strong> is always ready
      to assist you with warmth and professionalism.
    </p>

    <p className="text-gray-600 mb-10 leading-relaxed text-justify">
      Connect with us using the details below or visit us in person.
      We look forward to welcoming you and delivering an exceptional
      hospitality experience.
    </p>

    {/* CONTACT INFO */}
  <ul className="space-y-6 text-gray-700">

  {/* 📍 Address */}
  <li className="flex items-center justify-center gap-4">
    <span className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0F4C3A]/10 text-red-500 text-lg">
      <FaMapMarkerAlt />
    </span>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Mandla+Road+Jabalpur+MP"
      target="_blank"
      rel="noopener noreferrer"
      className="text-justify hover:text-[#0F4C3A]"
    >
      Mandla Road, Jabalpur (MP)
    </a>
  </li>

  {/* 📞 Phone */}
  <li className="flex items-center justify-center gap-4">
    <span className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0F4C3A]/10 text-red-500 text-lg">
      <FaPhoneAlt />
    </span>
    <a href="tel:+919876543210" className="text-justify hover:text-[#0F4C3A]">
      <strong className="text-[#0F4C3A]">Call Us:</strong> +91 98765 43210
    </a>
  </li>

  {/* ✉ Email */}
  <li className="flex items-center justify-center gap-4">
    <span className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0F4C3A]/10 text-red-500 text-lg">
      <FaEnvelope />
    </span>
    <a
      href="mailto:support@grandnirvana.com"
      className="text-justify hover:text-[#0F4C3A]"
    >
      <strong className="text-[#0F4C3A]">Email:</strong> support@grandnirvana.com
    </a>
  </li>

  {/* 💬 WhatsApp */}
  <li className="flex items-center justify-center gap-4">
    <span className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0F4C3A]/10 text-red-500 text-lg">
      <FaWhatsapp />
    </span>
    <a
      href="https://wa.me/919876543210?text=Hello%20Grand%20Nirvana%2C%20I%20want%20to%20know%20more."
      target="_blank"
      rel="noopener noreferrer"
      className="text-justify hover:text-[#0F4C3A]"
    >
      <strong className="text-[#0F4C3A]">WhatsApp:</strong> Chat With Us
    </a>
  </li>

</ul>
  </div>
</div>



        {/* Right Form */}
       <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#0F4C3A]/10">

  {/* ERROR MESSAGE */}
  {error && (
    <p className="mb-6 text-[#DC2626] bg-[#DC2626]/10 px-5 py-3 rounded-xl text-sm font-medium">
      {error}
    </p>
  )}

  {/* SUCCESS MESSAGE */}
  {success && (
    <p className="mb-6 text-[#0F4C3A] bg-[#0F4C3A]/10 px-5 py-3 rounded-xl text-sm font-medium">
      {success}
    </p>
  )}

  {/* NAME */}
  <div className="relative mb-6">
    <FaUser className="absolute left-4 top-4 text-[#0F4C3A]/50" />
    <input
      name="name"
      value={form.name}
      onChange={update}
      placeholder="Full Name"
      className="w-full pl-12 pr-4 py-3.5 rounded-xl
                 border border-gray-200
                 focus:outline-none focus:ring-2 focus:ring-[#0F4C3A]/30
                 transition"
    />
  </div>

  {/* EMAIL */}
  <div className="relative mb-6">
    <FaEnvelope className="absolute left-4 top-4 text-[#0F4C3A]/50" />
    <input
      name="email"
      value={form.email}
      onChange={update}
      placeholder="Email Address"
      className="w-full pl-12 pr-4 py-3.5 rounded-xl
                 border border-gray-200
                 focus:outline-none focus:ring-2 focus:ring-[#0F4C3A]/30
                 transition"
    />
  </div>

  {/* MESSAGE */}
  <div className="relative mb-8">
    <FaCommentDots className="absolute left-4 top-4 text-[#0F4C3A]/50" />
    <textarea
      name="message"
      value={form.message}
      onChange={update}
      placeholder="Write your message here..."
      rows={4}
      className="w-full pl-12 pr-4 py-3.5 rounded-xl
                 border border-gray-200
                 focus:outline-none focus:ring-2 focus:ring-[#0F4C3A]/30
                 transition resize-none"
    />
  </div>

  {/* BUTTON */}
  <button
    onClick={submit}
    disabled={loading}
    className="w-full flex items-center justify-center gap-2
               bg-[#0F4C3A] hover:bg-[#0c3f31]
               text-white py-3.5 rounded-xl font-semibold
               transition shadow-md hover:shadow-lg"
  >
    {loading ? "Sending..." : (
      <>
        <FaPaperPlane /> Send Message
      </>
    )}
  </button>

</div>

      </section>
    </div>
  );
}
