
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Clock } from "lucide-react";

const BusPartners = () => {
  const busCompanies = [
    {
      name: "Musango",
      rating: 4.8,
      routes: ["Yaoundé - Douala", "Douala - Bamenda", "Yaoundé - Bafoussam"],
      credibility: "Excellent",
      color: "green",
      phone: "+237 677 123 456",
      established: "Since 1995"
    },
    {
      name: "Garantii Express",
      rating: 4.6,
      routes: ["Yaoundé - Ngaoundéré", "Douala - Garoua", "Bamenda - Maroua"],
      credibility: "Very Good",
      color: "blue",
      phone: "+237 678 234 567",
      established: "Since 2000"
    },
    {
      name: "Finexx Voyage",
      rating: 4.4,
      routes: ["Yaoundé - Bertoua", "Douala - Ebolowa", "Bafoussam - Kumba"],
      credibility: "Good",
      color: "yellow",
      phone: "+237 679 345 678",
      established: "Since 2005"
    },
    {
      name: "Afrique Con",
      rating: 4.2,
      routes: ["Douala - Kribi", "Yaoundé - Sangmélima", "Limbe - Buea"],
      credibility: "Good",
      color: "purple",
      phone: "+237 680 456 789",
      established: "Since 2008"
    },
    {
      name: "Buca Voyage",
      rating: 4.0,
      routes: ["Yaoundé - Edéa", "Douala - Limbe", "Bamenda - Kumba"],
      credibility: "Reliable",
      color: "orange",
      phone: "+237 681 567 890",
      established: "Since 2010"
    },
    {
      name: "Central Voyage",
      rating: 3.9,
      routes: ["Yaoundé - Mbalmayo", "Douala - Nkongsamba", "Bafoussam - Dschang"],
      credibility: "Reliable",
      color: "teal",
      phone: "+237 682 678 901",
      established: "Since 2012"
    }
  ];

  const getCredibilityColor = (credibility: string) => {
    switch (credibility) {
      case "Excellent": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Very Good": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Good": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Reliable": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-indigo-900/20 transition-colors duration-300">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Trusted
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"> Bus Partners</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our network of verified and reliable bus companies across Cameroon. 
            Each partner is carefully selected for safety, comfort, and punctuality.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Bus Partners</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">200+</div>
            <div className="text-gray-600 dark:text-gray-300">Daily Routes</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10k+</div>
            <div className="text-gray-600 dark:text-gray-300">Happy Travelers</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">98%</div>
            <div className="text-gray-600 dark:text-gray-300">On-Time Rate</div>
          </div>
        </div>

        {/* Bus Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {busCompanies.map((company, index) => (
            <Card key={company.name} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {company.name}
                  </CardTitle>
                  <Badge className={getCredibilityColor(company.credibility)}>
                    {company.credibility}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(company.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {company.rating}/5.0
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Popular Routes
                  </h4>
                  <div className="space-y-1">
                    {company.routes.map((route, routeIndex) => (
                      <div key={routeIndex} className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                        {route}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 mr-1" />
                    {company.established}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="w-4 h-4 mr-1" />
                    <span className="text-xs">{company.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Partner With Us?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join our network of trusted bus companies and reach thousands of travelers across Cameroon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+237680305815" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Us: +237 680 305 815
            </a>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Send Partnership Request
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusPartners;
