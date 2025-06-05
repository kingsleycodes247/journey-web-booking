
import { Bus, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bus className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">237 Voyage</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">My Bookings</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Track Journey</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Bus Partners</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Help</a>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-purple-600"
              />
              <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </div>
            
            <Button variant="outline" size="sm" className="border-purple-200 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/50">
              Sign In
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
