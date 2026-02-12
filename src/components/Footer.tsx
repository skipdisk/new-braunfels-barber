import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-neutral-950 text-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-900 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif mb-6">New Braunfels Barber</h2>
          <p className="max-w-md text-neutral-500">
            Experience the art of traditional barbering in a modern, relaxed
            atmosphere. Walk-ins welcome, appointments preferred.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-400">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-neutral-300">
              <MapPin size={20} className="shrink-0" />
              <span>
                1430 Unicorn Ave Suite 102
                <br />
                New Braunfels, TX 78130
              </span>
            </li>
            <li className="flex items-center gap-4 text-neutral-300">
              <Phone size={20} className="shrink-0" />
              <span>(830) 360-6647</span>
            </li>
            <li className="flex items-center gap-4 text-neutral-300">
              <Mail size={20} className="shrink-0" />
              <span>hello@nbbarber.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-400">
            Hours
          </h3>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex justify-between">
              <span>Mon - Fri</span> <span>9am - 6pm</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span> <span>8am - 4:30pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>{" "}
              <span className="text-neutral-600">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-neutral-900 text-sm text-neutral-600">
        <p>
          &copy; {new Date().getFullYear()} New Braunfels Barber. All rights
          reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
