"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { DateRange, DayNote } from '@/types/calendar';

interface CalendarContextType {
  range: DateRange;
  setRange: (range: DateRange) => void;
  notes: DayNote[];
  addNote: (date: string, content: string) => void;
  deleteNote: (id: string) => void;
  viewDate: Date;
  nextMonth: () => void;
  prevMonth: () => void;
  direction: number; // To track animation direction (1 for forward, -1 for back)
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [range, setRange] = useState<DateRange>({ start: null, end: null });
  const [viewDate, setViewDate] = useState<Date>(new Date(2022, 0, 1));
  const [notes, setNotes] = useState<DayNote[]>([]);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const savedNotes = localStorage.getItem('calendar-notes');
    if (savedNotes) setNotes(JSON.parse(savedNotes));
  }, []);

  const nextMonth = () => {
    setDirection(1);
    setViewDate(prev => addMonths(prev, 1));
  };

  const prevMonth = () => {
    setDirection(-1);
    setViewDate(prev => subMonths(prev, 1));
  };

  const addNote = (date: string, content: string) => {
    const newNote: DayNote = { id: crypto.randomUUID(), date, content };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <CalendarContext.Provider value={{ 
      range, setRange, notes, addNote, deleteNote, viewDate, nextMonth, prevMonth, direction 
    }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error("useCalendar must be used within a CalendarProvider");
  return context;
};