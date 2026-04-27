import { motion } from 'motion/react';
import { PORTFOLIO } from '../constants';
import { Play } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase italic font-black leading-none mb-4">
            Recent <span className="text-gaming-secondary">Works</span>
          </h2>
          <div className="h-2 w-24 bg-gaming-secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col"
            >
              <div className="h-2/3 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gaming-primary/20 to-zinc-900 z-0 opacity-40" />
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover z-10 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white bg-black/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-6 h-6 fill-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 h-1/3 flex flex-col justify-center bg-zinc-900 z-30">
                <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">
                  {item.category} / Pro Edit
                </div>
                <h3 className="text-lg font-black uppercase italic leading-tight group-hover:text-gaming-secondary transition-colors font-display">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="text-sm font-bold uppercase tracking-widest border-b border-gaming-secondary pb-1 hover:text-gaming-secondary transition-colors">
            View full portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
