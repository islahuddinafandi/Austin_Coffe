"use client"

import type React from "react"
import { motion, AnimatePresence, useSpring } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const flavors = [
  {
    id: 1,
    name: "Kopi Susu Gula Aren",
    tagline: "⭐ Best Seller",
    description: "Perpaduan sempurna espresso segar dengan susu pilihan dan manisnya gula aren asli. Satu tegukan, langsung jatuh cinta.",
    image: "/images/drink2.png",
    bgColor: "from-[#C8873A]/20 via-[#C8873A]/10 to-transparent",
    accentColor: "#C8873A",
    badges: ["Gula Aren Asli", "Susu Segar", "Tanpa Pengawet", "Espresso Shot"],
  },
  {
    id: 2,
    name: "Espresso",
    tagline: "Bold & Pure",
    description: "Biji kopi Arabika pilihan, diseduh dengan teknik espresso untuk rasa yang kuat, pahit yang pas, dan aroma yang bikin nagih.",
    image: "/images/drink1.png",
    bgColor: "from-[#2C1810]/20 via-[#2C1810]/10 to-transparent",
    accentColor: "#8B4513",
    badges: ["Arabika 100%", "Single Shot", "Tanpa Gula", "Full Body"],
  },
  {
    id: 3,
    name: "Americano",
    tagline: "Smooth & Strong",
    description: "Espresso yang diencerkan dengan air panas untuk menghasilkan rasa yang lebih ringan tapi tetap nendang. Pilihan sempurna untuk ngopi seharian.",
    image: "/images/drink2.png",
    bgColor: "from-[#4A4A4A]/20 via-[#4A4A4A]/10 to-transparent",
    accentColor: "#6B6B6B",
    badges: ["Double Shot", "Ringan di Perut", "No Sugar", "Long Black"],
  },
  {
    id: 4,
    name: "Latte",
    tagline: "Creamy Vibes",
    description: "Espresso lembut berpadu dengan steamed milk creamy yang bikin mood naik seketika. Cocok buat kamu yang suka kopi tapi nggak terlalu pahit.",
    image: "/images/drink1.png",
    bgColor: "from-[#F5C842]/20 via-[#F5C842]/10 to-transparent",
    accentColor: "#D4A017",
    badges: ["Steamed Milk", "Creamy", "Mild Espresso", "Comfort Drink"],
  },
  {
    id: 5,
    name: "Roti Bakar",
    tagline: "Teman Ngopi",
    description: "Roti bakar homemade dengan pilihan topping: coklat keju, kacang, atau selai spesial Austin. Sempurna menemani kopi favorit kamu.",
    image: "/images/drink2.png",
    bgColor: "from-[#8B4513]/20 via-[#D2691E]/10 to-transparent",
    accentColor: "#D2691E",
    badges: ["Homemade", "Coklat Keju", "Selai Kacang", "Crispy Outside"],
  },
  {
    id: 6,
    name: "Klepon Special",
    tagline: "Coming Soon",
    description: "Sesuatu yang spesial sedang kami racik... Menu rahasia dengan cita rasa nusantara yang belum pernah ada sebelumnya. Stay tuned!",
    image: "/mystery-energy-drink-can-silhouette.jpg",
    bgColor: "from-[#C8873A]/20 via-[#F5C842]/5 to-transparent",
    accentColor: "#C8873A",
    mystery: true,
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
}

export function FlavorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])
  const currentFlavor = flavors[currentIndex]

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    rotateY.set(x * 5)
    rotateX.set(-y * 5)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + flavors.length) % flavors.length
    setCurrentIndex(newIndex)
    setPage([page + newDirection, newDirection])
  }

  return (
    <section id="flavours" className="relative py-16 bg-white overflow-hidden">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${currentFlavor.bgColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        key={currentFlavor.id}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#1A1A1A]/60 text-xs tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            MENU KAMI
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              PILIH{" "}
            </motion.span>
            <motion.span
              className="inline-block"
              style={{ color: currentFlavor.accentColor }}
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              KOPIMU
            </motion.span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={() => paginate(-1)}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#1A1A1A] items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentFlavor.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-3xl"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className={`bg-white rounded-3xl p-6 md:p-8 border-2 border-[#1A1A1A]/10 shadow-xl ${currentFlavor.mystery ? "relative overflow-hidden" : ""}`}
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {currentFlavor.mystery && (
                    <motion.div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      animate={{ opacity: [0.05, 0.15, 0.05] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}

                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <motion.div
                      className="relative aspect-[3/4] flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src={currentFlavor.image || "/placeholder.svg"}
                        alt={currentFlavor.name}
                        fill
                        className={`object-contain ${currentFlavor.mystery ? "blur-sm grayscale" : ""}`}
                      />
                      {currentFlavor.mystery && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <span className="text-7xl">🍵</span>
                        </motion.div>
                      )}
                    </motion.div>

                    <div className="space-y-4">
                      <div>
                        <motion.span
                          className="font-mono text-xs tracking-widest font-bold"
                          style={{ color: currentFlavor.accentColor }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {currentFlavor.tagline}
                        </motion.span>
                        <motion.h3
                          className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tighter mt-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        >
                          {currentFlavor.name}
                        </motion.h3>
                      </div>

                      <motion.p
                        className="text-sm text-[#1A1A1A]/60 font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentFlavor.description}
                      </motion.p>

                      {!currentFlavor.mystery && currentFlavor.badges && (
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {currentFlavor.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-2 py-1 bg-[#1A1A1A]/5 rounded-full text-xs font-mono text-[#1A1A1A]/60"
                            >
                              {badge}
                            </span>
                          ))}
                        </motion.div>
                      )}

                      {!currentFlavor.mystery && (
                        <motion.button
                          className="px-6 py-3 rounded-full font-bold text-sm tracking-wide w-full md:w-auto relative overflow-hidden text-white"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          style={{ backgroundColor: currentFlavor.accentColor }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <motion.span
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                          <span className="relative z-10">☕ Pesan Sekarang</span>
                        </motion.button>
                      )}

                      {currentFlavor.mystery && (
                        <motion.div
                          className="flex items-center gap-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-[#C8873A] rounded-full"
                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <span className="font-mono text-xs text-[#1A1A1A]/60">Segera hadir... 🤫</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={() => paginate(1)}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#1A1A1A] items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button onClick={() => paginate(-1)} className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center" whileTap={{ scale: 0.9 }}>
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button onClick={() => paginate(1)} className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center" whileTap={{ scale: 0.9 }}>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {flavors.map((flavor, index) => (
              <motion.button
                key={flavor.id}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1
                  setCurrentIndex(index)
                  setPage([index, newDirection])
                }}
                className="h-2 rounded-full transition-all"
                style={{ backgroundColor: index === currentIndex ? flavor.accentColor : "#1A1A1A20" }}
                animate={{ width: index === currentIndex ? 28 : 10 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
