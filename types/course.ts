export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at?: string;
}

export interface Metric {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: 'Zap' | 'Clock' | 'BookOpen' | 'Award';
  color: string;
}

export interface Task {
  id: string;
  title: string;
  deadline: string;
  status: 'completed' | 'pending' | 'in_progress';
  category: string;
}

export interface ActivityNode {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
