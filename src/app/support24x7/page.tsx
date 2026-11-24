
import type { Metadata } from "next";
import Link from "next/link";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import FooterOne from "@/components/FooterOne";


export const metadata: Metadata = {
  title: "Customer Support | ABB Hotel Bhubaneswar",
  description:
    "Contact ABB Hotel, Bhubaneswar, for reservation assistance, booking enquiries, guest support, and general hotel information.",
  alternates: {
    canonical: "https://abbhotels.in/support-24-7",
  },
  icons: {
    icon: "/assets/images/abb-hotel/logo-golden.webp",
    apple: "/assets/images/abb-hotel/apple-logo-golden.webp",
  },
};

const Support247 = () => {
  return (
    <AOSWrap>
      <Preloader />
      <HeaderOne />
      

      <main className="privacy-policy-section">
        <div className="container">
          <div className="text-center mb-5">
            <h1>Customer Support</h1>
            <p>
              At ABB Hotel, guest comfort and satisfaction are
              important to us. Our team is available to assist
              you with reservations, booking enquiries, and
              general hotel-related questions.
            </p>
            <p>
              <strong>We are here to help!</strong>
            </p>
          </div>

          <div className="support-content">
            <p>
              Whether you are planning a stay, have an existing
              reservation, or need assistance during your visit,
              you can contact ABB Hotel through the details
              provided below. We will do our best to guide you
              and address your enquiry.
            </p>

            <h3>1. Reservation Assistance</h3>
            <p>
              Need help making a reservation or checking your
              booking details? Our team can assist you with
              general booking-related enquiries.
            </p>
            <ul>
              <li>Assistance with room reservation enquiries.</li>
              <li>Information about room categories and available amenities.</li>
              <li>Help with booking confirmation enquiries.</li>
              <li>Guidance regarding reservation modifications and cancellations.</li>
              <li>Assistance with general booking-related questions.</li>
            </ul>
            <p>
              You can also make your reservation directly through
              our official booking platform:
            </p>
            <p>
              <a
                href="https://abbhotels.bookingjini.in/"
                target="_blank"
                rel="noopener noreferrer" style={{ color: '#987641', fontWeight: 'bold'}}
              >
                Book Your Stay at ABB Hotel
              </a>
            </p>

            <h3>2. Guest Assistance</h3>
            <p>
              We aim to make every guest's stay comfortable and
              convenient. If you need assistance regarding your
              room, hotel facilities, or general services, please
              reach out to our hotel team.
            </p>
            <ul>
              <li>Information about hotel facilities and amenities.</li>
              <li>Assistance with room-related enquiries.</li>
              <li>Guidance regarding hotel services.</li>
              <li>Support with general guest requests.</li>
            </ul>

            <h3>3. Room and Hotel Assistance</h3>
            <p>
              If you experience any issue during your stay or
              require assistance with available hotel facilities,
              please contact the hotel reception or our team.
            </p>
            <p>
              Requests for additional services and special
              arrangements are subject to availability and
              hotel operating conditions.
            </p>

            <h3>4. Booking and Payment Support</h3>
            <p>
              If you have questions about your reservation,
              booking confirmation, or payment, please contact
              us with your booking details so that our team
              can assist you.
            </p>
            <ul>
              <li>Booking confirmation enquiries.</li>
              <li>Payment-related questions.</li>
              <li>Duplicate payment enquiries.</li>
              <li>Cancellation and refund assistance.</li>
              <li>Reservation modification requests.</li>
            </ul>
            <p>
              For cancellation and refund information, please
              review our{" "}
              <Link href="/refund-policy" style={{ color: '#987641', fontWeight: 'bold'}}>
                Refund Policy
              </Link>
              .
            </p>

            <h3>5. Contact Our Support Team</h3>
            <p>
              For reservations, general enquiries, or guest
              assistance, you can contact ABB Hotel using
              the following details:
            </p>

            <div className="privacy-contact-box">
              <h4>ABB Hotel</h4>

              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917077490555">
                  +91 70774 90555
                </a>
              </p>

              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/917077490555"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Us on WhatsApp
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
                <strong>Address:</strong> Plot No. 370/3059,
                Behind Toyota Showroom, Sishu Vihar, Patia,
                Bhubaneswar, Odisha – 751024, India.
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
                  Book Your Stay
                </a>
              </p>
            </div>

            <h3>6. Feedback and Suggestions</h3>
            <p>
              Your feedback helps us improve our hospitality
              and guest experience. If you have suggestions,
              concerns, or comments about your stay, please
              share them with our team through phone, WhatsApp,
              or email.
            </p>

            <h3>7. Our Commitment to Guests</h3>
            <p>
              At ABB Hotel, we are committed to providing a
              welcoming and comfortable experience. We aim
              to respond to guest enquiries as promptly as
              possible and provide appropriate assistance
              based on availability and operational arrangements.
            </p>
          </div>

          <div className="privacy-contact-box mt-5 text-center">
            <h4>Need Assistance?</h4>
            <p>
              Get in touch with ABB Hotel for reservation
              enquiries or general guest assistance.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="tel:+917077490555"
                className="tw-btn-hover-black bg-main-600 tw-py-5 tw-px-12 text-capitalize text-heading font-heading d-inline-flex align-items-center tw-gap-2 tw-rounded-lg"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/917077490555"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-btn-hover-black bg-main-600 tw-py-5 tw-px-12 text-capitalize text-heading font-heading d-inline-flex align-items-center tw-gap-2 tw-rounded-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
    </AOSWrap>
  );
};

export default Support247;
