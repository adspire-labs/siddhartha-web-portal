import { useState } from 'react';
import { motion } from 'framer-motion';
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
  MessageCircle,
  ArrowRight
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will respond shortly.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        subtitle="Contact Us"
        title="Connect with Siddhartha School"
        description="We're here to answer your questions and provide information about our exceptional educational programs."
        backgroundImage={heroImage}
        height="lg"
        overlay={true}
      />

      {/* Contact Information Cards */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Contact Information</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reach out to us through any of these channels for quick assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p 
                        key={idx} 
                        className="text-muted-foreground break-words"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-card p-8">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    We'll respond to your inquiry within 24 business hours
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+977-XXXX-XXXX" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="department">Department *</Label>
                    <select
                      id="department"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-smooth"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept.email}>{dept.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full shadow-card hover:shadow-glow transition-smooth"
                    type="submit"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-5 pb-3 border-b border-muted">Quick Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Admissions</p>
                      <p className="text-muted-foreground">+977-071-420200</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">General Info</p>
                      <p className="text-muted-foreground break-all">
                        info@siddharthaschool.edu.np
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">WhatsApp</p>
                      <p className="text-muted-foreground">+977 985-7033108</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-5 pb-3 border-b border-muted">Connect With Us</h3>
                <p className="text-muted-foreground mb-5">
                  Follow us on social media for the latest news and updates
                </p>
                <div className="flex space-x-3 justify-center">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:scale-105 transition-smooth shadow-md hover:shadow-lg"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center hover:scale-105 transition-smooth shadow-md hover:shadow-lg"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-105 transition-smooth shadow-md hover:shadow-lg"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Find Our Campus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Tilottama, easily accessible by public transport
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-card border border-muted">
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
                  variant="default" 
                  className="shadow-md hover:shadow-glow"
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
            <div className="p-6 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Siddhartha English Boarding Secondary School</h3>
                  <p className="text-muted-foreground">Tilottama-4, Rupandehi, Nepal</p>
                </div>
                <Button variant="outline" className="mt-4 md:mt-0" asChild>
                  <a href="https://maps.google.com/?q=Siddhartha+English+Boarding+Secondary+School,+Tilottama-4,+Rupandehi" target="_blank">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about admissions, programs, and more
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Admission requires submission of previous academic records, a completed application form, and an entrance assessment for certain grade levels."
              },
              {
                question: "What programs do you offer?",
                answer: "We offer comprehensive programs from Early Childhood to Grade 12, including specialized Science and Management streams in higher grades."
              },
              {
                question: "Do you offer financial aid?",
                answer: "Yes, we offer need-based scholarships and financial assistance programs for qualifying students."
              },
              {
                question: "What are the school hours?",
                answer: "Regular school hours are from 9:00 AM to 3:30 PM, with extended care available until 5:00 PM."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-primary text-primary">
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}