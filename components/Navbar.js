"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileMenu } from "./MobileMenu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // if scrolled more than 10px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "fr", name: "Français", flag: "https://flagcdn.com/w160/fr.png" },
    { code: "en", name: "English", flag: "https://flagcdn.com/w160/gb.png" },
  ];

  const handleLanguageChange = (lang) => {
    const newPathname = pathname.replace(/^\/(en|fr)/, `/${lang}`);
    router.push(newPathname);
  };
  const selected = languages.find((el) => el.code === locale);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <nav
      className={`flex flex-wrap items-center justify-between w-full fixed z-50 py-3 px-4 md:px-10 lg:px-20 transition-all duration-300 ${
        scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Left side - Mobile Menu */}
      <div className="">
      
        <MobileMenu selectedLang={locale} handleLanguageChange={handleLanguageChange} scrolled/>
      </div>

      {/* Center - Logo */}
      <div className="flex-grow text-center">
        <Image
          src={scrolled ? "/white-logo.png" : "/logo-trans.png"}
          height={70}
          width={70}
          alt="logo"
          className="mx-auto sm:h-12 sm:w-12 md:h-16 md:w-16 max-sm:hidden hover:scale-110 transition-all cursor-pointer duration-100"
        />
      </div>

      {/* Right side - Language Selector */}
      <div className="flex-shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all duration-300">
              {selected && (
                <Image
                width={20}
                height={20}
                  src={selected.flag || "/placeholder.svg"}
                  alt={selected.name}
                  className="w-5 h-5 rounded-full"
                />
              )}
              <ChevronDown size={16} />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-44 bg-white rounded-xl shadow-2xl border border-gray-200 mt-2 overflow-hidden"
          >
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-orange-100 ${
                  locale === lang.code ? "bg-orange-200 font-semibold" : ""
                }`}
              >
                <Image
                width={20}
                height={20}
                  src={lang.flag || "/placeholder.svg"}
                  alt={lang.name}
                  className="w-5 h-5 rounded-full"
                />
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
