
import { motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const images = [
  "/lovable-uploads/7ceddfe9-22d9-4b2c-b19d-49cba28b2524.png",
  "https://images.unsplash.com/photo-1562016600-ece13e8ba570",
  "https://images.unsplash.com/photo-1624344965199-ed40391d20f2",
  "https://images.unsplash.com/photo-1689553079282-45df1b35741b",
]

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <Floating sensitivity={0.5} className="absolute inset-0">
        <FloatingElement depth={1.5} className="top-[5%] left-[5%]">
          <motion.img
            src={images[0]}
            alt="Decorative"
            className="w-48 h-48 object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </FloatingElement>
        
        <FloatingElement depth={2} className="top-[10%] right-[10%]">
          <motion.img
            src={images[1]}
            alt="Decorative"
            className="w-64 h-40 object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="bottom-[15%] left-[15%]">
          <motion.img
            src={images[2]}
            alt="Decorative"
            className="w-56 h-56 object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </FloatingElement>

        <FloatingElement depth={2.5} className="bottom-[10%] right-[5%]">
          <motion.img
            src={images[3]}
            alt="Decorative"
            className="w-72 h-48 object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </FloatingElement>
      </Floating>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Make your website{" "}
            <TextRotate
              texts={[
                "lovely ❤️",
                "fun",
                "fancy",
                "weird",
                "🪩 funky",
                "sexy",
                "go 🚀",
              ]}
              mainClassName="text-[#0015ff] inline-block"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
            />
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-muted max-w-2xl mx-auto">
            with a growing library of ready-to-use react components & microinteractions.
            free & open source.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="rounded-full font-medium"
            >
              Check docs →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-[#0015ff] text-white border-none hover:bg-[#0015ff]/90"
            >
              ★ on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
