import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { WhatsappIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          Own the Domain Hennabtfatima.in and Elevate Your Henna Business Today!
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Choose hennabtfatima.in?</CardTitle>
            <CardDescription>The perfect domain for your henna business</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Memorable Branding: "Henna Bt Fatima" carries a personal and traditional touch</li>
              <li>SEO-Friendly: Boost your visibility on search engines</li>
              <li>Ideal for Henna Artists & Product Sellers: Position your business as a trusted authority</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Unlock the Potential</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create a Professional Henna Services Website</li>
              <li>Launch an E-commerce Store for henna products</li>
              <li>Attract a Global Audience in the growing henna market</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Contact Us</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="flex items-center">
              <WhatsappIcon className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button variant="outline" className="flex items-center">
              <InstagramIcon className="mr-2 h-4 w-4" />
              Instagram
            </Button>
            <Button variant="outline" className="flex items-center">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Wait? Secure Your Future in the Henna Industry Today!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              Owning hennabtfatima.in is more than just a domain—it's an opportunity to establish a reputable online business that stands out in the beauty and henna markets.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;