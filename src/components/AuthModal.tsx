
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

interface AuthModalProps {
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
}

export const AuthModal = ({ mode, onModeChange }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth form submitted:', { mode, formData });
  };

  return (
    <div className="animate-fade-in">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          {mode === 'login' ? 'Welcome Back!' : 'Join 237 Voyage'}
        </DialogTitle>
        <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
          {mode === 'login' 
            ? 'Sign in to your account to continue your journey' 
            : 'Create your account and start booking with ease'
          }
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        {mode === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center text-sm font-medium">
              <User className="w-4 h-4 mr-1" />
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="h-11"
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center text-sm font-medium">
            <Mail className="w-4 h-4 mr-1" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="h-11"
            required
          />
        </div>

        {mode === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center text-sm font-medium">
              <Phone className="w-4 h-4 mr-1" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+237 XXX XXX XXX"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="h-11"
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="password" className="flex items-center text-sm font-medium">
            <Lock className="w-4 h-4 mr-1" />
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="h-11 pr-10"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-11 w-10 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {mode === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="flex items-center text-sm font-medium">
              <Lock className="w-4 h-4 mr-1" />
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="h-11"
              required
            />
          </div>
        )}

        {mode === 'login' && (
          <div className="text-right">
            <Button variant="link" className="text-sm text-purple-600 hover:text-purple-700 p-0">
              Forgot password?
            </Button>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-11 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
        >
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </Button>

        <Separator className="my-4" />

        <div className="text-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
          </span>
          <Button
            type="button"
            variant="link"
            className="text-sm text-purple-600 hover:text-purple-700 ml-1 p-0 h-auto"
            onClick={() => onModeChange(mode === 'login' ? 'signup' : 'login')}
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </Button>
        </div>
      </form>
    </div>
  );
};
