# 🚀 Next-Gen Learning Dashboard

A **premium futuristic learning analytics dashboard** built using **Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Supabase**.

This project is designed as a **high-fidelity educational SaaS platform** featuring modern UI design, responsive layouts, dynamic data integration, smooth animations, and analytics-driven learning insights.

The dashboard provides students with a centralized platform to monitor **learning progress, course performance, activity tracking, analytics, and productivity metrics** through a polished and interactive interface.

---

# 📸 Preview

## Dashboard Interface

![Dashboard Preview](./public/design-reference.png)

---

# ✨ Features

### 🎨 Premium UI / UX

* Modern futuristic dark-mode interface
* High-fidelity SaaS dashboard aesthetic
* Clean typography and spacing system
* Premium sidebar navigation
* Responsive layout architecture
* Glass / gradient-inspired visual styling

### 📊 Learning Analytics Dashboard

* Hero learning overview panel
* Learning streak tracking
* Progress monitoring
* Activity analytics visualization
* Performance insights
* Productivity metrics

### 📚 Dynamic Course Management

* Dynamic course cards powered by Supabase
* Database-driven content rendering
* Animated progress indicators
* Dynamic icon system
* Course completion tracking

### ⚡ Animations & Interactions

* Framer Motion micro-interactions
* Smooth hover animations
* Staggered component reveals
* Animated progress bars
* Navigation interactions
* GPU-friendly motion system

### 🔒 Architecture & Performance

* Server Component data fetching
* Loading skeleton states
* Error boundary handling
* Zero layout shift strategy
* Semantic HTML structure
* Component-based architecture
* Production-ready responsive design

---

# 🛠 Tech Stack

## Frontend

| Technology              | Purpose                    |
| ----------------------- | -------------------------- |
| Next.js 15 (App Router) | Full-stack React framework |
| TypeScript              | Type-safe development      |
| Tailwind CSS            | Styling & responsive UI    |
| Framer Motion           | Animations & interactions  |

---

## Backend / Database

| Technology            | Purpose                 |
| --------------------- | ----------------------- |
| Supabase              | Backend-as-a-Service    |
| PostgreSQL            | Relational database     |
| @supabase/supabase-js | Supabase client         |
| @supabase/ssr         | Server-side integration |

---

## UI & Visualization

| Technology   | Purpose            |
| ------------ | ------------------ |
| Lucide React | Icon system        |
| Recharts     | Analytics & charts |
| Geist Font   | Typography         |

---

## Deployment

| Technology | Purpose              |
| ---------- | -------------------- |
| Vercel     | Hosting & deployment |

---

# 📂 Project Structure

```txt
app/
├── layout.tsx
├── page.tsx
├── loading.tsx
└── error.tsx

components/
├── Navbar.tsx
├── Sidebar.tsx
├── HeroPanel.tsx
├── CourseCard.tsx
├── ActivityChart.tsx
├── ProgressAnalytics.tsx
├── UpcomingTasks.tsx
├── ProgressBar.tsx
└── SkeletonLoader.tsx

lib/
└── supabase.ts

types/
└── course.ts

public/
├── design-reference.png
├── boy.png
└── goal-video.mp4
```

---

# ⚙️ Environment Variables

Create a `.env.local` file in the project root directory.

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

These variables are required for connecting the application to your Supabase project.

---

# 🗄 Supabase Setup

## Step 1 — Create a Supabase Project

1. Login to Supabase.
2. Create a new project.
3. Open **SQL Editor**.
4. Create the database table.

---

## Step 2 — Create Courses Table

Run the following SQL query:

```sql
create table courses(
 id uuid primary key default gen_random_uuid(),
 title text not null,
 progress integer not null,
 icon_name text not null,
 created_at timestamp default now()
);
```

---

## Step 3 — Insert Seed Data

Run:

```sql
insert into courses
(title, progress, icon_name)

values
('Advanced React Patterns',75,'Code'),
('Machine Learning Fundamentals',62,'Brain'),
('UI UX Design Systems',88,'Palette'),
('Database Engineering',45,'Database');
```

---

# 📦 Installation Guide

## Clone Repository

```bash
git clone https://github.com/AdityaSarse/IMotive.git
```

---

## Move Into Project

```bash
cd dashboard
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Open Application

Visit:

```txt
http://localhost:3000
```

---

# 🎯 Implementation Highlights

### Next.js App Router Architecture

Uses modern **Next.js App Router** for scalable application structure and server-driven rendering.

### Type-Safe Development

Built entirely using **TypeScript** for maintainability, safer code, and improved developer experience.

### Secure Data Fetching

Implements **Server Components + Supabase SSR** for secure server-side database fetching.

### Advanced Motion Design

Uses **Framer Motion** for:

* hover effects
* staggered transitions
* smooth animations
* interactive UI feedback

### Modular Component System

Reusable UI architecture using:

* isolated components
* typed interfaces
* maintainable folder organization

---

# 🌐 Deployment

This project is optimized for **Vercel deployment**.

Build locally:

```bash
npm run build
```

Production preview:

```bash
npm start
```

---

# 📁 Assets

## Public Assets

```txt
public/
├── design-reference.png
├── boy.png
└── goal-video.mp4
```

### Asset Usage

**design-reference.png**

Primary design reference used for UI structure.

**boy.png**

Hero dashboard illustration.

**goal-video.mp4**

Used inside sidebar goal/progress section.

---

# 🔮 Future Improvements

Potential enhancements:

* Authentication system
* User profiles
* Real-time analytics
* AI learning recommendations
* Course filtering
* Notifications
* Dashboard customization
* Dark / light theme switching

---

# 👨‍💻 Author

Built by **Aditya Sarse**

GitHub: https://github.com/AdityaSarse

