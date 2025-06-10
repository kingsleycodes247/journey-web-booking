import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bus, Clock, MapPin, Users, Wifi, AirVent, Shield, Currency } from "lucide-react";

interface SearchResultsProps {
  fromCity: string;
  toCity: string;
  departureDate: Date | undefined;
  returnDate?: Date | undefined;
  passengers: string;
  ticketType: string;
}

export const SearchResults = ({ fromCity, toCity, departureDate, returnDate, passengers, ticketType }: SearchResultsProps) => {
  // Mock bus data - you can replace this with real API data later
  const busResults = [
    {
      id: 1,
      company: "Guaranti Express",
      logo: "🚌",
      departureTime: "06:00",
      arrivalTime: "14:00",
      duration: "8h 00m",
      price: 8500,
      rating: 4.5,
      Currency: "XAF",
      amenities: ["WiFi", "AC", "Insurance"],
      busType: "VIP",
      seatsAvailable: 12,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      company: "Musango Omnisport",
      logo: "🚌",
      departureTime: "09:15",
      arrivalTime: "17:45",
      duration: "8h 30m",
      price: 12000,
      currency: "XAF",
      busType: "First Class",
      seatsAvailable: 8,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      amenities: ["AC", "Comfortable Seats", "Music"],
    
      trackingAvailable: true
    },
    {
      id: 3,
      company: "Binam Voyage",
      logo: "🚌",
      departureTime: "22:30",
      arrivalTime: "06:45",
      duration: "8h 15m",
      price: 18000,
      currency: "XAF",
      busType: "Luxury VIP",
      seatsAvailable: 5,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      amenities: ["WiFi", "Meals", "Premium Seats", "Entertainment", "Blankets"],
      trackingAvailable: true
    }
  ];

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { 
      weekday: "short", 
      year: "numeric", 
      month: "short", 
      day: "numeric" 
    });
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Search Summary */}
        <Card className="mb-6 md:mb-8 bg-white dark:bg-gray-800 border-0 shadow-lg">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="font-medium text-gray-900 dark:text-white">{fromCity} → {toCity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">{formatDate(departureDate)}</span>
                  {ticketType === "round-trip" && returnDate && (
                    <>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600 dark:text-gray-300">Return: {formatDate(returnDate)}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">{passengers} passenger{passengers !== "1" ? "s" : ""}</span>
                </div>
              </div>
              <Badge variant="secondary" className="w-fit">
                {ticketType === "round-trip" ? "Round Trip" : "One Way"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
            Available Buses ({busResults.length})
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing results for {formatDate(departureDate)}
          </div>
        </div>

        {/* Bus Results */}
        <div className="space-y-4 md:space-y-6">
          {busResults.map((bus) => (
            <Card key={bus.id} className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Bus Image */}
                  <div className="lg:w-48 h-48 lg:h-auto">
                    <img 
                      src={bus.image} 
                      alt={`${bus.company} bus`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Bus Details */}
                  <div className="flex-1 p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      {/* Left Section */}
                      <div className="space-y-3 lg:space-y-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{bus.logo}</span>
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{bus.company}</h3>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">{bus.busType}</Badge>
                              <span className="text-sm text-gray-500">⭐ {bus.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-900 dark:text-white">{bus.departureTime}</div>
                              <div className="text-sm text-gray-500">{fromCity}</div>
                            </div>
                            <div className="flex-1 text-center">
                              <div className="text-sm text-gray-500">{bus.duration}</div>
                              <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-900 dark:text-white">{bus.arrivalTime}</div>
                              <div className="text-sm text-gray-500">{toCity}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {bus.amenities.map((amenity, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {amenity === "WiFi" && <Wifi className="w-3 h-3 mr-1" />}
                              {amenity === "AC" && <AirVent className="w-3 h-3 mr-1" />}
                              {amenity === "Insurance" && <Shield className="w-3 h-3 mr-1" />}
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Section */}
                      <div className="text-center lg:text-right space-y-3">
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                            XAF. {bus.price.toLocaleString()}
                            {ticketType === "round-trip" && (
                              <span className="text-sm text-gray-500 block">× 2 = XAF. {(bus.price * 2).toLocaleString()}</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">per person</div>
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          {bus.seatsAvailable} seats left
                        </div>
                        <Button className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 dark:from-purple-500 dark:to-indigo-500 dark:hover:from-purple-600 dark:hover:to-indigo-600">
                          Select Seats
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
