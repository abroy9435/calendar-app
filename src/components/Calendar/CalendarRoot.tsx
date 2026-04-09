"use client";

import React from 'react';
import { HeroHeader } from '../Hero/HeroHeader';
import { CalendarGrid } from './CalendarGrid';
import { NotesArea } from '../Notes/NotesArea';
import { ThemeToggle } from '../Shared/ThemeToggle';

export const CalendarRoot: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 lg:p-12 flex items-center justify-center transition-colors duration-300">
      <div className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Visual Anchor (Left on Desktop, Top on Mobile) */}
        <div className="w-full lg:w-2/5 xl:w-1/2">
          <HeroHeader />
        </div>

        {/* Content Section (Right on Desktop, Bottom on Mobile) */}
        <div className="w-full lg:w-3/5 xl:w-1/2 p-6 lg:p-10 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Interactive Schedule</h2>
            <ThemeToggle />
          </div>

          {/* Core Grid */}
          <div className="flex-grow">
            <CalendarGrid />
          </div>

          {/* Integrated Notes Section (Requirement) */}
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
            <NotesArea />
          </div>
        </div>
      </div>
    </div>
  );
};