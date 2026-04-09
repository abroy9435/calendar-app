import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameDay,
    isWithinInterval,
    isToday,
    isSameMonth,
  } from 'date-fns';
  import { CalendarDay, DateRange } from '@/types/calendar';
  
  /**
   * Generates an array of days for the calendar grid
   * specifically tailored for a 7-column wall calendar layout.
   */
  export const generateCalendarDays = (
    viewDate: Date,
    range: DateRange
  ): CalendarDay[] => {
    const monthStart = startOfMonth(viewDate);
    const monthEnd = endOfMonth(monthStart);
    
    // To ensure the grid always starts on Monday (as seen in the PDF reference)
    // we adjust the start and end of the visible interval.
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
    const days = eachDayOfInterval({
      start: calendarStart,
      end: calendarEnd,
    });
  
    return days.map((date) => {
      const isStart = range.start ? isSameDay(date, range.start) : false;
      const isEnd = range.end ? isSameDay(date, range.end) : false;
      
      let inRange = false;
      if (range.start && range.end) {
        // Ensure interval is valid (start <= end) for date-fns
        const [low, high] = range.start <= range.end 
          ? [range.start, range.end] 
          : [range.end, range.start];
        inRange = isWithinInterval(date, { start: low, end: high });
      }
  
      return {
        date,
        isCurrentMonth: isSameMonth(date, monthStart),
        isToday: isToday(date),
        isSelected: isStart || isEnd,
        isInRange: inRange,
        isRangeStart: isStart,
        isRangeEnd: isEnd,
      };
    });
  };
  
  /**
   * Helper to format the Month/Year header for the artistic hero section.
   */
  export const formatMonthYear = (date: Date): string => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' }).toUpperCase();
  };