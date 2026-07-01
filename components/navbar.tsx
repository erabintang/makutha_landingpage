"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-dark">
          <Scissors className="w-6 h-6 text-primary" />
          <span>MAKUTHA<span className="text-primary">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-primary transition-colors">Fitur</Link>
          <Link href="#workflow" className="hover:text-primary transition-colors">Cara Kerja</Link>
          <Link href="#partner" className="hover:text-primary transition-colors">Mitra</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-dark hover:text-primary transition-colors">
            Masuk
          </Link>
          <Link href="/partner" className="text-sm font-medium bg-dark text-white px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-sm">
            Gabung Mitra
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-dark">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-lg"
        >
          <Link href="#features" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">Fitur</Link>
          <Link href="#workflow" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">Cara Kerja</Link>
          <Link href="#partner" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">Mitra</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">FAQ</Link>
          <hr className="border-slate-100" />
          <Link href="/login" className="font-medium text-center py-2 text-dark">Masuk</Link>
          <Link href="/partner" className="font-medium text-center bg-primary text-white py-3 rounded-xl">Gabung Mitra</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}