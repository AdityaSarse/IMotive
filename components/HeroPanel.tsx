'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Flame, Clock, BookOpen, Star, TrendingUp } from 'lucide-react';

interface HeroPanelProps {
  userName?: string;
}

export default function HeroPanel({ userName = 'Aditya' }: HeroPanelProps) {
  // Staggered child container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="premium-card relative p-6 md:p-8 flex flex-col justify-between h-full min-h-[460px] bg-[#0A0D13] border border-[#13172A] overflow-hidden"
    >
      {/* Subtle backing glows inside card */}
      <div className="absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-purple-600/5 blur-[80px]" />
      <div className="absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-indigo-600/5 blur-[80px]" />

      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 mb-6 relative">

        {/* Left Side: Greeting text exactly matching style */}
        <div className="flex-1 space-y-4 text-center md:text-left relative z-10 md:pl-8 pt-3 md:pt-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl text-slate-300 font-semibold tracking-tight">
              Good Evening,
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#C084FC] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(96,165,250,0.1)] pb-1">
              {userName} 👋
            </h2>
          </div>

          {/* Subtitles split on separate lines with clean vertical space */}
          <div className="text-sm md:text-base text-slate-400 font-semibold leading-snug space-y-1">
            <p>Keep learning, keep growing.</p>
            <p>You&apos;re on a roll today!</p>
          </div>
        </div>

        {/* Right Side: Uncropped Layered Orbital Layout (Massive scales for exact screenshot matching) */}
        <div className="relative h-72 w-72 md:h-80 md:w-80 shrink-0 flex items-center justify-center select-none -translate-x-6 md:-translate-x-12">

          {/* Concentric sphere background (representing the glowing blue-to-purple planet behind the boy - Increased by 5%) */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#1B1D3A] via-[#242655] to-[#2E3172] border border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.25)]" />

          {/* Ring 1: Outer concentric circle (Enlarged to w-72 h-72) */}
          <div className="absolute w-72 h-72 border border-slate-800/40 rounded-full" />

          {/* Ring 2: Inner concentric circle with purple-blue gradient border */}
          <svg className="absolute w-85 h-85 pointer-events-none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="ring2-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="49.5" fill="none" stroke="url(#ring2-grad)" strokeWidth="0.4" />
          </svg>

          {/* Glowing dot on outer circle (upper left) */}
          <div className="absolute top-14 left-5 w-4 h-4 bg-[#60A5FA] rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)] z-20" />

          {/* Purple Book badge on outer circle (upper right) */}
          <div className="absolute top-5 right-4 w-9 h-9 bg-[#0A0D13] border border-[#13172A] rounded-full flex items-center justify-center shadow-lg shadow-black/80 z-20">
            <BookOpen className="h-3.5 w-3.5 text-purple-400" />
          </div>

          {/* Blue Chart badge on inner circle (lower left) */}
          <div className="absolute bottom-15 left-0.5 w-9 h-9 bg-[#0A0D13] border border-[#13172A] rounded-full flex items-center justify-center shadow-lg shadow-black/80 z-20">
            <TrendingUp className="h-4 w-4 text-indigo-400" />
          </div>

          {/* Boy.png Illustration floating on top of the glowing sphere (Enlarged to w-80 h-80) */}
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="absolute w-90 h-90 z-10 flex items-center justify-center top-1/2 -translate-y-1/2"
          >
            <Image
              src="/Boy.png"
              alt="Aditya learning illustration"
              fill
              priority
              className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

        </div>

      </div>

      {/* 4 KPI Metrics Aligned Horizontally at the bottom - Configured with relative z-20 to overlay the boy backpack */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 mb-5 lg:grid-cols-4 gap-3 border-t border-[#121626]/80 relative z-20"
      >
        {/* KPI 1: Day Streak */}
        <div className="bg-transparent border border-[#161A30]/60 backdrop-blur-sm rounded-2xl p-5 px-6 h-32 flex items-center gap-3.5 shadow-xl shadow-black/20">
          <Flame className="h-8 w-8 text-orange-500 fill-current shrink-0" />
          <div className="min-w-0">
            <div className="text-xl font-extrabold text-white leading-none">12</div>
            <div className="text-xs font-bold text-slate-500 mt-1.5 whitespace-nowrap">Day Streak</div>
          </div>
        </div>

        {/* KPI 2: Hours Learned */}
        <div className="bg-transparent border border-[#161A30]/60 backdrop-blur-sm rounded-2xl p-5 px-6 h-32 flex items-center gap-3.5 shadow-xl shadow-black/20">
          <Clock className="h-8 w-8 text-purple-400 shrink-0" />
          <div className="min-w-0">
            <div className="text-xl font-extrabold text-white leading-none">124</div>
            <div className="text-xs font-bold text-slate-500 mt-1.5 whitespace-nowrap">Hours Learned</div>
          </div>
        </div>

        {/* KPI 3: Courses Enrolled */}
        <div className="bg-transparent border border-[#161A30]/60 backdrop-blur-sm rounded-2xl p-5 px-6 h-32 flex items-center gap-3.5 shadow-xl shadow-black/20">
          <BookOpen className="h-8 w-8 text-yellow-500 shrink-0" />
          <div className="min-w-0">
            <div className="text-xl font-extrabold text-white leading-none">28</div>
            <div className="text-xs font-bold text-slate-500 mt-1.5 whitespace-nowrap">Courses Enrolled</div>
          </div>
        </div>

        {/* KPI 4: XP Points */}
        <div className="bg-transparent border border-[#161A30]/60 backdrop-blur-sm rounded-2xl p-5 px-6 h-32 flex items-center gap-3.5 shadow-xl shadow-black/20">
          <Star className="h-8 w-8 text-amber-400 fill-current shrink-0" />
          <div className="min-w-0">
            <div className="text-xl font-extrabold text-white leading-none">8.2K</div>
            <div className="text-xs font-bold text-slate-500 mt-1.5 whitespace-nowrap">XP Points</div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
