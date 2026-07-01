"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-bg-light">
      {/* Background Glow Premium */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Teks Kiri */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Badge AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-primary shadow-sm mx-auto lg:mx-0 w-fit mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 fill-primary" />
            <span>AI Hair Try-On + Booking Barbershop</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-dark leading-[1.1] mb-6"
          >
            Temukan Gaya Rambut Terbaikmu{" "}
            <span className="bg-gradient-to-r Fitz-gradient from-primary to-secondary bg-clip-text text-transparent">
              Sebelum Duduk
            </span>{" "}
            di Kursi Barber.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Gak ada lagi drama salah potong rambut. Simulasi gaya rambut impianmu dengan AI super akurat dan langsung booking slot barber favoritmu tanpa antre.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-opacity-95 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 group">
              Mulai Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-slate-200 text-dark hover:bg-slate-50 px-8 py-4 rounded-full font-semibold transition-all shadow-sm">
              Gabung Mitra
            </button>
          </motion.div>
        </div>

        {/* Mockup HP Kanan */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{ delay: 0.2, repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-[280px] h-[580px] md:w-[310px] md:h-[630px] bg-dark rounded-[50px] p-3.5 shadow-2xl border-4 border-slate-800"
          >
            {/* Notch HP */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-dark rounded-full z-20" />
            
            {/* Layar Dalam Mockup */}
            <div className="w-full h-full bg-gradient-to-b from-slate-900 to-dark rounded-[38px] overflow-hidden p-6 flex flex-col justify-between text-white relative">
              <div className="pt-8">
                <p className="text-xs text-primary font-bold tracking-widest uppercase">MAKUTHA AI</p>
                <h3 className="text-xl font-bold mt-1">Scanning Your Face Structure...</h3>
              </div>
              
              {/* Efek Garis Scan AI */}
              <motion.div 
                animate={{ top: ["15%", "80%", "15%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-lg shadow-primary z-10"
              />

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <p className="text-xs text-slate-300">Rekomendasi Terbaik:</p>
                <p className="text-sm font-semibold text-white">Modern Textured Fade ★ 4.9</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}