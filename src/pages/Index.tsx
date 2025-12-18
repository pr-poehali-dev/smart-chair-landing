import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Our team will contact you within 24 hours.');
  };

  const partners = [
    'Marriott', 'Hilton', 'Hyatt', 'Radisson', 'Emaar', 'Damac'
  ];

  const certifications = [
    { name: 'ISO 9001', icon: 'Award' },
    { name: 'CE Certified', icon: 'ShieldCheck' },
    { name: 'Halal Certified', icon: 'CheckCircle2' },
    { name: 'Fire Safety', icon: 'Flame' },
  ];

  const stats = [
    { value: '8+', label: 'Years Export Experience' },
    { value: '12+', label: 'Countries Delivered' },
    { value: '5', label: 'Avg Partnership Years' },
    { value: '14', label: 'Days to Dubai' },
  ];

  const logisticsSteps = [
    { icon: 'Factory', title: 'European Production', desc: 'AI-designed, Italian-grade manufacturing' },
    { icon: 'Ship', title: 'Global Shipping', desc: 'FCA/DAP Incoterms, full tracking' },
    { icon: 'FileCheck', title: 'Customs Included', desc: 'Brokerage & documentation handled' },
    { icon: 'Home', title: 'Dubai Doorstep', desc: '14 days delivery guarantee' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-amber-500/30">
              <Icon name="Sparkles" size={20} className="text-amber-400" />
              <span className="text-amber-300 font-medium">AI-Designed Premium Furniture</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Elevate Your Project with
              <span className="block bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent mt-2">
                Italian-Grade Furniture
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium Seating Solutions for Visionary Developers and Hospitality Leaders
            </p>
            
            <p className="text-lg text-blue-200 mb-12 flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                Exclusive
              </span>
              <span className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                Certified
              </span>
              <span className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                Fast-to-Market
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-lg shadow-xl hover-scale"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Package" size={24} className="mr-2" />
                Request Free Samples
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg hover-scale"
                onClick={() => window.open('https://wa.me/971501234567', '_blank')}
              >
                <Icon name="MessageCircle" size={24} className="mr-2" />
                WhatsApp Now
              </Button>
            </div>
            
            <div className="border-t border-white/10 pt-12">
              <p className="text-sm text-blue-300 mb-6 uppercase tracking-wider">Partnered with World-Class HoReCa Experts</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                {partners.map((partner) => (
                  <div key={partner} className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <span className="text-lg font-semibold text-white/90">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/50" />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Trust <span className="text-blue-600">SmartChAIr</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted Across Continents. Delivering Consistency, Quality, and Care.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-scale border-slate-200 shadow-lg">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-scale border-green-200 bg-green-50/50">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon name={cert.icon} size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-2xl">
            <CardContent className="py-12 text-center">
              <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-amber-400" />
              <h3 className="text-3xl font-bold mb-4">Guaranteed Payment Flexibility</h3>
              <p className="text-xl text-blue-100 mb-6">Accept AED, USD, EUR — Your Choice, Your Convenience</p>
              <div className="flex justify-center gap-4 text-2xl font-semibold">
                <span>💳 AED</span>
                <span>•</span>
                <span>💵 USD</span>
                <span>•</span>
                <span>💶 EUR</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-blue-600">Premium Collection</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI-Designed Chairs & Armchairs — Where Technology Meets Italian Craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group overflow-hidden border-slate-200 shadow-lg hover-scale">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img 
                  src="https://cdn.poehali.dev/projects/c8733480-f995-4ef8-822b-fb8dc478fea6/files/026b97b2-d021-4645-a270-0b4cb029c0ec.jpg" 
                  alt="Luxury velvet chair with gold legs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Velvet Elegance</h3>
                <p className="text-slate-600 mb-4">Premium velvet upholstery with gold-plated metal frame. Perfect for luxury hotel lobbies and VIP lounges.</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Icon name="Ruler" size={16} />
                    85×75×95 cm
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Weight" size={16} />
                    12 kg
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-slate-200 shadow-lg hover-scale">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img 
                  src="https://cdn.poehali.dev/projects/c8733480-f995-4ef8-822b-fb8dc478fea6/files/05c52762-7483-425a-9b11-59ecc0935b64.jpg" 
                  alt="Designer armchair with geometric pattern"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Geometric Luxe</h3>
                <p className="text-slate-600 mb-4">Italian leather armrests with designer fabric. Ideal for premium restaurants and executive spaces.</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Icon name="Ruler" size={16} />
                    90×80×100 cm
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Weight" size={16} />
                    15 kg
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-slate-200 shadow-lg hover-scale">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img 
                  src="https://cdn.poehali.dev/projects/c8733480-f995-4ef8-822b-fb8dc478fea6/files/05c66c19-e4b3-4437-8fe4-f4ec05d7fa7b.jpg" 
                  alt="Modern minimalist bar stool"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Nordic Minimal</h3>
                <p className="text-slate-600 mb-4">Scandinavian design with solid wood seat. Best for hotel bars and modern café concepts.</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Icon name="Ruler" size={16} />
                    45×45×75 cm
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Weight" size={16} />
                    8 kg
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Customization Available</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Every piece can be tailored to your project's exact specifications — from fabric selection to frame finishes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Palette" size={24} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Custom Colors</strong>
                      <p className="text-sm text-slate-600">500+ fabric & leather options</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Maximize" size={24} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Size Adjustments</strong>
                      <p className="text-sm text-slate-600">Tailored to your space requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" size={24} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Logo Embossing</strong>
                      <p className="text-sm text-slate-600">Brand your furniture discreetly</p>
                    </div>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Request Full Catalog
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white shadow-md">
                  <CardContent className="pt-6 pb-6 text-center">
                    <Icon name="Sparkles" size={40} className="mx-auto mb-3 text-amber-500" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">200+</div>
                    <p className="text-sm text-slate-600">Unique Designs</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="pt-6 pb-6 text-center">
                    <Icon name="Palette" size={40} className="mx-auto mb-3 text-blue-600" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                    <p className="text-sm text-slate-600">Material Options</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="pt-6 pb-6 text-center">
                    <Icon name="Truck" size={40} className="mx-auto mb-3 text-green-600" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                    <p className="text-sm text-slate-600">On-Time Delivery</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="pt-6 pb-6 text-center">
                    <Icon name="ShieldCheck" size={40} className="mx-auto mb-3 text-purple-600" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">5 Years</div>
                    <p className="text-sm text-slate-600">Warranty</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Seamless <span className="text-amber-400">Logistics</span> & Customs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Dubai-Ready in 14 Days — Hassle-Free Delivery to Your Doorstep
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {logisticsSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-slate-800 border-slate-700 hover-scale h-full">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                      <Icon name={step.icon} size={36} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </CardContent>
                </Card>
                {index < logisticsSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={24} className="text-amber-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="pt-6 pb-6">
                <Icon name="Shield" size={40} className="mx-auto mb-3 text-green-400" />
                <h4 className="font-semibold text-white mb-2">Incoterms DAP/FCA</h4>
                <p className="text-sm text-slate-400">Flexible delivery terms</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="pt-6 pb-6">
                <Icon name="FileText" size={40} className="mx-auto mb-3 text-blue-400" />
                <h4 className="font-semibold text-white mb-2">Customs Brokerage</h4>
                <p className="text-sm text-slate-400">All documentation included</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="pt-6 pb-6">
                <Icon name="DollarSign" size={40} className="mx-auto mb-3 text-amber-400" />
                <h4 className="font-semibold text-white mb-2">No Hidden Costs</h4>
                <p className="text-sm text-slate-400">Transparent pricing always</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Certified to Exceed <span className="text-blue-600">Local Standards</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ISO, CE, Halal & Fire Safety — Every Product, Every Time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="iso">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="Award" size={24} className="text-blue-600" />
                      ISO 9001:2015 Certified
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    International quality management standard ensuring consistent production excellence and customer satisfaction.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="ce">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="ShieldCheck" size={24} className="text-blue-600" />
                      CE European Conformity
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Meets all EU health, safety, and environmental protection standards for commercial furniture.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="halal">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle2" size={24} className="text-green-600" />
                      Halal Certification
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Materials and manufacturing processes comply with Islamic standards and principles.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="fire">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="Flame" size={24} className="text-orange-600" />
                      Fire Safety Certified
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Complies with UAE Civil Defense fire safety regulations for hospitality and commercial spaces.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-slate-50 border-blue-200 shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="FileCheck" size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Quality Guarantee</h3>
                    <p className="text-slate-600">Every shipment certified</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Complete documentation package with every order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Quality inspection reports included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Material compliance certificates provided</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">5-year warranty on structural components</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Your Reliable <span className="text-amber-400">Furniture Partner</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              From Europe's Heart to Dubai's Luxury Projects
            </p>
            <p className="text-lg text-blue-200">
              📱 24/7 Personal Manager — WhatsApp, Telegram, Live Chat in Your Language
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white text-slate-900 shadow-2xl">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-6">Request Free Samples</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      required
                      placeholder="Ahmed Al-Rashid"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company / Hotel *</label>
                    <Input
                      required
                      placeholder="Luxury Developments LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone / WhatsApp *</label>
                    <Input
                      required
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="ahmed@company.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-slate-300 min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold">
                    <Icon name="Send" size={20} className="mr-2" />
                    Send Request
                  </Button>
                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to receive communication from SmartChAIr
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 hover-scale cursor-pointer" onClick={() => window.open('https://wa.me/971501234567', '_blank')}>
                <CardContent className="pt-6 pb-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">WhatsApp</h4>
                    <p className="text-slate-300">+971 50 123 4567</p>
                    <p className="text-sm text-green-400">Available 24/7 (GST)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 hover-scale cursor-pointer" onClick={() => window.open('https://t.me/smartchair', '_blank')}>
                <CardContent className="pt-6 pb-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Send" size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Telegram</h4>
                    <p className="text-slate-300">@smartchair</p>
                    <p className="text-sm text-blue-400">Instant messaging support</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 hover-scale cursor-pointer" onClick={() => window.location.href = 'mailto:export@smartchair.com'}>
                <CardContent className="pt-6 pb-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Email</h4>
                    <p className="text-slate-300">export@smartchair.com</p>
                    <p className="text-sm text-amber-400">Response within 6 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-600 to-amber-700 border-0 shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <Icon name="Globe" size={48} className="mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-2">Global Reach</h3>
                  <p className="text-amber-100 mb-4">Serving 12+ countries across Middle East, Europe & Asia</p>
                  <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <span className="px-3 py-1 bg-white/20 rounded-full">🇦🇪 UAE</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full">🇸🇦 KSA</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full">🇶🇦 Qatar</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full">🇰🇼 Kuwait</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full">🇴🇲 Oman</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SmartChAIr</h3>
              <p className="text-slate-400 mb-4">AI-Designed Premium Furniture for Visionary Projects</p>
              <div className="flex gap-4">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>European Manufacturing, Global Delivery</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product Catalog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">التواصل (Contact)</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>export@smartchair.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>24/7 Support (GST)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2024 SmartChAIr. All rights reserved. ISO 9001:2015 | CE | Halal Certified</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.open('https://wa.me/971501234567', '_blank')}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center z-50 animate-scale-in hover-scale"
        aria-label="Contact via WhatsApp"
      >
        <Icon name="MessageCircle" size={32} className="text-white" />
      </button>
    </div>
  );
};

export default Index;