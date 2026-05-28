'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  iconName: 'Zap' | 'Clock' | 'BookOpen' | 'Award';
  colorClass: string; // Tailwind color class for text/bg (e.g. 'text-brand-primary bg-brand-primary/10')
  glowColor: string; // Hex code or Tailwind color for hover glow dropshadow
}

export default function MetricCard({
  label,
  value,
  change,
  isPositive,
  iconName,
  colorClass,
  glowColor,
}: MetricCardProps) {
  // Map string to Lucide Icon dynamically
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/40 p-5 transition-all duration-300 hover:border-slate-800 hover:bg-slate-950/80 shadow-lg"
    >
      <div className="flex items-center justify-between">
        
        {/* Label & Value */}
        <div className="space-y-1">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">{label}</p>
          <h3 className="text-2xl font-bold tracking-tight text-white">{value}</h3>
        </div>

        {/* Dynamic Glowing Icon Wrapper */}
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 ${colorClass}`}>
          <IconComponent className="h-5 w-5" />
        </div>

      </div>

      {/* Change percentage badge */}
      <div className="mt-4 flex items-center gap-1.5">
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
            isPositive
              ? 'text-accent-green bg-accent-green/10'
              : 'text-accent-pink bg-accent-pink/10'
          }`}
        >
          {change}
        </span>
        <span className="text-[10px] font-medium text-slate-500">vs last week</span>
      </div>

      {/* Accent Radial Background Glow on Hover */}
      <div
        className="absolute -right-12 -bottom-12 -z-10 h-24 w-24 rounded-full opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ backgroundColor: glowColor }}
      />
    </motion.div>
  );
}
export type MetricType = MetricCardProps;
