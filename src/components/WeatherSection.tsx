
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind } from "lucide-react";

export const WeatherSection = () => {
  // Weather data with Cameroon cities
  const weatherData = [
    { 
      city: "Yaoundé", 
      day: "Today", 
      temp: "28°C", 
      condition: "Sunny", 
      icon: Sun, 
      humidity: "65%",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      city: "Douala", 
      day: "Tomorrow", 
      temp: "26°C", 
      condition: "Partly Cloudy", 
      icon: Cloud, 
      humidity: "70%",
      color: "from-blue-400 to-gray-500"
    },
    { 
      city: "Bamenda", 
      day: "Wed", 
      temp: "24°C", 
      condition: "Rainy", 
      icon: CloudRain, 
      humidity: "85%",
      color: "from-blue-500 to-blue-700"
    },
    { 
      city: "Bafoussam", 
      day: "Thu", 
      temp: "27°C", 
      condition: "Sunny", 
      icon: Sun, 
      humidity: "60%",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      city: "Garoua", 
      day: "Fri", 
      temp: "32°C", 
      condition: "Windy", 
      icon: Wind, 
      humidity: "45%",
      color: "from-gray-400 to-gray-600"
    },
  ];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-from-top">
            Weather Forecast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-in-from-bottom">
            Plan your journey better with our weather updates for major cities in Cameroon
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {weatherData.map((weather, index) => {
            const IconComponent = weather.icon;
            return (
              <Card 
                key={index} 
                className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {weather.day}
                  </CardTitle>
                  <CardTitle className="text-sm md:text-base font-bold text-gray-900 dark:text-white">
                    {weather.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-col items-center space-y-3">
                    {/* Animated Weather Icon */}
                    <div className={`h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-br ${weather.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                      {weather.temp}
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {weather.condition}
                    </div>
                    
                    <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-1 animate-pulse"></div>
                      {weather.humidity}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Weather Background */}
        <div className="mt-8 md:mt-12 relative animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div 
            className="h-32 md:h-48 rounded-2xl bg-cover bg-center relative overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-indigo-600/70 dark:from-purple-400/60 dark:to-indigo-400/60 group-hover:from-purple-700/80 group-hover:to-indigo-700/80 transition-all duration-500"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2 animate-pulse">Perfect Weather for Travel</h3>
                <p className="text-sm md:text-base opacity-90">Safe and comfortable journeys across Cameroon</p>
              </div>
            </div>
            
            {/* Floating weather elements */}
            <div className="absolute top-4 left-4 opacity-20">
              <Cloud className="h-8 w-8 text-white animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute top-8 right-8 opacity-20">
              <Sun className="h-6 w-6 text-yellow-300 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="absolute bottom-4 left-1/3 opacity-20">
              <Wind className="h-6 w-6 text-white animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
