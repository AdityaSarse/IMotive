export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-deep text-slate-400 p-4 md:p-8 flex flex-col gap-6 animate-pulse select-none">
      
      {/* Floating Header Skeleton */}
      <div className="w-full max-w-7xl mx-auto h-16 rounded-2xl bg-slate-900/60 border border-slate-800/40" />

      {/* Outer Shell Wrapper */}
      <div className="w-full max-w-7xl mx-auto flex gap-6 flex-1">
        
        {/* Sidebar Skeleton (Hidden on mobile) */}
        <div className="hidden md:flex flex-col w-20 lg:w-60 h-[calc(100vh-140px)] rounded-2xl bg-slate-950/20 border border-slate-900 p-4 gap-4">
          <div className="h-10 w-full rounded-xl bg-slate-900" />
          <div className="h-10 w-full rounded-xl bg-slate-900" />
          <div className="h-10 w-full rounded-xl bg-slate-900" />
          <div className="h-10 w-full rounded-xl bg-slate-900" />
          <div className="mt-auto h-48 w-full rounded-xl bg-slate-900/40" />
        </div>

        {/* Dashboard Main Grid Skeleton */}
        <div className="flex-1 space-y-6">
          
          {/* Row 1 Grid: Hero Banner (65%) & Heatmap (35%) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Banner greeting card skeleton */}
              <div className="h-64 rounded-3xl bg-slate-950/40 border border-slate-900" />
              {/* Metrics Grid Skeletons */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="h-28 rounded-2xl bg-slate-950/40 border border-slate-900" />
                <div className="h-28 rounded-2xl bg-slate-950/40 border border-slate-900" />
                <div className="h-28 rounded-2xl bg-slate-950/40 border border-slate-900" />
                <div className="h-28 rounded-2xl bg-slate-950/40 border border-slate-900" />
              </div>
            </div>

            {/* Heatmap Panel skeleton */}
            <div className="lg:col-span-1 h-full min-h-[300px] rounded-3xl bg-slate-950/40 border border-slate-900" />
          </div>

          {/* Row 2 Grid: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-96 rounded-3xl bg-slate-950/40 border border-slate-900" />
            <div className="h-96 rounded-3xl bg-slate-950/40 border border-slate-900" />
            <div className="h-96 rounded-3xl bg-slate-950/40 border border-slate-900" />
          </div>

        </div>

      </div>

    </div>
  );
}
