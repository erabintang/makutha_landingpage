"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sub-komponen untuk counter angka yang smooth tanpa library tambahan
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 1500; // 1.5 detik
    let incrementTime = Math.max(Math.floor(totalDuration / end), 15);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 100); // Naik bertahap
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const stats = [
    { id: 1, value: 100, suffix: "+", label: "Partner Barbershop" },
    { id: 2, value: 5000, suffix: "+", label: "Total Booking Sukses" },
    { id: 3, value: 98, suffix: "%", label: "Akurasi AI Hair Try-On" },
    { id: 4, value: 4.9, suffix: "★", label: "Rating Kepuasan Pengguna" },
  ];

  return (
    <section className="bg-dark text-white py-16 relative overflow-hidden">
      {/* Dekorasi Grid Background halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-primary bg-clip-text text-transparent mb-2">
                {stat.id === 4 ? (
                  // Khusus untuk desimal rating
                  <span>4.9★</span>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}