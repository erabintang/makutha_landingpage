"use client";

import { motion } from "framer-motion";

export default function Preview() {
  const screens = [
    { title: "HOME", desc: "Feed & Rekomendasi", gradient: "from-slate-900 via-indigo-950 to-slate-900" },
    { title: "DETAIL", desc: "Profil Barber & Rating", gradient: "from-slate-900 via-purple-950 to-slate-900" },
    { title: "AI TRY-ON", desc: "Kamera & Scan Wajah", gradient: "from-slate-900 via-violet-950 to-slate-900" },
    { title: "BOOKING", desc: "Pilih Jam & Slot", gradient: "from-slate-900 via-fuchsia-950 to-slate-900" },
    { title: "PAYMENT", desc: "Metode & Invoice", gradient: "from-slate-900 via-pink-950 to-slate-900" },
    { title: "TICKET", desc: "Check-in QR Code", gradient: "from-slate-900 via-cyan-950 to-slate-900" },
  ];

  return (
    <section className="py-24 md:py-32 bg-dark text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Interface Preview</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Aplikasi Native yang Intuitif
          </h2>
          <p className="text-sm text-slate-400 mt-4">
            Didesain khusus untuk kenyamanan navigasi maksimal di genggaman tanganmu.
          </p>
        </div>

        {/* Jajaran Mockup HP Scrolling/Flex Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 scrollbar-none snap-x snap-mandatory mask-linear">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="flex-none w-[240px] h-[480px] bg-black rounded-[36px] p-2.5 shadow-2xl border-2 border-slate-800/80 snap-center"
            >
              {/* Inner screen */}
              <div className={`w-full h-full rounded-[28px] bg-gradient-to-b ${screen.gradient} p-5 flex flex-col justify-between relative overflow-hidden border border-white/5`}>
                
                {/* Speaker pill */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-20" />
                
                {/* Header Screen */}
                <div className="pt-6">
                  <div className="w-fit px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold tracking-widest text-primary-light border border-white/10">
                    {screen.title}
                  </div>
                </div>

                {/* Dummy UI Center */}
                <div className="flex flex-col gap-3 my-auto opacity-40">
                  <div className="h-4 bg-white/20 rounded-full w-3/4" />
                  <div className="h-20 bg-white/10 rounded-2xl w-full" />
                  <div className="h-12 bg-white/10 rounded-2xl w-full" />
                </div>

                {/* Footer Screen */}
                <div className="relative z-10">
                  <h4 className="font-bold text-sm text-white tracking-tight mb-1">{screen.desc}</h4>
                  <p className="text-[10px] text-slate-400">MAKUTHA Mobile App v1.0</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}