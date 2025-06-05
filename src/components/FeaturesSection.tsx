
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CreditCard, Bus, Users, Shield, Clock } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Bus,
      title: "Multiple Bus Partners",
      description: "Choose from various trusted bus companies across Cameroon. We partner with the best operators to give you more options."
    },
    {
      icon: CreditCard,
      title: "Easy Booking",
      description: "Book tickets from any bus company instantly with our simple and secure online booking system."
    },
    {
      icon: MapPin,
      title: "Live Location Tracking",
      description: "Share your real-time location with family during your journey. Stay connected and ensure peace of mind."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Travel with confidence knowing all our partner bus companies meet strict safety and quality standards."
    },
    {
      icon: Users,
      title: "Bus Company Registration",
      description: "Bus operators can easily join our platform to reach more customers and grow their business."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get instant notifications about departure times, delays, and arrival updates for your journey."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose 237 Voyage?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the best in bus travel across Cameroon with our commitment to safety, comfort, and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:scale-105">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
