import { getCourses } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import HeroPanel from '@/components/HeroPanel';
import ActivityHeatmap from '@/components/ActivityHeatmap';
import CourseCard from '@/components/CourseCard';
import ProgressAnalytics from '@/components/ProgressAnalytics';
import UpcomingTasks from '@/components/UpcomingTasks';

// Disable page cache to fetch Supabase updates
export const revalidate = 0;

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="flex min-h-screen bg-bg-deep font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* 1. Left Sidebar: Full height from top to bottom of screen */}
      <Sidebar activeItem="Overview" />

      {/* 2. Right Content Section: Navbar + Main Scrollable Dashboard Grid */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-bg-deep">
        
        {/* Top Navigation Bar: Aligned to the right of the Sidebar */}
        <Navbar activeTab="Dashboard" />

        {/* Scrollable Dashboard Grid */}
        <main className="flex-1 min-w-0 px-6 md:px-8 py-6 pb-24 md:pb-6 overflow-y-auto">
          
          <div className="space-y-4">
            
            {/* ROW 1: Greeting Hero Card (60% width) & Hourly Contributor Heatmap (40% width) */}
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-4" aria-label="Performance Metrics & Hour Tracker">
              
              {/* Hero Banner Grid (60% / Col-span 3) */}
              <div className="lg:col-span-3 h-full">
                <HeroPanel userName="Aditya" />
              </div>

              {/* Learning Activity Grid (40% / Col-span 2) */}
              <div className="lg:col-span-2 h-full">
                <ActivityHeatmap />
              </div>

            </section>

            {/* ROW 2: My Courses Stack, Line Chart Progress, & Task Checklist */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Course Tracks & Task Planners">
              
              {/* Card 1: My Courses list */}
              <div className="premium-card p-6 shadow-2xl h-full flex flex-col justify-between min-h-[420px] bg-[#0A0D13] border border-[#13172A] overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100">My Courses</h2>
                    <button className="text-[11px] font-bold text-slate-500 hover:text-slate-300 transition-colors">
                      View All &rarr;
                    </button>
                  </div>
                  
                  {/* Sleek list stack of Courses */}
                  <div className="space-y-2 max-h-[310px] overflow-y-auto pr-1">
                    {courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: Recent Progress Line Chart */}
              <div className="h-full">
                <ProgressAnalytics />
              </div>

              {/* Card 3: Upcoming Checklist Tasks */}
              <div className="h-full">
                <UpcomingTasks />
              </div>

            </section>

          </div>

        </main>
      </div>

    </div>
  );
}
