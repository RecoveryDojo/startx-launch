import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Lightbulb, Users, Target, Zap, DollarSign, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface OnboardingData {
  idea: string;
  targetAudience: string;
  audienceDescription: string;
  problem: string;
  problemFeel: string;
  problemWhen: string;
  transformationFrom: string;
  transformationTo: string;
  mvpFormat: string;
  mvpDescription: string;
  dollarAmount: string;
  dollarFor: string;
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    idea: '',
    targetAudience: '',
    audienceDescription: '',
    problem: '',
    problemFeel: '',
    problemWhen: '',
    transformationFrom: '',
    transformationTo: '',
    mvpFormat: '',
    mvpDescription: '',
    dollarAmount: '',
    dollarFor: ''
  });

  const updateData = (field: keyof OnboardingData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to Start X',
      subtitle: 'Set Your Intention',
      icon: <Lightbulb className="h-8 w-8" />,
      content: (
        <div className="text-center space-y-6">
          <div className="bg-gradient-primary rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center">
            <Lightbulb className="h-12 w-12 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Claim Your Idea in 7 Steps</h3>
            <p className="text-muted-foreground text-lg">
              This flow will help you crystallize your startup idea, identify your customer, 
              and define your path to first revenue. Take your time and be honest.
            </p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-6">
            <p className="font-semibold text-primary mb-2">Your commitment:</p>
            <p className="text-sm">I'm here to build a real business, not just dream about one.</p>
          </div>
        </div>
      )
    },
    {
      id: 'idea',
      title: 'The Idea',
      subtitle: 'What are you building?',
      icon: <Lightbulb className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="idea" className="text-lg font-semibold">Describe your startup idea</Label>
            <p className="text-muted-foreground mb-4">Don't overthink it. What problem are you solving?</p>
            <Textarea
              id="idea"
              placeholder="My idea is to..."
              value={data.idea}
              onChange={(e) => updateData('idea', e.target.value)}
              className="min-h-[120px] text-base"
            />
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> Focus on the outcome, not the technology. 
              "Help busy parents save time cooking" vs "An AI-powered meal planning app"
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'audience',
      title: 'Target Audience',
      subtitle: 'Who exactly are you serving?',
      icon: <Users className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="audience" className="text-lg font-semibold">Select your primary audience</Label>
            <Select value={data.targetAudience} onValueChange={(value) => updateData('targetAudience', value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Choose your target audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consumers">Consumers (B2C)</SelectItem>
                <SelectItem value="small-business">Small Business Owners</SelectItem>
                <SelectItem value="enterprise">Enterprise/Corporations</SelectItem>
                <SelectItem value="creators">Creators/Influencers</SelectItem>
                <SelectItem value="professionals">Professionals (specific industry)</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="audienceDescription" className="text-lg font-semibold">Describe them specifically</Label>
            <p className="text-muted-foreground mb-4">Age, income, situation, current behavior, frustrations</p>
            <Textarea
              id="audienceDescription"
              placeholder="My ideal customer is..."
              value={data.audienceDescription}
              onChange={(e) => updateData('audienceDescription', e.target.value)}
              className="min-h-[100px] text-base"
            />
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      title: 'The Problem',
      subtitle: 'What specific pain are you solving?',
      icon: <Target className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-card rounded-lg p-6 border">
            <h3 className="font-semibold mb-4">Complete this sentence:</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="problem">They struggle with...</Label>
                <Input
                  id="problem"
                  placeholder="e.g., finding time to cook healthy meals"
                  value={data.problem}
                  onChange={(e) => updateData('problem', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="problemFeel">...and feel _______ when...</Label>
                <Input
                  id="problemFeel"
                  placeholder="e.g., frustrated"
                  value={data.problemFeel}
                  onChange={(e) => updateData('problemFeel', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Input
                  id="problemWhen"
                  placeholder="e.g., they realize they're ordering takeout again"
                  value={data.problemWhen}
                  onChange={(e) => updateData('problemWhen', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center p-4 bg-secondary/30 rounded-lg">
            <p className="text-sm">
              <strong>Your problem statement:</strong><br />
              "They struggle with {data.problem} and feel {data.problemFeel} when {data.problemWhen}."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'transformation',
      title: 'Transformation Promise',
      subtitle: 'What change do you deliver?',
      icon: <Zap className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-card rounded-lg p-6 border">
            <h3 className="font-semibold mb-4">Complete this transformation:</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="transformationFrom">They go from...</Label>
                <Input
                  id="transformationFrom"
                  placeholder="e.g., stressed about meal planning"
                  value={data.transformationFrom}
                  onChange={(e) => updateData('transformationFrom', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div className="text-center py-2">
                <ArrowRight className="h-6 w-6 text-primary mx-auto" />
              </div>
              
              <div>
                <Label htmlFor="transformationTo">...to...</Label>
                <Input
                  id="transformationTo"
                  placeholder="e.g., confident they're feeding their family well"
                  value={data.transformationTo}
                  onChange={(e) => updateData('transformationTo', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
            <p className="text-sm">
              <strong>Your transformation:</strong><br />
              "They go from {data.transformationFrom} to {data.transformationTo}."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'mvp',
      title: 'MVP Format',
      subtitle: 'How will you deliver this value?',
      icon: <Zap className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="mvpFormat" className="text-lg font-semibold">Choose your MVP format</Label>
            <Select value={data.mvpFormat} onValueChange={(value) => updateData('mvpFormat', value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select your MVP format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-app">Web Application</SelectItem>
                <SelectItem value="mobile-app">Mobile App</SelectItem>
                <SelectItem value="service">Service/Consulting</SelectItem>
                <SelectItem value="physical-product">Physical Product</SelectItem>
                <SelectItem value="digital-product">Digital Product/Course</SelectItem>
                <SelectItem value="marketplace">Marketplace/Platform</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="mvpDescription" className="text-lg font-semibold">Describe your MVP in one sentence</Label>
            <p className="text-muted-foreground mb-4">What's the simplest version that delivers your core value?</p>
            <Textarea
              id="mvpDescription"
              placeholder="My MVP is..."
              value={data.mvpDescription}
              onChange={(e) => updateData('mvpDescription', e.target.value)}
              className="min-h-[100px] text-base"
            />
          </div>
        </div>
      )
    },
    {
      id: 'dollar-test',
      title: 'The $1 Test',
      subtitle: 'Define your path to first revenue',
      icon: <DollarSign className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-card rounded-lg p-6 border">
            <h3 className="font-semibold mb-4">Complete this revenue statement:</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Label htmlFor="dollarAmount">They'd pay me $</Label>
                <Input
                  id="dollarAmount"
                  placeholder="10"
                  value={data.dollarAmount}
                  onChange={(e) => updateData('dollarAmount', e.target.value)}
                  className="mt-2"
                />
              </div>
              <div className="flex-[2]">
                <Label htmlFor="dollarFor">to...</Label>
                <Input
                  id="dollarFor"
                  placeholder="get a personalized meal plan for this week"
                  value={data.dollarFor}
                  onChange={(e) => updateData('dollarFor', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-sm">
              <strong>Your revenue hypothesis:</strong><br />
              "They'd pay me ${data.dollarAmount} to {data.dollarFor}."
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              💰 <strong>Remember:</strong> Start small. Your first sale validates the concept. 
              You can always increase prices later.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'commit',
      title: 'Lock In Your Focus',
      subtitle: 'Ready to commit to this direction?',
      icon: <Lock className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-gradient-primary rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Your Startup Summary</h3>
          </div>
          
          <div className="bg-gradient-card rounded-lg p-6 border space-y-4">
            <div>
              <strong>Idea:</strong> {data.idea}
            </div>
            <div>
              <strong>Target:</strong> {data.audienceDescription}
            </div>
            <div>
              <strong>Problem:</strong> They struggle with {data.problem} and feel {data.problemFeel} when {data.problemWhen}.
            </div>
            <div>
              <strong>Solution:</strong> {data.mvpDescription}
            </div>
            <div>
              <strong>First Sale:</strong> They'd pay me ${data.dollarAmount} to {data.dollarFor}.
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              This becomes your North Star for the next 30 days. 
              Everything you build should serve this vision.
            </p>
            
            <Button variant="tropical" size="lg" className="text-lg px-8 py-6">
              Lock In My Focus
              <Lock className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="shadow-card">
          <CardHeader className="text-center pb-6">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <div className="text-primary">
                {currentStepData.icon}
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">{currentStepData.title}</CardTitle>
            <CardDescription className="text-lg">{currentStepData.subtitle}</CardDescription>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="animate-fade-in">
              {currentStepData.content}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentStep ? 'bg-primary' : 'bg-secondary'
                }`}
              />
            ))}
          </div>
          
          <Button 
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex items-center"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;