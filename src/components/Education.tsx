import { motion } from 'motion/react';
import { BookOpen, Video, Code, Palette, ArrowUpRight } from 'lucide-react';

const TIPS = [
  {
    title: "The Phonk Flow",
    desc: "How to use fast-frequency cuts to match high-bpm tracks.",
    icon: Video,
    color: "text-gaming-primary"
  },
  {
    title: "Retention Loops",
    desc: "Secrets to keeping viewers watched for 100%+ of your shorts.",
    icon: ArrowUpRight,
    color: "text-gaming-secondary"
  },
  {
    title: "Anime Presets",
    desc: "Create cinematic overlays that scream 'Protagonist energy'.",
    icon: Palette,
    color: "text-gaming-accent"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex bg-gaming-accent/10 text-gaming-primary px-3 py-1 rounded border border-gaming-primary/20 text-xs font-black uppercase mb-6 w-fit">
              <BookOpen className="w-4 h-4 mr-2 inline" />
              Editing Masterclass
            </div>
            <h2 className="font-display text-7xl md:text-8xl font-black uppercase italic leading-[0.85] mb-8">
              Learn To <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-primary to-gaming-secondary">Create</span> Viral Heat.
            </h2>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
              We don't just edit videos. We build brands. Check out our free tiers of editing presets and tutorials to level up your craft.
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-xl font-black uppercase tracking-tighter text-sm border-b-4 border-zinc-300">
              Explore Tutorials
            </button>
          </div>

          <div className="lg:w-1/2 grid gap-4">
            {TIPS.map((tip, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 flex justify-between items-center group cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-black uppercase italic group-hover:text-gaming-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-bold mt-1">
                    {tip.desc}
                  </p>
                </div>
                <div className="bg-gaming-accent text-white px-6 py-2 rounded-lg font-black uppercase text-xs skew-x-[-10deg] shadow-lg shadow-gaming-accent/20 group-hover:bg-gaming-secondary group-hover:text-black transition-all">
                  Watch Now
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
