"use client";

import React from 'react';
import { HeroHeader } from '../Hero/HeroHeader';
import { CalendarGrid } from './CalendarGrid';
import { NotesArea } from '../Notes/NotesArea';
import { ThemeToggle } from '../Shared/ThemeToggle';
import { cn } from '@/lib/utils';

export const CalendarRoot: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 overflow-hidden">
      {/* The "Nail" holding the calendar */}
      <div className="absolute top-10 w-3 h-3 bg-slate-400 dark:bg-slate-600 rounded-full shadow-inner z-50" />
      
      {/* 3D Calendar Container */}
      <div className={cn(
        "calendar-3d-card relative w-full max-w-5xl bg-[var(--calendar-bg)] rounded-b-xl flex flex-col lg:flex-row",
        "border-t-[12px] border-slate-800 dark:border-slate-900" // The Binder bar
      )}>
        
        {/* Binder Rings (The spiral look) */}
        <div className="absolute -top-6 left-0 right-0 flex justify-around px-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1.5 h-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full shadow-md" />
          ))}
        </div>

        {/* Artistic Hero Section */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <HeroHeader />
          {/* Surface reflection for Day/Night feel */}
          <div className="absolute inset-0 pointer-events-none opacity-50 bg-[var(--lighting)]" />
        </div>

        {/* Calendar Interaction Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col relative">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Interactive Wall Unit</span>
            <ThemeToggle />
          </div>

          <div className="flex-grow">
            <CalendarGrid />
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <NotesArea />
          </div>
        </div>
      </div>
    </div>
  );
};