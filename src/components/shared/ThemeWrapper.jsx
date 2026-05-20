export default function ThemeWrapper({ children }) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors">
      {children}
    </div>
  );
}