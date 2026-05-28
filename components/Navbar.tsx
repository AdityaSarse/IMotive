'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, ChevronDown, User, Settings, LogOut, Award, Shield } from 'lucide-react';

const NAV_ITEMS = ['Dashboard', 'Courses', 'Analytics', 'Calendar', 'Community'];

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navbar({ activeTab = 'Dashboard', onTabChange }: NavbarProps) {
  const [activeItem, setActiveItem] = useState(activeTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (onTabChange) {
      onTabChange(item);
    }
  };

  return (
    <header className="w-full bg-[#0A0D13] border-b border-[#121626] py-3 px-6 md:px-8">
      <div className="w-full flex items-center justify-between">
        
        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item;
            return (
              <button
                key={item}
                onClick={() => handleItemClick(item)}
                className="relative py-2 text-sm font-medium transition-colors duration-200 focus:outline-none"
              >
                <span className={`transition-colors duration-200 ${isActive ? 'text-white font-medium' : 'text-slate-500 hover:text-slate-300'}`}>
                  {item}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-line"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & User Dropdown */}
        <div className="flex items-center gap-4">
          
          {/* Search Trigger */}
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 150, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  type="text"
                  placeholder="Search..."
                  className="rounded-full bg-[#0A0D13] border border-[#1C223E] px-3 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 mr-2"
                />
              )}
            </AnimatePresence>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Search"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Notifications Panel */}
          <button
            onClick={() => setHasNotifications(false)}
            className="relative text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Notifications"
          >
            <Bell className="h-4.5 w-4.5" />
            {hasNotifications && (
              <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-purple-500" />
            )}
          </button>

          {/* User Profile Info & Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 rounded-full hover:bg-slate-900/40 p-1 pl-2 transition-all duration-200"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-indigo-500/20">
                {/* Fallback avatar matching style */}
                <div className="flex h-full w-full items-center justify-center bg-slate-800 text-xs font-semibold text-indigo-400">
                  A
                </div>
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-bold leading-none text-slate-200">Aditya</span>
                <span className="text-[10px] text-slate-500 font-semibold mt-0.5">Student</span>
              </div>
              <ChevronDown className={`h-3 w-3 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-[#0A0D13] border border-[#13172A] shadow-2xl p-2 z-50 animate-fade-in"
                >
                  <div className="px-3 py-2 border-b border-[#121626] mb-1">
                    <p className="text-xs text-slate-500">Signed in as</p>
                    <p className="text-xs font-bold text-slate-200 truncate">aditya@learnova.io</p>
                  </div>

                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-400 hover:text-white hover:bg-slate-900 transition-colors">
                    <User className="h-4 w-4" />
                    View Profile
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-400 hover:text-white hover:bg-slate-900 transition-colors">
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>
                  
                  <div className="h-px bg-[#121626] my-1" />
                  
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </header>
  );
}
