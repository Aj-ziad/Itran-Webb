"use client"
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import CTA2 from "@/components/mvpblocks/cta-2";
import Feature1 from "@/components/mvpblocks/feature-1";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import ProjectGrid from "@/components/mvpblocks/projectsGrid";
import LogoCloud from "@/components/mvpblocks/sparkles-logo";
import Lenis from "lenis";
import React, { useEffect } from "react";

const Page = () => {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

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
        <ProjectGrid />
        <ContactUs1 />
        <div className="flex ju">
        <CTA2 />
        </div>
      </div>
    </div>
  );
};

export default Page;
