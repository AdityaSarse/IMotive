import { createClient } from '@supabase/supabase-js';
import { Course } from '@/types/course';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Resilient initialization
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    progress: 78,
    icon_name: 'Zap',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'UI/UX Design Systems',
    progress: 92,
    icon_name: 'Palette',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Database Engineering',
    progress: 60,
    icon_name: 'Database',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Machine Learning Fundamentals',
    progress: 45,
    icon_name: 'Cpu',
    created_at: new Date().toISOString(),
  },
];

export async function getCourses(): Promise<Course[]> {
  if (!supabase) {
    console.warn(
      'Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) are missing. Running with high-fidelity local seed data.'
    );
    return MOCK_COURSES;
  }

  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Failed to fetch from Supabase. Database schema might not be configured. Falling back to local seed data. Error:', error.message);
      return MOCK_COURSES;
    }

    if (!data || data.length === 0) {
      console.warn('Supabase courses table returned 0 rows. Using seeded mock courses.');
      return MOCK_COURSES;
    }

    return data as Course[];
  } catch (err) {
    console.error('Unhandled exception during Supabase fetch, falling back:', err);
    return MOCK_COURSES;
  }
}
export type SupabaseCoursesResponse = Course[];
