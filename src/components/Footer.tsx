import { Gamepad2, Twitter, Instagram, Youtube, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col">
            <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">Clients</span>
            <span className="text-lg font-black italic uppercase">12+ YouTubers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">Total Views</span>
            <span className="text-lg font-black italic uppercase text-gaming-primary">4.5M+</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">Retainer</span>
            <span className="text-lg font-black italic uppercase">Monthly Packages</span>
          </div>
        </div>

        <div className="flex gap-4">
          {[Youtube, Instagram, Twitter, Github].map((Icon, i) => (
            <motion.a 
              key={i} 
              href="#" 
              whileHover={{ y: -5, backgroundColor: "#fff", color: "#000" }}
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 transition-all border border-zinc-700"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em]">
          © 2024 KADYKADSAVA. BUILT FOR THE GRIND.
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-gaming-secondary animate-pulse" />
           <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">System Status: Optimal</span>
        </div>
      </div>
    </footer>
  );
}
