"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCalendar } from '@/context/CalendarContext';
import { generateCalendarDays } from '@/lib/dateUtils';
import { CalendarDay } from './CalendarDay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const CalendarGrid: React.FC = () => {
  const { viewDate, range, nextMonth, prevMonth, direction } = useCalendar();
  const calendarDays = generateCalendarDays(viewDate, range);

  // 3D Flip Variants
  const variants = {
    enter: (direction: number) => ({
      rotateX: direction > 0 ? 90 : -90,
      opacity: 0,
      y: direction > 0 ? 50 : -50,
    }),
    center: {
      rotateX: 0,
      opacity: 1,
      y: 0,
    },
    exit: (direction: number) => ({
      rotateX: direction > 0 ? -90 : 90,
      opacity: 0,
      y: direction > 0 ? -50 : 50,
    })
  };

  return (
    <div className="w-full overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Month Navigation Controls */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={prevMonth} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
          <ChevronLeft className="w-5 h-5 text-slate-400" />
        </button>
        <span className="text-xs font-bold tracking-[0.2em] text-calendar-primary">
          {viewDate.toLocaleString('default', { month: 'long' }).toUpperCase()}
        </span>
        <button onClick={nextMonth} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-4">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day} className="text-center text-[10px] font-bold text-slate-400">{day}</div>
        ))}
      </div>

      {/* Animated Grid Container */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={viewDate.toISOString()}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-7 gap-y-1 w-full"
            style={{ transformOrigin: "top center" }} // Makes it flip from the "binder"
          >
            {calendarDays.map((day) => (
              <CalendarDay key={day.date.toISOString()} day={day} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};