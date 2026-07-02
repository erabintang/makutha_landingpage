"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Eye, Scissors } from "lucide-react";

export default function Partner() {
  const barbers = [
    { id: 1, name: "Kingsman Barbershop", rating: 5, location: "Semarang Tengah", bookings: 142 },
    { id: 2, name: "Barberia Premium", rating: 5, location: "Semarang Barat", bookings: 120 },
    { id: 3, name: "The Cut Company", rating: 4.9, location: "Semarang Selatan", bookings: 98 },
    { id: 4, name: "Captain Barber", rating: 4.8, location: "Tembalang", bookings: 210 },
  ];

  return (
    <section id="partner" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Mitra Terpilih</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark max-w-xl">
              Jelajahi Barbershop Premium di Sekitarmu
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group h-fit">
            Lihat Semua Mitra
            <Scissors className="w-4 h-4 transform group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        {/* Grid Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-bg-light border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Dummy Image Placeholder dengan Efek Gradasi */}
                <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-800 to-dark mb-4 relative overflow-hidden flex items-center justify-center">
                  <Scissors className="w-8 h-8 text-white/10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-white tracking-wide border border-white/10">
                    {barber.bookings} Booking
                  </span>
                </div>

                {/* Info Utama */}
                <h3 className="font-bold text-dark text-lg tracking-tight group-hover:text-primary transition-colors mb-2">
                  {barber.name}
                </h3>

                {/* Rating & Lokasi */}
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{barber.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{barber.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-dark font-semibold text-sm py-2.5 rounded-xl group-hover:bg-dark group-hover:text-white group-hover:border-dark transition-all shadow-sm">
                <Eye className="w-4 h-4" />
                Lihat Detail
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}