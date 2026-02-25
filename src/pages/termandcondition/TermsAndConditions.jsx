import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HEADER ================= */}
    <section
  className="relative text-white py-28 px-6 text-center"
  style={{
    backgroundImage:
      "url('/Images/terms-banner.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Terms & Conditions
    </h1>
    <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed">
      Please read these terms and conditions carefully before using
       Grand Nirvana Hotel services, bookings, facilities and online platforms.
    </p>
  </div>
</section>


      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-10 text-gray-700">

        {/* Intro */}
        <p>
          These Terms and Conditions govern your use of the <strong className="text-red-500">Grand Nirvana Hotel
          Management</strong>   booking services, facilities, and accommodations.
          By accessing or using our services, you agree to be bound by these
          terms.
        </p>

        {/* 1 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            1. Booking & Reservation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All bookings are subject to availability.</li>
            <li>Valid government-issued ID is mandatory at check-in.</li>
            <li>Rates may change during peak seasons or special events.</li>
            <li>Advance payment may be required for certain bookings.</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            2. Check-in & Check-out Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check-in time: 12:00 PM | Check-out time: 11:00 AM</li>
            <li>Early check-in or late check-out is subject to availability.</li>
            <li>Additional charges may apply for extended stays.</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            3. Cancellation & Refund Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cancellations must be made as per booking terms.</li>
            <li>Refund eligibility depends on the selected plan.</li>
            <li>No-show bookings may not be refundable.</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            4. Guest Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Guests must maintain proper conduct during their stay.</li>
            <li>Damage to hotel property will be charged accordingly.</li>
            <li>Illegal activities are strictly prohibited.</li>
            <li>Pets are allowed only if mentioned in the booking policy.</li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            5. Use of Facilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Facilities such as swimming pool, banquet hall, and parking
              are subject to hotel rules.</li>
            <li>Children must be supervised by adults.</li>
            <li>The hotel is not responsible for loss of personal belongings.</li>
          </ul>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            6. Payments
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All payments must be made through authorized methods.</li>
            <li>Additional services will be billed separately.</li>
            <li>Applicable taxes are charged as per government rules.</li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            7. Privacy Policy
          </h2>
          <p>
            We respect your privacy and ensure that personal information is
            handled securely. Guest data is used only for booking and service
            purposes.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            8. Limitation of Liability
          </h2>
          <p>
             Grand Nirvana Hotel Management shall not be liable for any indirect,
            incidental, or consequential damages arising from the use of our
            services.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            9. Changes to Terms
          </h2>
          <p>
            The hotel reserves the right to modify these terms at any time
            without prior notice. Updated terms will be posted on this page.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            10. Contact Information
          </h2>
          <p>
            For any questions regarding these terms, please contact us at:
          </p>
          <ul className="mt-2">
            <li>Email: <strong className="text-red-500">support@ Grand Nirvana.com</strong></li>
            <li>Phone: <strong className="text-red-500">+91 98765 43210</strong></li>
            <li>Location: <strong className="text-red-500"> Mandla Road Jabalpur, Madhya Pradesh, India</strong></li>
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

export default TermsAndConditions;
