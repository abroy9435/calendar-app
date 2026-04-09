"use client";

import React, { useState } from 'react';
import { useCalendar } from '@/context/CalendarContext';
import { Plus, Trash2, StickyNote } from 'lucide-react';
import { format } from 'date-fns';

export const NotesArea: React.FC = () => {
  const { notes, addNote, deleteNote, range } = useCalendar();
  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    // Contextual note: If a range is selected, tag it to the start date
    const dateTag = range.start ? format(range.start, 'yyyy-MM-dd') : 'General';
    addNote(dateTag, newNote);
    setNewNote('');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <StickyNote className="w-4 h-4 text-calendar-primary" />
        <h3 className="text-sm font-bold uppercase tracking-tighter text-slate-700 dark:text-slate-300">
          Notes & Memos
        </h3>
      </div>

      {/* Note Input */}
      <form onSubmit={handleAddNote} className="flex gap-2">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder={range.start ? `Note for ${format(range.start, 'MMM d')}...` : "Add a general memo..."}
          className="flex-grow bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-calendar-primary transition-all"
        />
        <button 
          type="submit"
          className="bg-calendar-primary hover:opacity-90 text-white p-2 rounded-lg transition-transform active:scale-95"
        >
          <Plus className="w-5 h-5" />
        </button>
      </form>

      {/* Notes List */}
      <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
        {notes.length === 0 ? (
          <p className="text-xs text-slate-400 italic">No notes for this month yet.</p>
        ) : (
          notes.map((note) => (
            <div 
              key={note.id} 
              className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border-l-4 border-calendar-primary group animate-in fade-in slide-in-from-left-2"
            >
              <div>
                <p className="text-[10px] font-bold text-calendar-primary uppercase mb-1">{note.date}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{note.content}</p>
              </div>
              <button 
                onClick={() => deleteNote(note.id)}
                className="text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};