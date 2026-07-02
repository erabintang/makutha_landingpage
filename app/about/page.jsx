"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Shield, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Sparkles, title: "Inovasi AI", desc: "Membawa teknologi computer vision terdepan ke industri perawatan rambut tradisional." },
    { icon: Users, title: "Pemberdayaan Mitra", desc: "Membantu barbershop lokal berkembang lewat sistem manajemen digital modern." },
    { icon: Shield, title: "Kepercayaan & Presisi", desc: "Memberikan simulasi gaya rambut yang akurat demi kepuasan maksimal." },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-bg-light min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark mb-4"
            >
              Tentang MAKUTHA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Kami percaya bahwa potongan rambut yang tepat bisa meningkatkan rasa percaya diri seseorang secara instan. MAKUTHA hadir untuk menghapus tebak-tebakan saat potong rambut.
            </motion.p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark text-lg mb-2 tracking-tight">{val.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}