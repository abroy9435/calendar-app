"use client";

import React from 'react';
import { format, isSameDay } from 'date-fns';
import { useCalendar } from '@/context/CalendarContext';
import { CalendarDay as DayType } from '@/types/calendar';
import { cn } from '@/lib/utils'; // Standard Tailwind merge helper

interface Props {
  day: DayType;
}

export const CalendarDay: React.FC<Props> = ({ day }) => {
  const { range, setRange } = useCalendar();
  const { date, isCurrentMonth, isToday, isSelected, isInRange, isRangeStart, isRangeEnd } = day;

  const handleSelection = () => {
    if (!range.start || (range.start && range.end)) {
      // Start new selection
      setRange({ start: date, end: null });
    } else {
      // Complete selection: ensure start is before end
      if (date < range.start) {
        setRange({ start: date, end: range.start });
      } else {
        setRange({ start: range.start, end: date });
      }
    }
  };

  return (
    <button
      onClick={handleSelection}
      className={cn(
        "relative h-14 w-full flex flex-col items-center justify-center transition-all duration-200 group",
        !isCurrentMonth && "text-slate-300 dark:text-slate-600 pointer-events-none",
        isCurrentMonth && "hover:bg-calendar-primary/10 rounded-lg",
        isInRange && !isSelected && "bg-calendar-primary/5 dark:bg-calendar-primary/20",
        isRangeStart && "bg-calendar-primary text-white rounded-l-lg",
        isRangeEnd && "bg-calendar-primary text-white rounded-r-lg",
        isRangeStart && isRangeEnd && "rounded-lg" // Single day selection
      )}
    >
      <span className={cn(
        "text-sm font-medium z-10",
        isToday && !isSelected && "text-calendar-primary font-bold underline decoration-2 underline-offset-4"
      )}>
        {format(date, 'd')}
      </span>
      
      {/* Visual Dot for Today if not selected */}
      {isToday && !isSelected && (
        <div className="absolute bottom-2 w-1 h-1 bg-calendar-primary rounded-full" />
      )}
    </button>
  );
};