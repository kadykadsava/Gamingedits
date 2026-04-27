import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase italic font-black leading-none mb-6">
            Simple <span className="text-gaming-primary">Scales</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto uppercase font-black tracking-widest text-[10px]">
            Pick a package that fits your current growth stage
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border ${tier.recommended ? 'bg-white text-black border-zinc-200 border-b-8 border-b-zinc-400 shadow-2xl shadow-gaming-primary/10' : 'bg-zinc-900 border-zinc-800 border-b-8 border-b-zinc-950'}`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gaming-gradient text-white text-[10px] font-black uppercase px-4 py-1 flex items-center gap-2 rounded-full italic tracking-tighter">
                  <Star className="w-3 h-3 fill-white" /> Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xs font-black uppercase tracking-widest mb-2 ${tier.recommended ? 'text-zinc-500' : 'text-zinc-500'}`}>{tier.name}</h3>
                <div className="text-5xl font-black italic uppercase font-display">{tier.price}</div>
                <p className={`text-xs mt-2 ${tier.recommended ? 'text-zinc-400' : 'text-zinc-500'}`}>{tier.description}</p>
              </div>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 ${tier.recommended ? 'text-gaming-primary' : 'text-gaming-primary'}`} />
                    <span className={`text-sm font-bold ${tier.recommended ? 'text-zinc-600' : 'text-zinc-400'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 font-black uppercase tracking-tighter text-xs transition-all rounded-xl ${
                tier.recommended ? 'bg-gaming-secondary text-black hover:bg-gaming-accent hover:text-white' : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
