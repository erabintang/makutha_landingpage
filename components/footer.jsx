"use client";

import Link from "next/link";
import { Scissors, ExternalLink, Link2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-light border-t border-slate-200/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-16">
        
        {/* Brand Kiri */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-dark">
            <Scissors className="w-5 h-5 text-primary" />
            <span>MAKUTHA<span className="text-primary">.</span></span>
          </Link>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Platform ekosistem barber digital masa depan yang memadukan teknologi kecerdasan buatan (AI Try-On) dengan sistem reservasi barbershop modern terintegrasi.
          </p>
        </div>

        {/* Tautan Tengah */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h4 className="text-xs font-bold text-dark tracking-wider uppercase">Perusahaan</h4>
          <div className="flex flex-col gap-2.5 text-xs font-medium text-slate-500">
            <Link href="#features" className="hover:text-primary transition-colors">Tentang Kami</Link>
            <Link href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>

        {/* Sosial & Kontak Kanan */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="text-xs font-bold text-dark tracking-wider uppercase">Hubungi Kami</h4>
          <div className="flex items-center gap-4 text-slate-500 pt-1">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Link2 className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Github">
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="mailto:support@makutha.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <span className="text-xs text-slate-400 font-medium mt-1">support@makutha.com</span>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-200/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-400">
        <span>&copy; {new Date().getFullYear()} MAKUTHA. All rights reserved.</span>
        <span>Built for next-gen style experience.</span>
      </div>
    </footer>
  );
}