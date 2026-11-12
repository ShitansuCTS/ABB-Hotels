import Link from "next/link";
import { FC } from "react";

const ReservationOne: FC = () => {
  return (
    <section
      className='background-img position-relative z-1 tw-pt-25 tw-pb-23'
      style={{
        backgroundImage: "url('assets/images/abb-hotel/interior/8.webp')",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-12'>
            <div className='cta-three-wrapper tw-pt-27 tw-pb-22 tw-px-20 tw_fade_anim' style={{ borderRadius: "20px", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <div className='section-two-wrapper text-center tw-mb-8'>
                <h2 className='section-two-title tw-text-25 text-white fw-normal tw-char-animation'>
                  Book Your Stay at ABB Hotel Today
                </h2>
              </div>
              <div className='tw-mt-6 text-center'>
                <div className='cta-form d-flex tw-gap-2 justify-content-center flex-wrap row-gap-3'>
                  <button className='tw-btn-hover-white bg-main-600 tw-py-4 tw-px-8 text-uppercase text-heading font-heading d-inline-flex align-items-center tw-gap-2 tw-rounded-lg'>
                    Enquiry for Booking{" "}
                    <span className='d-inline-block lh-1 tw-text-lg'>
                      <i className='ph ph-arrow-up-right' />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationOne;
