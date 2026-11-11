import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AboutOne: FC = () => {
  return (
    <section className='about-area' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-5 col-lg-8'>
            <div
              className='about-thumb position-relative z-1 tw_fade_anim'
              data-delay='.3'
            >
              <div>
                <Image
                  width={408}
                  height={550}
                  src='/assets/images/abb-hotel/exterior/50.webp'
                  alt='thumb'
                  style={{ height: '550px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
              <div className='about-thumb-2 position-absolute d-none d-md-block'>
                <Image
                  width={381}
                  height={523}
                  src='/assets/images/abb-hotel/interior/10.webp'
                  alt='thumb'
                  style={{ height: '450px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>
          <div className='col-xl-7'>
            <div
              className='about-wrapper tw-ps-14 tw_fade_anim'
              data-delay='.5'
            >
              <div className='section-wrapper tw-mb-14'>
                <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                  Experience Comfort and Elegance
                </h6>
                <h2 className='section-title fw-normal tw-mb-7 tw-char-animation'>
                  Luxury, Comfort &amp; Hospitality – Reasons to Stay With Us
                </h2>
                <p className='tw-text-lg'>
                  Welcome to ABB Hotel, Bhubaneswar, where refined elegance meets
                  modern comfort. Enjoy thoughtfully designed rooms, warm hospitality,
                  and a relaxing atmosphere that makes every stay truly special.
                </p>
                <br />
                <p className='tw-text-lg'>
                  Whether you are visiting for business or leisure, ABB Hotel offers
                  a welcoming retreat with comfortable accommodations, modern
                  amenities, and attentive service tailored to your needs.
                </p>
              </div>
              <div
                className='gallery-two-btn d-flex justify-content-start tw_fade_anim'
                data-delay='.5'
              >
                <Link
                  className='tw-btn-hover-black bg-main-600 tw-py-5 tw-px-12 text-capitalize text-heading font-heading d-inline-flex align-items-center tw-gap-2 tw-rounded-lg'
                  href='/gallery'
                >
                  Explore More
                  <span className='d-inline-block lh-1 tw-text-lg'>
                    <i className='ph ph-arrow-up-right' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
