
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact for Inquiry</h2>
      
      <form className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
        </div>
        <Input type="text" placeholder="Subject" />
        <Textarea placeholder="Your Message..." rows={5} />
        <Button type="submit" className="w-full sm:w-fit">Submit</Button>
      </form>

      {/* Optional contact info */}
      <div className="mt-6 text-sm text-gray-600 space-y-1 text-center">
        <div className="flex justify-center items-center gap-2">
          <Mail size={16} /> support@trackmypack.com
        </div>
        <div className="flex justify-center items-center gap-2">
          <Phone size={16} /> +91 98765 43210
        </div>
        <div className="flex justify-center items-center gap-2">
          <MessageCircle size={16} /> Live chat available 9AM – 6PM
        </div>
      </div>
    </div>
  );
};

export default Contact;
