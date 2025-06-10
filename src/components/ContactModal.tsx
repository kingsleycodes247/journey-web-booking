
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, User, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Contact Support
        </DialogTitle>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Need help? Send us a message and we'll get back to you.
        </p>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center text-gray-700 dark:text-gray-300">
            <User className="w-4 h-4 mr-1" />
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center text-gray-700 dark:text-gray-300">
            <Mail className="w-4 h-4 mr-1" />
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center text-gray-700 dark:text-gray-300">
            <MessageCircle className="w-4 h-4 mr-1" />
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your issue or question..."
            rows={4}
            required
            className="dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 dark:from-purple-500 dark:to-indigo-500 dark:hover:from-purple-600 dark:hover:to-indigo-600"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};
