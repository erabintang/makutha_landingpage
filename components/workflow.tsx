"use client";

import { motion } from "framer-motion";
import { Search, Scissors, Sparkles, Calendar, CreditCard, CheckCircle } from "lucide-react";

export default function Workflow() {
  const steps = [
    { icon: Search, title: "Cari Barber", desc: "Temukan yang terdekat" },
    { icon: Scissors, title: "Pilih Hairstyle", desc: "Eksplorasi tren terbaru" },
    { icon: Sparkles, title: "Preview AI", desc: "Simulasi instan di wajahmu" },
    { icon: Calendar, title: "Booking", desc: "Amankan slot & kapster" },
    { icon: CreditCard, title: "Pembayaran", desc: "Cashless super cepat" },
    { icon: CheckCircle, title: "Datang", desc: "Potong tanpa antre" },
  ];

  return (
    <section id="workflow" className="py-24 md:py-32 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Proses Instan</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark">
            Alur Pemesanan Tanpa Ribet
          </h2>
        </div>

        {/* Stepper Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4">
          
          {/* Garis Penghubung (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-[2px] bg-slate-200 z-0" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Lingkaran Ikon */}
                <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Nomor Step */}
                <span className="absolute top-0 right-1/4 md:right-6 w-6 h-6 bg-dark text-white rounded-full text-xs font-bold flex items-center justify-center border-2 border-white">
                  {index + 1}
                </span>

                {/* Teks */}
                <h3 className="font-bold text-dark mt-5 mb-1 tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 max-w-[150px]">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}