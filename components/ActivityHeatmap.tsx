'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, ChevronDown } from 'lucide-react';

interface HourCell {
  hour: number;
  minutes: number;
  level: 0 | 1 | 2 | 3 | 4 | 5;
  timeString: string;
}

export default function ActivityHeatmap() {
  const [hoveredCell, setHoveredCell] = useState<{ day: string; cell: HourCell } | null>(null);

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Generate deterministic mock study sessions for each hour (24 hours) across 7 days
  const generateMockHourCells = (): Record<string, HourCell[]> => {
    const data: Record<string, HourCell[]> = {};
    
    weekdays.forEach((day, dIdx) => {
      const dayCells: HourCell[] = [];
      for (let hour = 0; hour < 24; hour++) {
        // Deterministic study timings: peak in evenings (20:00 to 22:00) and mid-afternoons (14:00 to 16:00)
        let minutes = 0;
        let level: 0 | 1 | 2 | 3 | 4 | 5 = 0;
        const rand = Math.sin(hour * 0.4) * Math.cos(dIdx * 0.6) + Math.random() * 0.4;
        
        if (hour >= 18 && hour <= 22) { // Evening peak
          if (rand > 0) {
            minutes = Math.floor(rand * 55) + 5;
            level = minutes > 48 ? 5 : minutes > 38 ? 4 : minutes > 28 ? 3 : minutes > 18 ? 2 : 1;
          }
        } else if (hour >= 13 && hour <= 16) { // Afternoon secondary peak
          if (rand > 0.3) {
            minutes = Math.floor(rand * 45) + 5;
            level = minutes > 38 ? 4 : minutes > 28 ? 3 : minutes > 18 ? 2 : 1;
          }
        } else if (hour >= 8 && hour <= 11) { // Morning
          if (rand > 0.5) {
            minutes = Math.floor(rand * 30);
            level = minutes > 22 ? 3 : minutes > 12 ? 2 : 1;
          }
        }

        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        const timeString = `${displayHour}:00 ${ampm}`;

        dayCells.push({ hour, minutes, level, timeString });
      }
      data[day] = dayCells;
    });

    return data;
  };

  const activityData = generateMockHourCells();

  // Color intensities to match design
  const getLevelClass = (level: 0 | 1 | 2 | 3 | 4 | 5) => {
    switch (level) {
      case 0:
        return 'bg-[#131522] border border-[#1C1F33] hover:bg-[#1A1E35]';
      case 1:
        return 'bg-[#20253D] border border-[#2B3150] hover:bg-[#282F4B]';
      case 2:
        return 'bg-[#353D6E] border border-[#444F8C] hover:bg-[#3D477E]';
      case 3:
        return 'bg-[#505BBF] border border-[#6371D9] hover:bg-[#5C69CE]';
      case 4:
        return 'bg-[#8B5CF6] border border-[#A78BFA] hover:bg-[#976BF7] shadow-[0_0_8px_rgba(139,92,246,0.25)]';
      case 5:
        return 'bg-[#EC4899] border border-[#F472B6] hover:bg-[#F43F5E] shadow-[0_0_12px_rgba(236,72,153,0.45)]';
    }
  };

  return (
    <div className="premium-card relative p-6 shadow-2xl h-full flex flex-col justify-between min-h-[460px] bg-[#0A0D13] border border-[#13172A] overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100">Learning Activity</h2>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-[11px] font-bold text-slate-400 bg-slate-900/40 border border-slate-850 px-2.5 py-1 rounded-lg">
            This Week
            <ChevronDown className="h-3 w-3 text-slate-500" />
          </button>
          
          <button className="text-slate-500 hover:text-slate-300 p-1">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="flex-1 flex flex-col justify-center my-3 overflow-hidden">
        
        {/* Horizontal Split: Sticky Weekdays on Left + Scrollable Heatmap Columns on Right */}
        <div className="flex items-start">
          
          {/* 1. Static Weekday labels */}
          <div className="flex flex-col gap-[4px] text-[10px] font-bold text-slate-500 select-none pr-3 mt-[1px]">
            {weekdays.map((day) => (
              <span key={day} className="h-[18px] flex items-center justify-end text-right min-w-[28px]">{day}</span>
            ))}
          </div>

          {/* 2. Scrollable container for Grid + Time labels */}
          <div className="flex-1 overflow-x-auto scrollbar-thin pb-2">
            <div className="flex flex-col min-w-[530px] pr-1">
              
              {/* Grid columns */}
              <div className="flex flex-col gap-[4px] w-full">
                {weekdays.map((day) => (
                  <div key={day} className="flex gap-[4px] w-full">
                    {activityData[day].map((cell, cIdx) => (
                      <div
                        key={cIdx}
                        onMouseEnter={() => setHoveredCell({ day, cell })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-[18px] h-[18px] rounded-[4px] cursor-pointer transition-all duration-100 ${getLevelClass(cell.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Time labels below the grid */}
              <div className="flex justify-between text-[9px] font-bold text-slate-500 select-none mt-3 leading-none px-[2px]">
                <span className="w-10 text-left">12 AM</span>
                <span className="w-10 text-center">6 AM</span>
                <span className="w-10 text-center">12 PM</span>
                <span className="w-10 text-center">6 PM</span>
                <span className="w-10 text-right">12 AM</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Footer Area: Legend & Tooltip Overlay */}
      <div className="border-t border-[#121626] mt-4 pt-4 flex flex-col gap-3">
        
        <div className="flex items-center justify-between">
          {/* Legend */}
          <div className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-500 uppercase select-none">
            <span>Low Activity</span>
            <div className="h-2.5 w-2.5 rounded-[2px] bg-[#131522] border border-[#1C1F33]" />
            <div className="h-2.5 w-2.5 rounded-[2px] bg-[#20253D] border border-[#2B3150]" />
            <div className="h-2.5 w-2.5 rounded-[2px] bg-[#353D6E] border border-[#444F8C]" />
            <div className="h-2.5 w-2.5 rounded-[2px] bg-[#505BBF] border border-[#6371D9]" />
            <div className="h-2.5 w-2.5 rounded-[2px] bg-[#8B5CF6] border border-[#A78BFA]" />
            <div className="h-2.5 w-2.5 rounded-[2px] bg-[#EC4899] border border-[#F472B6]" />
            <span>High Activity</span>
          </div>

          {/* Interactive Tooltip popup display */}
          <div className="h-4 relative flex items-center justify-end">
            <AnimatePresence>
              {hoveredCell && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-0 text-[10px] font-semibold text-slate-300 bg-[#0A0D13] border border-[#13172A] px-2 py-0.5 rounded-md whitespace-nowrap shadow-lg"
                >
                  {hoveredCell.cell.minutes > 0 ? `${hoveredCell.cell.minutes} mins` : 'No activity'} at {hoveredCell.cell.timeString} ({hoveredCell.day})
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Insight text */}
        <p className="text-xs text-slate-400 font-semibold leading-relaxed text-center sm:text-left bg-slate-950/40 p-2.5 rounded-xl border border-slate-900/80">
          Excellent! You&apos;re more active than <span className="text-purple-400 font-bold">92%</span> of learners this week.
        </p>

      </div>

    </div>
  );
}
export type HeatmapHourCell = HourCell;
