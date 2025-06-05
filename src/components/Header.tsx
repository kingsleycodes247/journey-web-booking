
import { Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bus className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">BusTravel</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">My Bookings</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Help</a>
            <Button variant="outline" size="sm">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
