'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FileText, PenTool, Database, ChevronRight } from 'lucide-react';
import { Task } from '@/types/course';

const INITIAL_TASKS: Task[] = [
  {
    id: 't1',
    title: 'React Performance Optimization',
    deadline: 'Due in 2 days',
    status: 'pending',
    category: 'Urgent',
  },
  {
    id: 't2',
    title: 'ML Model Evaluation Assignment',
    deadline: 'Due in 5 days',
    status: 'in_progress',
    category: 'Milestone',
  },
  {
    id: 't3',
    title: 'UI Design Case Study Submission',
    deadline: 'Due in 7 days',
    status: 'pending',
    category: 'Standard',
  },
  {
    id: 't4',
    title: 'Database Normalization Quiz',
    deadline: 'Due in 9 days',
    status: 'completed',
    category: 'Optional',
  },
];

const TASK_STYLING: Record<string, {
  iconBg: string;
  iconColor: string;
  deadlineColor: string;
  iconComponent: React.ComponentType<{ className?: string }>;
}> = {
  t1: {
    iconBg: 'bg-violet-500/10 border border-violet-500/15',
    iconColor: 'text-violet-400',
    deadlineColor: 'text-violet-400',
    iconComponent: Play,
  },
  t2: {
    iconBg: 'bg-blue-500/10 border border-blue-500/15',
    iconColor: 'text-blue-400',
    deadlineColor: 'text-blue-400',
    iconComponent: FileText,
  },
  t3: {
    iconBg: 'bg-rose-500/10 border border-rose-500/15',
    iconColor: 'text-rose-400',
    deadlineColor: 'text-rose-400',
    iconComponent: PenTool,
  },
  t4: {
    iconBg: 'bg-teal-500/10 border border-teal-500/15',
    iconColor: 'text-teal-400',
    deadlineColor: 'text-teal-400',
    iconComponent: Database,
  },
};

export default function UpcomingTasks() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const newStatus = task.status === 'completed' ? 'pending' : 'completed';
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  return (
    <div className="premium-card p-6 shadow-2xl h-full flex flex-col justify-between min-h-[420px] bg-[#0A0D13] border border-[#13172A] overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100">Upcoming Tasks</h2>
        
        <button className="text-[11px] font-bold text-slate-500 hover:text-slate-300 transition-colors">
          View All &rarr;
        </button>
      </div>

      {/* Task Rows Stack */}
      <div className="flex-1 flex flex-col justify-between divide-y divide-[#121626]/80">
        <AnimatePresence initial={false}>
          {tasks.map((task) => {
            const isCompleted = task.status === 'completed';
            const style = TASK_STYLING[task.id] || {
              iconBg: 'bg-slate-800 border border-slate-700/30',
              iconColor: 'text-slate-400',
              deadlineColor: 'text-slate-400',
              iconComponent: FileText,
            };
            const Icon = style.iconComponent;
            
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => toggleTask(task.id)}
                className={`group flex items-center justify-between py-3 cursor-pointer transition-all duration-200 ${
                  isCompleted ? 'opacity-40' : ''
                }`}
              >
                
                {/* Left Side: Icon & Title */}
                <div className="flex items-center gap-3.5 select-none min-w-0 flex-1">
                  
                  {/* Glowing Circular Icon */}
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${style.iconBg} transition-transform group-hover:scale-105`}>
                    <Icon className={`h-4 w-4 ${style.iconColor}`} />
                  </div>

                  {/* Task Title */}
                  <span
                    className={`text-xs font-bold truncate pr-2 transition-colors ${
                      isCompleted
                        ? 'text-slate-500 line-through'
                        : 'text-slate-200 group-hover:text-white'
                    }`}
                  >
                    {task.title}
                  </span>

                </div>

                {/* Right Side: Due Date Deadline */}
                <div className={`text-[10px] font-bold shrink-0 ${style.deadlineColor}`}>
                  {task.deadline}
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
}
