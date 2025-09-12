import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="p-8 border border-border rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Theme Toggle Example</h2>
        <ThemeToggle />
      </div>
    </div>
  );
}