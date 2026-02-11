import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col justify-center px-6 md:px-12">
      {/* Background Image Placeholder - Replace with actual image */}
      <div className="absolute inset-0 bg-neutral-900 z-0 opacity-40">
         {/* <img src="/path/to/hero.jpg" alt="Barber shop interior" className="w-full h-full object-cover" /> */}
      </div>

      <div className="z-10 max-w-4xl pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase leading-[0.9]"
        >
          Trim & <br/>
          <span className="font-extralight italic font-serif lowercase">Tonic</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-neutral-400 max-w-md text-sm md:text-base uppercase tracking-widest border-l border-white/20 pl-4 py-2"
        >
          Your chair is waiting. <br/> 
          Your transformation begins now.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-12"
        >
            <a href="#" className="inline-block bg-white text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors">
                Book Now
            </a>
        </motion.div>
      </div>

      {/* Decorative lines/elements based on inspiration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-white/20"></div>
      <div className="absolute bottom-12 right-12 hidden md:block text-xs text-right text-neutral-500 uppercase tracking-widest">
         New Braunfels<br/>
         Est. 2024
      </div>
    </section>
  );
}
