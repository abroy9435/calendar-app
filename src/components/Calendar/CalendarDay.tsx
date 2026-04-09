"use client";

import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useCalendar } from '@/context/CalendarContext';
import { CalendarDay as DayType } from '@/types/calendar';
import { cn } from '@/lib/utils';

interface Props {
  day: DayType;
}

export const CalendarDay: React.FC<Props> = ({ day }) => {
  const { range, setRange } = useCalendar();
  const { date, isCurrentMonth, isToday, isSelected, isInRange, isRangeStart, isRangeEnd } = day;

  const handleSelection = () => {
    if (!isCurrentMonth) return;
    
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      date < range.start 
        ? setRange({ start: date, end: range.start })
        : setRange({ start: range.start, end: date });
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95, z: -10 }}
      onClick={handleSelection}
      className={cn(
        "relative h-14 w-full flex items-center justify-center transition-all duration-300",
        !isCurrentMonth && "opacity-20 pointer-events-none",
        isInRange && "bg-calendar-primary/10 dark:bg-calendar-primary/20",
        isRangeStart && "rounded-l-xl bg-calendar-primary text-white shadow-lg z-20",
        isRangeEnd && "rounded-r-xl bg-calendar-primary text-white shadow-lg z-20",
        isRangeStart && isRangeEnd && "rounded-xl"
      )}
    >
      <span className={cn(
        "text-sm font-bold tracking-tight z-10",
        isToday && !isSelected && "text-calendar-primary"
      )}>
        {format(date, 'd')}
      </span>

      {/* 3D "Hole" indicator for current day */}
      {isToday && !isSelected && (
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-calendar-primary rounded-full animate-pulse shadow-[0_0_8px_var(--calendar-primary)]" />
      )}
      
      {/* Subtle paper indentation on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/5 dark:bg-white/5 rounded-lg transition-opacity" />
    </motion.button>
  );
};