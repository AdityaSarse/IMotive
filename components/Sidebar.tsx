'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutGrid,
  BookOpen,
  TrendingUp,
  Trophy,
  ClipboardList,
  MessageSquare,
  Settings
} from 'lucide-react';

const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: LayoutGrid },
  { name: 'My Courses', icon: BookOpen },
  { name: 'Progress', icon: TrendingUp },
  { name: 'Achievements', icon: Trophy },
  { name: 'Study Planner', icon: ClipboardList },
  { name: 'Messages', icon: MessageSquare },
  { name: 'Settings', icon: Settings },
];

interface SidebarProps {
  activeItem?: string;
  onItemChange?: (item: string) => void;
}

export default function Sidebar({ activeItem = 'Overview', onItemChange }: SidebarProps) {
  const [selected, setSelected] = useState(activeItem);

  const handleSelect = (name: string) => {
    setSelected(name);
    if (onItemChange) {
      onItemChange(name);
    }
  };

  return (
    <>
      {/* Desktop / Tablet Sidebar (Hidden on mobile) */}
      <aside className="hidden md:flex flex-col h-screen sticky top-0 z-40 w-20 lg:w-[260px] shrink-0 border-r border-[#121626] bg-[#0A0D13] py-6 px-3 lg:px-4 transition-all duration-300">
        
        {/* Top sidebar brand area - Single Logo on the entire page */}
        <div className="hidden lg:flex items-center gap-2 px-3 mb-6 select-none">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-gradient-to-tr from-indigo-500 to-purple-600 shadow">
            {/* Learnova Lightning/Wave Logo */}
            <svg
              className="h-4.5 w-4.5 text-white fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 14h9l-2 8 13-12h-9z" />
            </svg>
          </div>
          <span className="text-white text-md font-bold tracking-tight">Learnova</span>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 space-y-4">
          {SIDEBAR_ITEMS.map((item) => {
            const isSelected = selected === item.name;
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => handleSelect(item.name)}
                // Item Padding: py-3.5 = 14px vertical padding
                className={`group relative flex w-full items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm font-medium tracking-tight transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? 'text-white font-medium'
                    : 'text-slate-500 hover:text-slate-200 hover:bg-slate-900/20'
                }`}
              >
                <div className="relative z-10 flex items-center justify-center shrink-0">
                  <Icon className={`h-4.5 w-4.5 transition-transform group-hover:scale-105 ${isSelected ? 'text-[#8B5CF6]' : 'text-slate-500 group-hover:text-slate-200'}`} />
                </div>
                
                <span className="hidden lg:block relative z-10 truncate text-sm">{item.name}</span>
                
                {/* Active Indicator Pill: rounded gradient background, purple/indigo glow edge, soft inner lighting */}
                {isSelected && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#1A123E]/95 to-[#0C0824]/40 border border-[#4C3A9E]/30 border-l-[3px] border-l-[#8B5CF6] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_0_15px_rgba(139,92,246,0.15)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Widget: Daily Study Goal Card with wave video loop */}
        <div className="hidden lg:block mt-auto px-1 select-none">
          <div className="relative overflow-hidden rounded-xl border border-[#13172A] bg-[#0A0D13] p-4 shadow-xl h-48 flex flex-col justify-between">
            
            {/* Daily Goal Text Details */}
            <div className="flex justify-between items-center relative z-10">
              <span className="text-xs font-bold text-slate-200">Daily Goal</span>
              <span className="text-xs font-bold text-slate-200">75%</span>
            </div>

            {/* Middle text details */}
            <div className="space-y-3 relative z-10 mb-14">
              {/* Glowing Purple Progress Bar */}
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                  style={{ width: '75%' }}
                />
              </div>

              {/* Encouragement message */}
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                Keep going! You&apos;re doing great.
              </p>
            </div>

            {/* Wave Video Loop Container (occupies bottom 40% of card) */}
            <div className="absolute bottom-0 left-0 right-0 h-[70px] overflow-hidden rounded-b-xl -z-10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover opacity-50"
              >
                <source src="/goal-video.mp4" type="video/mp4" />
              </video>
              {/* Black-to-transparent mask fading upwards */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D13] via-[#0A0D13]/30 to-transparent" />
            </div>
            
          </div>
        </div>

      </aside>

      {/* Mobile Floating Bottom Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <nav className="glass-panel flex items-center justify-around rounded-2xl py-2 px-3 shadow-2xl">
          {SIDEBAR_ITEMS.slice(0, 5).map((item) => {
            const isSelected = selected === item.name;
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => handleSelect(item.name)}
                className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl focus:outline-none transition-colors ${
                  isSelected ? 'text-indigo-400' : 'text-slate-400'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[9px] mt-1 font-semibold">{item.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-slate-900/60"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
