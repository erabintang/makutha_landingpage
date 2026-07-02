"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="bg-bg-light min-h-screen flex flex-col justify-center items-center px-6 relative">
      
      {/* Tombol Kembali ke Beranda */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-dark transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Beranda
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm flex flex-col"
      >
        {/* Brand/Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-dark mb-8 justify-center">
          <Scissors className="w-6 h-6 text-primary" />
          <span>MAKUTHA<span className="text-primary">.</span></span>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-dark tracking-tight mb-1">Selamat Datang Kembali</h2>
          <p className="text-xs text-slate-400">Silakan masukkan akun Anda untuk mengakses dashboard.</p>
        </div>

        {/* Input Form */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-dark uppercase tracking-wider">Email</label>
            <input type="email" placeholder="name@company.com" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-dark uppercase tracking-wider">Password</label>
              <a href="#" className="text-[10px] font-semibold text-primary hover:underline">Lupa Password?</a>
            </div>
            <input type="password" placeholder="••••••••" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-primary hover:bg-opacity-95 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-md shadow-primary/10 mt-8">
          Masuk Sekarang
        </button>

        <p className="text-center text-xs text-slate-400 mt-6">
          Belum terdaftar sebagai mitra?{" "}
          <Link href="/partner" className="text-primary font-semibold hover:underline">Gabung di sini</Link>
        </p>
      </motion.div>
    </main>
  );
}