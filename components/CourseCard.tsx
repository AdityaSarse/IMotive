'use client';

import { motion } from 'framer-motion';
import { Code, PenTool, Database, Cpu, ChevronRight, HelpCircle } from 'lucide-react';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

// Map database string icon tokens to specific visual icons seen in the Learnova design image
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap: Code, // Advanced React Patterns uses </ > Code icon in the reference
  Palette: PenTool, // UI/UX Design uses PenTool in the reference
  Database: Database, // Database engineering uses Database
  Cpu: Cpu, // Machine Learning uses Cpu/Brain
};

// Map database icons to precise design colors (background circles, icons, progress bars)
const STYLING_MAP: Record<string, {
  iconBg: string;
  iconColor: string;
  barColor: string;
}> = {
  Zap: {
    iconBg: 'bg-violet-500/10 border border-violet-500/15',
    iconColor: 'text-violet-400',
    barColor: 'bg-violet-500',
  },
  Palette: {
    iconBg: 'bg-[#EC4899]/10 border border-[#EC4899]/15', // Orange/Rose
    iconColor: 'text-[#EC4899]',
    barColor: 'bg-[#EC4899]',
  },
  Database: {
    iconBg: 'bg-teal-500/10 border border-teal-500/15',
    iconColor: 'text-teal-400',
    barColor: 'bg-teal-500',
  },
  Cpu: {
    iconBg: 'bg-pink-500/10 border border-pink-500/15', // Pink
    iconColor: 'text-pink-400',
    barColor: 'bg-pink-500',
  },
};

export default function CourseCard({ course }: CourseCardProps) {
  const IconComponent = ICON_MAP[course.icon_name] || HelpCircle;
  const style = STYLING_MAP[course.icon_name] || {
    iconBg: 'bg-slate-800 border border-slate-700/35',
    iconColor: 'text-slate-400',
    barColor: 'bg-indigo-500',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.015, x: 2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex items-center gap-4 bg-[#0A0D13]/40 hover:bg-[#111520]/60 border border-transparent hover:border-[#13172A] rounded-lg p-3.5 transition-all duration-200 cursor-pointer"
    >
      
      {/* 1. Left circular icon with specific backing tint */}
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.iconBg}`}>
        <IconComponent className={`h-4.5 w-4.5 ${style.iconColor}`} />
      </div>

      {/* 2. Middle area: text details + progress line */}
      <div className="flex-1 min-w-0 space-y-2">
        
        {/* Title (left) & Progress % (right) */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-200 truncate pr-2 group-hover:text-white transition-colors">
            {course.title}
          </span>
          <span className="font-bold text-slate-400 shrink-0">
            {course.progress}%
          </span>
        </div>

        {/* Anti-Reflow spring scaleX progress bar */}
        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden relative">
          <motion.div
            className={`absolute inset-y-0 left-0 right-0 rounded-full ${style.barColor} origin-left`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: course.progress / 100 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          />
        </div>

      </div>

      {/* 3. Far right chevron indicator arrow */}
      <div className="text-slate-500 hover:text-slate-300 transition-colors pl-1 shrink-0">
        <ChevronRight className="h-4 w-4" />
      </div>

    </motion.div>
  );
}
