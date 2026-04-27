import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic font-black leading-none mb-4">
              Our <span className="text-gaming-primary">Services</span>
            </h2>
            <div className="h-2 w-24 bg-gaming-primary" />
          </div>
          <p className="max-w-md text-zinc-400 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed">
            Professional editing solutions tailored for the competitive gaming landscape. From viral shorts to cinematic montages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-gaming-primary transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 border-b-4 border-zinc-950">
                  <IconComponent className="w-8 h-8 text-gaming-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                      <div className="w-1.5 h-1.5 bg-gaming-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
