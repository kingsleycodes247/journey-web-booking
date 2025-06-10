
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, User, Settings, LogOut, CreditCard } from 'lucide-react';
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
  status: 'confirmed' | 'pending' | 'cancelled';
  amount: string;
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
      amount: '3,500 XAF'
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
      amount: '4,200 XAF'
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
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <TabsTrigger value="bookings" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">{t('dashboard.bookings')}</span>
              </TabsTrigger>
              <TabsTrigger value="tracking" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Tracking</span>
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
                      <div key={booking.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg bg-gray-50 dark:bg-gray-700/50">
                        <div className="flex-1 space-y-2 md:space-y-0 md:flex md:items-center md:space-x-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span>{booking.from} → {booking.to}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>{booking.time}</span>
                          </div>
                          <Badge variant={booking.status === 'confirmed' ? 'default' : booking.status === 'pending' ? 'secondary' : 'destructive'}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p className="font-semibold">{booking.amount}</p>
                          <p className="text-sm text-gray-500">{booking.busCompany}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracking">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Live Journey Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">No active journeys to track</p>
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
