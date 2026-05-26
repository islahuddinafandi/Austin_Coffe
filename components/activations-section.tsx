"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Store, Users, Building2, Truck } from "lucide-react"

const activations = [
  {
    icon: Store,
    title: "Buka Outlet Bersama",
    description: "Bergabung jadi mitra Austin Klepon Coffee. Modal terjangkau, support penuh dari tim kami.",
    cta: "Daftar Mitra",
    // Menggunakan format internasional tanpa angka 0 di depan untuk wa.me
    link: "https://wa.me/6282123155569?text=Halo%20Austin%20Klepon%20Coffee,%20saya%20tertarik%20untuk%20Daftar%20Mitra%20Buka%20Outlet%20Bersama.",
  },
  {
    icon: Users,
    title: "Komunitas Ngopi",
    description: "Join komunitas pecinta kopi AKC. Event rutin, diskon khusus member, dan banyak kejutan.",
    cta: "Gabung Sekarang",
    link: "https://wa.me/6282123155569?text=Halo%20Austin%20Klepon%20Coffee,%20saya%20ingin%20bergabung%20dengan%20Komunitas%20Ngopi.",
  },
  {
    icon: Building2,
    title: "Korporat & Kantor",
    description: "Supply kopi untuk kantor atau acara perusahaan kamu. Harga spesial untuk pemesanan bulk.",
    cta: "Minta Penawaran",
    link: "https://wa.me/6282123155569?text=Halo%20Austin%20Klepon%20Coffee,%20saya%20ingin%20meminta%20penawaran%20untuk%20Korporat%20%26%20Kantor.",
  },
  {
    icon: Truck,
    title: "Catering & Event",
    description: "Kami siap hadir di acara kamu — wedding, gathering, bazaar, dan semua event spesialmu.",
    cta: "Pesan Catering",
    link: "https://wa.me/6282123155569?text=Halo%20Austin%20Klepon%20Coffee,%20saya%20ingin%20memesan%20Catering%20%26%20Event.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

export function ActivationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="distributors" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#1A1A1A]/60 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            KEMITRAAN
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              BERKEMBANG BERSAMA{" "}
            </motion.span>
            <motion.span
              className="text-[#C8873A] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              AKC
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-[#1A1A1A]/60 font-mono mt-2 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Dari buka outlet bareng sampai supply event, kami siap jadi partner terpercayamu.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {activations.map((activation) => (
            <motion.div
              key={activation.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              className="group bg-[#1A1A1A] rounded-2xl p-6 cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-[#C8873A]/0 group-hover:bg-[#C8873A]"
                transition={{ duration: 0.4 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="w-11 h-11 rounded-xl bg-[#C8873A] flex items-center justify-center mb-4 group-hover:bg-[#1A1A1A] transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <activation.icon className="w-5 h-5 text-white group-hover:text-[#C8873A] transition-colors duration-300" />
                </motion.div>
                <h3 className="text-lg font-black text-white group-hover:text-[#1A1A1A] tracking-tight mb-2 transition-colors duration-300">
                  {activation.title}
                </h3>
                <p className="text-white/60 group-hover:text-[#1A1A1A]/60 font-mono text-xs leading-relaxed mb-4 transition-colors duration-300">
                  {activation.description}
                </p>
                
                {/* Mengubah button menjadi motion.a agar bisa melakukan navigasi link luar (WhatsApp) */}
                <motion.a
                  href={activation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C8873A] group-hover:text-[#1A1A1A] font-bold text-xs tracking-wide transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {activation.cta}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}