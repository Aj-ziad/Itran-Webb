"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Rocket,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Stunning Custom Design",
    desc: "Unique, modern designs crafted specifically for your brand — no templates, no compromises.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Fast & Reliable Delivery",
    desc: "From concept to launch in record time, without sacrificing quality or performance.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile-First Approach",
    desc: "Fully responsive websites that look and work flawlessly on every device and screen size.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure & Optimized",
    desc: "Built with best practices: SEO-ready, lightning-fast, and protected against threats.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Designed to Convert",
    desc: "Strategic layouts and clear calls-to-action that turn visitors into customers.",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Dedicated Support",
    desc: "We’re with you every step of the way — from planning to post-launch and beyond.",
  },
];

export default function Feature1() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "50px", // trigger slightly before fully in view
  });

  return (
    <section className="relative py-14" ref={ref}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-geist mt-4 text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl"
            >
              Why Choose Our Agency?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-geist mt-3 text-gray-300"
            >
              We don’t just build websites — we build digital experiences that grow your business.
            </motion.p>
          </div>
        </div>
        <hr className="mx-auto mt-5 h-px w-1/2 bg-gray-700" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + idx * 0.1, // staggered entrance
                  ease: "easeOut",
                }}
                className="space-y-3 rounded-xl border border-border/30  p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:scale-[1.02]"
              >
                <div className="w-fit rounded-full bg-primary/10 p-4 text-primary">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter text-white">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}