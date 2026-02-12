import {
  motion,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

interface CollageProps {
  scrollYProgress: MotionValue<number>;
}

const initialImages = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Barber",
    id: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=500&auto=format&fit=crop",
    alt: "Chair",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1621645582931-d1d3e6564943?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tools",
    id: 3,
  },
];

export function Collage({ scrollYProgress }: CollageProps) {
  const [images, setImages] = useState(initialImages);

  const moveToEnd = (from: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      const item = newImages.splice(from, 1)[0];
      newImages.push(item);
      return newImages;
    });
  };

  // Define transforms for the 3 positions (Front, Middle, Back)
  // Position 0 (Front)
  const y0 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const r0 = useTransform(scrollYProgress, [0, 1], [-3, -15]);

  // Position 1 (Middle)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const r1 = useTransform(scrollYProgress, [0, 1], [3, 10]);

  // Position 2 (Back)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const r2 = useTransform(scrollYProgress, [0, 1], [-2, 5]);

  const transforms = [
    { y: y0, rotate: r0, zIndex: 30, scale: 1 },
    { y: y1, rotate: r1, zIndex: 20, scale: 0.95 },
    { y: y2, rotate: r2, zIndex: 10, scale: 0.9 },
  ];

  return (
    <div className="relative w-full max-w-md 2xl:max-w-xl aspect-[3/4] md:mr-12 perspective-1000">
      <AnimatePresence initial={false} mode="popLayout">
        {images.map((img, index) => {
          // Only animate the first 3 images if we had more, but here we fixed 3.
          // We map the visual position (index) to the predefined transforms.
          const transform = transforms[index] || transforms[2];

          return (
            <motion.div
              key={img.id}
              layoutId={`collage-${img.id}`}
              onClick={() => {
                if (index === 0) moveToEnd(0); // Only click top image to flip
              }}
              style={{
                y: transform.y,
                rotate: transform.rotate,
                zIndex: transform.zIndex,
              }}
              animate={{
                scale: transform.scale,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                layout: { duration: 0.3 },
              }}
              className={`absolute w-3/4 aspect-[3/4] bg-neutral-800 border-4 border-black/50 shadow-2xl overflow-hidden cursor-pointer
                ${index === 0 ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-[1.02]" : ""}
                ${index === 1 ? "bottom-10 left-10 w-2/3 origin-bottom-left" : ""}
                ${index === 2 ? "top-10 right-0 w-2/3 origin-bottom-right" : ""}
              `}
              // Force position styles that might be overridden by class names if not handled carefully
              // Actually, Framer Motion 'layout' handles position changes if we use Flex/Grid reordering,
              // but here we are using absolute positioning.
              // We need to animate the TOP/LEFT/RIGHT properties based on index.
              initial={false}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover transition-all duration-500 ${index === 0 ? "grayscale-0" : "grayscale opacity-60"}`}
                layout // Animate image content adjustments
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Click hint */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-neutral-500 pointer-events-none"
      >
        Click to flip
      </motion.div>
    </div>
  );
}
