import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items = [
    {
      id: "cut",
      title: "Cut",
      span: "col-span-2 row-span-2",
      delay: "",
      src: "https://images.unsplash.com/photo-1619233543640-af09c173763b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "shave",
      title: "Shave",
      span: "",
      delay: "delay-75",
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "style",
      title: "Style",
      span: "",
      delay: "delay-100",
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "shop",
      title: "Shop",
      span: "col-span-2",
      delay: "delay-150",
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-12 2xl:px-24 text-white relative"
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl 2xl:text-6xl font-serif">Process & Result</h2>
        <a
          href="#"
          className="hidden md:inline-block border-b border-white pb-1 hover:opacity-70 transition-opacity 2xl:text-xl"
        >
          View Instagram
        </a>
      </div>

      {/* Main Grid - Reverted to Standard Size */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`${item.span} bg-neutral-900 relative group overflow-hidden cursor-pointer`}
          >
            <div
              className={`absolute inset-0 bg-neutral-800 animate-pulse ${item.delay}`}
            ></div>

            <motion.img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

            <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest text-2xl">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-pointer"
            ></motion.div>

            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-7xl aspect-[16/9] bg-neutral-900 overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 text-white/50 hover:text-white transition-colors bg-black/20 p-2 rounded-full backdrop-blur-md"
              >
                <X size={32} />
              </button>

              <motion.img
                src={items.find((i) => i.id === selectedId)?.src}
                alt={items.find((i) => i.id === selectedId)?.title}
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold uppercase tracking-widest text-4xl">
                  {items.find((i) => i.id === selectedId)?.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
