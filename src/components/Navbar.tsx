import { motion } from 'motion/react';
import { Gamepad2, Settings, Users, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gaming-accent rounded-lg flex items-center justify-center font-black text-2xl italic tracking-tighter text-white">
            K
          </div>
          <span className="font-display text-xl tracking-widest uppercase">
            kady<span className="text-gaming-primary">kadsava</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
          <a href="#services" className="text-gaming-primary transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#education" className="hover:text-white transition-colors">Learn</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gaming-secondary text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter hover:bg-white transition-colors flex items-center gap-2"
        >
          Start Project <ArrowRight className="w-3 h-3" />
        </motion.button>
      </div>
    </nav>
  );
}
