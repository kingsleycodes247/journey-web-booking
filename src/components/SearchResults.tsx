
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, CreditCard } from "lucide-react";
import { format } from "date-fns";

interface SearchResultsProps {
  fromCity: string;
  toCity: string;
  departureDate: Date | undefined;
  passengers: string;
}

export const SearchResults = ({ fromCity, toCity, departureDate, passengers }: SearchResultsProps) => {
  // Mock bus data - in real app, this would come from your Django backend
  const busResults = [
    {
      id: 1,
      operator: "Express Lines",
      departureTime: "06:00",
      arrivalTime: "14:30",
      duration: "8h 30m",
      price: 45,
      busType: "AC Sleeper",
      seatsAvailable: 12,
      rating: 4.5,
      amenities: ["WiFi", "Charging Point", "Entertainment"]
    },
    {
      id: 2,
      operator: "Comfort Travel",
      departureTime: "09:15",
      arrivalTime: "17:45",
      duration: "8h 30m",
      price: 52,
      busType: "AC Semi-Sleeper",
      seatsAvailable: 8,
      rating: 4.2,
      amenities: ["WiFi", "Snacks", "Blanket"]
    },
    {
      id: 3,
      operator: "Royal Coach",
      departureTime: "22:30",
      arrivalTime: "06:45",
      duration: "8h 15m",
      price: 65,
      busType: "Luxury AC",
      seatsAvailable: 5,
      rating: 4.8,
      amenities: ["WiFi", "Meals", "Premium Seats", "Entertainment"]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Buses</h2>
          <p className="text-gray-600">
            {fromCity} → {toCity} • {departureDate && format(departureDate, "PPP")} • {passengers} {passengers === "1" ? "Passenger" : "Passengers"}
          </p>
        </div>

        <div className="space-y-4">
          {busResults.map((bus) => (
            <Card key={bus.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  {/* Bus Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{bus.operator}</h3>
                        <p className="text-gray-600">{bus.busType}</p>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                            ★ {bus.rating}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">
                            {bus.seatsAvailable} seats available
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2">
                      {bus.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{bus.departureTime}</p>
                        <p className="text-sm text-gray-600">{fromCity}</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <Clock className="h-4 w-4 text-gray-400 mb-1" />
                        <p className="text-sm text-gray-600">{bus.duration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{bus.arrivalTime}</p>
                        <p className="text-sm text-gray-600">{toCity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price & Book */}
                  <div className="text-center lg:text-right">
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-blue-600">${bus.price}</p>
                      <p className="text-sm text-gray-600">per person</p>
                    </div>
                    <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700">
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
