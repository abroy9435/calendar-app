"use client";

import React from 'react';
import Image from 'next/image';
import { useCalendar } from '@/context/CalendarContext';
import { formatMonthYear } from '@/lib/dateUtils';

export const HeroHeader: React.FC = () => {
  const { viewDate } = useCalendar();

  return (
    <div className="relative h-64 lg:h-full w-full overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
      {/* Vibrant Artistic Hero Image */}
      <Image
        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000"
        alt="Artistic Abstract"
        fill
        className="object-cover transition-transform duration-700 hover:scale-110"
        priority
      />
      
      {/* Overlay for Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40" />

      {/* 2022 JANUARY Text - Styled to match PDF hierarchy */}
      <div className="absolute bottom-6 left-8 lg:bottom-12 lg:left-12 text-white">
        <p className="text-sm font-bold tracking-[0.2em] opacity-80 mb-1">
          {viewDate.getFullYear()}
        </p>
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight uppercase">
          {viewDate.toLocaleString('default', { month: 'long' })}
        </h1>
      </div>
    </div>
  );
};