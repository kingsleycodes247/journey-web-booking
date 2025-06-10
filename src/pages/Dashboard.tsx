
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, User, LogOut, CreditCard, Bus, Navigation, Phone, Mail } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProfileSettings } from '@/components/ProfileSettings';
import { PaymentModal } from '@/components/PaymentModal';

interface Booking {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  busCompany: string;
  seatNumber: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  amount: string;
  driverName: string;
  driverPhone: string;
  busPlate: string;
}

interface LiveTracking {
  id: string;
  from: string;
  to: string;
  currentLocation: string;
  progress: number;
  estimatedArrival: string;
  driverName: string;
  busPlate: string;
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('bookings');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const mockBookings: Booking[] = [
    {
      id: '1',
      from: 'Yaoundé',
      to: 'Douala',
      date: '2024-06-15',
      time: '08:00',
      busCompany: 'Musango Express',
      seatNumber: '12A',
      status: 'confirmed',
      amount: '3,500 XAF',
      driverName: 'Jean Pierre',
      driverPhone: '+237 680 123 456',
      busPlate: 'CM-234-YAO'
    },
    {
      id: '2',
      from: 'Bamenda',
      to: 'Yaoundé',
      date: '2024-06-20',
      time: '14:30',
      busCompany: 'Guaranti Express',
      seatNumber: '8B',
      status: 'pending',
      amount: '4,200 XAF',
      driverName: 'Paul Mbarga',
      driverPhone: '+237 690 987 654',
      busPlate: 'CM-567-BMD'
    },
    {
      id: '3',
      from: 'Douala',
      to: 'Bafoussam',
      date: '2024-06-10',
      time: '16:00',
      busCompany: 'Amour Mezam',
      seatNumber: '15C',
      status: 'completed',
      amount: '2,800 XAF',
      driverName: 'Emmanuel Fotso',
      driverPhone: '+237 675 456 789',
      busPlate: 'CM-890-DLA'
    }
  ];

  const liveTracking: LiveTracking[] = [
    {
      id: '1',
      from: 'Yaoundé',
      to: 'Douala',
      currentLocation: 'Edéa',
      progress: 65,
      estimatedArrival: '10:30 AM',
      driverName: 'Jean Pierre',
      busPlate: 'CM-234-YAO'
    }
  ];

  const availableBuses = [
    {
      id: '1',
      company: 'Musango Express',
      from: 'Yaoundé',
      to: 'Douala',
      time: '06:00',
      price: '3,500 XAF',
      seatsAvailable: 12
    },
    {
      id: '2',
      company: 'Guaranti Express',
      from: 'Yaoundé',
      to: 'Bamenda',
      time: '08:30',
      price: '4,200 XAF',
      seatsAvailable: 8
    },
    {
      id: '3',
      company: 'Amour Mezam',
      from: 'Douala',
      to: 'Bafoussam',
      time: '14:00',
      price: '2,800 XAF',
      seatsAvailable: 15
    }
  ];

  if (!user) {
    window.location.href = '/';
    return null;
  }

  if (user.isAdmin) {
    window.location.href = '/admin';
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-indigo-900/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Avatar className="w-16 h-16">
                <AvatarImage src={user.profilePicture} />
                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('dashboard.welcome')}, {user.name}!
                </h1>
                <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                <p className="text-sm text-purple-600 dark:text-purple-400">📍 Current Location: Yaoundé, Cameroon</p>
              </div>
            </div>
            <Button
              onClick={logout}
              variant="outline"
              className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('dashboard.logout')}
            </Button>
          </div>

          {/* Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <TabsTrigger value="bookings" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">{t('dashboard.bookings')}</span>
              </TabsTrigger>
              <TabsTrigger value="tracking" className="flex items-center space-x-2">
                <Navigation className="w-4 h-4" />
                <span className="hidden sm:inline">Live Tracking</span>
              </TabsTrigger>
              <TabsTrigger value="buses" className="flex items-center space-x-2">
                <Bus className="w-4 h-4" />
                <span className="hidden sm:inline">Available Buses</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{t('dashboard.profile')}</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">Payment</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bookings" className="space-y-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Booking History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-3 lg:space-y-0">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-purple-600" />
                              <span className="font-semibold">{booking.from} → {booking.to}</span>
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{booking.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{booking.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Bus className="w-3 h-3" />
                                <span>{booking.busCompany}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <User className="w-3 h-3" />
                                <span>Seat {booking.seatNumber}</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Driver: {booking.driverName} | Plate: {booking.busPlate} | Phone: {booking.driverPhone}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{booking.amount}</p>
                            {booking.status === 'confirmed' && (
                              <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                                Download Ticket
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Live Journey Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  {liveTracking.length > 0 ? (
                    <div className="space-y-4">
                      {liveTracking.map((trip) => (
                        <div key={trip.id} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg">{trip.from} → {trip.to}</h3>
                            <Badge className="bg-green-100 text-green-800">Live</Badge>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-blue-600" />
                              <span>Current Location: <strong>{trip.currentLocation}</strong></span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${trip.progress}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                              <span>Progress: {trip.progress}%</span>
                              <span>ETA: {trip.estimatedArrival}</span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t">
                              <div className="text-sm">
                                <p>Driver: {trip.driverName}</p>
                                <p>Bus: {trip.busPlate}</p>
                              </div>
                              <Button size="sm" variant="outline">
                                <Phone className="w-4 h-4 mr-1" />
                                Call Driver
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Navigation className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 dark:text-gray-300">No active journeys to track</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="buses" className="space-y-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Available Buses Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {availableBuses.map((bus) => (
                      <div key={bus.id} className="border rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{bus.company}</h3>
                          <Badge variant="outline">{bus.seatsAvailable} seats</Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-purple-600" />
                            <span>{bus.from} → {bus.to}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span>Departure: {bus.time}</span>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <span className="font-bold text-lg text-green-600">{bus.price}</span>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <ProfileSettings />
            </TabsContent>

            <TabsContent value="payment">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      onClick={() => setShowPaymentModal(true)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      Add Payment Method
                    </Button>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border rounded-lg p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                        <h3 className="font-semibold mb-2">Orange Money</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Fast and secure mobile payments</p>
                      </div>
                      <div className="border rounded-lg p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
                        <h3 className="font-semibold mb-2">MTN Mobile Money</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Reliable mobile payment solution</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />

      {showPaymentModal && (
        <PaymentModal 
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}
