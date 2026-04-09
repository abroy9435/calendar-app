export interface DateRange {
    start: Date | null;
    end: Date | null;
  }
  
  export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isInRange: boolean;
    isRangeStart: boolean;
    isRangeEnd: boolean;
  }
  
  export interface DayNote {
    id: string;
    date: string; // ISO string for easy localStorage indexing
    content: string;
    title?: string;
  }
  
  export type CalendarViewMode = 'month' | 'year';