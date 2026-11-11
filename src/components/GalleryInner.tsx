import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const GalleryInner: FC = () => {
  return (
    <>
      <div className='pb-120 bg_2 pt-120' id="accommodation">
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-10'>
              <div className='section-two-wrapper text-center tw-mb-14 tw_fade_anim'>
                <h6 className='section-two-subtitle tw-text-xl text-uppercase text-neutral-800 tw-mb-6'>
                  Discover Our Premium Rooms
                </h6>
                <h2 className='section-two-title tw-text-16 fw-normal tw-char-animation'>
                  Premium Stays, Exceptional Comfort at ABB Hotel.
                </h2>
              </div>
            </div>
          </div>
          <div className='row align-items-center tw-pb-120'>
            <div className='col-xxl-6 col-xl-5'>
              <div
                className='experience-wrapper gallery-ip-wrapper tw-mb-7 tw_fade_anim'
                data-delay='.3'
              >
                <div className='experience-thumb position-relative z-1'>
                  <Link className='d-block' href='#'>
                    <Image
                      width={698}
                      height={576}
                      className='tw-rounded-lg w-100'
                      src='/assets/images/abb-hotel/rooms/24.webp'
                      alt='thumb'
                      style={{ height: '576px', objectFit: 'cover' }}
                    />
                  </Link>
                  <div className='position-absolute start-0 bottom-0 tw-ms-3 tw-mb-3'>
                    <div className='experience-content d-flex justify-content-between align-items-center tw-rounded-lg'>
                      <div className='experience-content-inner'>
                        <h4 className='tw-text-xl fw-normal'>
                          <Link href='#'>King Size Bed</Link>
                        </h4>
                      </div>
                      <div>
                        <Link
                          className='tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral text-heading rounded-circle'
                          href='#'
                        >
                          <i className='ph ph-arrow-up-right' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-6 col-xl-7'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div
                    className='experience-wrapper gallery-ip-wrapper tw-mb-7 tw_fade_anim'
                    data-delay='.4'
                  >
                    <div className='experience-thumb position-relative z-1'>
                      <Link className='d-block' href='#'>
                        <Image
                          width={338}
                          height={275}
                          className='tw-rounded-lg w-100'
                          src='/assets/images/abb-hotel/rooms/28.webp'
                          alt='thumb'
                          style={{ height: '275px', objectFit: 'cover' }}
                        />
                      </Link>
                      <div className='position-absolute start-0 bottom-0 tw-ms-3 tw-mb-3'>
                        <div className='experience-content d-flex justify-content-between align-items-center tw-rounded-lg'>
                          <div className='experience-content-inner'>
                            <h4 className='tw-text-xl fw-normal mb-0'>
                              <Link href='#'>Luxury Furniture</Link>
                            </h4>
                          </div>
                          <div>
                            <Link
                              className='tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral text-heading rounded-circle'
                              href='#'
                            >
                              <i className='ph ph-arrow-up-right' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div
                    className='experience-wrapper gallery-ip-wrapper tw-mb-7 tw_fade_anim'
                    data-delay='.6'
                  >
                    <div className='experience-thumb position-relative z-1'>
                      <Link className='d-block' href='#'>
                        <Image
                          width={337}
                          height={275}
                          className='tw-rounded-lg w-100'
                          src='/assets/images/abb-hotel/rooms/40.webp'
                          alt='thumb'
                          style={{ height: '275px', objectFit: 'cover' }}
                        />
                      </Link>
                      <div className='position-absolute start-0 bottom-0 tw-ms-3 tw-mb-3'>
                        <div className='experience-content d-flex justify-content-between align-items-center tw-rounded-lg'>
                          <div className='experience-content-inner'>
                            <h4 className='tw-text-xl fw-normal mb-0'>
                              <Link href='#'>Smart TV</Link>
                            </h4>
                          </div>
                          <div>
                            <Link
                              className='tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral text-heading rounded-circle'
                              href='#'
                            >
                              <i className='ph ph-arrow-up-right' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div
                    className='experience-wrapper gallery-ip-wrapper tw-mb-7 tw_fade_anim'
                    data-delay='.8'
                  >
                    <div className='experience-thumb position-relative z-1'>
                      <Link className='d-block' href='#'>
                        <Image
                          width={338}
                          height={275}
                          className='tw-rounded-lg w-100'
                          src='/assets/images/abb-hotel/rooms/42.webp'
                          alt='thumb'
                          style={{ height: '275px', objectFit: 'cover' }}
                        />
                      </Link>
                      <div className='position-absolute start-0 bottom-0 tw-ms-3 tw-mb-3'>
                        <div className='experience-content d-flex justify-content-between align-items-center tw-rounded-lg'>
                          <div className='experience-content-inner'>
                            <h4 className='tw-text-xl fw-normal mb-0'>
                              <Link href='#'>Premium Furnishing</Link>
                            </h4>
                          </div>
                          <div>
                            <Link
                              className='tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral text-heading rounded-circle'
                              href='#'
                            >
                              <i className='ph ph-arrow-up-right' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div
                    className='experience-wrapper gallery-ip-wrapper tw-mb-7 tw_fade_anim'
                    data-delay='.9'
                  >
                    <div className='experience-thumb position-relative z-1'>
                      <Link className='d-block' href='#'>
                        <Image
                          width={337}
                          height={275}
                          className='tw-rounded-lg w-100'
                          src='/assets/images/abb-hotel/rooms/27.webp'
                          alt='thumb'
                          style={{ height: '275px', objectFit: 'cover' }}
                        />
                      </Link>
                      <div className='position-absolute start-0 bottom-0 tw-ms-3 tw-mb-3'>
                        <div className='experience-content d-flex justify-content-between align-items-center tw-rounded-lg'>
                          <div className='experience-content-inner'>
                            <h4 className='tw-text-xl fw-normal mb-0'>
                              <Link href='#'>Sitting Area</Link>
                            </h4>
                          </div>
                          <div>
                            <Link
                              className='tw-w-10 tw-h-10 lh-1 d-inline-flex align-items-center justify-content-center border border-neutral text-heading rounded-circle'
                              href='#'
                            >
                              <i className='ph ph-arrow-up-right' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryInner;
