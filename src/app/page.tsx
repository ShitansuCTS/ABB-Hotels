import type { Metadata } from "next";
import Preloader from "@/helper/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import HeaderOne from "@/components/HeaderOne";
import BannerOne from "@/components/BannerOne";
import Checkout from "@/components/Checkout";
import AdvanceArea from "@/components/AdvanceArea";
import OfferOne from "@/components/OfferOne";
import FeatureOne from "@/components/FeatureOne";
import PackageOne from "@/components/PackageOne";
import ClientOne from "@/components/ClientOne";
import AboutOne from "@/components/AboutOne";
import CtaOne from "@/components/CtaOne";
import PropertiesInner from "@/components/PropertiesInner";
import PricingOne from "@/components/PricingOne";
import TestimonialOne from "@/components/TestimonialOne";
import MarqueeOne from "@/components/MarqueeOne";
import BlogOne from "@/components/BlogOne";
import FooterOne from "@/components/FooterOne";
import ContactInner from "@/components/ContactInner";
import GalleryInner from "@/components/GalleryInner";
import DiscoverOne from "@/components/DiscoverOne";
import MarqueeFour from "@/components/MarqueeFour";
import ClientTwo from "@/components/ClientTwo";
import ReservationOne from "@/components/ReservationOne";
import FeatureTwo from "@/components/FeatureTwo";
import ServicesCard from "@/components/ServicesCard";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "ABB Hotel | Luxury Hotel in Bhubaneswar",
    description:
      "Experience comfort, elegance, and warm hospitality at ABB Hotel, Bhubaneswar. Discover premium rooms, modern amenities, and a memorable stay.",
    icons: {
      icon: [
        { url: "/assets/images/abb-hotel/logo-golden.webp" },
      ],
      apple: "/assets/images/abb-hotel/apple-logo-golden.webpg",
    },
  };

};

export default function Home() {
  return (
    <AOSWrap>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* Checkout */}
      {/* <Checkout /> */}

      {/* AboutOne */}
      <AboutOne />

      {/* Accomodation */}
      <GalleryInner />

      {/* AdvanceArea */}
      <AdvanceArea />

      {/* OfferOne */}
      {/* <OfferOne /> */}



      {/* PackageOne */}
      {/* <PackageOne /> */}

      {/* ClientOne */}
      {/* <ClientOne /> */}



      {/* CtaOne */}
      <CtaOne />

      {/* Gallery Slider */}
      <DiscoverOne />


      {/* FeatureOne */}
      {/* <FeatureOne /> */}

      {/* PropertiesInner */}
      {/* <PropertiesInner /> */}

      {/* PricingOne */}
      {/* <PricingOne /> */}

      {/* MarqueeOne */}
      {/* <MarqueeOne /> */}

      {/* BlogOne */}
      {/* <BlogOne /> */}





      {/* MarqueeFour */}
      {/* <MarqueeFour /> */}

      <ServicesCard />


      {/* TestimonialOne */}
      <ClientTwo />

      {/* Cta */}
      <ReservationOne />

      {/* Contact Info */}
      <ContactInner />


      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
}
