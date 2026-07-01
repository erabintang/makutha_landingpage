"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-dark text-white rounded-[32px] px-8 py-12 md:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Background Ambient Lights */}
          <div className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-[-50%] left-[-20%] w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px]" />

          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Siap Mencoba Level Baru Pengalaman Barbershop?
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-lg mb-10 leading-relaxed">
              Bergabunglah bersama ribuan pengguna cerdas lainnya dan kelola penampilan rambut idealmu dengan teknologi presisi AI terdepan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5 group">
                Mulai Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all">
                Gabung Mitra Barber
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}