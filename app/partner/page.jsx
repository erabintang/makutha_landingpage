"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-bg-light min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark mb-3"
            >
              Kembangkan Bisnis Barbermu
            </motion.h1>
            <p className="text-slate-500 text-sm">
              Kelola antrean, kapster, dan dapatkan pelanggan baru lewat ekosistem AI MAKUTHA.
            </p>
          </div>

          {/* Form Pendaftaran */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-dark uppercase">Nama Barbershop</label>
                <input type="text" placeholder="Contoh: Barber King" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-dark uppercase">Nama Pemilik</label>
                <input type="text" placeholder="Nama Lengkap" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-dark uppercase">Email Bisnis</label>
              <input type="email" placeholder="owner@barber.com" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-dark uppercase">Alamat Lengkap</label>
              <textarea rows={3} placeholder="Alamat barbershop..." className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-opacity-95 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-md shadow-primary/10">
              Kirim Formulir Kemitraan
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}