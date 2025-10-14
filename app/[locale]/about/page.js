// app/about/page.tsx
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'Itran Web is a Moroccan web agency founded by two expert developers. We build fast, custom, conversion-focused websites for restaurants, e-commerce brands, and creative studios across Casablanca, Rabat, and beyond.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-10 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-white/5 to-white/5"></div>
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-primary">Itran Web</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            A Moroccan web design and development agency crafting high-performance websites for businesses that demand more than just a digital brochure.
          </p>
        </div>

        <div className="space-y-8 text-gray-200">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
            <p>
              Itran Web is a boutique web agency based in <strong>Morocco</strong>, co-founded by two passionate developers and designers who believe your website should be a strategic asset—not a cost center.
            </p>
            <p>
              Since 2025, we’ve partnered with restaurants, e-commerce brands, creative studios, and startups across <strong>Casablanca, Rabat, Marrakech, and Tangier</strong> to build websites that are <strong>fast, secure, mobile-first, and built to convert</strong>.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p>
              To empower Moroccan and international businesses with custom digital experiences that reflect their brand, engage their audience, and drive measurable growth—without relying on templates or bloated platforms.
            </p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Why Businesses Trust Itran Web</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>100% Custom Development</strong> – No WordPress templates. No drag-and-drop compromises.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Blazing-Fast Performance</strong> – Optimized for Core Web Vitals and Google rankings.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Mobile-First Design</strong> – Fully responsive on all devices (phones, tablets, desktops).</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>SEO-Ready Structure</strong> – Clean code, semantic HTML, and fast load times built in.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Dedicated Support</strong> – Direct access to the two founders—no account managers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>On-Time Delivery</strong> – We respect your deadlines and launch when promised.</span>
              </li>
            </ul>
          </section>

          {/* Our Projects & Expertise */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Work & Expertise</h2>
            <p>
              We specialize in three core types of websites for Moroccan and global clients:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Restaurant & Hospitality Websites</strong> – Like <Link href="#" className="text-primary hover:underline">La Maison Roaa</Link>, featuring online reservation systems, multilingual support, and elegant design.
              </li>
              <li>
                <strong>Creative Agency Dashboards</strong> – Such as <Link href="#" className="text-primary hover:underline">Digihive Studio</Link>, with custom project management and client portals.
              </li>
              <li>
                <strong>Premium E-commerce Platforms</strong> – Including <Link href="#" className="text-primary hover:underline">RGB Glow</Link>, a secure, scalable online store for cosmetics with seamless checkout.
              </li>
            </ul>
          </section>

          {/* Local Presence */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Serving Morocco with Global Standards</h2>
            <p>
              While we’re proudly based in Morocco, our development practices follow international standards. We serve clients in:
            </p>
            <p className="mt-2">
              <strong>Casablanca • Rabat • Marrakech • Tangier • Agadir</strong> — and remotely worldwide.
            </p>
            <p className="mt-3">
              Whether you need a website in <strong>French, Arabic, English, or bilingual</strong>, we build with localization in mind.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Website?</h2>
            <p className="mb-6">
              We only take on a few projects at a time to ensure quality and attention. If you’re looking for a reliable, fast, and strategic web partner in Morocco—let’s talk.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get a Free Consultation  <span><ArrowRight className='inline-block'/></span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}