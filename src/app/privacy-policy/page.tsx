
import type { Metadata } from "next";
import Preloader from "@/helper/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import HeaderOne from "@/components/HeaderOne";
import FooterOne from "@/components/FooterOne";
import Link from "next/link";


export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Privacy Policy | ABB Hotel Bhubaneswar",
    description:
      "Read ABB Hotel's Privacy Policy to understand how we collect, use, protect, and manage your personal information when you visit our website or make a reservation.",

    alternates: {
      canonical: "https://abbhotels.in/privacy-policy",
    },

    icons: {
      icon: [
        { url: "/assets/images/abb-hotel/logo-golden.webp" },
      ],
      apple: "/assets/images/abb-hotel/apple-logo-golden.webp",
    },
  };
};

export default function PrivacyPolicy() {
  return (
    <AOSWrap>
      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <HeaderOne />

     

      {/* Privacy Policy Section */}
      <section className="privacy-policy-section section-padding">
        <div className="container">

          {/* Page Heading */}
          <div className="text-center tw-mb-13">
            <h1 className="fw-normal tw-mb-5">
              Privacy Policy
            </h1>

            <p className="text-body tw-text-lg">
              Your Privacy Matters to Us
            </p>

            
          </div>

          {/* Introduction */}
          <div className="privacy-policy-content">

            <p>
              At <strong>ABB Hotel</strong>, we respect your privacy
              and are committed to protecting the personal information
              you share with us. This Privacy Policy explains how we
              collect, use, store, and protect your information when
              you visit our website, make a reservation, or contact us.
            </p>

            <h3>1. Information We Collect</h3>

            <p>
              When you interact with ABB Hotel, we may collect the
              following types of information:
            </p>

            <ul>
              <li>
                <strong>Personal Information:</strong> Your name,
                email address, and phone number.
              </li>

              <li>
                <strong>Booking Information:</strong> Reservation
                details, check-in and check-out dates, number of
                guests, and special requests.
              </li>

              <li>
                <strong>Communication Information:</strong> Messages,
                enquiries, feedback, and other information you provide
                through our contact forms.
              </li>

              <li>
                <strong>Technical Information:</strong> Your IP
                address, browser type, device information, and website
                usage data, where collected through website technologies.
              </li>
            </ul>

            <h3>2. How We Use Your Information</h3>

            <p>
              We may use your information for the following purposes:
            </p>

            <ul>
              <li>To process and manage hotel reservations.</li>
              <li>To respond to enquiries and customer requests.</li>
              <li>To provide booking confirmations and relevant updates.</li>
              <li>To improve our hotel services and website experience.</li>
              <li>
                To send promotional updates where you have provided
                the appropriate consent.
              </li>
              <li>
                To maintain website security and prevent fraudulent
                activities.
              </li>
            </ul>

            <h3>3. Information Sharing</h3>

            <p>
              ABB Hotel does not sell your personal information.
              We may share relevant information with trusted service
              providers when necessary to operate our hotel and
              website.
            </p>

            <p>
              These may include booking platforms, payment service
              providers, and technical service providers. We may
              also disclose information when required by applicable
              law or by a lawful authority.
            </p>

            <h3>4. Payment Information</h3>

            <p>
              Online reservations and payments may be processed
              through third-party booking or payment platforms.
              Payment information submitted through those platforms
              is subject to their respective privacy and security
              policies.
            </p>

            <p>
              ABB Hotel does not intend to collect or store your
              complete payment card details through its website
              contact forms.
            </p>

            <h3>5. Cookies and Website Technologies</h3>

            <p>
              Our website may use cookies and similar technologies
              to improve browsing functionality, understand website
              performance, and enhance user experience.
            </p>

            <p>
              You can manage or disable cookies through your browser
              settings. Some website features may not function
              properly if cookies are disabled.
            </p>

            <h3>6. Data Security</h3>

            <p>
              We take reasonable measures to protect your personal
              information against unauthorized access, misuse,
              alteration, or disclosure.
            </p>

            <p>
              However, no method of electronic transmission or
              storage can be guaranteed to be completely secure.
            </p>

            <h3>7. Data Retention</h3>

            <p>
              We retain personal information only for as long as
              reasonably necessary to fulfil booking requirements,
              provide services, maintain business records, and
              comply with applicable legal obligations.
            </p>

            <h3>8. Your Privacy Rights</h3>

            <p>
              Subject to applicable laws, you may request access
              to, correction of, or deletion of your personal
              information.
            </p>

            <p>
              You may also request to stop receiving promotional
              communications from us.
            </p>

            <h3>9. Third-Party Websites</h3>

            <p>
              Our website may contain links to third-party websites,
              including external booking platforms. ABB Hotel is not
              responsible for the privacy practices or content of
              those websites.
            </p>

            <p>
              We encourage visitors to review the privacy policies
              of third-party services before sharing personal
              information.
            </p>

            <h3>10. Changes to This Privacy Policy</h3>

            <p>
              ABB Hotel may update this Privacy Policy from time
              to time. Any changes will be published on this page
              with an updated effective date.
            </p>

            <h3>11. Contact Us</h3>

            <p>
              If you have questions or concerns regarding this
              Privacy Policy, please contact us using the details
              below:
            </p>

            <div className="privacy-contact-box tw-mt-6">
              <h4 className="fw-semibold tw-mb-4">
                ABB Hotel
              </h4>

              <p>
                <strong>Address:</strong> Plot No. 370/3059,
                Behind Toyota Showroom, Sishu Vihar, Patia,
                Bhubaneswar, Odisha – 751024, India.
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <Link href="tel:+917077490555">
                  +91 70774 90555
                </Link>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=abbhotelsmail@gmail.com">
                  abbhotelsmail@gmail.com
                </Link>
              </p>

              <p>
                <strong>Website:</strong>{" "}
                <Link href="https://abbhotels.in/">
                  https://abbhotels.in/
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterOne />

    </AOSWrap>
  );
}
