"use client";

import React from 'react';
import { useCalendar } from '@/context/CalendarContext';
import { generateCalendarDays } from '@/lib/dateUtils';
import { CalendarDay } from './CalendarDay';

const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const CalendarGrid: React.FC = () => {
  const { viewDate, range } = useCalendar();
  
  // Generate the full grid (including padding days)
  const calendarDays = generateCalendarDays(viewDate, range);

  return (
    <div className="w-full">
      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-4">
        {DAYS_OF_WEEK.map((day) => (
          <div 
            key={day} 
            className="text-center text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* The Dates Grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {calendarDays.map((day) => (
          <CalendarDay 
            key={day.date.toISOString()} 
            day={day} 
          />
        ))}
      </div>
    </div>
  );
};