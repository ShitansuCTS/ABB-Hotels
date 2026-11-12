'use client';
import Link from "next/link";
import { FC, useState } from "react";


const ContactInner: FC = () => {

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setStatus({
        type: "error",
        message: "Please select valid check-in and check-out dates.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          checkIn,
          checkOut,
          guests: formData.get("guests"),
          rooms: formData.get("rooms"),
          message: formData.get("message"),
        }),
      });

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send enquiry.");
      }

      setStatus({
        type: "success",
        message: result.message || "Booking enquiry sent successfully!",
      });

      form.reset();
      setCheckIn("");
      setCheckOut("");
    } catch (error: unknown) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className='bg_2 pt-120' id='contact'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-11'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6'>
                <div className='tw_fade_anim' data-delay='.3'>
                  <div className='section-two-wrapper tw-mb-14'>
                    <h6 className='section-two-subtitle tw-text-xl text-uppercase text-main-three-800 tw-mb-4'>
                      Get In Touch
                    </h6>
                    <h2 className='section-two-title tw-text-16 fw-normal tw-mb-6 tw-char-animation'>
                      Contact Us
                    </h2>
                    <p className='fw-medium tw-text-lg'>
                      Get in touch with ABB Hotel or visit us in Patia,
                      Bhubaneswar. We look forward to welcoming you.
                    </p>
                  </div>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph-bold ph-map-pin' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-3'>
                            Location
                          </h4>
                          <p>
                            Plot No. 370/3059, behind Toyota Showroom,
                            <br />
                            Sishu Vihar, Patia, Bhubaneswar, Odisha 751024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph ph-phone' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-3'>
                            Phone
                          </h4>
                          <Link
                            className='fw-medium text-body d-block hover-text-main-600'
                            href='tel:07077490555'
                          >
                            70774 90555
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph ph-globe' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-3'>
                            Website
                          </h4>
                          <Link
                            className='fw-medium text-body d-block hover-text-main-600'
                            href='https://abbhotels.in/'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            www.abbhotels.in
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph ph-share-network' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-4'>
                            Social
                          </h4>
                          <ul className='d-flex align-items-center tw-gap-2'>
                            <li>
                              <Link
                                className='tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral rounded-circle text-heading hover-bg-main-600 hover-text-heading hover-border-main-600'
                                href='https://www.facebook.com'
                              >
                                <i className='ph-bold ph-facebook-logo' />
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral rounded-circle text-heading hover-bg-main-600 hover-text-heading hover-border-main-600'
                                href='https://www.twitter.com'
                              >
                                <i className='ph-bold ph-twitter-logo' />
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral rounded-circle text-heading hover-bg-main-600 hover-text-heading hover-border-main-600'
                                href='https://www.linkedin.com'
                              >
                                <i className='ph-bold ph-instagram-logo' />
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='tw-w-9 tw-h-9 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral rounded-circle text-heading hover-bg-main-600 hover-text-heading hover-border-main-600'
                                href='https://www.pinterest.com'
                              >
                                <i className='ph-bold ph-dribbble-logo' />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tw-mb-8'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14963.467870787883!2d85.8164474!3d20.3471137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909dc175cfa45%3A0xcc2c7ef4de466df2!2sABB%20Hotel!5e0!3m2!1sen!2sin!4v1794379983853!5m2!1sen!2sin'
                      title='ABB Hotel location on Google Maps'
                      width='100%'
                      height='190'
                      style={{ border: 0 }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='strict-origin-when-cross-origin'
                    />
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6'>
                <div
                  className='contact-two-form bg-white tw-py-20 tw-ps-10 tw-pe-20 tw-mb-7 tw_fade_anim'
                  data-delay='.5'
                >
                  <div className='tw-mb-10'>
                    <h2 className='tw-text-12 fw-normal tw-mb-4 tw-char-animation'>
                      Fill Up The Form
                    </h2>
                    <p className='tw-text-lg fw-medium'>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">

                      {/* Name */}
                      <div className="col-xl-6">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl">
                            <i className="ph-bold ph-user" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            required
                            maxLength={100}
                            className="form-control rounded-0 bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-13 focus-border-main-600 tw-h-14 tw-placeholder-text-neutral-700"
                            placeholder="Your Name*"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-xl-6">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl">
                            <i className="ph ph-envelope" />
                          </span>
                          <input
                            type="email"
                            name="email"
                            required
                            maxLength={254}
                            className="form-control rounded-0 bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-13 focus-border-main-600 tw-h-14 tw-placeholder-text-neutral-700"
                            placeholder="Email Address*"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl">
                            <i className="ph ph-phone" />
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            required
                            maxLength={20}
                            className="form-control rounded-0 bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-13 focus-border-main-600 tw-h-14 tw-placeholder-text-neutral-700"
                            placeholder="Phone Number*"
                          />
                        </div>
                      </div>

                      {/* Check-in */}
                      <div className="col-xl-6 col-md-6">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl">
                            <i className="ph ph-calendar-check" />
                          </span>
                          <input
                            type="date"
                            name="checkIn"
                            required
                            min={minDate}
                            value={checkIn}
                            onChange={(e) => {
                              setCheckIn(e.target.value);
                              if (checkOut && e.target.value >= checkOut) {
                                setCheckOut("");
                              }
                            }}
                            className="form-control rounded-0 bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-3 focus-border-main-600 tw-h-14"
                            aria-label="Check-in date"
                          />
                          {/* <small className="text-muted">Check-in Date*</small> */}
                        </div>
                      </div>

                      {/* Check-out */}
                      <div className="col-xl-6 col-md-6">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl">
                            <i className="ph ph-calendar-x" />
                          </span>
                          <input
                            type="date"
                            name="checkOut"
                            required
                            min={checkIn || minDate}
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="form-control rounded-0 bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-3 focus-border-main-600 tw-h-14"
                            aria-label="Check-out date"
                          />
                          {/* <small className="text-muted">Check-out Date*</small> */}
                        </div>
                      </div>

                      {/* Guests */}
                      <div className="col-xl-6 col-md-6">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl">
                            <i className="ph ph-users" />
                          </span>
                          <select
                            name="guests"
                            defaultValue="2"
                            className="form-select rounded-0 bg-white shadow-none border-0 border-bottom border-bottom-neutral text-heading tw-ps-8 tw-h-14"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6+ Guests</option>
                          </select>
                        </div>
                      </div>

                      {/* Rooms */}
                      <div className="col-xl-6 col-md-6">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl">
                            <i className="ph ph-door" />
                          </span>
                          <select
                            name="rooms"
                            defaultValue="1"
                            className="form-select rounded-0 bg-white shadow-none border-0 border-bottom border-bottom-neutral text-heading tw-ps-8 tw-h-14"
                          >
                            <option value="1">1 Room</option>
                            <option value="2">2 Rooms</option>
                            <option value="3">3 Rooms</option>
                            <option value="4">4 Rooms</option>
                            <option value="5">5+ Rooms</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-11">
                          <span className="position-absolute top-0 start-0 tw-mt-1 text-heading tw-text-xl">
                            <i className="ph-bold ph-note-pencil" />
                          </span>
                          <textarea
                            name="message"
                            maxLength={1000}
                            className="form-control rounded-0 tw-h-135-px bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-13 focus-border-main-600 tw-placeholder-text-neutral-700"
                            placeholder="Enter Your Message here"
                          />
                        </div>
                      </div>

                      {/* Response Message */}
                      {status.message && (
                        <div className="col-xl-12 tw-mb-5">
                          <p
                            className={
                              status.type === "success"
                                ? "text-success"
                                : "text-danger"
                            }
                            role="status"
                          >
                            {status.message}
                          </p>
                        </div>
                      )}

                      {/* Submit */}
                      <div className="col-xl-12">
                        <button
                          type="submit"
                          disabled={loading}
                          className="tw-btn-hover-black bg-main-600 tw-py-5 tw-px-14 text-capitalize text-heading font-heading d-inline-flex align-items-center tw-gap-2 tw-rounded-lg"
                        >
                          {loading ? "Sending..." : "Send us Message"}
                          {!loading && (
                            <span className="d-inline-block lh-1 tw-text-lg">
                              <i className="ph ph-arrow-up-right" />
                            </span>
                          )}
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInner;
