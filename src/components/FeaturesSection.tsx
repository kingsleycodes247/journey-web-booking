
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CreditCard, Bus } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Bus,
      title: "Premium Fleet",
      description: "Travel in comfort with our modern, well-maintained buses equipped with latest amenities."
    },
    {
      icon: CreditCard,
      title: "Easy Booking",
      description: "Book your tickets instantly with our simple and secure online booking system."
    },
    {
      icon: MapPin,
      title: "Wide Network",
      description: "Connect to over 100+ cities with our extensive route network across the country."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BusTravel?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the best in bus travel with our commitment to safety, comfort, and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
