import HeroSection from "@/components/MainPage/HeroSection";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import CTA2 from "@/components/mvpblocks/cta-2";
import Feature1 from "@/components/mvpblocks/feature-1";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import LogoCloud from "@/components/mvpblocks/sparkles-logo";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <GradientHero />
      <LogoCloud />
      <div className="relative">
      <div
            className="absolute inset-0 h-fit mx-auto  max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, var(--primary) 10%, transparent 80%)",
            }}
          ></div>
        <Feature1 />
        <ContactUs1 />
        <div className="flex ju">

        <CTA2 />
        </div>
      </div>
    </div>
  );
};

export default page;
