'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  colorClass?: string;
  heightClass?: string;
}

export default function ProgressBar({
  progress,
  colorClass = 'bg-brand-primary',
  heightClass = 'h-2',
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const scaleX = clampedProgress / 100;

  return (
    <div className={`w-full ${heightClass} bg-slate-800/40 rounded-full overflow-hidden relative`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={clampedProgress}>
      <motion.div
        className={`absolute inset-y-0 left-0 right-0 rounded-full ${colorClass} origin-left`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scaleX }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      />
    </div>
  );
}
