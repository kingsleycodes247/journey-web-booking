
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award, MapPin, Phone } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our partner buses undergo regular safety inspections and our drivers are thoroughly vetted."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "We prioritize your comfort and satisfaction, providing 24/7 customer support for all travelers."
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "We ensure on-time departures and arrivals with real-time tracking for all journeys."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Recognized as Cameroon's leading bus booking platform with thousands of satisfied customers."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Travelers" },
    { number: "100+", label: "Bus Partners" },
    { number: "500+", label: "Daily Routes" },
    { number: "10+", label: "Major Cities" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-indigo-900/20 transition-colors duration-300">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"> 237 Voyage</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize bus travel in Cameroon, 237 Voyage is your trusted partner 
            for safe, comfortable, and convenient transportation across the country. We connect travelers with 
            reliable bus companies, making it easier than ever to book your journey from the comfort of your home.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide a seamless, secure, and reliable bus booking platform that connects travelers 
                with trusted transport companies across Cameroon, ensuring safe and comfortable journeys 
                for everyone.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become the leading transportation platform in Central Africa, making travel accessible, 
                affordable, and enjoyable for millions of people while supporting local bus companies 
                in their growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose 237 Voyage?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Story
            </h2>
            <div className="prose max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="mb-4">
                237 Voyage was born from a simple observation: booking bus tickets in Cameroon was often 
                complicated, time-consuming, and unreliable. Travelers had to visit multiple bus stations, 
                wait in long queues, and often faced uncertainty about schedules and availability.
              </p>
              <p className="mb-4">
                In 2024, our founders, passionate about technology and transportation, decided to bridge 
                this gap. They envisioned a platform where anyone could book reliable bus tickets from 
                the comfort of their home, with real-time information and guaranteed seats.
              </p>
              <p>
                Today, 237 Voyage partners with over 100 bus companies across Cameroon, offering travelers 
                a wide range of options for their journeys. From Yaoundé to Douala, Bamenda to Garoua, 
                we're making travel easier, safer, and more enjoyable for everyone.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white text-center">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied travelers who trust 237 Voyage for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Your Trip Now
              </button>
              <a 
                href="tel:+237680305815" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us: +237 680 305 815
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default About;
