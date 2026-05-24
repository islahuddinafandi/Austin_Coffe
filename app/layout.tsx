import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Austin Klepon Coffee | Ngopi Enak, Nggak Perlu Mahal",
  description: "Kopi berkualitas dengan harga yang bersahabat. Kopi Susu Gula Aren, Espresso, Americano, Latte, dan Roti Bakar. Austin Klepon Coffee — Ngopi Enak, Nggak Perlu Mahal.",
  keywords: ["kopi", "coffee", "kopi susu", "gula aren", "espresso", "americano", "latte", "Austin Klepon Coffee", "ngopi murah", "kopi enak"],
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#C8873A",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        <ClickSpark
          sparkColor="#C8873A"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
