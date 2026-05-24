"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const socialPosts = [
  {
    handle: "@kopi_addict_jkt",
    text: "Kopi Susu Gula Aren AKC bikin hari Senin nggak se-menyebalkan biasanya 😭☕ worth every rupiah!",
    likes: "1.2k",
  },
  {
    handle: "@mahasiswa_hemat",
    text: "Akhirnya ketemu kopi enak yang nggak bikin dompet menangis. Austin Klepon Coffee is the real MVP 🙌",
    likes: "876",
  },
  {
    handle: "@freelancer_ngopi",
    text: "Work from cafe makin produktif karena nemuin AKC. Americano-nya strong banget, cocok buat deadline!",
    likes: "2.1k",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

const lifestyleImages = [
  { query: "coffee shop cozy warm latte art barista", aspect: "portrait" },
  { query: "indonesian coffee gula aren susu traditional", aspect: "landscape" },
  { query: "coffee cup morning aesthetic minimal", aspect: "square" },
  { query: "espresso machine cafe jakarta indonesia", aspect: "landscape" },
  { query: "roti bakar toast coffee breakfast", aspect: "portrait" },
  { query: "friends ngopi coffee together happy", aspect: "square" },
]

export function LifestyleSection() {
  const gridRef = useRef(null)
  const cardsRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" })
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-50px" })

  return (
    <section className="relative py-32 bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            className="font-mono text-[#C8873A] text-sm tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            KOMUNITAS AKC
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mt-4 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              NGOPI BARENG{" "}
            </motion.span>
            <motion.span
              className="text-[#C8873A] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              KITA
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
        >
          {lifestyleImages.map((img, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{ scale: 1.03, zIndex: 10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`relative overflow-hidden rounded-2xl bg-white/5 ${
                img.aspect === "portrait" ? "row-span-2" : ""
              } ${img.aspect === "landscape" ? "col-span-2" : ""}`}
            >
              <div
                className={`${
                  img.aspect === "portrait" ? "aspect-[3/4]" : img.aspect === "landscape" ? "aspect-[16/9]" : "aspect-square"
                } relative group`}
              >
                <motion.img
                  src={`/placeholder.svg?height=${img.aspect === "portrait" ? 400 : 300}&width=${img.aspect === "landscape" ? 600 : 300}&query=${img.query}`}
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-[#C8873A]/0 group-hover:bg-[#C8873A]/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#C8873A]/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="text-[#C8873A] font-bold text-sm">{post.handle.charAt(1).toUpperCase()}</span>
                </motion.div>
                <span className="font-mono text-white/60 text-sm">{post.handle}</span>
              </div>
              <p className="text-white text-base leading-relaxed">{post.text}</p>
              <motion.div
                className="flex items-center gap-2 mt-4 text-white/40 font-mono text-sm"
                whileHover={{ color: "#C8873A" }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {post.likes}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
