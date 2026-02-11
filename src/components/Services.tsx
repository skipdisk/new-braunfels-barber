import { motion } from "framer-motion";

const services = [
  { name: "Gents hair cut", price: "$35", description: "Precision cut, razor neck shave, hot towel." },
  { name: "Gents skin fade", price: "$40", description: "Seamless fade, razor finish, styling." },
  { name: "Gents scissor cut", price: "$40", description: "All scissors, tailored shape, texture." },
  { name: "Beard trim & shape", price: "$25", description: "Sculpting, line up, beard oil." },
  { name: "Hot Lather Shave", price: "$35", description: "Straight razor, hot towels, essential oils." },
  { name: "The Full Service", price: "$70", description: "Haircut + Beard Trim + Wash." },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-neutral-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center tracking-tight">Our Services</h2>
        
        <div className="divide-y divide-neutral-800">
          {services.map((service, index) => (
            <div key={index} className="py-6 flex justify-between items-baseline group hover:bg-neutral-900/50 transition-colors px-4 rounded-lg">
              <div>
                <h3 className="text-xl font-medium tracking-wide">{service.name}</h3>
                <p className="text-sm text-neutral-500 mt-1">{service.description}</p>
              </div>
              <span className="text-xl font-light tabular-nums">{service.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#" className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Book Full Menu
            </a>
        </div>
      </motion.div>
    </section>
  );
}
