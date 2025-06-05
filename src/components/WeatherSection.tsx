
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind } from "lucide-react";

export const WeatherSection = () => {
  // Mock weather data - you can replace this with real API data later
  const weatherData = [
    { day: "Today", temp: "28°C", condition: "Sunny", icon: Sun, humidity: "65%" },
    { day: "Tomorrow", temp: "26°C", condition: "Partly Cloudy", icon: Cloud, humidity: "70%" },
    { day: "Wed", temp: "24°C", condition: "Rainy", icon: CloudRain, humidity: "85%" },
    { day: "Thu", temp: "27°C", condition: "Sunny", icon: Sun, humidity: "60%" },
    { day: "Fri", temp: "25°C", condition: "Windy", icon: Wind, humidity: "68%" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Weather Forecast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Plan your journey better with our weather updates for major cities in Cameroon
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {weatherData.map((weather, index) => {
            const IconComponent = weather.icon;
            return (
              <Card key={index} className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    {weather.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-col items-center space-y-2">
                    <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-purple-600 dark:text-purple-400" />
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {weather.temp}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {weather.condition}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {weather.humidity}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Weather Background Image */}
        <div className="mt-8 md:mt-12 relative">
          <div 
            className="h-32 md:h-48 rounded-2xl bg-cover bg-center relative overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-indigo-600/70 dark:from-purple-400/60 dark:to-indigo-400/60"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Perfect Weather for Travel</h3>
                <p className="text-sm md:text-base opacity-90">Safe and comfortable journeys across Cameroon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
