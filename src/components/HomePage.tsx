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
                <div className="text-3xl font-bold text-white">30</div>
                <div className="text-white/80">Days to Launch</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">$1</div>
                <div className="text-white/80">First Revenue Goal</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">100%</div>
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
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-tropical border border-primary/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">What's Included</h3>
                <p className="text-muted-foreground">Everything you need to build, launch, and scale your startup</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Business Building */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-primary rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Expert Guidance & Education</h4>
                      <p className="text-sm text-muted-foreground">Daily mentorship and workshops from experienced entrepreneurs and investors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-primary rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">25 Hours of Development Build-Time</h4>
                      <p className="text-sm text-muted-foreground">Our developers will build your MVP for you (or teach you if you want to learn)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-primary rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">From Idea to Revenue</h4>
                      <p className="text-sm text-muted-foreground">Learn to take an idea from nothing to a fully working business that's making money</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-primary rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Premium Accommodation</h4>
                      <p className="text-sm text-muted-foreground">Shared accommodation at premium hotel with co-working spaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-primary rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">All Meals & Premium Coffee</h4>
                      <p className="text-sm text-muted-foreground">Fuel your creativity with delicious Costa Rican cuisine</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-primary rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">High-Speed Internet & Tech Setup</h4>
                      <p className="text-sm text-muted-foreground">Everything you need to build without technical distractions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-primary rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Demo Day & Investor Network</h4>
                      <p className="text-sm text-muted-foreground">Present your MVP and connect with potential investors</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Costa Rica Experience */}
                <div className="space-y-4">
                  <div className="bg-gradient-tropical rounded-lg p-4 text-white mb-4">
                    <h4 className="font-bold mb-2 text-center">🌊 Costa Rica Experience</h4>
                    <p className="text-sm text-center text-white/90">To keep you creative and energized, we take you all over gorgeous Costa Rica</p>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-accent/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-tropical rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-accent mb-1">🏄‍♂️ Daily Beach Outings</h4>
                      <p className="text-sm text-muted-foreground">Morning beach walks and sunset sessions to clear your mind</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-accent/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-tropical rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-accent mb-1">🌊 Professional Surf Lessons</h4>
                      <p className="text-sm text-muted-foreground">Learn to surf with certified instructors on world-class beaches</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-accent/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-gradient-tropical rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-accent mb-1">🌿 2x Weekly Adventure Tours</h4>
                      <p className="text-sm text-muted-foreground">Explore volcanoes, rainforests, and wildlife to spark creativity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-success/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-success rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-success mb-1">📱 Start X App Access</h4>
                      <p className="text-sm text-muted-foreground">Complete curriculum and task tracking system</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-success/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-success rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-success mb-1">🤝 Lifetime Alumni Network</h4>
                      <p className="text-sm text-muted-foreground">Join a global community of successful founder alumni</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-success/5 p-3 rounded-lg transition-all duration-300">
                    <div className="h-3 w-3 bg-success rounded-full mt-2 group-hover:animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-success mb-1">🎯 Daily Mentor Sessions</h4>
                      <p className="text-sm text-muted-foreground">1-on-1 guidance from experienced entrepreneurs and investors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-tropical relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Startup?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Join the next cohort of founders who are serious about building, not just talking. 
                Applications close soon.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg">
                  Apply Now - $4,997
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white border-2 text-white hover:bg-white/20 bg-white/10">
                  Schedule Info Call
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 mb-4">Already enrolled? Access your learning dashboard:</p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-white/50 text-white hover:bg-white/10"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  View 30-Day Curriculum Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <p className="text-sm text-white/70 mt-4">** Scholarships Available **</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;