'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, ArrowUp } from 'lucide-react';

interface DataPoint {
  name: string;
  learned: number;
  completed: number;
}

const CHART_DATA: DataPoint[] = [
  { name: 'May 1', learned: 38, completed: 15 },
  { name: 'May 8', learned: 30, completed: 8 },
  { name: 'May 15', learned: 52, completed: 20 },
  { name: 'May 22', learned: 82, completed: 14 }, // Peak for learned with badge
  { name: 'May 29', learned: 90, completed: 24 }, // Peak for completed with badge
];

export default function ProgressAnalytics() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="premium-card p-6 h-full flex flex-col justify-between min-h-[420px] bg-[#0A0D13] border border-[#13172A] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
          <p className="text-xs text-slate-500 font-semibold tracking-wider">Mounting analytics...</p>
        </div>
      </div>
    );
  }

  // Custom Dot component to render the beautiful peak values ("82h" and "24") exactly like the design reference!
  const CustomDot = (props: any) => {
    const { cx, cy, stroke, payload, dataKey } = props;

    // Check for "82h" label condition: payload has name 'May 22' and learned dataKey
    if (dataKey === 'learned' && payload.name === 'May 22') {
      return (
        <g key="learned-peak">
          <circle cx={cx} cy={cy} r={5} fill="#0A0D13" stroke="#8B5CF6" strokeWidth={2} />
          {/* Glowing badge */}
          <foreignObject x={cx - 24} y={cy - 30} width={48} height={22}>
            <div className="bg-[#8B5CF6] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full text-center border border-purple-400 shadow-md">
              82h
            </div>
          </foreignObject>
        </g>
      );
    }

    // Check for "24" label condition: payload has name 'May 29' and completed dataKey
    if (dataKey === 'completed' && payload.name === 'May 29') {
      return (
        <g key="completed-peak">
          <circle cx={cx} cy={cy} r={5} fill="#0A0D13" stroke="#3B82F6" strokeWidth={2} />
          {/* Glowing badge */}
          <foreignObject x={cx - 18} y={cy + 10} width={36} height={22}>
            <div className="bg-[#3B82F6] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full text-center border border-blue-400 shadow-md">
              24
            </div>
          </foreignObject>
        </g>
      );
    }

    // Standard dots
    return <circle cx={cx} cy={cy} r={3} fill="#0A0D13" stroke={stroke} strokeWidth={1.5} key={`${dataKey}-${payload.name}`} />;
  };

  return (
    <div className="premium-card p-6 shadow-2xl h-full flex flex-col justify-between min-h-[420px] bg-[#0A0D13] border border-[#13172A] overflow-hidden">
      
      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100">Recent Progress</h2>
        </div>
        
        <button className="flex items-center gap-1 text-[11px] font-bold text-slate-400 bg-slate-900/40 border border-slate-850 px-2.5 py-1 rounded-lg">
          This Month
          <ChevronDown className="h-3 w-3 text-slate-500" />
        </button>
      </div>

      {/* Custom Legend Section */}
      <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] inline-block" />
          <span>Hours Learned</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] inline-block" />
          <span>Courses Completed</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-52 w-full text-[10px] select-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={CHART_DATA} margin={{ top: 12, right: 8, left: -25, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#121626" vertical={true} horizontal={true} />
            <XAxis
              dataKey="name"
              stroke="#475569"
              tickLine={false}
              axisLine={false}
              dy={8}
              style={{ fontWeight: 700, fontSize: '9px' }}
            />
            <YAxis
              stroke="#475569"
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              dx={-5}
              style={{ fontWeight: 700, fontSize: '9px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0A0D13',
                borderColor: '#1C223E',
                borderRadius: '10px',
                color: '#fff',
              }}
            />
            {/* Hours Learned Line (Purple) */}
            <Line
              type="monotone"
              dataKey="learned"
              stroke="#8B5CF6"
              strokeWidth={2.5}
              dot={<CustomDot dataKey="learned" />}
              activeDot={{ r: 5 }}
            />
            {/* Courses Completed Line (Blue) */}
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#3B82F6"
              strokeWidth={2.5}
              dot={<CustomDot dataKey="completed" />}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Summary Cards */}
      <div className="grid grid-cols-2 gap-4 border-t border-[#121626] mt-4 pt-4">
        
        {/* Total Hours */}
        <div className="bg-[#05050C]/60 border border-[#121626] rounded-xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase">Total Hours</div>
            <div className="text-base font-bold text-white mt-0.5">124h</div>
          </div>
          <div className="flex items-center gap-0.5 rounded-lg bg-green-500/10 border border-green-500/15 px-1.5 py-0.5 text-[9px] font-extrabold text-green-400">
            <ArrowUp className="h-2.5 w-2.5" />
            18.6%
          </div>
        </div>

        {/* Completed */}
        <div className="bg-[#05050C]/60 border border-[#121626] rounded-xl p-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase">Completed</div>
            <div className="text-base font-bold text-white mt-0.5">12 Courses</div>
          </div>
          <div className="flex items-center gap-0.5 rounded-lg bg-green-500/10 border border-green-500/15 px-1.5 py-0.5 text-[9px] font-extrabold text-green-400">
            <ArrowUp className="h-2.5 w-2.5" />
            12.4%
          </div>
        </div>

      </div>

    </div>
  );
}
