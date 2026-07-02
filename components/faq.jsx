"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "Apa itu AI Hair Preview?", a: "Fitur kecerdasan buatan dari MAKUTHA yang menganalisis struktur wajah kamu melalui kamera, lalu memproyeksikan berbagai jenis gaya rambut secara real-time agar kamu punya gambaran sebelum potong." },
    { q: "Bagaimana cara melakukan Booking?", a: "Cukup buka aplikasi, cari barbershop terdekat, pilih kapster langgananmu, tentukan hari dan jam yang tersedia, lalu selesaikan pembayaran cashless secara instan." },
    { q: "Bagaimana cara Menjadi Mitra?", a: "Kamu bisa klik tombol 'Gabung Mitra' di bagian navigasi atas atau bawah, isi formulir profil bisnismu, dan tim operational kami akan membantumu melakukan integrasi sistem dalam 1x24 jam." },
    { q: "Apakah fitur simulasi AI ini Gratis?", a: "Fitur scan dasar dan rekomendasi bentuk wajah 100% gratis. Untuk membuka akses penuh ke katalog model rambut premium edisi terbatas, tersedia opsi berlangganan yang sangat terjangkau." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-bg-light relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-dark tracking-tight transition-colors hover:text-primary"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}