"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const navLinks = [
  { name: "Nos services", href: "#services" },
  { name: "Les villes que nous desservons", href: "#cities" },
  { name: "Rejoignez-nous en tant que partenaire", href: "#partner" },
  { name: "Rejoignez-nous en tant que livreur", href: "#deliver" },
  { name: "Questions fréquentes", href: "#faq" },
];

const languages = [
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w20/fr.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
];

export function MobileMenu({
  selectedLang: externalLang,
  handleLanguageChange: changeLang,
} = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [internalLang, setInternalLang] = useState("fr");

  const selectedLang = externalLang || internalLang;
  const selected = languages.find((l) => l.code === selectedLang);

  const handleLanguageChange = (code) => {
    changeLang?.(code);
    setInternalLang(code);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(true)}
        className="p-2.5 rounded-xl text-white/90 hover:bg-[#f94c1b]/20 backdrop-blur-sm transition-all duration-300"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
          >
            {/* Animated background accents */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f94c1b]/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"
            />

            <div className="relative w-full h-full flex flex-col items-center justify-between py-12 px-6">
              {/* Header: Close + Language */}
              <div className="w-full flex justify-between items-center">
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-white" />
                </motion.button>

                {/* Language Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {selected && (
                        <Image
                          src={selected.flag}
                          alt={selected.name}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      )}
                      <span className="text-white font-medium text-sm">
                        {selectedLang.toUpperCase()}
                      </span>
                      <ChevronDown size={14} className="text-orange-300" />
                    </motion.button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-48 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-700 p-2"
                    align="end"
                  >
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                          selectedLang === lang.code
                            ? "bg-[#f94c1b]/20 text-white"
                            : "text-gray-300 hover:bg-gray-800"
                        }`}
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <span>{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-7">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl md:text-3xl font-semibold text-white hover:text-[#f94c1b] transition-colors text-center px-4 py-2 relative"
                  >
                    {link.name}
                    {/* Underline on hover (static for mobile clarity) */}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#f94c1b] rounded-full opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:left-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-gray-500 text-sm"
              >
                © {new Date().getFullYear()} Itran Web
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}