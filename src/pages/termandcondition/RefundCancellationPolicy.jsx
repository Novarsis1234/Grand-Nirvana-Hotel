import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HEADER ================= */}
     <section
  className="relative text-white py-28 px-6 text-center"
  style={{
    backgroundImage:
      "url('/Images/refund-banner.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Refund & Cancellation Policy
    </h1>
    <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed">
      Please read this policy carefully to understand our rules regarding
      booking cancellations, modifications and applicable refunds at
       Grand Nirvana Hotel.
    </p>
  </div>
</section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-10 text-gray-700">

        {/* Intro */}
        <p>
          At <strong className="text-red-500"> Grand Nirvana Hotel Management</strong>, we strive to provide
          transparency and fairness in our booking process. This Refund &
          Cancellation Policy outlines the terms under which bookings may be
          cancelled and refunds issued.
        </p>

        {/* 1 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            1. Booking Confirmation
          </h2>
          <p>
            A booking is considered confirmed only after successful payment and
            issuance of a booking confirmation via email or SMS.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            2. Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Cancellations made <strong className="text-red-500">48 hours or more</strong> before the
              check-in date are eligible for a full refund.
            </li>
            <li>
              Cancellations made within <strong className="text-red-500">24–48 hours</strong> of check-in
              may be charged one night’s room fee.
            </li>
            <li>
              Cancellations made within <strong className="text-red-500">24 hours</strong> of check-in
              are non-refundable.
            </li>
            <li>
              No-show bookings (failure to arrive without notice) are
              non-refundable.
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            3. Refund Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Approved refunds will be processed to the original payment method.
            </li>
            <li>
              Refund processing may take <strong className="text-red-500"> 7–10 business days</strong>,
              depending on the payment provider or bank.
            </li>
            <li>
              Any applicable transaction or gateway charges may be deducted
              from the refund amount.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            4. Modification of Bookings
          </h2>
          <p>
            Date changes or booking modifications are subject to availability
            and may result in a difference in room rates. Additional charges
            must be paid by the guest.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            5. Special Packages & Offers
          </h2>
          <p>
            Promotional bookings, discounted rates, or special packages may
            have separate cancellation and refund terms, which will be clearly
            mentioned at the time of booking.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            6. Force Majeure
          </h2>
          <p>
            In cases beyond our control such as natural disasters, government
            restrictions, pandemics, or other unforeseen events, refunds or
            rescheduling will be handled on a case-by-case basis.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            7. Early Check-Out
          </h2>
          <p>
            Guests who check out early before the scheduled departure date are
            not eligible for refunds for unused nights.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            8. How to Request a Cancellation
          </h2>
          <p>
            To cancel a booking, please contact us via email or phone with your
            booking reference number. Cancellations are only valid after
            receiving confirmation from our team.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
            9. Contact Information
          </h2>
          <ul className="space-y-1">
            <li>Email: <strong className="text-red-500">support@ Grand Nirvana.com</strong></li>
            <li>Phone: <strong className="text-red-500">+91 98765 43210</strong></li>
            <li>Address: <strong className="text-red-500"> Mandla Road Jabalpur, Madhya Pradesh, India </strong></li>
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

export default RefundCancellationPolicy;
