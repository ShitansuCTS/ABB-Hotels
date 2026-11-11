
import Link from "next/link";
import { FC } from "react";

const ServicesCard: FC = () => {
    const amenities = [
        {
            title: "Room Size",
            description: "Spacious room with 240 sq. ft. area",
            icon: "ph-ruler",
        },
        {
            title: "King-Size Bed",
            description: "King-size bed with an additional sofa",
            icon: "ph-bed",
        },
        {
            title: "Entertainment",
            description: "LED television for your entertainment",
            icon: "ph-television",
        },
        {
            title: "Tea & Coffee",
            description: "Tea, coffee maker with cookies",
            icon: "ph-coffee",
        },
        {
            title: "Toiletries",
            description: "Essential toiletries for your comfort",
            icon: "ph-bathtub",
        },
        {
            title: "Wi-Fi",
            description: "Wireless broadband internet access",
            icon: "ph-wifi-high",
        },
    ];

    return (
        <section className='service-ip-area py-120' id='service'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-12  col-lg-8'>
                        <div className='section-wrapper text-center tw-mb-14 tw_fade_anim'>
                            <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                                Comfort in Every Detail
                            </h6>
                            <h2 className='section-title fw-normal tw-mb-7 tw-char-animation'>
                                Premium Facilities for a Comfortable Stay.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {amenities.map((amenity, index) => (
                        <div className='col-xl-4 col-lg-6 col-md-6' key={index}>
                            <div
                                className='service-ip-wrapper tw-p-5 tw-rounded-lg tw-transition position-relative z-1 overflow-hidden tw-mb-7'
                                style={{ backgroundColor: "#f7f7ee" }}
                            >
                                <div>
                                    <div className='d-flex justify-content-between align-items-center tw-mb-8'>
                                        <div className='service-ip-icon'>
                                            <span className='tw-w-18 tw-h-18 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-3xl'>
                                                <i className={`ph ${amenity.icon}`} />
                                            </span>
                                        </div>
                                        <div className='service-ip-number'>
                                            <span className='tw-text-120 fw-medium'>
                                                0{index + 1}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className='service-ip-title tw-transition tw-text-2xl tw-mb-4'>
                                            <Link
                                                className='hover-text-main-600'
                                                href='/service-details'
                                            >
                                                {amenity.title}
                                            </Link>
                                        </h4>
                                        <p className='service-ip-paragraph tw-transition tw-mb-4'>
                                            {amenity.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCard;
