
import type { Metadata } from "next";
import Link from "next/link";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import FooterOne from "@/components/FooterOne";


export const metadata: Metadata = {
  title: "Terms & Conditions | ABB Hotel Bhubaneswar",
  description:
    "Read ABB Hotel's Terms and Conditions covering hotel reservations, payments, guest responsibilities, facilities, cancellations, and other important information.",
  alternates: {
    canonical: "https://abbhotels.in/terms-conditions",
  },
  icons: {
    icon: "/assets/images/abb-hotel/logo-golden.webp",
    apple: "/assets/images/abb-hotel/apple-logo-golden.webp",
  },
};

const TermsConditions = () => {
  return (
    <AOSWrap>
      <Preloader />
      <HeaderOne />
      

      <main className="privacy-policy-section">
        <div className="container">
          <div className="text-center mb-5">
            <h1>Terms & Conditions</h1>
            <p>
              Please read these Terms and Conditions carefully before
              making a reservation or using the services of ABB Hotel.
            </p>
            
          </div>

          <div className="terms-content">
            <p>
              Welcome to ABB Hotel, Bhubaneswar. These Terms and
              Conditions govern your access to our website, hotel
              reservation services, and facilities. By accessing our
              website or making a reservation, you agree to comply
              with the terms outlined below.
            </p>

            <h3>1. General Information</h3>
            <p>
              ABB Hotel is located at Plot No. 370/3059, Behind Toyota
              Showroom, Sishu Vihar, Patia, Bhubaneswar, Odisha –
              751024, India.
            </p>
            <p>
              These terms apply to all guests, visitors, and users
              accessing our website or using our hotel services.
              ABB Hotel reserves the right to update or modify
              these terms whenever necessary.
            </p>

            <h3>2. Reservations and Bookings</h3>
            <p>
              Guests can make reservations through our official
              online booking platform or by contacting the hotel
              directly. All reservations are subject to room
              availability and confirmation.
            </p>
            <ul>
              <li>Guests must provide accurate booking and contact information.</li>
              <li>Reservations are subject to availability and confirmation.</li>
              <li>Guests should check their booking details before completing a reservation.</li>
              <li>Special requests are subject to availability and hotel approval.</li>
              <li>Guests should retain their booking confirmation for reference during check-in.</li>
            </ul>
            <p>
              For online reservations, please visit:
              {" "}
              <a
                href="https://abbhotels.bookingjini.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ABB Hotel Booking Portal
              </a>
            </p>

            <h3>3. Pricing and Payments</h3>
            <p>
              Room rates, applicable taxes, and additional charges
              will be displayed or communicated during the booking
              process.
            </p>
            <ul>
              <li>Applicable room rates depend on the selected room and booking plan.</li>
              <li>Additional charges may apply for extra services or special arrangements.</li>
              <li>Payments must be completed according to the conditions provided during booking.</li>
              <li>Guests are responsible for reviewing the final booking amount before payment.</li>
            </ul>
            <p>
              Online payments may be processed through third-party
              payment providers and are subject to their applicable
              terms and security practices.
            </p>

            <h3>4. Check-in and Check-out</h3>
            <p>
              Guests are requested to follow the check-in and
              check-out timings communicated by the hotel or
              mentioned in their booking confirmation.
            </p>
            <ul>
              <li>Valid identification may be required at check-in.</li>
              <li>Guest details should match the reservation information, where applicable.</li>
              <li>Early check-in and late check-out requests are subject to availability.</li>
              <li>Additional charges may apply for approved extensions or special arrangements.</li>
            </ul>

            <h3>5. Guest Responsibilities</h3>
            <p>
              All guests are expected to maintain appropriate
              behaviour and respect the comfort, privacy, and
              safety of other guests and hotel staff.
            </p>
            <ul>
              <li>Guests must follow hotel rules and safety guidelines.</li>
              <li>Guests are responsible for their personal belongings and valuables.</li>
              <li>Any damage to hotel property caused by a guest may result in applicable repair or replacement charges.</li>
              <li>Guests must not engage in unlawful, disruptive, or unsafe activities on hotel premises.</li>
              <li>Smoking, pets, visitors, and special arrangements are subject to the hotel's applicable policies.</li>
            </ul>

            <h3>6. Hotel Facilities and Services</h3>
            <p>
              ABB Hotel aims to provide guests with a comfortable
              and pleasant stay through its accommodation and
              hospitality services.
            </p>
            <p>Room amenities may include:</p>
            <ul>
              <li>Comfortable king-size beds.</li>
              <li>Smart television.</li>
              <li>Wi-Fi connectivity.</li>
              <li>Tea and coffee-making facilities.</li>
              <li>Bathroom toiletries.</li>
              <li>Comfortable sitting areas and premium furnishings.</li>
            </ul>
            <p>
              The availability of specific amenities and services
              may vary depending on the selected room category,
              operational requirements, and availability.
            </p>

            <h3>7. Cancellation and Refunds</h3>
            <p>
              Reservation cancellations, modifications, and refund
              eligibility are governed by the cancellation policy
              associated with the booking.
            </p>
            <ul>
              <li>Cancellation charges may apply depending on the booking plan and cancellation timing.</li>
              <li>Certain reservations may be non-refundable.</li>
              <li>Refunds, where applicable, are subject to the relevant booking conditions.</li>
              <li>Refund processing time may depend on the payment provider and banking institution.</li>
            </ul>
            <p>
              Please read our{" "}
              <Link href="/refund-policy">Refund Policy</Link>{" "}
              for more information.
            </p>

            <h3>8. Limitation of Liability</h3>
            <p>
              ABB Hotel will make reasonable efforts to provide
              a comfortable and safe environment for its guests.
              However, to the extent permitted by applicable law,
              the hotel shall not be responsible for:
            </p>
            <ul>
              <li>Loss or damage to personal belongings not entrusted to the hotel for safekeeping.</li>
              <li>Service interruptions caused by circumstances beyond the hotel's reasonable control.</li>
              <li>Issues arising from inaccurate information provided by guests during reservation.</li>
              <li>Delays or disruptions caused by third-party service providers.</li>
            </ul>
            <p>
              Nothing in these terms excludes or limits any liability
              that cannot legally be excluded under applicable law.
            </p>

            <h3>9. Third-Party Services and Links</h3>
            <p>
              Our website may contain links to external websites
              or services, including online booking platforms and
              payment providers.
            </p>
            <p>
              These third-party services operate independently.
              ABB Hotel does not control their content, policies,
              or availability. Guests are encouraged to review
              the applicable terms and privacy policies of
              those services.
            </p>

            <h3>10. Website Usage and Intellectual Property</h3>
            <p>
              All website content, including text, photographs,
              graphics, logos, and design elements, is protected
              by applicable intellectual property laws.
            </p>
            <p>
              Visitors may access the website for personal and
              informational purposes. No content may be copied,
              reproduced, distributed, or commercially used
              without prior written permission from the
              respective rights holder.
            </p>
            <p>
              Users must not misuse the website, attempt
              unauthorized access, or engage in activities
              that may affect its security or functionality.
            </p>

            <h3>11. Changes to Services and Terms</h3>
            <p>
              ABB Hotel may modify, suspend, or update any part
              of its website, facilities, or services when
              reasonably necessary.
            </p>
            <p>
              We may also revise these Terms and Conditions
              from time to time. The latest version will be
              available on this page with its updated date.
            </p>

            <h3>12. Governing Law and Jurisdiction</h3>
            <p>
              These Terms and Conditions shall be governed by
              the applicable laws of India. Any disputes arising
              in connection with these terms shall be subject
              to the jurisdiction of the competent courts in
              Bhubaneswar, Odisha, subject to applicable law.
            </p>

            <h3>13. Contact Us</h3>
            <p>
              If you have any questions or require clarification
              regarding these Terms and Conditions, please
              contact ABB Hotel:
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
                  Book Your Stay
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
    </AOSWrap>
  );
};

export default TermsConditions;
