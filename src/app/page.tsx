import { CalendarProvider } from "@/context/CalendarContext";
import { CalendarRoot } from "@/components/Calendar/CalendarRoot";

export default function Home() {
  return (
    <main>
      <CalendarProvider>
        {/* The Root component handles the wall calendar aesthetic and responsiveness */}
        <CalendarRoot />
      </CalendarProvider>
      
      {/* Visual background element to enhance the "Artistic" vibe */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-calendar-primary/5 via-transparent to-transparent pointer-events-none" />
    </main>
  );
}