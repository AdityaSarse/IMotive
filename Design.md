# DESIGN.md — Next-Gen Learning Analytics Dashboard

## Design Philosophy

Build a premium futuristic learning analytics dashboard.

Visual direction:

- Apple precision
- Linear minimalism
- Stripe analytics clarity
- Arc Browser sophistication
- Modern SaaS dashboard aesthetic

Avoid:

- generic AI dashboards
- random Bento grids
- excessive glow
- cheap glassmorphism
- inconsistent spacing

The UI should feel:

clean, structured, premium, believable, professional.

---

# Layout Architecture

Overall dashboard structure:

```txt
┌──────────────────────────────────────────────────────────┐
│                     Top Navigation                       │
├──────────────┬───────────────────────────────────────────┤
│              │                                           │
│   Sidebar    │            Main Dashboard                 │
│              │                                           │
└──────────────┴───────────────────────────────────────────┘
```

Use:

- dashboard shell layout
- generous spacing
- clean hierarchy
- large content breathing room.

---

# Top Navigation

Floating horizontal navbar.

Structure:

LEFT:
- logo
- product name

CENTER:
- Dashboard
- Courses
- Analytics
- Calendar
- Community

RIGHT:
- Search
- Notifications
- Avatar
- Username
- Role
- Dropdown

Design rules:

- rounded container
- dark surface
- soft borders
- subtle blur
- active pill state
- smooth hover feedback

---

# Sidebar

Vertical navigation panel.

Width:

220–260px desktop.

Contains:

### Brand Area

Top.

- logo
- product name

### Navigation Items

- Overview
- My Courses
- Progress
- Achievements
- Study Planner
- Messages
- Settings

### Bottom Widget

Goal / progress card.

Example:

Daily Goal Progress.

Design:

- compact card
- subtle chart decoration
- soft accent lighting

---

# Main Dashboard

2-row dashboard layout.

---

## Row 1

Two-column layout.

### Hero Panel (Left — 65%)

Large primary surface.

Contains:

Greeting:

Good Evening, Aditya 👋

Subtitle.

Illustration / visual focal point.

4 KPI metrics:

- Day Streak
- Hours Learned
- Courses Enrolled
- XP Points

Design:

- dominant visual hierarchy
- oversized typography
- layered spacing
- subtle gradients

---

### Activity Heatmap Panel (Right — 35%)

Contains:

GitHub-style activity grid.

Features:

- weekday labels
- intensity blocks
- legend
- insight text

Design:

- analytics aesthetic
- compact visualization
- clean grid spacing

---

## Row 2

Three-column card grid.

---

### Card 1 — Courses

Course list.

Each course contains:

- icon
- title
- progress %
- progress bar
- CTA arrow

Example data:

- Advanced React Patterns
- Machine Learning Fundamentals
- UI/UX Design Systems
- Database Engineering

---

### Card 2 — Progress Analytics

Analytics chart card.

Contains:

- line chart
- dual dataset
- legend
- timeframe filters
- summary metrics

Bottom metrics:

- Total Hours
- Completed Courses
- Growth Indicator

---

### Card 3 — Upcoming Tasks

Task list.

Each item:

- icon
- task title
- deadline
- status.

---

# Grid & Spacing System

Use 12-column dashboard logic.

Spacing:

Outer Padding: 32px

Card Gap: 24px

Card Padding: 24–32px

Border Radius: 24px

Section Spacing: 32px

Maintain:

consistent rhythm

balanced whitespace

intentional alignment.

---

# Color System

Dark mode only.

Background:

```css
#05070D
#090B13
#0D101A
```

Surface:

```css
#10131F
#141926
#191D2A
```

Primary Accent:

```css
#8B5CF6
#7C3AED
#A855F7
```

Secondary Accent:

```css
#3B82F6
#22D3EE
#EC4899
#22C55E
```

Lighting:

controlled

subtle

premium.

---

# Typography

Fonts:

- Geist
- Inter Tight
- Inter

Hierarchy:

Hero Heading:

48–56px

Card Titles:

