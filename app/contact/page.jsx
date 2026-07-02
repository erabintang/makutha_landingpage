"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-bg-light min-h-screen">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Kiri */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark"
            >
              Ada Pertanyaan? Hubungi Kami
            </motion.h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              Tim support kami siap membantu menjawab pertanyaan teknis seputar aplikasi maupun kemitraan.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/50">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="text-xs font-bold text-dark">Email Resmi</h4>
                  <p className="text-xs text-slate-400">support@makutha.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/50">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <div>
                  <h4 className="text-xs font-bold text-dark">Live Chat</h4>
                  <p className="text-xs text-slate-400">Tersedia langsung di dalam aplikasi</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200/50">
                <Clock className="w-5 h-5 text-emerald-500" />
                <div>
                  <h4 className="text-xs font-bold text-dark">Jam Operasional</h4>
                  <p className="text-xs text-slate-400">Senin - Jumat, 09.00 - 18.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Kanan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm space-y-5"
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-dark uppercase">Nama Anda</label>
              <input type="text" placeholder="Nama Lengkap" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-dark uppercase">Subjek</label>
              <input type="text" placeholder="Judul Masalah/Pertanyaan" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-dark uppercase">Pesan</label>
              <textarea rows={4} placeholder="Tuliskan detail pertanyaan Anda..." className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
            <button className="w-full bg-dark hover:bg-opacity-90 text-white font-semibold py-3.5 rounded-xl text-sm transition-all">
              Kirim Pesan
            </button>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}