import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HEADER ================= */}
     <section
  className="relative text-white py-28 px-6 text-center"
  style={{
    backgroundImage:
      "url('/Images/privacy-banner.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Privacy Policy
    </h1>
    <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed">
      Your privacy is important to us. This policy explains how we collect,
      use, store, and protect your personal information while using
       Grand Nirvana Hotel services.
    </p>
  </div>
</section>


      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-10 text-gray-700">

        {/* Intro */}
        <p>
          At <strong className="text-red-500"> Grand Nirvana Hotel Management</strong>, we are committed to
          protecting your personal information. This Privacy Policy outlines
          how we collect, use, disclose, and safeguard your data when you use
          our website, booking services, and hotel facilities.
        </p>

        {/* 1 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal details such as name, email address, phone number.</li>
            <li>Booking and reservation information.</li>
            <li>Payment details (processed securely through third-party gateways).</li>
            <li>Communication details from contact or inquiry forms.</li>
            <li>Device and browser information for analytics purposes.</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To process room bookings and reservations.</li>
            <li>To improve our services and guest experience.</li>
            <li>To communicate booking confirmations and updates.</li>
            <li>To respond to inquiries and customer support requests.</li>
            <li>For internal analysis and operational improvements.</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell or rent your personal information. Your data may be
            shared only with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Authorized hotel staff for service fulfillment.</li>
            <li>Trusted third-party service providers (payment, IT services).</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            4. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            5. Cookies & Tracking Technologies
          </h2>
          <p>
            Our website may use cookies to enhance user experience, analyze
            traffic, and improve functionality. You can control cookies
            through your browser settings.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            6. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            7. Guest Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may request access to your personal data.</li>
            <li>You may request correction or deletion of your data.</li>
            <li>You may opt-out of marketing communications.</li>
          </ul>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            8. Changes to This Policy
          </h2>
          <p>
            We reserve the right to update this Privacy Policy at any time.
            Changes will be effective immediately upon posting on this page.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="mt-2 space-y-1">
            <li>Email: <strong className="text-red-500">support@ Grand Nirvana.com</strong></li>
            <li>Phone: <strong className="text-red-500">+91 98765 43210</strong></li>
            <li>Address: <strong className="text-red-500">Mandla Road, Jabalpur Madhya Pradesh, India </strong> </li>
          </ul>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 pt-6 border-t">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
