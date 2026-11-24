
import type { Metadata } from "next";
import Link from "next/link";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import FooterOne from "@/components/FooterOne";


export const metadata: Metadata = {
  title: "Refund Policy | ABB Hotel Bhubaneswar",
  description:
    "Read the Refund and Cancellation Policy of ABB Hotel, Bhubaneswar, including cancellation conditions, refund eligibility, booking modifications, and refund requests.",
  alternates: {
    canonical: "https://abbhotels.in/refund-policy",
  },
  icons: {
    icon: "/assets/images/abb-hotel/logo-golden.webp",
    apple: "/assets/images/abb-hotel/apple-logo-golden.webp",
  },
};

const RefundPolicy = () => {
  return (
    <AOSWrap>
      <Preloader />
      <HeaderOne />

      

      <main className="privacy-policy-section">
        <div className="container">
          <div className="text-center mb-5">
            <h1>Refund Policy</h1>
            <p>
              At ABB Hotel, we aim to make your booking experience
              simple and transparent. Please review our cancellation
              and refund terms before confirming your reservation.
            </p>
            {/* <p>
              <strong>Last Updated:</strong> November 24, 2026
            </p> */}
          </div>

          <div className="refund-policy-content">
            <p>
              This Refund Policy explains the conditions under which
              cancellations, booking modifications, and refunds are
              handled by ABB Hotel, Bhubaneswar. All cancellation and
              refund requests are subject to the conditions applicable
              to the reservation at the time of booking.
            </p>

            <h3>1. Booking Cancellation</h3>
            <p>
              Guests who wish to cancel a reservation should contact
              ABB Hotel or use the booking platform through which
              the reservation was made.
            </p>
            <ul>
              <li>
                Cancellation requests should be submitted using
                the contact or booking details associated with
                the reservation.
              </li>
              <li>
                The cancellation date and time may be considered
                when determining applicable cancellation charges.
              </li>
              <li>
                Guests are advised to review the cancellation
                conditions displayed during booking.
              </li>
              <li>
                A cancellation should not be considered confirmed
                until acknowledgement is received from the
                applicable booking channel or hotel.
              </li>
            </ul>

            <h3>2. Cancellation Charges</h3>
            <p>
              Cancellation charges, if applicable, depend on the
              selected booking plan and the cancellation conditions
              communicated at the time of reservation.
            </p>
            <ul>
              <li>
                Eligible cancellations made within the permitted
                free-cancellation period may qualify for a refund
                without cancellation charges.
              </li>
              <li>
                Cancellations made after the permitted period may
                attract applicable cancellation charges.
              </li>
              <li>
                Certain special offers, promotional bookings, or
                non-refundable reservations may not qualify for
                a refund.
              </li>
              <li>
                Failure to arrive without cancelling the reservation
                may be treated as a no-show and handled according
                to the applicable booking conditions.
              </li>
            </ul>
            <p>
              The exact cancellation charges and deadlines will
              depend on the terms shown in your booking confirmation.
            </p>

            <h3>3. Refund Eligibility</h3>
            <p>
              A guest may be eligible for a refund in situations
              covered by the applicable booking terms, including:
            </p>
            <ul>
              <li>
                A cancellation made within the permitted
                free-cancellation period.
              </li>
              <li>
                Duplicate payments for the same reservation,
                after verification.
              </li>
              <li>
                Confirmed payment errors or booking-related
                issues attributable to the hotel.
              </li>
              <li>
                Other situations approved by ABB Hotel,
                subject to applicable law and booking conditions.
              </li>
            </ul>
            <p>
              All refund requests are subject to verification
              of the reservation and payment details.
            </p>

            <h3>4. Non-Refundable Reservations</h3>
            <p>
              Some room rates, promotional offers, and special
              booking plans may be marked as non-refundable.
              Such reservations may not qualify for a refund
              in case of cancellation or changes.
            </p>
            <p>
              Guests should carefully review the booking conditions
              before completing payment, particularly when selecting
              a non-refundable reservation.
            </p>

            <h3>5. Refund Processing</h3>
            <p>
              Once a refund has been approved, it will be processed
              through the applicable payment or booking channel,
              wherever supported.
            </p>
            <ul>
              <li>
                Refunds are generally returned through the original
                payment method, where supported by the payment provider.
              </li>
              <li>
                The time required for the refund to appear may vary
                depending on the payment gateway, bank, or financial
                institution.
              </li>
              <li>
                ABB Hotel cannot guarantee a specific credit date
                once the refund has been processed by the relevant
                payment provider.
              </li>
              <li>
                Guests may contact their bank or payment provider
                for further updates after a refund has been initiated.
              </li>
            </ul>

            <h3>6. Booking Modifications</h3>
            <p>
              Requests to change reservation dates, room categories,
              guest details, or other booking information are subject
              to availability and hotel approval.
            </p>
            <ul>
              <li>
                Changes to booking dates may result in a difference
                in room rates.
              </li>
              <li>
                Additional charges may apply depending on the
                revised reservation details.
              </li>
              <li>
                Certain booking plans may not permit modifications.
              </li>
            </ul>
            <p>
              Guests should contact the hotel or the original
              booking platform to request any modifications.
            </p>

            <h3>7. Early Check-out</h3>
            <p>
              If a guest decides to leave before the scheduled
              check-out date, any refund for unused nights will
              depend on the applicable booking conditions and
              hotel approval.
            </p>
            <p>
              Early departure does not automatically guarantee
              a refund for the remaining reservation period.
            </p>

            <h3>8. How to Request a Refund</h3>
            <p>
              To submit a cancellation or refund request, please
              contact ABB Hotel with the following information:
            </p>
            <ul>
              <li>Guest name used for the reservation.</li>
              <li>Booking or reservation ID.</li>
              <li>Registered contact number.</li>
              <li>Reservation and stay dates.</li>
              <li>Payment reference or transaction details, if applicable.</li>
              <li>Reason for the cancellation or refund request.</li>
            </ul>
            <p>
              Providing complete information will help us verify
              your reservation and review your request.
            </p>

            <h3>9. Contact Us</h3>
            <p>
              For assistance with cancellations, refunds, or
              booking-related questions, please contact ABB Hotel:
            </p>

            <div className="privacy-contact-box">
              <h4>ABB Hotel</h4>

              <p>
                <strong>Address:</strong> Plot No. 370/3059,
                Behind Toyota Showroom, Sishu Vihar, Patia,
                Bhubaneswar, Odisha – 751024, India.
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917077490555">
                  +91 70774 90555
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=abbhotelsmail@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  abbhotelsmail@gmail.com
                </a>
              </p>

              <p>
                <strong>Website:</strong>{" "}
                <Link href="https://abbhotels.in/">
                  www.abbhotels.in
                </Link>
              </p>

              <p>
                <strong>Online Booking:</strong>{" "}
                <a
                  href="https://abbhotels.bookingjini.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ABB Hotel Booking Portal
                </a>
              </p>
            </div>

            <h3>10. Our Commitment</h3>
            <p>
              ABB Hotel is committed to handling cancellation and
              refund enquiries fairly and transparently, in
              accordance with the applicable booking conditions
              and relevant laws.
            </p>
            <p>
              We encourage guests to review all reservation
              details and cancellation terms before completing
              their booking.
            </p>
          </div>
        </div>
      </main>

      <FooterOne />
    </AOSWrap>
  );
};

export default RefundPolicy;
