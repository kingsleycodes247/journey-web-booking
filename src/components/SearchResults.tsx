
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, CreditCard, Star, Navigation } from "lucide-react";
import { format } from "date-fns";

interface SearchResultsProps {
  fromCity: string;
  toCity: string;
  departureDate: Date | undefined;
  passengers: string;
}

export const SearchResults = ({ fromCity, toCity, departureDate, passengers }: SearchResultsProps) => {
  // Mock bus data with Cameroon bus companies
  const busResults = [
    {
      id: 1,
      operator: "Garantie Express",
      companyLogo: "GE",
      departureTime: "06:00",
      arrivalTime: "14:30",
      duration: "8h 30m",
      price: 15000,
      currency: "XAF",
      busType: "VIP",
      seatsAvailable: 12,
      rating: 4.5,
      amenities: ["WiFi", "AC", "Entertainment", "Snacks"],
      trackingAvailable: true
    },
    {
      id: 2,
      operator: "Musango Omnisport",
      companyLogo: "MO",
      departureTime: "09:15",
      arrivalTime: "17:45",
      duration: "8h 30m",
      price: 12000,
      currency: "XAF",
      busType: "First Class",
      seatsAvailable: 8,
      rating: 4.2,
      amenities: ["AC", "Comfortable Seats", "Music"],
      trackingAvailable: true
    },
    {
      id: 3,
      operator: "Binam Voyage",
      companyLogo: "BV",
      departureTime: "22:30",
      arrivalTime: "06:45",
      duration: "8h 15m",
      price: 18000,
      currency: "XAF",
      busType: "Luxury VIP",
      seatsAvailable: 5,
      rating: 4.8,
      amenities: ["WiFi", "Meals", "Premium Seats", "Entertainment", "Blankets"],
      trackingAvailable: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Available Buses</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {fromCity} → {toCity} • {departureDate && format(departureDate, "PPP")} • {passengers} {passengers === "1" ? "Passenger" : "Passengers"}
          </p>
        </div>

        <div className="space-y-4">
          {busResults.map((bus) => (
            <Card key={bus.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-700 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  {/* Bus Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">{bus.companyLogo}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{bus.operator}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{bus.busType}</p>
                          <div className="flex items-center mt-2 space-x-4">
                            <div className="flex items-center bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400 px-2 py-1 rounded text-sm">
                              <Star className="w-3 h-3 mr-1" />
                              {bus.rating}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {bus.seatsAvailable} seats available
                            </span>
                            {bus.trackingAvailable && (
                              <Badge variant="secondary" className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-400">
                                <Navigation className="w-3 h-3 mr-1" />
                                Live Tracking
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2">
                      {bus.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-600">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{bus.departureTime}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{fromCity}</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <Clock className="h-4 w-4 text-gray-400 mb-1" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">{bus.duration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{bus.arrivalTime}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{toCity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price & Book */}
                  <div className="text-center lg:text-right">
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{formatPrice(bus.price)} {bus.currency}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">per person</p>
                    </div>
                    <Button className="w-full lg:w-auto bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
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
