import { motion } from "framer-motion";

const barbers = [
  { name: "Austin", role: "Master Barber", specialty: "Classic Cuts" },
  { name: "Tara", role: "Senior Barber", specialty: "Fades & Beards" },
  { name: "Santos", role: "Barber", specialty: "Designs" },
];

export function Barbers() {
  return (
    <section id="masters" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-8">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight">Masters</h2>
            <p className="text-neutral-500 uppercase tracking-widest text-sm mt-4 md:mt-0">The Team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-neutral-900 mb-6 overflow-hidden relative">
                 {/* Placeholder for barber image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                 <div className="absolute bottom-4 left-4">
                     <h3 className="text-2xl font-bold">{barber.name}</h3>
                     <p className="text-sm text-neutral-400">{barber.role}</p>
                 </div>
              </div>
              <div className="flex justify-between items-center text-sm text-neutral-500">
                  <span>Specialty</span>
                  <span className="text-white">{barber.specialty}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
