"use client";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PixelForge — Web Design & Development Agency</title>
        <meta
          name="description"
          content="We build fast, beautiful, and high-converting websites that grow your business."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 -z-10 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 76, 27, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 76, 27, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridMove 20s linear infinite",
          }}
        />
        <style jsx global>{`
          @keyframes gridMove {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 40px 40px;
            }
          }
        `}</style>

        {/* Floating Particles */}
        {/* {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: 'rgba(249, 76, 27, 0.1)',
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() > 0.5 ? 8 : -8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))} */}

        <div className="max-w-4xl mx-auto text-center pt-16 md:pt-24 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gray-900/70 backdrop-blur-sm text-orange-400 border border-orange-900/30 text-sm px-4 py-2 rounded-full mb-6 font-medium"
          >
            ✨ Made in Morocco
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-[Gambarino] md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Websites that{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="bg-gradient-to-r  from-[#f94c1b] to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              convert & grow
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-md sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 px-2 "
          >
            We design and build fast, beautiful, and high-performing websites
            that turn visitors into customers.
          </motion.p>

          <motion.div 
  className="flex flex-col sm:flex-row gap-4 justify-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }}
>
  <motion.button
    variants={{
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.6 
        }
      }
    }}
    whileHover={{
      scale: 1.04,
      boxShadow: "0 0 25px rgba(249, 76, 27, 0.4)",
    }}
    whileTap={{ scale: 0.98 }}
    className="bg-gradient-to-r from-[#f94c1b] to-orange-600 text-white 
               px-6 py-3 sm:px-8 sm:py-4 
               rounded-xl font-semibold 
               text-base sm:text-lg 
               shadow-lg hover:shadow-orange-500/30 
               transition-all duration-300"
  >
    Get a Free Quote →
  </motion.button>
  
  <motion.button
    variants={{
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.6 
        }
      }
    }}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="bg-transparent border border-gray-700 text-white 
               px-6 py-3 sm:px-8 sm:py-4 
               rounded-xl font-semibold 
               text-base sm:text-lg 
               hover:bg-gray-800 transition-colors"
  >
    View Our Work
  </motion.button>
</motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20 w-full max-w-5xl mx-auto z-10"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-orange-900/20 bg-gray-900/30 backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-[#f94c1b]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">Custom Website Preview</p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span className="inline-block px-4 py-1 bg-gray-800 text-orange-400 text-xs font-medium rounded-full border border-orange-900/30">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
          >
            We build <span className="text-[#f94c1b]">websites</span> that work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Design",
                desc: "Unique, brand-aligned designs that captivate and convert.",
              },
              {
                title: "Web Development",
                desc: "Fast, responsive, and SEO-friendly websites built with modern tech.",
              },
              {
                title: "E-Commerce Solutions",
                desc: "Online stores that drive sales and scale with your business.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-orange-900/50"
              >
                <div className="w-12 h-12 rounded-lg bg-[#f94c1b]/10 flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-[#f94c1b]"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Why clients love working with us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              We don’t just build websites — we build growth engines.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "98%", label: "Client Retention" },
              { value: "24h", label: "Support Response" },
              { value: "100+", label: "Websites Built" },
              { value: "5x", label: "Avg. Traffic Growth" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#f94c1b] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f94c1b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to grow with a new website?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Get a free consultation and quote. No obligation — just great ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block relative"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f94c1b] to-orange-600 blur-md opacity-70 animate-pulse"></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-[#f94c1b] to-orange-600 text-white rounded-xl font-bold text-lg shadow-lg"
            >
              Start Your Project →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} PixelForge. We build websites that grow
          your business.
        </p>
      </footer>
    </>
  );
}
