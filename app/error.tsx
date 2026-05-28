'use client';

import { useEffect } from 'react';
import { ShieldAlert, RotateCcw, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error details internally for observability
    console.error('Lumina Dashboard Error Boundary Caught Exception:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center p-4 text-center">
      
      {/* Glow Backdrop */}
      <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-accent-pink/10 opacity-30 blur-[100px] animate-mesh" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="max-w-md w-full rounded-3xl border border-slate-900 bg-slate-950/60 p-8 shadow-2xl backdrop-blur-md"
      >
        {/* Warning Icon Banner */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-pink/10 border border-accent-pink/20 text-accent-pink mb-6">
          <ShieldAlert className="h-8 w-8" />
        </div>

        {/* Error Details */}
        <h2 className="text-xl font-bold text-slate-200 tracking-tight mb-2">Something went sideways</h2>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          Lumina encountered an unexpected obstacle while fetching performance charts or synchronizing database records.
          <span className="block mt-2 font-mono text-[10px] text-accent-pink/80 bg-slate-950 p-2 rounded-lg border border-slate-900 truncate">
            {error.message || 'Error: Request timed out or DB schema missing'}
          </span>
        </p>

        {/* Interactive Recovery Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => reset()}
            className="flex-1 flex items-center justify-center gap-2 rounded-full bg-brand-primary hover:bg-brand-hover px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-all duration-200 active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="flex-1 flex items-center justify-center gap-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-300 transition-colors"
          >
            <Home className="h-4 w-4" />
            Reload Page
          </button>
        </div>

      </motion.div>

    </div>
  );
}
