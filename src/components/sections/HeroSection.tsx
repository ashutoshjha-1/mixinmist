import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { WaitlistForm } from "@/components/WaitlistForm";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <Dialog>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center space-y-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-white to-slate-300 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
          >
            Create Your Dream<br />Beauty Brand
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-slate-300 max-w-xl"
          >
            Launch your beauty brand in minutes, not months.
          </motion.p>
          
          <DialogTrigger asChild>
            <Button
              className="mt-8 bg-cyan-400 text-slate-900 hover:bg-cyan-500 font-medium px-8 py-6 text-lg rounded-xl"
              size="lg"
            >
              Get Started
            </Button>
          </DialogTrigger>
        </motion.div>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              Join Our Waitlist
            </DialogTitle>
          </DialogHeader>
          <div className="px-4 py-6">
            <WaitlistForm />
          </div>
        </DialogContent>
      </LampContainer>
    </Dialog>
  );
};
