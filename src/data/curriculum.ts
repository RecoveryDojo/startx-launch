export interface LessonContent {
  id: string;
  title: string;
  type: 'video' | 'audio' | 'text' | 'interactive' | 'workshop' | 'canvas' | 'template';
  duration: string;
  completed: boolean;
  description?: string;
  videoUrl?: string;
  audioUrl?: string;
  content?: string;
  worksheetId?: string;
  canvasId?: string;
  templateUrl?: string;
}

export interface DailyTask {
  id: string;
  title: string;
  description?: string;
  type: 'action' | 'research' | 'creation' | 'outreach' | 'analysis';
  estimatedTime?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface DailyModule {
  day: number;
  title: string;
  phase: 'Foundation' | 'Build' | 'Launch';
  description: string;
  objectives: string[];
  morningLesson: LessonContent;
  workshop: LessonContent;
  tasks: DailyTask[];
  reflection: {
    questions: string[];
    timeEstimate: string;
  };
  keyDeliverables: string[];
  resources: {
    title: string;
    url: string;
    type: 'template' | 'tool' | 'reading' | 'video';
  }[];
}

export const dailyCurriculum: DailyModule[] = [
  // FOUNDATION PHASE (Days 1-10)
  {
    day: 1,
    title: "The Founder's Mindset & Opportunity Discovery",
    phase: "Foundation",
    description: "Develop the entrepreneurial mindset and learn to spot opportunities everywhere",
    objectives: [
      "Understand the founder's mindset fundamentals",
      "Learn opportunity spotting frameworks",
      "Begin your entrepreneurial journey documentation"
    ],
    morningLesson: {
      id: "1-morning",
      title: "The Founder's Mindset Masterclass",
      type: "video",
      duration: "18 min",
      completed: false,
      description: "Learn the mental models and frameworks that successful founders use to see opportunities and overcome challenges.",
      videoUrl: "/videos/founders-mindset.mp4"
    },
    workshop: {
      id: "1-workshop",
      title: "Opportunity Spotting Canvas",
      type: "canvas",
      duration: "45 min",
      completed: false,
      description: "Interactive workshop to identify and evaluate opportunities in your daily life.",
      canvasId: "opportunity-canvas"
    },
    tasks: [
      {
        id: "1-t1",
        title: "Complete personal strengths assessment",
        type: "analysis",
        estimatedTime: "15 min",
        completed: false,
        priority: "high"
      },
      {
        id: "1-t2",
        title: "Document 10 problems you've experienced this week",
        type: "research",
        estimatedTime: "20 min",
        completed: false,
        priority: "high"
      },
      {
        id: "1-t3",
        title: "Research 3 successful Costa Rican entrepreneurs",
        type: "research",
        estimatedTime: "30 min",
        completed: false,
        priority: "medium"
      }
    ],
    reflection: {
      questions: [
        "What mindset shifts do I need to make to think like a founder?",
        "Which opportunities resonate most with my strengths and passions?",
        "What fears or limiting beliefs might hold me back?"
      ],
      timeEstimate: "10 min"
    },
    keyDeliverables: ["Personal strengths assessment", "Opportunity identification list", "Founder mindset commitment"],
    resources: [
      { title: "Founder Mindset Checklist", url: "/templates/founder-mindset.pdf", type: "template" },
      { title: "Opportunity Evaluation Matrix", url: "/templates/opportunity-matrix.xlsx", type: "template" }
    ]
  },
  {
    day: 2,
    title: "Problem Discovery & Customer Pain Point Research",
    phase: "Foundation",
    description: "Deep dive into problem identification and understanding customer pain points",
    objectives: [
      "Master problem discovery techniques",
      "Learn to identify real vs. perceived problems",
      "Create a structured approach to customer pain research"
    ],
    morningLesson: {
      id: "2-morning",
      title: "Problem-Market Fit Deep Dive",
      type: "video",
      duration: "22 min",
      completed: false,
      description: "Learn how to identify problems worth solving and validate real market needs.",
      videoUrl: "/videos/problem-market-fit.mp4"
    },
    workshop: {
      id: "2-workshop",
      title: "Customer Pain Point Canvas",
      type: "canvas",
      duration: "50 min",
      completed: false,
      description: "Map customer pain points and understand the depth of problems you want to solve.",
      canvasId: "pain-point-canvas"
    },
    tasks: [
      {
        id: "2-t1",
        title: "Conduct 3 informal problem discovery conversations",
        type: "research",
        estimatedTime: "60 min",
        completed: false,
        priority: "high"
      },
      {
        id: "2-t2",
        title: "Analyze online forums and communities for pain points",
        type: "research",
        estimatedTime: "45 min",
        completed: false,
        priority: "high"
      },
      {
        id: "2-t3",
        title: "Create initial problem hypothesis document",
        type: "creation",
        estimatedTime: "30 min",
        completed: false,
        priority: "medium"
      }
    ],
    reflection: {
      questions: [
        "Which problems generate the strongest emotional responses?",
        "How frequently do people experience these problems?",
        "What current solutions exist and why do they fall short?"
      ],
      timeEstimate: "10 min"
    },
    keyDeliverables: ["Customer pain point map", "Problem severity ranking", "Initial solution hypotheses"],
    resources: [
      { title: "Problem Discovery Script", url: "/templates/problem-discovery.pdf", type: "template" },
      { title: "Pain Point Analysis Tool", url: "/tools/pain-analysis", type: "tool" }
    ]
  },
  {
    day: 3,
    title: "Competitive Analysis & Blue Ocean Strategy",
    phase: "Foundation",
    description: "Analyze the competitive landscape and identify unique positioning opportunities",
    objectives: [
      "Conduct comprehensive competitive analysis",
      "Learn Blue Ocean Strategy principles",
      "Identify unique differentiation opportunities"
    ],
    morningLesson: {
      id: "3-morning",
      title: "Competitive Intelligence & Blue Ocean Thinking",
      type: "video",
      duration: "25 min",
      completed: false,
      description: "Master competitive analysis and learn to find uncontested market spaces.",
      videoUrl: "/videos/competitive-analysis.mp4"
    },
    workshop: {
      id: "3-workshop",
      title: "Competitive Analysis Matrix",
      type: "workshop",
      duration: "60 min",
      completed: false,
      description: "Build a comprehensive competitive analysis and identify your Blue Ocean opportunity.",
      worksheetId: "competitive-analysis"
    },
    tasks: [
      {
        id: "3-t1",
        title: "Research 5 direct competitors in detail",
        type: "research",
        estimatedTime: "90 min",
        completed: false,
        priority: "high"
      },
      {
        id: "3-t2",
        title: "Identify 3 indirect/alternative solutions",
        type: "research",
        estimatedTime: "45 min",
        completed: false,
        priority: "high"
      },
      {
        id: "3-t3",
        title: "Define your unique value proposition draft",
        type: "creation",
        estimatedTime: "30 min",
        completed: false,
        priority: "medium"
      }
    ],
    reflection: {
      questions: [
        "What gaps exist in the current competitive landscape?",
        "How can I eliminate, reduce, raise, and create different factors?",
        "What would make customers choose my solution over alternatives?"
      ],
      timeEstimate: "10 min"
    },
    keyDeliverables: ["Competitive analysis matrix", "Blue Ocean opportunity map", "Unique positioning statement"],
    resources: [
      { title: "Competitive Analysis Template", url: "/templates/competitive-analysis.xlsx", type: "template" },
      { title: "Blue Ocean Canvas", url: "/templates/blue-ocean.pdf", type: "template" }
    ]
  },
  // Continue with remaining 27 days...
  {
    day: 4,
    title: "Customer Avatar Creation & Targeting",
    phase: "Foundation",
    description: "Build detailed customer personas and target market definition",
    objectives: [
      "Create detailed customer avatars",
      "Understand customer demographics and psychographics",
      "Define primary and secondary target markets"
    ],
    morningLesson: {
      id: "4-morning",
      title: "Customer Avatar Masterclass",
      type: "video",
      duration: "20 min",
      completed: false,
      description: "Learn to create detailed, actionable customer personas that guide all business decisions.",
      videoUrl: "/videos/customer-avatar.mp4"
    },
    workshop: {
      id: "4-workshop",
      title: "Customer Avatar Builder",
      type: "interactive",
      duration: "55 min",
      completed: false,
      description: "Step-by-step interactive tool to build your ideal customer profile.",
      worksheetId: "customer-avatar"
    },
    tasks: [
      {
        id: "4-t1",
        title: "Research target demographic data and trends",
        type: "research",
        estimatedTime: "45 min",
        completed: false,
        priority: "high"
      },
      {
        id: "4-t2",
        title: "Create primary customer avatar with photo and name",
        type: "creation",
        estimatedTime: "40 min",
        completed: false,
        priority: "high"
      },
      {
        id: "4-t3",
        title: "Develop customer journey mapping draft",
        type: "creation",
        estimatedTime: "35 min",
        completed: false,
        priority: "medium"
      }
    ],
    reflection: {
      questions: [
        "How well do I really understand my customer's daily life?",
        "What assumptions about my customer need validation?",
        "Where does my customer currently go to solve this problem?"
      ],
      timeEstimate: "10 min"
    },
    keyDeliverables: ["Primary customer avatar", "Secondary customer segments", "Customer journey map draft"],
    resources: [
      { title: "Customer Avatar Template", url: "/templates/customer-avatar.pdf", type: "template" },
      { title: "Demographics Research Guide", url: "/guides/demographics.pdf", type: "reading" }
    ]
  },
  {
    day: 5,
    title: "Validation Interview Techniques & Execution",
    phase: "Foundation",
    description: "Master customer interview techniques and gather validation data",
    objectives: [
      "Learn effective interview techniques",
      "Develop unbiased questioning strategies",
      "Execute customer discovery interviews"
    ],
    morningLesson: {
      id: "5-morning",
      title: "Customer Interview Mastery",
      type: "video",
      duration: "24 min",
      completed: false,
      description: "Master the art of customer interviews to gather unbiased, actionable insights.",
      videoUrl: "/videos/customer-interviews.mp4"
    },
    workshop: {
      id: "5-workshop",
      title: "Interview Practice & Role-Play",
      type: "interactive",
      duration: "45 min",
      completed: false,
      description: "Practice interview techniques with AI simulation and peer feedback.",
      worksheetId: "interview-practice"
    },
    tasks: [
      {
        id: "5-t1",
        title: "Schedule 5 customer interviews for this week",
        type: "outreach",
        estimatedTime: "60 min",
        completed: false,
        priority: "high"
      },
      {
        id: "5-t2",
        title: "Conduct 2 practice interviews with cohort members",
        type: "action",
        estimatedTime: "40 min",
        completed: false,
        priority: "high"
      },
      {
        id: "5-t3",
        title: "Create interview documentation template",
        type: "creation",
        estimatedTime: "20 min",
        completed: false,
        priority: "medium"
      }
    ],
    reflection: {
      questions: [
        "What interview techniques feel most natural to me?",
        "How can I ensure I'm not leading customers to tell me what I want to hear?",
        "What follow-up questions reveal the deepest insights?"
      ],
      timeEstimate: "10 min"
    },
    keyDeliverables: ["Interview script", "Scheduled customer interviews", "Interview documentation system"],
    resources: [
      { title: "Interview Question Bank", url: "/templates/interview-questions.pdf", type: "template" },
      { title: "Interview Best Practices", url: "/guides/interview-guide.pdf", type: "reading" }
    ]
  }
  // ... Continue with days 6-30 following the same detailed structure
];

export const phaseColors = {
  Foundation: "bg-blue-500",
  Build: "bg-green-500",
  Launch: "bg-purple-500"
};

export const getCurrentDay = (): number => {
  // In a real app, this would calculate based on program start date
  return 1;
};

export const getDayProgress = (day: number): number => {
  // Calculate completion percentage based on completed tasks and lessons
  return Math.floor(Math.random() * 100); // Placeholder
};