18–24px

Body:

14–16px

Labels:

11–13px

Rules:

- strong hierarchy
- clean tracking
- premium alignment
- editorial spacing.

---

# Component Architecture

```txt
Navbar
Sidebar
SidebarItem
UserProfile
HeroPanel
MetricCard
ActivityHeatmap
CourseCard
ProgressAnalytics
UpcomingTasks
ProgressBar
ChartLegend
SearchButton
NotificationButton
```

---

# Motion System

Framer Motion style interactions.

Use:

Page Reveal:
- stagger animations

Cards:
- hover elevation
- subtle scale

Navigation:
- active pill interpolation

Charts:
- animated transitions

Rules:

animate only:

- transform
- opacity

Avoid layout shifts.

---

# Responsive Rules

Desktop:

full dashboard layout.

Tablet:

collapsed sidebar.

2-column adjustment.

Mobile:

stacked layout.

bottom navigation.

responsive cards.

---

# Tech Stack

Framework:
- Next.js 15 App Router

Language:
- TypeScript

Styling:
- Tailwind CSS

Animation:
- Framer Motion

Backend:
- Supabase

Icons:
- Lucide React

Charts:
- Recharts

Deployment:
- Vercel

---

# Code Structure

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
 ├── MetricCard.tsx
 ├── ActivityHeatmap.tsx
 ├── CourseCard.tsx
 ├── ProgressAnalytics.tsx
 ├── UpcomingTasks.tsx
 └── ProgressBar.tsx

lib/
 └── supabase.ts

types/
 └── course.ts
```


# Public Assets

A `public/` folder will be provided and MUST be used inside the implementation.

Folder structure:

```txt
public/
├── design-reference.png
├── boy.png
└── goal-video.mp4
```

---

## Asset Usage Rules

### 1. design-reference.png

Purpose:

Primary design reference.

This file contains the exact UI layout, visual direction, spacing logic, hierarchy, and composition style.

Requirements:

- follow the provided structure closely
- use it as the main visual blueprint
- replicate layout composition
- match spacing rhythm
- match dashboard architecture
- preserve visual hierarchy

Do NOT blindly copy.

Adapt content for the learning analytics dashboard.

---

### 2. boy.png

Purpose:

Hero / Greeting card illustration.

Usage:

Place inside the main hero dashboard panel.

Example placement:

Hero Card → Right side visual element.

Requirements:

- use Next.js Image component
- responsive behavior
- preserve transparent background
- object-contain scaling
- soft floating appearance
- subtle visual emphasis

Suggested styling:

- large display size
- slight gradient glow behind image
- premium illustration integration
- layered composition.

Example:

Good Evening, Aditya 👋

[ Hero Content ]          [ boy.png ]

---

### 3. goal-video.mp4

Purpose:

Goal progress visual section.

Use this video inside the sidebar bottom widget / goal card.

Placement:

Sidebar → Goal / Daily Progress section.

Requirements:

- autoplay
- muted
- loop
- playsInline

Use:

```tsx
<video
 autoPlay
 muted
 loop
 playsInline
>
```

Design behavior:

- small embedded visual block
- clipped rounded corners
- subtle overlay gradient
- soft opacity treatment
- integrated naturally into card design

Video should feel decorative and premium.

Not dominant.

---

# Implementation Requirements

Use Next.js asset loading.

For images:

```tsx
import Image from "next/image"
```

Example:

```tsx
<Image
 src="/boy.png"
 alt="Hero Illustration"
 fill
 className="object-contain"
/>
```

---

Video source example:

```tsx
<video
 autoPlay
 muted
 loop
 playsInline
 className="rounded-2xl object-cover"
>
 <source
   src="/goal-video.mp4"
   type="video/mp4"
 />
</video>
```

---

# Developer Notes

Claude must assume:

- assets already exist inside `/public`
- no placeholder assets
- no generated mock visuals
- use provided files directly

The implementation should dynamically use:

- `/design-reference.png`
- `/boy.png`
- `/goal-video.mp4`

throughout the dashboard UI.