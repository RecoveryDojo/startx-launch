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
  Award,
  Clock,
  FileText,
  Video,
  Headphones,
  Palette,
  Download,
  ChevronRight,
  Star,
  Trophy,
  Brain
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InteractiveCanvas from './InteractiveCanvas';
import WorksheetBuilder from './WorksheetBuilder';
import { dailyCurriculum, getCurrentDay, getDayProgress, phaseColors, getWeekProgress, getPhaseProgress, weeklyMilestones } from '@/data/comprehensive-curriculum';
import EnhancedWorksheetBuilder from '@/components/enhanced/WorksheetBuilder';
import { worksheetDefinitions } from '@/data/worksheets';

const AppDashboard = () => {
  const [currentDay] = useState(getCurrentDay());
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('daily');
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const stats = {
    revenue: 147,
    customers: 3,
    mvpProgress: 65,
    daysLeft: 30 - currentDay,
    streakDays: 5,
    totalLessons: 30,
    completedLessons: currentDay - 1
  };

  const currentDayModule = dailyCurriculum[currentDay - 1];
  const selectedDayModule = dailyCurriculum[selectedDay - 1];

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'audio': return Headphones;
      case 'interactive': return Brain;
      case 'workshop': return Palette;
      case 'canvas': return FileText;
      case 'template': return Download;
      default: return BookOpen;
    }
  };

  const getPhaseProgress = (phase: string) => {
    const phaseModules = dailyCurriculum.filter(m => m.phase === phase);
    const completedInPhase = phaseModules.filter(m => m.day < currentDay).length;
    return Math.round((completedInPhase / phaseModules.length) * 100);
  };

  const weeklyView = () => {
    const weeks = [];
    for (let i = 0; i < 30; i += 7) {
      const weekDays = dailyCurriculum.slice(i, i + 7);
      weeks.push({
        week: Math.floor(i / 7) + 1,
        days: weekDays,
        startDay: i + 1,
        endDay: Math.min(i + 7, 30)
      });
    }
    return weeks;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-white/90 text-lg">
                Day {currentDay} • {currentDayModule.phase} Phase • {stats.daysLeft} days left
              </p>
              <p className="text-white/70 text-sm mt-1">{currentDayModule.title}</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col items-end space-y-2">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Cohort Alpha-2024
              </Badge>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-white/90">{stats.streakDays} day streak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
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
              <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.completedLessons}</div>
              <p className="text-sm text-muted-foreground">Lessons Complete</p>
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="workshop">Workshop</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Today Tab - Enhanced Daily View */}
          <TabsContent value="today" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Learning Path */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span className="font-semibold">Day {currentDay}: {currentDayModule.title}</span>
                    </div>
                    <Badge variant="outline" className={phaseColors[currentDayModule.phase]}>
                      {currentDayModule.phase}
                    </Badge>
                  </div>
                  <CardDescription>{currentDayModule.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Morning Lesson */}
                  <div className="bg-gradient-card rounded-lg p-4 border">
                    <h3 className="font-semibold mb-3 flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Morning Lesson</span>
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {React.createElement(getContentIcon(currentDayModule.morningLesson.type), {
                          className: "h-8 w-8 text-primary bg-primary/10 rounded-full p-2"
                        })}
                        <div>
                          <p className="font-medium">{currentDayModule.morningLesson.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {currentDayModule.morningLesson.duration} • {currentDayModule.morningLesson.type}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant={currentDayModule.morningLesson.completed ? "outline" : "default"} 
                        size="sm"
                      >
                        {currentDayModule.morningLesson.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  </div>

                  {/* Workshop */}
                  <div className="bg-gradient-card rounded-lg p-4 border">
                    <h3 className="font-semibold mb-3 flex items-center space-x-2">
                      <Palette className="h-4 w-4" />
                      <span>Interactive Workshop</span>
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {React.createElement(getContentIcon(currentDayModule.workshop.type), {
                          className: "h-8 w-8 text-accent bg-accent/10 rounded-full p-2"
                        })}
                        <div>
                          <p className="font-medium">{currentDayModule.workshop.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {currentDayModule.workshop.duration} • {currentDayModule.workshop.type}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant={currentDayModule.workshop.completed ? "outline" : "default"} 
                        size="sm"
                        onClick={() => setShowWorksheet(true)}
                      >
                        {currentDayModule.workshop.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  </div>

                  {/* Daily Tasks */}
                  <div>
                    <h3 className="font-semibold mb-3">Today's Tasks</h3>
                    <div className="space-y-2">
                      {currentDayModule.tasks.map((task) => (
                        <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                          <button onClick={() => toggleTask(task.id)}>
                            {completedTasks.includes(task.id) ? (
                              <CheckCircle className="h-5 w-5 text-success" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                          </button>
                          <div className="flex-1">
                            <span className={completedTasks.includes(task.id) ? 'line-through text-muted-foreground' : ''}>
                              {task.title}
                            </span>
                            {task.estimatedTime && (
                              <p className="text-xs text-muted-foreground">{task.estimatedTime}</p>
                            )}
                          </div>
                          <Badge variant="outline" className={
                            task.priority === 'high' ? 'border-red-500 text-red-600' :
                            task.priority === 'medium' ? 'border-yellow-500 text-yellow-600' :
                            'border-green-500 text-green-600'
                          }>
                            {task.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Resources & Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Daily Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Templates & Tools</h4>
                    {currentDayModule.resources.map((resource, index) => (
                      <Button key={index} variant="outline" className="w-full justify-start text-sm h-auto py-2">
                        <Download className="mr-2 h-3 w-3" />
                        <span className="truncate">{resource.title}</span>
                      </Button>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    <h4 className="font-medium text-sm">Quick Actions</h4>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat with Mentor
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Founder Chat
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Track Revenue
                    </Button>
                  </div>

                  {/* Daily Objectives */}
                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-sm mb-2">Today's Objectives</h4>
                    <div className="space-y-1">
                      {currentDayModule.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Curriculum Tab - 30-Day Overview */}
          <TabsContent value="curriculum" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Phase Progress Cards */}
              {['Foundation', 'Build', 'Launch'].map((phase) => (
                <Card key={phase}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${phaseColors[phase as keyof typeof phaseColors]}`} />
                      <span>{phase} Phase</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{getPhaseProgress(phase)}%</span>
                      </div>
                      <Progress value={getPhaseProgress(phase)} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {dailyCurriculum.filter(m => m.phase === phase).length} days
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Weekly View */}
            <div className="space-y-6">
              {weeklyView().map((week) => (
                <Card key={week.week}>
                  <CardHeader>
                    <CardTitle>Week {week.week} (Days {week.startDay}-{week.endDay})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
                      {week.days.map((day) => (
                        <div
                          key={day.day}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors hover:bg-secondary/50 ${
                            day.day === currentDay ? 'border-primary bg-primary/5' : ''
                          }`}
                          onClick={() => setSelectedDay(day.day)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Day {day.day}</span>
                            <Badge variant="outline" className={`${phaseColors[day.phase]} text-xs`}>
                              {day.phase}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {day.title}
                          </p>
                          <div className="mt-2">
                            <Progress value={getDayProgress(day.day)} className="h-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Workshop Tab */}
          <TabsContent value="workshop" className="space-y-6">
            {showWorksheet ? (
              <WorksheetBuilder
                title={selectedDayModule.workshop.title}
                description={selectedDayModule.workshop.description || "Complete this interactive worksheet"}
                questions={[
                  {
                    id: "q1",
                    type: "textarea",
                    question: "What is your main learning objective for today?",
                    required: true
                  },
                  {
                    id: "q2",
                    type: "checklist",
                    question: "Check off completed action items:",
                    checklistItems: selectedDayModule.tasks.map(task => ({
                      id: task.id,
                      text: task.title,
                      completed: completedTasks.includes(task.id)
                    }))
                  }
                ]}
                onComplete={() => setShowWorksheet(false)}
              />
            ) : (
              <div className="text-center py-12">
                <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Interactive Workshops</h3>
                <p className="text-muted-foreground mb-6">
                  Access today's workshop from the Today tab, or select a specific day from the Curriculum.
                </p>
                <Button onClick={() => setShowWorksheet(true)}>
                  Start Today's Workshop
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Progress Tab - Enhanced */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phase Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Phase Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {['Foundation', 'Build', 'Launch'].map((phase) => (
                    <div key={phase} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${phaseColors[phase as keyof typeof phaseColors]}`} />
                          <span>{phase}</span>
                        </span>
                        <span className="text-sm text-muted-foreground">{getPhaseProgress(phase)}%</span>
                      </div>
                      <Progress value={getPhaseProgress(phase)} className="h-2" />
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

            {/* Learning Streak */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Learning Streak</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{stats.streakDays} days</div>
                    <p className="text-muted-foreground">Current streak</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full ${
                          i < stats.streakDays ? 'bg-yellow-400' : 'bg-secondary'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab - Same as before */}
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
                      <p>Just completed Day 3's customer interview workshop! Already scheduled 3 interviews for tomorrow. The framework makes it so much easier 🎯</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Mike • 4 hours ago</p>
                      <p>Anyone else finding the Blue Ocean Strategy fascinating? Totally changed how I think about competition.</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Alex • 6 hours ago</p>
                      <p>Costa Rica sunrise hits different when you're building something real ☀️ Day 1 mindset workshop was game-changing!</p>
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
                  <CardDescription>Revenue + Learning Progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Sarah", revenue: 289, progress: 95, rank: 1 },
                      { name: "You", revenue: 147, progress: 85, rank: 2 },
                      { name: "Mike", revenue: 95, progress: 78, rank: 3 },
                      { name: "David", revenue: 67, progress: 72, rank: 4 },
                      { name: "Lisa", revenue: 23, progress: 65, rank: 5 }
                    ].map((founder) => (
                      <div key={founder.name} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            founder.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                            founder.rank === 2 ? 'bg-gray-300 text-gray-700' :
                            founder.rank === 3 ? 'bg-orange-400 text-orange-900' :
                            'bg-secondary text-muted-foreground'
                          }`}>
                            {founder.rank}
                          </div>
                          <div>
                            <span className={founder.name === "You" ? "font-semibold" : ""}>
                              {founder.name}
                            </span>
                            <div className="text-xs text-muted-foreground">
                              {founder.progress}% progress
                            </div>
                          </div>
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