import React from 'react';
import { ArrowRight, Users, Zap, Target, DollarSign, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroBackground from '@/assets/hero-background.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${heroBackground})`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Start X
                <span className="block text-4xl md:text-5xl font-normal mt-2 text-gray-200">
                  The Founder Field Manual
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                30 days in Costa Rica. Build your MVP. Launch your startup. 
                Earn your first $1 of revenue. Leave with a system that scales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="/onboarding">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="/dashboard">
                    View Demo Dashboard
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">30</div>
                <div className="text-white/80">Days to Launch</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">$1</div>
                <div className="text-white/80">First Revenue Goal</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-white/80">Hands-On Building</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Ultimate Startup Accelerator</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop pitching. Start building. Our hybrid program combines the focus of Costa Rica retreat 
              with the structured guidance of top accelerators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nail your customer, problem, and promise through our proven validation framework.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build and launch your MVP in 30 days with daily guidance and accountability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Collect your first dollar through real customer validation and sales tactics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build alongside other founders in an immersive, distraction-free environment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4-Week Program */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your 30-Day Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each week builds on the last, taking you from idea to revenue-generating business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                week: 1,
                title: "Clarity + Validation",
                description: "Define your customer, problem, and solution. Validate your assumptions.",
                color: "bg-primary"
              },
              {
                week: 2,
                title: "MVP Build + Branding",
                description: "Build your minimum viable product and establish your brand identity.",
                color: "bg-accent"
              },
              {
                week: 3,
                title: "Customer Outreach + Sales",
                description: "Connect with real customers and make your first sales.",
                color: "bg-success"
              },
              {
                week: 4,
                title: "Refine + Pitch",
                description: "Perfect your product and prepare for demo day.",
                color: "bg-primary"
              }
            ].map((week) => (
              <Card key={week.week} className="relative overflow-hidden group hover:shadow-card transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-2 ${week.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-muted-foreground">Week {week.week}</span>
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{week.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {week.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Costa Rica Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Costa Rica?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Escape distractions and immerse yourself in an environment designed for deep work, 
                creativity, and breakthrough thinking. Our partner hotel provides the perfect blend 
                of comfort and productivity.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg">Beautiful co-working spaces with ocean views</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-lg">24/7 access to mentors and peer founders</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="text-lg">No distractions, maximum focus</span>
                </div>
              </div>

              <Button variant="tropical" size="lg" asChild>
                <a href="https://www.ticoticocr.com" target="_blank" rel="noopener noreferrer">
                  Explore Our Partner Hotel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-tropical">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Shared accommodation at premium hotel",
                  "All meals and premium coffee",
                  "High-speed internet and co-working space",
                  "Daily mentor sessions and workshops",
                  "Access to the Start X app and curriculum",
                  "Demo day and investor introductions",
                  "Lifetime alumni network access"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-tropical">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Startup?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join the next cohort of founders who are serious about building, not just talking. 
              Applications close soon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                Apply Now - $2,997
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
                Schedule Info Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;