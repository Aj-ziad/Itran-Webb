"use client";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import CTA2 from "@/components/mvpblocks/cta-2";
import Feature1 from "@/components/mvpblocks/feature-1";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import LogoCloud from "@/components/mvpblocks/sparkles-logo";
import Projects from "@/components/Projects";
import Lenis from "lenis";
import React, { useEffect } from "react";

// export const metadata = {
//   title: 'My Blog',
//   description: '...',
// }
 

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  

  return (
    <div>
      {/* <HeroSection /> */}
      <GradientHero />
      <LogoCloud />
      
        <Projects />
        <Feature1 />
        <ContactUs1 />
        <div className="flex ju">
          <CTA2 />
        </div>
      </div>
  );
};

export default Page;
