import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Categorized for clarity, though displayed in two groups as requested
const initialServices = [
  {
    name: "Fade",
    price: "$35",
    description: "Seamless transition, tailored to your style.",
  },
  {
    name: "Razor Fade",
    price: "$40",
    description: "Skin-tight fade with straight razor finish.",
  },
  {
    name: "Skin Fade",
    price: "$38",
    description: "Smooth gradient to skin, precision detailing.",
  },
  {
    name: "Flat Top",
    price: "$35",
    description: "Classic box shape, level and precise.",
  },
  {
    name: "Specialty Fade",
    price: "$38",
    description: "Burst fades, mohawks, and creative styles.",
  },
  {
    name: "Ear/Eyebrow Trim",
    price: "$3",
    description: "Detailing for a clean, sharp look.",
  },
  {
    name: "Add Full Service",
    price: "$10",
    description: "Haircut paired with wash and beard trim.",
  },
];

const expandedServices = [
  {
    name: "Detailed Beard Trim",
    price: "$2",
    description: "Sculpting, lining, and conditioning.",
  },
  {
    name: "Hot Towel Face Shave",
    price: "$30",
    description: "Traditional straight razor shave with hot towels.",
  },
  {
    name: "Head Shave",
    price: "$35",
    description: "Full smooth scalp shave with razor.",
  },
  {
    name: "Regular Haircut",
    price: "$35",
    description: "Scissors or clipper cut, styled to finish.",
  },
  {
    name: "Women's Haircut",
    price: "$45",
    description: "Precision cut for short/medium styles.",
  },
  {
    name: "Women's Haircut with Styling",
    price: "$55",
    description: "Cut followed by blow-dry and style.",
  },
];

export function Services() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="py-24 px-6 md:px-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center tracking-tight">
          Our Services
        </h2>

        <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
          {initialServices.map((service) => (
            <ServiceItem key={service.name} service={service} />
          ))}

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="divide-y divide-neutral-800">
                  {expandedServices.map((service) => (
                    <ServiceItem key={service.name} service={service} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center flex flex-col gap-6 items-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                View All Services <ChevronDown size={16} />
              </>
            )}
          </button>

          <a
            href="#"
            className="inline-block border border-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Book Appointment
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceItem({
  service,
}: {
  service: { name: string; price: string; description: string };
}) {
  return (
    <div className="py-6 flex justify-between items-baseline group hover:bg-white/5 transition-colors px-4 rounded-lg">
      <div>
        <h3 className="text-xl font-medium tracking-wide">{service.name}</h3>
        <p className="text-sm text-neutral-500 mt-1">{service.description}</p>
      </div>
      <span className="text-xl font-light tabular-nums">{service.price}</span>
    </div>
  );
}
