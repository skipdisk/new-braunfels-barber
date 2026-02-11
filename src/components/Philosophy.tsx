export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Our Philosophy</h2>
        <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
          "A return to the classic barbershop experience, where the craft is respected and the conversation is genuine."
        </h3>
        <p className="text-neutral-400 text-lg leading-relaxed mb-12">
          New Braunfels Barber was founded on the belief that a haircut is more than just a routine—it's a ritual.
          We combine traditional techniques with modern style to create a look that is uniquely yours. 
          Situated in the heart of Texas, we honor the heritage of our community while providing a space for men to relax and recharge.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border border-neutral-800 p-4 rounded-full aspect-square flex flex-col justify-center items-center">
                <span className="text-2xl font-bold block">5.0</span>
                <span className="text-xs text-neutral-500 uppercase">Rating</span>
            </div>
            <div className="border border-neutral-800 p-4 rounded-full aspect-square flex flex-col justify-center items-center">
                <span className="text-2xl font-bold block">15+</span>
                <span className="text-xs text-neutral-500 uppercase">Years Exp</span>
            </div>
            <div className="border border-neutral-800 p-4 rounded-full aspect-square flex flex-col justify-center items-center">
                <span className="text-2xl font-bold block">1000+</span>
                <span className="text-xs text-neutral-500 uppercase">Clients</span>
            </div>
             <div className="border border-neutral-800 p-4 rounded-full aspect-square flex flex-col justify-center items-center">
                <span className="text-2xl font-bold block">100%</span>
                <span className="text-xs text-neutral-500 uppercase">Satisfaction</span>
            </div>
        </div>
      </div>
    </section>
  );
}
