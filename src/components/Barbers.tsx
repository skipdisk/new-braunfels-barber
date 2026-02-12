import { motion } from "framer-motion";

const barbers = [
  { name: "Fred C.", role: "Owner", specialty: "Classic Cuts" },
  { name: "Jp G.", role: "Barber", specialty: "Fades & Beards" },
  { name: "Manny S.", role: "Barber", specialty: "Designs" },
  { name: "Cordy B.", role: "Barber", specialty: "Hot Towel Shaves" },
];

export function Barbers() {
  return (
    <section id="barbers" className="py-24 px-6 md:px-12 text-white relative">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            Barbers
          </h2>
          <p className="text-neutral-500 uppercase tracking-widest text-sm mt-4 md:mt-0">
            The Team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative border border-neutral-800 group-hover:border-white/20 transition-colors">
                {/* Placeholder for barber image */}
                <div className="absolute inset-0 bg-neutral-800"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 transition-opacity duration-300 transform">
                    {barber.specialty}
                  </p>
                  <h3 className="text-3xl font-serif mb-1">{barber.name}</h3>
                  <p className="text-sm text-neutral-300 font-medium tracking-wide">
                    {barber.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
