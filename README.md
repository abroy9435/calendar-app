# 📅 Interactive Wall Calendar Component

[cite_start]A polished, responsive, and artistic React component built for the Frontend Engineering Challenge. [cite: 3] [cite_start]This project emulates a physical wall calendar with an integrated note-taking system and interactive date range selection. [cite: 7, 26, 28, 30]

## 🚀 Tech Stack
- [cite_start]**Framework:** Next.js 16 (App Router) [cite: 3]
- [cite_start]**Styling:** Tailwind CSS (with Dark Mode support) [cite: 31, 50]
- [cite_start]**State Management:** React Context API + Custom Hooks [cite: 50]
- [cite_start]**Date Logic:** date-fns [cite: 50]
- **Optimization:** React Compiler (enabled via `next.config.ts`)

## 🏗️ Architectural Choices
- [cite_start]**Modular Component Design:** Split into atomic units (`CalendarDay`, `CalendarGrid`, `NotesArea`) to ensure maintainability and prevent "bulky" files. [cite: 49]
- [cite_start]**Range Selection Engine:** Implemented a custom selection algorithm that handles start/end dates and visual "in-between" states. [cite: 28, 29]
- [cite_start]**Zero-Backend Persistence:** Uses `localStorage` to persist user notes and range selections across sessions, as per the assessment scope. [cite: 48]
- [cite_start]**Responsive Stacking:** Utilizes a mobile-first CSS Grid approach that transitions from a vertical stack to a dual-pane wall calendar on desktop. [cite: 31, 35]

## ✨ Key Features
- [cite_start]**Wall Calendar Aesthetic:** Proportional hero imagery paired with a 7-column date grid. [cite: 26, 27]
- [cite_start]**Interactive Range Selector:** Click-to-range logic with smooth hover states. [cite: 28]
- [cite_start]**Contextual Notes:** Attach memos directly to specific dates or the general month. [cite: 30]
- **Industry Standard Dark Mode:** Full system-aware theme switching via `next-themes`.

## 🛠️ Installation & Running
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) to view the component.

---
*Developed as part of the Frontend Engineering Assessment.*