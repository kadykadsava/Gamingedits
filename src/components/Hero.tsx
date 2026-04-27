import { motion } from 'motion/react';
import { Play, TrendingUp, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gaming-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-gaming-accent/20 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex bg-gaming-accent/10 text-gaming-primary px-3 py-1 rounded border border-gaming-primary/20 text-xs font-bold uppercase mb-6 w-fit">
              Gaming Editing Specialist
            </div>
            
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.85] mb-8">
              Level Up <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-primary to-gaming-secondary">Your Content</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
              From high-octane Valorant montages to viral-ready Reels. I build the brand that turns viewers into fans.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="bg-white text-black p-4 rounded-xl flex-1 border-b-4 border-zinc-400 min-w-[160px]">
                <p className="text-[10px] uppercase font-bold text-zinc-500">Starting at</p>
                <p className="text-2xl font-black italic">₹200<span className="text-sm font-normal not-italic"> /edit</span></p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl flex-1 border-b-4 border-zinc-900 min-w-[160px]">
                <p className="text-[10px] uppercase font-bold text-zinc-500">Fast Delivery</p>
                <p className="text-2xl font-black italic">24H<span className="text-sm font-normal not-italic"> Turnaround</span></p>
              </div>
            </div>            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gaming-secondary text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter text-xs flex items-center gap-2 hover:bg-white transition-colors"
              >
                Start Your Project <Play className="w-3 h-3 fill-black" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zinc-800 hover:bg-zinc-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-tighter text-xs"
              >
                View Showreel
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-zinc-800 pt-8">
              <div>
                <div className="text-2xl font-black flex items-center gap-1 uppercase italic">
                  500+ <span className="text-[10px] text-gaming-primary font-bold not-italic">Videos</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Delivered</div>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <div className="text-2xl font-black flex items-center gap-1 uppercase text-gaming-secondary italic">
                  50M+ <span className="text-[10px] text-gaming-secondary font-bold not-italic">Views</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Generated</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-gaming-primary/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gaming-accent/20 to-zinc-950 z-0" />
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200" 
                alt="Gaming Editing Preview"
                className="w-full h-full object-cover grayscale opacity-60 z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-8 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <Play className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase italic tracking-wider">Esports Fragmovie</div>
                    <div className="text-[10px] text-zinc-400 uppercase font-bold">Valorant / Phonk Style</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-black border border-white/10 p-4 rounded-lg hidden md:block"
            >
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-1 bg-gaming-primary/40 rounded-full" />
                ))}
              </div>
              <div className="mt-2 text-[10px] font-mono text-gaming-primary uppercase">Rendering... 98%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
