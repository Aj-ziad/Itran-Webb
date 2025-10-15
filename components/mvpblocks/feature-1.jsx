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
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Feature1() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "50px", // trigger slightly before fully in view
  });
  
  const t = useTranslations('features');

  const features = [
    {
      url: '/icons/draw-icon.png',
      title: t('items.customDesign.title'),
      desc: t('items.customDesign.description'),
    },
    {
      url: '/icons/rocket-icon.png',
      title: t('items.fastDelivery.title'),
      desc: t('items.fastDelivery.description'),
    },
    {
      url: '/icons/phone-icon.png',
      title: t('items.mobileFirst.title'),
      desc: t('items.mobileFirst.description'),
    },
    {
      url: '/icons/security-icon.png',
      title: t('items.secureOptimized.title'),
      desc: t('items.secureOptimized.description'),
    },
    {
      url: '/icons/trending-icon.png',
      title: t('items.conversion.title'),
      desc: t('items.conversion.description'),
    },
    {
      url: '/icons/headphones-icon.png',
      title: t('items.support.title'),
      desc: t('items.support.description'),
    },
  ];

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
              {t('title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-geist mt-3 text-gray-300"
            >
              {t('subtitle')}
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
                className="space-y-3 rounded-xl border border-border/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:scale-[1.02]"
              >
                <div className="w-fit rounded-full bg-primary/10 text-primary">
                  <Image src={item.url} alt={item.name} height={60} width={60} />
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