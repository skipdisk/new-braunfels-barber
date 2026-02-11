export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="flex justify-between items-center mb-12">
         <h2 className="text-4xl font-serif">Process & Result</h2>
         <a href="#" className="hidden md:inline-block border-b border-white pb-1 hover:opacity-70 transition-opacity">View Instagram</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
         <div className="col-span-2 row-span-2 bg-neutral-900 relative group overflow-hidden">
            <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
            {/* Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">Cut</div>
         </div>
         <div className="bg-neutral-900 relative group overflow-hidden">
             <div className="absolute inset-0 bg-neutral-800 animate-pulse delay-75"></div>
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">Shave</div>
         </div>
         <div className="bg-neutral-900 relative group overflow-hidden">
             <div className="absolute inset-0 bg-neutral-800 animate-pulse delay-100"></div>
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">Style</div>
         </div>
         <div className="col-span-2 bg-neutral-900 relative group overflow-hidden">
             <div className="absolute inset-0 bg-neutral-800 animate-pulse delay-150"></div>
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">Shop</div>
         </div>
      </div>
    </section>
  );
}
