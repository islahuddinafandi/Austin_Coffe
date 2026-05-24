"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const handleSubmit = () => {
    if (!email) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setEmail("")
    }, 1500)
  }

  const footerLinks = [
    {
      title: "Menu",
      links: ["Kopi Susu Gula Aren", "Espresso", "Americano", "Latte", "Roti Bakar"],
    },
    {
      title: "Kunjungi",
      links: ["Beranda", "Menu Kami", "Keunggulan", "Komunitas", "Kemitraan"],
    },
    {
      title: "Kemitraan",
      links: ["Buka Outlet", "Catering Event", "Korporat", "Komunitas Ngopi"],
    },
    {
      title: "Info",
      links: ["Tentang Kami", "Karir", "Kontak", "Kebijakan Privasi"],
    },
  ]

  return (
    <footer ref={footerRef} id="careers" className="relative bg-[#1A1A1A] pt-16 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              SIAP NGOPI
            </motion.span>
            <motion.span
              className="block text-[#C8873A]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              BARENG KAMI?
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-12"
        >
          {!submitted ? (
            <>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@kamu.com"
                  className="flex-1 bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#C8873A] transition-all duration-300"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
                <motion.button
                  className="bg-[#C8873A] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={handleSubmit}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">{isSubmitting ? "Mendaftar..." : "☕ Daftar Promo"}</span>
                </motion.button>
              </div>
              <p className="text-white/40 font-mono text-xs mt-2 text-center">
                Dapat promo eksklusif & info menu baru. No spam, promise! ✌️
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <p className="text-[#C8873A] font-bold text-lg">☕ Yeay, kamu udah join!</p>
              <p className="text-white/50 font-mono text-sm mt-1">Tunggu promo spesial dari kami ya~</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 font-mono text-xs max-w-xl mx-auto leading-relaxed">
            Austin Klepon Coffee — kopi berkualitas dengan harga yang bersahabat. Dibuat dengan biji pilihan, diseduh dengan cinta, dinikmati bersama. Karena ngopi enak emang nggak harus mahal.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-white text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                      <Link href="#" className="text-white/60 hover:text-[#C8873A] font-mono text-xs transition-colors inline-block">
                        {item}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-xl font-black">
              <span className="text-white">Austin </span>
              <span className="text-[#C8873A]">Klepon</span>
              <span className="text-[#F5C842]"> Coffee</span>
            </span>
          </motion.div>

          <p className="text-white/40 font-mono text-xs">© 2025 Austin Klepon Coffee. All rights reserved.</p>

          <motion.p
            className="text-white/30 font-mono text-xs cursor-pointer"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            animate={
              isHovering
                ? { rotate: [0, -5, 5, -5, 5, 0], scale: [1, 1.1, 1], color: "#C8873A" }
                : { rotate: 0, scale: 1, color: "rgba(255,255,255,0.3)" }
            }
            transition={{ duration: 0.5 }}
          >
            dibuat dengan ☕ & cinta
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[20rem] font-black text-white/[0.02] pointer-events-none select-none leading-none whitespace-nowrap"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        AKC
      </motion.div>
    </footer>
  )
}
