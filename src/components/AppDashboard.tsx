import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Circle, 
  Target, 
  DollarSign, 
  Users, 
  Zap, 
  BookOpen,
  Play,
  MessageCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AppDashboard = () => {
  const [currentWeek] = useState(1);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const weeklyModules = [
    {
      week: 1,
      title: "Clarity + Validation",
      description: "Define your customer, problem, and solution",
      color: "bg-primary",
      progress: 75,
      lessons: [
        { id: "1-1", title: "Customer Avatar Deep Dive", type: "video", duration: "15 min", completed: true },
        { id: "1-2", title: "Problem Validation Framework", type: "audio", duration: "12 min", completed: true },
        { id: "1-3", title: "Solution-Problem Fit", type: "text", duration: "8 min", completed: false },
        { id: "1-4", title: "Customer Interview Scripts", type: "template", duration: "5 min", completed: false }
      ],
      tasks: [
        { id: "t1-1", title: "Interview 5 potential customers", completed: false },
        { id: "t1-2", title: "Create customer persona", completed: true },
        { id: "t1-3", title: "Validate core problem", completed: true },
        { id: "t1-4", title: "Document insights", completed: false }
      ]
    },
    {
      week: 2,
      title: "MVP Build + Branding",
      description: "Build your minimum viable product",
      color: "bg-accent",
      progress: 0,
      lessons: [
        { id: "2-1", title: "MVP Planning Canvas", type: "video", duration: "18 min", completed: false },
        { id: "2-2", title: "No-Code MVP Tools", type: "text", duration: "10 min", completed: false },
        { id: "2-3", title: "Brand Identity Basics", type: "video", duration: "20 min", completed: false },
        { id: "2-4", title: "Landing Page Templates", type: "template", duration: "5 min", completed: false }
      ],
      tasks: [
        { id: "t2-1", title: "Choose MVP format", completed: false },
        { id: "t2-2", title: "Build core feature", completed: false },
        { id: "t2-3", title: "Create brand assets", completed: false },
        { id: "t2-4", title: "Launch landing page", completed: false }
      ]
    },
    {
      week: 3,
      title: "Customer Outreach + Sales",
      description: "Connect with customers and make sales",
      color: "bg-success",
      progress: 0,
      lessons: [
        { id: "3-1", title: "Sales Psychology 101", type: "video", duration: "22 min", completed: false },
        { id: "3-2", title: "Outreach Strategies", type: "audio", duration: "16 min", completed: false },
        { id: "3-3", title: "Handling Objections", type: "video", duration: "14 min", completed: false },
        { id: "3-4", title: "Sales Scripts & Email Templates", type: "template", duration: "5 min", completed: false }
      ],
      tasks: [
        { id: "t3-1", title: "Reach out to 20 prospects", completed: false },
        { id: "t3-2", title: "Schedule 5 demos", completed: false },
        { id: "t3-3", title: "Make first sale", completed: false },
        { id: "t3-4", title: "Collect testimonials", completed: false }
      ]
    },
    {
      week: 4,
      title: "Refine + Pitch",
      description: "Perfect your product and prepare for demo day",
      color: "bg-primary",
      progress: 0,
      lessons: [
        { id: "4-1", title: "Product Iteration Cycle", type: "text", duration: "12 min", completed: false },
        { id: "4-2", title: "Pitch Deck Essentials", type: "video", duration: "25 min", completed: false },
        { id: "4-3", title: "Demo Day Preparation", type: "video", duration: "18 min", completed: false },
        { id: "4-4", title: "Scaling Strategy", type: "audio", duration: "20 min", completed: false }
      ],
      tasks: [
        { id: "t4-1", title: "Analyze user feedback", completed: false },
        { id: "t4-2", title: "Implement improvements", completed: false },
        { id: "t4-3", title: "Prepare pitch deck", completed: false },
        { id: "t4-4", title: "Practice demo", completed: false }
      ]
    }
  ];

  const stats = {
    revenue: 147,
    customers: 3,
    mvpProgress: 65,
    daysLeft: 22
  };

  const currentModule = weeklyModules[currentWeek - 1];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-white/90 text-lg">
                Week {currentWeek} • {stats.daysLeft} days left in Costa Rica
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Cohort Alpha-2024
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">${stats.revenue}</div>
              <p className="text-sm text-muted-foreground">Revenue Generated</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.customers}</div>
              <p className="text-sm text-muted-foreground">Paying Customers</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.mvpProgress}%</div>
              <p className="text-sm text-muted-foreground">MVP Complete</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.daysLeft}</div>
              <p className="text-sm text-muted-foreground">Days Remaining</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Today Tab */}
          <TabsContent value="today" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Focus */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Today's Focus</span>
                  </CardTitle>
                  <CardDescription>
                    Tuesday, March 12 • Day 8 of your journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-card rounded-lg p-4 border">
                    <h3 className="font-semibold mb-2">Morning Lesson</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Play className="h-8 w-8 text-primary bg-primary/10 rounded-full p-2" />
                        <div>
                          <p className="font-medium">Problem Validation Framework</p>
                          <p className="text-sm text-muted-foreground">12 min audio • Week 1</p>
                        </div>
                      </div>
                      <Button variant="hero" size="sm">
                        Continue
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Today's Tasks</h3>
                    <div className="space-y-2">
                      {currentModule.tasks.slice(0, 3).map((task) => (
                        <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                          <button onClick={() => toggleTask(task.id)}>
                            {completedTasks.includes(task.id) ? (
                              <CheckCircle className="h-5 w-5 text-success" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                          </button>
                          <span className={completedTasks.includes(task.id) ? 'line-through text-muted-foreground' : ''}>
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat with Mentor
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Founder Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Resource Library
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Track Revenue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Week Tab */}
          <TabsContent value="week" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full ${currentModule.color}`} />
                  <span>Week {currentWeek}: {currentModule.title}</span>
                </CardTitle>
                <CardDescription>{currentModule.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Lessons */}
                  <div>
                    <h3 className="font-semibold mb-4">This Week's Lessons</h3>
                    <div className="space-y-3">
                      {currentModule.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-success" />
                            ) : (
                              <Play className="h-5 w-5 text-primary" />
                            )}
                            <div>
                              <p className="font-medium">{lesson.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {lesson.type} • {lesson.duration}
                              </p>
                            </div>
                          </div>
                          <Button variant={lesson.completed ? "outline" : "default"} size="sm">
                            {lesson.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div>
                    <h3 className="font-semibold mb-4">Week {currentWeek} Tasks</h3>
                    <div className="space-y-2">
                      {currentModule.tasks.map((task) => (
                        <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                          <button onClick={() => toggleTask(task.id)}>
                            {completedTasks.includes(task.id) ? (
                              <CheckCircle className="h-5 w-5 text-success" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                          </button>
                          <span className={completedTasks.includes(task.id) ? 'line-through text-muted-foreground' : ''}>
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weekly Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {weeklyModules.map((module, index) => (
                    <div key={module.week} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Week {module.week}: {module.title}</span>
                        <span className="text-sm text-muted-foreground">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Revenue Tracker */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Revenue Journey</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success">${stats.revenue}</div>
                      <p className="text-muted-foreground">of $1,000 goal</p>
                      <Progress value={(stats.revenue / 1000) * 100} className="mt-2 h-3" />
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>First sale:</span>
                        <span className="text-success font-medium">$49 ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Second customer:</span>
                        <span className="text-success font-medium">$49 ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Premium sale:</span>
                        <span className="text-success font-medium">$49 ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next milestone:</span>
                        <span className="text-muted-foreground">$250</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Founder Chat</span>
                  </CardTitle>
                  <CardDescription>Connect with your cohort</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Sarah • 2 hours ago</p>
                      <p>Just made my first sale! $25 for a custom meal plan. The validation framework really works! 🎉</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Mike • 4 hours ago</p>
                      <p>Anyone else struggling with the customer interviews? Looking for tips on getting people to open up.</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Alex • 6 hours ago</p>
                      <p>Costa Rica sunrise hits different when you're building something real ☀️</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex space-x-2">
                      <input 
                        placeholder="Share an update..."
                        className="flex-1 px-3 py-2 rounded-lg border bg-background"
                      />
                      <Button size="sm">Send</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cohort Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Sarah", revenue: 289, rank: 1 },
                      { name: "You", revenue: 147, rank: 2 },
                      { name: "Mike", revenue: 95, rank: 3 },
                      { name: "David", revenue: 67, rank: 4 },
                      { name: "Lisa", revenue: 23, rank: 5 }
                    ].map((founder) => (
                      <div key={founder.name} className="flex items-center justify-between p-2 rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            founder.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                            founder.rank === 2 ? 'bg-gray-300 text-gray-700' :
                            founder.rank === 3 ? 'bg-orange-400 text-orange-900' :
                            'bg-secondary text-muted-foreground'
                          }`}>
                            {founder.rank}
                          </div>
                          <span className={founder.name === "You" ? "font-semibold" : ""}>
                            {founder.name}
                          </span>
                        </div>
                        <span className="text-success font-medium">${founder.revenue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AppDashboard;