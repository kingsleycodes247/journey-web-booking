
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, MapPin, Users, Star, Headphones } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All our partner buses are verified and meet safety standards. Your security is our priority."
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your bus in real-time and share your location with family for peace of mind."
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Travel to over 50 cities across Cameroon with our extensive network of bus partners."
    },
    {
      icon: Users,
      title: "Trusted Partners",
      description: "We work with the most reliable bus companies in Cameroon for your comfort and safety."
    },
    {
      icon: Star,
      title: "Rated Service",
      description: "Highly rated by thousands of travelers for our excellent service and reliability."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you throughout your journey."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <section className="py-16 md:py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Why Choose 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"> 237 Voyage?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the best in bus travel with our comprehensive platform designed for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trust 237 Voyage for safe, comfortable, and reliable transportation across Cameroon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToTop}
              className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-purple-600 dark:hover:bg-gray-200 font-semibold px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
            >
              Book Your First Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={goToAbout}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-purple-600 font-semibold px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
