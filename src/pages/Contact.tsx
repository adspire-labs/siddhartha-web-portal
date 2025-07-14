import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HeroSection } from '@/components/ui/hero-section';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';
import heroImage from '@/assets/hero-students.jpg';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: [
      'Tilottama-4, Rupandehi',
      'Nepal'
    ]
  },
  {
    icon: Phone,
    title: 'Phone',
    details: [
      '+977-071-420200',
      '+977-071-420201'
    ]
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'info@siddharthaschool.edu.np',
      'admission@siddharthaschool.edu.np'
    ]
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Sun - Fri: 7:00 AM - 5:00 PM',
      'Saturday: 7:00 AM - 12:00 PM'
    ]
  }
];

const departments = [
  { name: 'General Inquiry', email: 'info@siddharthaschool.edu.np' },
  { name: 'Admissions', email: 'admission@siddharthaschool.edu.np' },
  { name: 'Academic Affairs', email: 'academic@siddharthaschool.edu.np' },
  { name: 'Student Affairs', email: 'student@siddharthaschool.edu.np' }
];

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        subtitle="Contact Us"
        title="Get in Touch with Siddhartha School"
        description="We're here to help answer your questions and provide information about our programs. Reach out to us today."
        backgroundImage={heroImage}
        height="md"
      />

      {/* Contact Information Cards */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center shadow-elegant bg-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-card">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+977-XXXX-XXXX" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="department">Department</Label>
                    <select
                      id="department"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept.email}>{dept.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button size="lg" className="w-full shadow-card">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="p-6 shadow-card">
                <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Admissions</p>
                      <p className="text-sm text-muted-foreground">+977-071-420200</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">General Info</p>
                      <p className="text-sm text-muted-foreground">info@siddharthaschool.edu.np</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+977-XXXX-XXXX</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 shadow-card">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:scale-105 transition-smooth"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:scale-105 transition-smooth"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-105 transition-smooth"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </Card>

              {/* Visit Us */}
              <Card className="p-6 shadow-card">
                <h3 className="text-lg font-semibold mb-4">Visit Our Campus</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Schedule a campus tour to see our facilities and meet our staff.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Visit
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Located in the heart of Tilottama, easily accessible by public transport. 
              Visit our campus at Siddhartha English Boarding Secondary School.
            </p>
          </div>

          <Card className="overflow-hidden shadow-elegant">
            <div className="aspect-video relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28265.03309337248!2d83.45026558706972!3d27.682403353137058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968539523547f1%3A0xea3dfdf0a47c8f8c!2sSiddhartha%20English%20Boarding%20Secondary%20School%2C%20Tilottama%20-%204%2C%20Rupandehi!5e0!3m2!1sen!2snp!4v1752491932336!5m2!1sen!2snp" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 right-4">
                <Button 
                  variant="outline" 
                  className="bg-white/90 hover:bg-white shadow-md"
                  asChild
                >
                  <a 
                    href="https://maps.google.com/?q=Siddhartha+English+Boarding+Secondary+School,+Tilottama-4,+Rupandehi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
            <div className="p-4 bg-white text-center">
              <p className="text-sm text-muted-foreground">
                Tilottama-4, Rupandehi, Nepal
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}