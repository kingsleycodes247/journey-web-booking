
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Smartphone, Receipt } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData?: {
    from: string;
    to: string;
    date: string;
    amount: string;
  };
}

export const PaymentModal = ({ isOpen, onClose, bookingData }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount] = useState(bookingData?.amount || '5,000 XAF');
  const { toast } = useToast();

  const handlePayment = () => {
    if (!paymentMethod) {
      toast({
        title: "Error",
        description: "Please select a payment method.",
        variant: "destructive"
      });
      return;
    }

    if (!phoneNumber) {
      toast({
        title: "Error", 
        description: "Please enter your phone number.",
        variant: "destructive"
      });
      return;
    }

    // Mock payment processing
    toast({
      title: "Payment Successful!",
      description: `Payment of ${amount} processed successfully. Your ticket will be sent to your email.`,
    });

    // Generate mock invoice
    generateInvoice();
    onClose();
  };

  const generateInvoice = () => {
    const invoiceData = {
      invoiceNumber: 'INV-' + Date.now(),
      date: new Date().toLocaleDateString(),
      amount,
      paymentMethod,
      phoneNumber,
      ...bookingData
    };

    console.log('Invoice generated:', invoiceData);
    
    // In a real app, this would send an email with the invoice
    toast({
      title: "Invoice Generated",
      description: "Your invoice has been sent to your email address.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5" />
            <span>Payment Options</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Amount Display */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Total Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{amount}</div>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <Label>Select Payment Method</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Choose payment option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mobile-money">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile Money (MTN)</span>
                  </div>
                </SelectItem>
                <SelectItem value="orange-money">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4" />
                    <span>Orange Money</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Phone Number Input */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+237 XXX XXX XXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-11"
            />
          </div>

          {/* Payment Instructions */}
          {paymentMethod && (
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-4">
                <div className="flex items-start space-x-2">
                  <Receipt className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium mb-1">Payment Instructions:</p>
                    <p>1. You'll receive an SMS prompt on your phone</p>
                    <p>2. Enter your {paymentMethod === 'mobile-money' ? 'MTN' : 'Orange'} PIN</p>
                    <p>3. Confirm the payment to complete your booking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handlePayment} 
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              Pay {amount}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
