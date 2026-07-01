"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, MapPin, Calendar, CreditCard, 
  Ticket, Heart, Bot, Bell 
} from "lucide-react";

export default function Feature() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Hairstyle Preview",
      desc: "Coba ratusan model rambut secara real-time lewat kamera HP sebelum potong.",
      color: "from-purple-500/10 to-indigo-500/10",
      iconColor: "text-primary"
    },
    {
      icon: MapPin,
      title: "Nearby Barbershop",
      desc: "Temukan barbershop premium terdekat dengan navigasi GPS yang akurat.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500"
    },
    {
      icon: Calendar,
      title: "Booking Online",
      desc: "Pilih kapster andalan, hari, dan jam potong rambut tanpa perlu antre di lokasi.",
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Cashless Payment",
      desc: "Bayar instan dan aman pakai E-Wallet, QRIS, atau Virtual Account pilihanmu.",
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-500"
    },
    {
      icon: Ticket,
      title: "Digital Ticket",
      desc: "Dapatkan tiket digital otomatis lengkap dengan QR Code untuk check-in cepat.",
      color: "from-rose-500/10 to-pink-500/10",
      iconColor: "text-rose-500"
    },
    {
      icon: Heart,
      title: "Favorite Barber",
      desc: "Simpan barbershop dan kapster langgananmu untuk booking lebih cepat berikutnya.",
      color: "from-red-500/10 to-rose-500/10",
      iconColor: "text-red-500"
    },
    {
      icon: Bot,
      title: "AI Recommendation",
      desc: "Dapatkan rekomendasi gaya rambut otomatis berdasarkan bentuk wajah unikmu.",
      color: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-secondary"
    },
    {
      icon: Bell,
      title: "Reminder Booking",
      desc: "Notifikasi otomatis biar kamu gak kelewatan jadwal potong rambut.",
      color: "from-fuchsia-500/10 to-pink-500/10",
      iconColor: "text-fuchsia-500"
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary mb-3"
          >
            Fitur Masa Depan
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark"
          >
            Solusi Total untuk Rambut dan Penampilanmu
          </motion.h2>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-bg-light border border-slate-200/60 p-6 rounded-2xl overflow-hidden transition-all hover:shadow-md"
              >
                {/* Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${feature.iconColor} mb-5 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-dark mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}