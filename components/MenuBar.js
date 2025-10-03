"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Contact", link: "/contact" },
];

// Overlay background
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Fullscreen panel
const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

// Menu list with stagger
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
  exit: { opacity: 0, y: 40 },
};

export default function MotionMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button (top-right) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-md bg-black/60 text-white backdrop-blur-md transition"
      >
        <span className="font-semibold uppercase tracking-wide">
          {open ? "Close" : "Menu"}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-4 h-4"
        >
          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-white -translate-y-1/2" />
          <motion.span
            animate={{ rotate: open ? -90 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-1/2 w-full h-[2px] bg-white -translate-y-1/2"
          />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            {/* Sliding panel */}
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Menu items */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col space-y-10 text-center"
              >
                {menuItems.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="text-4xl font-bold text-gray-900 hover:text-orange-500 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <a href={item.link}>{item.label}</a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
