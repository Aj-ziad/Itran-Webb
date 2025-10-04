"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Beams from "@/components/Beams";
import { Highlighter } from "../ui/highlighter";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import DarkVeil from "../DarkVeil";
import BlurText from "../BlurText";
import CurvedLoop from "../CurvedLoop";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center items-center max-sm:pt-20 pt-40 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 ">
        {/* <Beams lightColor="#f94c1b" rotation={30} beamNumber={38} /> */}
        <DarkVeil hueShift={225} speed={0.5} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2">
            <div className="md:hidden">
              <Image
                src={"/white-logo.png"}
                height={90}
                width={90}
                alt="logo"
              />
            </div>
          </div>
          <div>
            <AnimatedShinyText className="z-50">
              Based in Morocco{" "}
            </AnimatedShinyText>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-[Gambarino] text-white">
            <BlurText
              text="We build websites that grow your business"
              className="font-[Gambarino] text-center"
            />
            {/* We build <Highlighter action="underline" color="#FF9800"> websites </Highlighter> that grow your business. */}
          </h1>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Transform your vision into a powerful digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Glass Button */}
            <Button
              size="lg"
              className="relative overflow-hidden text-lg px-8 py-6 rounded-2xl
               bg-gradient-to-br from-orange-500/80 to-pink-500/80
               backdrop-blur-xl border border-white/20 text-white
               shadow-lg hover:shadow-orange-500/30
               transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center">
                Book a demo
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
              {/* Subtle glass glow overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-30 transition-opacity" />
            </Button>

            {/* Secondary Glass Button */}
            <Button
              size="lg"
              variant="outline"
              className="relative overflow-hidden text-lg px-8 py-6 rounded-2xl
               bg-white/10 backdrop-blur-xl border border-white/20 text-white
               shadow-lg hover:bg-white/20 hover:shadow-white/30
               transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
        
      {/* <CurvedLoop
          marqueeText="Make ✦ Your ✦ business ✦ Grow ✦ With ✦ Us ✦"
          speed={3}
          curveAmount={110}
          direction="right"
          interactive={true}
          className="absolute bottom-0 text-5xl"
        /> */}
      </div>
    </section>
  );
}
