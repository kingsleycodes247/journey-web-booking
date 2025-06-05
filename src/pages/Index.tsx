
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, ArrowRightLeft, Bus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchResults } from "@/components/SearchResults";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Header } from "@/components/Header";

const Index = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");
  const [showResults, setShowResults] = useState(false);

  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", 
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
  ];

  const handleSearch = () => {
    if (fromCity && toCity && departureDate) {
      setShowResults(true);
    }
  };

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Book Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Travel comfortably and safely to your destination with our premium bus services
            </p>
          </div>

          {/* Search Form */}
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gray-800">Find Your Perfect Trip</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                {/* From City */}
                <div className="space-y-2">
                  <Label htmlFor="from" className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    From
                  </Label>
                  <Select value={fromCity} onValueChange={setFromCity}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select departure city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={swapCities}
                    className="h-12 w-12 rounded-full border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                  >
                    <ArrowRightLeft className="h-4 w-4" />
                  </Button>
                </div>

                {/* To City */}
                <div className="space-y-2">
                  <Label htmlFor="to" className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    To
                  </Label>
                  <Select value={toCity} onValueChange={setToCity}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select destination city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    Departure Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start text-left font-normal",
                          !departureDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {departureDate ? format(departureDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Passengers</Label>
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Passenger' : 'Passengers'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleSearch}
                className="w-full mt-8 h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                disabled={!fromCity || !toCity || !departureDate}
              >
                Search Buses
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Search Results */}
      {showResults && (
        <SearchResults 
          fromCity={fromCity}
          toCity={toCity}
          departureDate={departureDate}
          passengers={passengers}
        />
      )}

      {/* Features Section */}
      {!showResults && <FeaturesSection />}
    </div>
  );
};

export default Index;
