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

const navLinks = [
  { name: "Nos services", href: "#services" },
  { name: "Les villes que nous desservons", href: "#cities" },
  { name: "Rejoignez Done en tant que partenaire", href: "#partner" },
  { name: "Rejoignez Done en tant que livreur", href: "#deliver" },
  { name: "Questions fréquentes", href: "#faq" },
];

const languages = [
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w160/fr.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w160/gb.png" },
];

export function MobileMenu({
  selectedLang: externalLang,
  handleLanguageChange : changeLang
} = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [internalLang, setInternalLang] = useState("fr");

  const selectedLang = externalLang || internalLang;
  const selected = languages.find((l) => l.code === selectedLang);

  const handleLanguageChange = (code) => {
    changeLang(code)
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      



      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 bg-white/90 backdrop-blur-2xl overflow-hidden"
          >
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute top-6 left-6 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:rotate-90 duration-300"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} className="text-black" />
              </motion.button>

              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute top-6 right-6"
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 backdrop-blur-sm border border-gray-200">
                      {selected && (
                        <img
                          src={selected.flag || "/placeholder.svg"}
                          alt={selected.name}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                      )}
                      <span className="text-sm font-medium text-black">
                        {selectedLang.toUpperCase()}
                      </span>
                      <ChevronDown size={14} className="text-gray-600" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-white backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 mt-2">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-primary transition-colors ${
                          selectedLang === lang.code
                            ? "bg-orange-50 font-semibold"
                            : ""
                        }`}
                      >
                        <img
                          src={lang.flag || "/placeholder.svg"}
                          alt={lang.name}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span className="text-black">{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-8">
                
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      className="group relative text-center text-3xl font-bold text-black hover:text-orange-500 transition-colors duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                      {/* Animated underline */}
                      <motion.span
                        className="absolute -bottom-2 left-0 h-1 bg-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-8 text-sm text-gray-600"
              >
                © 2025 Itran Web
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
