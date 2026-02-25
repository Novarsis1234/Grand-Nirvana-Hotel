import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = process.env.REACT_APP_API_URL;

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    items: "",
    address: "",
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

    // 🔍 Validation
    if (!form.name || !form.mobile || !form.items) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${API}/orders`, form);

      setSuccess("Order request submitted successfully!");
      toast.success("Order request submitted successfully");

      setForm({
        name: "",
        mobile: "",
        items: "",
        address: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* ===== BACKGROUND CIRCLES ===== */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F4C3A]/10 rounded-full"></div>
      <div className="absolute top-32 right-10 w-64 h-64 bg-[#DC2626]/10 rounded-full"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#0F4C3A]/10 rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#0F4C3A] font-serif">
          Place Your Order Request
          <span className="absolute left-1/2 -bottom-4 w-44 h-1 bg-[#DC2626] -translate-x-1/2 rounded-full"></span>
        </h2>

        {/* FORM CARD */}
        <div className="bg-gray-50 p-8                               rounded-3xl shadow-lg">
          {/* Error */}
          {error && (
            <p className="mb-4 text-red-600 bg-red-100 px-4 py-2 rounded">
              {error}
            </p>
          )}

          {/* Success */}
          {success && (
            <p className="mb-4 text-green-600 bg-green-100 px-4 py-2 rounded">
              {success}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Full Name"
              className="border rounded-lg px-4 py-3 w-full"
            />

            <input
              name="mobile"
              value={form.mobile}
              onChange={update}
              placeholder="Mobile Number"
              className="border rounded-lg px-4 py-3 w-full"
            />
          </div>

          <textarea
            name="items"
            value={form.items}
            onChange={update}
            placeholder="Mention food items & quantity"
            rows="4"
            className="border rounded-lg px-4 py-3 w-full mt-6"
          />

          <textarea
            name="address"
            value={form.address}
            onChange={update}
            placeholder="Address for pickup/delivery (if any)"
            rows="3"
            className="border rounded-lg px-4 py-3 w-full mt-4"
          />

          <button
            onClick={submit}
            disabled={loading}
            className="
          w-full mt-8
          bg-[#DC2626]
          text-white
          py-3
          rounded-full
          font-semibold
          hover:bg-red-700
          transition
          disabled:opacity-70
        "
          >
            {loading ? "Submitting..." : "Submit Order Request"}
          </button>
        </div>
      </div>
    </section>
  );
}
