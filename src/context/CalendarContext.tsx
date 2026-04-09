"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { DateRange, DayNote } from '@/types/calendar';

interface CalendarContextType {
  range: DateRange;
  setRange: (range: DateRange) => void;
  notes: DayNote[];
  addNote: (date: string, content: string) => void;
  deleteNote: (id: string) => void;
  viewDate: Date;
  setViewDate: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [range, setRange] = useState<DateRange>({ start: null, end: null });
  const [viewDate, setViewDate] = useState<Date>(new Date(2022, 0, 1)); // Default to January 2022 as per PDF
  const [notes, setNotes] = useState<DayNote[]>([]);

  // Load notes from localStorage on mount (Client-side persistence)
  useEffect(() => {
    const savedNotes = localStorage.getItem('calendar-notes');
    if (savedNotes) setNotes(JSON.parse(savedNotes));
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('calendar-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (date: string, content: string) => {
    const newNote: DayNote = { id: crypto.randomUUID(), date, content };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <CalendarContext.Provider value={{ 
      range, setRange, notes, addNote, deleteNote, viewDate, setViewDate 
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