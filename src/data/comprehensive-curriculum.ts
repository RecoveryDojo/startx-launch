export interface LessonContent {
  id: string;
  title: string;
  type: 'video' | 'audio' | 'text' | 'interactive' | 'workshop' | 'canvas' | 'template' | 'live_session' | 'case_study';
  duration: string;
  completed: boolean;
  description?: string;
  videoUrl?: string;
  audioUrl?: string;
  content?: string;
  worksheetId?: string;
  canvasId?: string;
  templateUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  learningOutcomes: string[];
  actionItems?: string[];
}

export interface DailyTask {
  id: string;
  title: string;
  description: string;
  type: 'action' | 'research' | 'creation' | 'outreach' | 'analysis' | 'validation' | 'planning' | 'execution';
  estimatedTime: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'customer' | 'product' | 'business' | 'marketing' | 'financial' | 'legal' | 'personal';
  tools?: string[];
  successCriteria: string[];
  dependencies?: string[];
}

export interface WeeklyMilestone {
  week: number;
  title: string;
  description: string;
  deliverables: string[];
  successMetrics: string[];
  reviewQuestions: string[];
}

export interface DailyModule {
  day: number;
  title: string;
  phase: 'Foundation' | 'Build' | 'Launch';
  week: number;
  description: string;
  objectives: string[];
  keyLearnings: string[];
  morningLesson: LessonContent;
  workshop: LessonContent;
  tasks: DailyTask[];
  reflection: {
    questions: string[];
    timeEstimate: string;
    promptType: 'introspective' | 'analytical' | 'strategic' | 'creative';
  };
  keyDeliverables: string[];
  resources: {
    title: string;
    url: string;
    type: 'template' | 'tool' | 'reading' | 'video' | 'podcast' | 'case_study' | 'worksheet' | 'calculator';
    description: string;
    estimatedTime?: string;
  }[];
  communityChallenge?: {
    title: string;
    description: string;
    rewards: string[];
  };
  expertTips: string[];
  commonMistakes: string[];
  nextDayPrep: string[];
}

export const weeklyMilestones: WeeklyMilestone[] = [
  {
    week: 1,
    title: "Foundation & Problem Discovery",
    description: "Establish entrepreneurial mindset and identify validated problems worth solving",
    deliverables: [
      "Personal founder assessment completed",
      "Problem validation interviews conducted",
      "Competitive analysis matrix",
      "Customer avatar documentation",
      "Market opportunity brief"
    ],
    successMetrics: [
      "10+ problem discovery conversations completed",
      "3+ validated pain points identified",
      "Primary customer avatar defined",
      "Competitive landscape mapped"
    ],
    reviewQuestions: [
      "Which problems generate the strongest customer reactions?",
      "What unique insights have I discovered about my target market?",
      "How does my solution approach differ from existing alternatives?"
    ]
  },
  {
    week: 2,
    title: "Solution Design & Business Model",
    description: "Design your solution and create a sustainable business model",
    deliverables: [
      "MVP feature prioritization matrix",
      "Business model canvas v1.0",
      "Financial projections model",
      "Go-to-market strategy outline",
      "Technical architecture plan"
    ],
    successMetrics: [
      "Business model validated with 5+ experts",
      "MVP scope clearly defined",
      "Financial model showing path to profitability",
      "Initial pricing strategy validated"
    ],
    reviewQuestions: [
      "How does my business model create and capture value?",
      "What are my key assumptions that need validation?",
      "How will I acquire my first 100 customers?"
    ]
  },
  {
    week: 3,
    title: "MVP Development & Testing",
    description: "Build and test your minimum viable product with real customers",
    deliverables: [
      "MVP prototype completed",
      "User testing protocol established",
      "Brand identity system",
      "Marketing website v1.0",
      "Customer feedback analysis"
    ],
    successMetrics: [
      "MVP tested with 20+ potential customers",
      "Product-market fit indicators measured",
      "Brand recognition testing completed",
      "Website conversion rate optimized"
    ],
    reviewQuestions: [
      "What do customers love most about my MVP?",
      "Which features are essential vs. nice-to-have?",
      "How can I improve the user experience?"
    ]
  },
  {
    week: 4,
    title: "Launch Preparation & Market Entry",
    description: "Prepare for launch and execute your go-to-market strategy",
    deliverables: [
      "Launch campaign strategy",
      "Sales process documentation",
      "Customer onboarding system",
      "Metrics dashboard setup",
      "Scale-ready operations plan"
    ],
    successMetrics: [
      "Pre-launch list of 100+ interested prospects",
      "First 10 paying customers acquired",
      "Operations systems tested and optimized",
      "Growth metrics baseline established"
    ],
    reviewQuestions: [
      "Am I ready to handle demand if my launch succeeds?",
      "What could go wrong and how will I respond?",
      "How will I measure and optimize for growth?"
    ]
  }
];

export const dailyCurriculum: DailyModule[] = [
  // WEEK 1: FOUNDATION PHASE
  {
    day: 1,
    title: "The Founder's Mindset & Opportunity Discovery",
    phase: "Foundation",
    week: 1,
    description: "Transform your thinking and develop the entrepreneurial mindset that separates successful founders from dreamers",
    objectives: [
      "Develop unshakeable founder confidence and resilience",
      "Master the art of opportunity recognition in everyday situations",
      "Create your personal founder manifesto and commitment",
      "Understand the Costa Rican entrepreneurial ecosystem"
    ],
    keyLearnings: [
      "The 7 mental models of successful entrepreneurs",
      "How to spot opportunities others miss",
      "Building anti-fragility in business and life",
      "Leveraging Costa Rica's unique market advantages"
    ],
    morningLesson: {
      id: "1-morning",
      title: "The Founder's Mindset Revolution",
      type: "video",
      duration: "32 min",
      completed: false,
      difficulty: "beginner",
      description: "An intensive deep-dive into the psychological and mental frameworks that separate successful entrepreneurs from those who never take action. Learn the exact mindset shifts used by billion-dollar founders.",
      videoUrl: "/videos/founders-mindset-revolution.mp4",
      learningOutcomes: [
        "Understand the difference between employee and founder thinking",
        "Develop opportunity recognition skills",
        "Build resilience frameworks for challenging times",
        "Create personal accountability systems"
      ],
      actionItems: [
        "Complete the Founder Readiness Assessment",
        "Identify your personal why and motivation",
        "Set up daily mindset practices"
      ]
    },
    workshop: {
      id: "1-workshop",
      title: "Opportunity Discovery Canvas & Local Market Analysis",
      type: "canvas",
      duration: "90 min",
      completed: false,
      difficulty: "beginner",
      description: "Interactive workshop combining global opportunity frameworks with Costa Rica-specific market analysis. Build your personal opportunity radar.",
      canvasId: "opportunity-discovery-pro",
      learningOutcomes: [
        "Master the Opportunity Discovery Framework",
        "Identify 10+ potential business opportunities",
        "Understand Costa Rica's market dynamics",
        "Create your opportunity evaluation criteria"
      ],
      actionItems: [
        "Complete opportunity discovery canvas",
        "Rank opportunities by potential and fit",
        "Research local market conditions"
      ]
    },
    tasks: [
      {
        id: "1-t1",
        title: "Complete comprehensive founder readiness assessment",
        description: "Take our proprietary 45-question assessment that evaluates your readiness across 9 key founder dimensions: risk tolerance, customer focus, execution ability, resilience, vision clarity, leadership potential, financial acumen, market understanding, and personal motivation.",
        type: "analysis",
        estimatedTime: "25 min",
        completed: false,
        priority: "critical",
        category: "personal",
        tools: ["Founder Assessment Tool", "Personality Analytics"],
        successCriteria: [
          "Score above 70% overall readiness",
          "Identify top 3 strength areas",
          "Create development plan for 2 weakest areas"
        ]
      },
      {
        id: "1-t2",
        title: "Document and categorize 15 problems you've personally experienced",
        description: "Create a comprehensive problem inventory by documenting frustrations, inefficiencies, and pain points you've experienced in the past month. Use the Problem Severity Matrix to evaluate each one.",
        type: "research",
        estimatedTime: "35 min",
        completed: false,
        priority: "high",
        category: "customer",
        tools: ["Problem Documentation Template", "Severity Matrix"],
        successCriteria: [
          "Document 15+ distinct problems",
          "Categorize by frequency and intensity",
          "Identify patterns and themes",
          "Select top 5 for further investigation"
        ]
      },
      {
        id: "1-t3",
        title: "Research and profile 5 successful Costa Rican entrepreneurs",
        description: "Study successful Costa Rican founders across different industries. Analyze their journey, challenges overcome, strategies used, and lessons learned. Create detailed profiles including their path to success.",
        type: "research",
        estimatedTime: "60 min",
        completed: false,
        priority: "medium",
        category: "business",
        tools: ["Entrepreneur Research Template", "Success Pattern Analysis"],
        successCriteria: [
          "Profile 5 successful Costa Rican entrepreneurs",
          "Identify common success patterns",
          "Extract 10+ actionable insights",
          "Connect their strategies to your opportunities"
        ]
      },
      {
        id: "1-t4",
        title: "Join 3 relevant professional communities and introduce yourself",
        description: "Identify and join professional communities relevant to your interests (LinkedIn groups, Facebook communities, local meetups). Introduce yourself authentically and begin building your network.",
        type: "outreach",
        estimatedTime: "40 min",
        completed: false,
        priority: "medium",
        category: "business",
        tools: ["Community Directory", "Introduction Templates"],
        successCriteria: [
          "Join 3+ relevant communities",
          "Post meaningful introductions",
          "Connect with 5+ community members",
          "Schedule 1 coffee chat"
        ]
      }
    ],
    reflection: {
      questions: [
        "What specific mindset shifts do I need to make to think like a successful founder rather than an employee?",
        "Which of the opportunities I've identified align best with my natural strengths and genuine passions?",
        "What fears, limiting beliefs, or past experiences might sabotage my entrepreneurial journey?",
        "How can I leverage Costa Rica's unique advantages in my business approach?",
        "What would I regret not attempting if I had unlimited confidence and resources?"
      ],
      timeEstimate: "15 min",
      promptType: "introspective"
    },
    keyDeliverables: [
      "Completed Founder Readiness Assessment with development plan",
      "Comprehensive opportunity inventory with evaluation scores", 
      "Costa Rican entrepreneur success pattern analysis",
      "Personal founder manifesto and commitment statement"
    ],
    resources: [
      {
        title: "Founder Mindset Assessment Tool",
        url: "/tools/founder-assessment",
        type: "tool",
        description: "Comprehensive 45-question assessment evaluating readiness across 9 key dimensions",
        estimatedTime: "25 min"
      },
      {
        title: "Opportunity Discovery Canvas Template",
        url: "/templates/opportunity-canvas-pro.pdf",
        type: "template",
        description: "Professional-grade canvas for systematic opportunity identification and evaluation",
        estimatedTime: "45 min"
      },
      {
        title: "Costa Rica Market Intelligence Report",
        url: "/resources/cr-market-report.pdf",
        type: "reading",
        description: "2024 comprehensive analysis of Costa Rica's business environment, opportunities, and challenges",
        estimatedTime: "30 min"
      },
      {
        title: "Entrepreneurial Mindset Podcast Series",
        url: "/podcasts/mindset-series",
        type: "podcast",
        description: "8-part podcast series featuring successful Costa Rican entrepreneurs sharing mindset insights",
        estimatedTime: "120 min"
      }
    ],
    communityChallenge: {
      title: "Opportunity Sharing Challenge",
      description: "Share your top 3 discovered opportunities with the cohort and get feedback. Vote on the most innovative opportunity discovered by peers.",
      rewards: ["Community recognition", "Feedback from mentors", "Networking connections"]
    },
    expertTips: [
      "Start your day with 10 minutes of opportunity spotting practice - look for 3 problems before breakfast",
      "Successful founders read customer complaints on competitor reviews daily for opportunity discovery",
      "Costa Rica's bilingual advantage and timezone make it perfect for B2B services targeting US markets",
      "Document everything - ideas, problems, insights. Your future business might be hidden in today's notes"
    ],
    commonMistakes: [
      "Thinking you need a completely original idea - most successful businesses improve existing solutions",
      "Falling in love with solutions before understanding problems deeply",
      "Underestimating the local market size and opportunities in Costa Rica",
      "Waiting for the 'perfect' opportunity instead of starting with validation"
    ],
    nextDayPrep: [
      "Review your problem inventory and select top 3 for deep research tomorrow",
      "Prepare questions for customer discovery conversations",
      "Set up tools for tracking customer feedback and insights"
    ]
  },

  {
    day: 2,
    title: "Deep Problem Discovery & Customer Pain Point Research",
    phase: "Foundation",
    week: 1,
    description: "Master the art of problem discovery and learn to identify pain points that customers will pay to solve",
    objectives: [
      "Conduct systematic customer pain point research using proven frameworks",
      "Distinguish between nice-to-have and must-have problems",
      "Develop customer empathy through immersive research techniques",
      "Create a validated problem hypothesis with supporting evidence"
    ],
    keyLearnings: [
      "The Problem-Market Fit framework for pain point validation",
      "Advanced customer interview techniques for unbiased insights",
      "Pain point scoring and prioritization methodologies",
      "Digital research strategies for understanding customer behavior"
    ],
    morningLesson: {
      id: "2-morning",
      title: "Customer Pain Point Psychology & Validation Framework",
      type: "video",
      duration: "38 min",
      completed: false,
      difficulty: "intermediate",
      description: "Deep dive into customer psychology and the neuroscience of pain points. Learn the exact framework used by successful startups to validate problems worth solving.",
      videoUrl: "/videos/pain-point-psychology.mp4",
      learningOutcomes: [
        "Understand the psychology behind customer pain points",
        "Master the Pain Point Validation Framework",
        "Learn to identify emotional vs. functional pain points",
        "Develop systematic problem research methodologies"
      ],
      actionItems: [
        "Apply the Problem-Market Fit assessment to your top opportunities",
        "Create customer pain point interview scripts",
        "Set up digital research tracking systems"
      ]
    },
    workshop: {
      id: "2-workshop",
      title: "Customer Pain Point Mapping & Research Execution",
      type: "interactive",
      duration: "105 min",
      completed: false,
      difficulty: "intermediate",
      description: "Hands-on workshop where you'll conduct live customer research, analyze pain points using professional frameworks, and create validated problem hypotheses.",
      worksheetId: "pain-point-research-pro",
      learningOutcomes: [
        "Execute professional customer pain point research",
        "Create detailed customer pain point maps",
        "Validate problem severity and frequency",
        "Develop evidence-based problem hypotheses"
      ],
      actionItems: [
        "Complete pain point mapping exercise",
        "Conduct 3 customer discovery conversations",
        "Analyze and score pain points systematically"
      ]
    },
    tasks: [
      {
        id: "2-t1",
        title: "Conduct 5 structured customer discovery interviews",
        description: "Using the provided interview framework, conduct in-depth conversations with potential customers about their pain points. Focus on understanding frequency, intensity, current solutions, and willingness to pay for alternatives.",
        type: "research",
        estimatedTime: "150 min",
        completed: false,
        priority: "critical",
        category: "customer",
        tools: ["Interview Framework", "Recording App", "Analysis Template"],
        successCriteria: [
          "Complete 5 interviews of 25+ minutes each",
          "Document specific pain point examples",
          "Identify current solution attempts and failures",
          "Assess willingness to pay for solutions"
        ],
        dependencies: ["Day 1 opportunity identification"]
      },
      {
        id: "2-t2",
        title: "Analyze online communities and forums for customer pain expressions",
        description: "Research Reddit, Facebook groups, industry forums, and review sites where your target customers gather. Document complaints, questions, and frustrations to identify patterns.",
        type: "research",
        estimatedTime: "90 min",
        completed: false,
        priority: "high",
        category: "customer",
        tools: ["Community Research Guide", "Pain Point Tracker", "Sentiment Analysis"],
        successCriteria: [
          "Research 5+ relevant online communities",
          "Document 20+ specific pain point examples",
          "Identify frequency patterns and common themes",
          "Create customer language and terminology reference"
        ]
      },
      {
        id: "2-t3",
        title: "Create evidence-based problem hypothesis document",
        description: "Synthesize your research into a comprehensive problem hypothesis document that includes problem definition, target customer profile, pain point severity, market size estimation, and validation evidence.",
        type: "creation",
        estimatedTime: "60 min",
        completed: false,
        priority: "high",
        category: "business",
        tools: ["Problem Hypothesis Template", "Market Research Data"],
        successCriteria: [
          "Define 3 specific, validated problems",
          "Include supporting evidence and customer quotes",
          "Estimate market size and opportunity",
          "Create testable hypotheses for further validation"
        ],
        dependencies: ["Customer interviews", "Community research"]
      },
      {
        id: "2-t4",
        title: "Map the customer journey for your top problem",
        description: "Create a detailed customer journey map showing how customers currently experience and attempt to solve your identified problem. Include touchpoints, emotions, and pain points throughout their journey.",
        type: "analysis",
        estimatedTime: "45 min",
        completed: false,
        priority: "medium",
        category: "customer",
        tools: ["Journey Mapping Template", "Customer Interview Data"],
        successCriteria: [
          "Map complete customer journey for top problem",
          "Identify all touchpoints and interactions",
          "Document emotions and frustrations at each stage",
          "Highlight opportunities for intervention"
        ]
      }
    ],
    reflection: {
      questions: [
        "Which customer pain points generated the strongest emotional reactions during interviews?",
        "How frequently do customers experience these problems, and what triggers them?",
        "What current solutions exist, why do they fall short, and what gaps can I fill?",
        "Which problems align best with my skills, interests, and the Costa Rican market context?",
        "What evidence do I have that customers would pay for a better solution?"
      ],
      timeEstimate: "20 min",
      promptType: "analytical"
    },
    keyDeliverables: [
      "Customer pain point research report with 5+ interview summaries",
      "Evidence-based problem hypothesis document with market validation",
      "Customer journey map highlighting intervention opportunities",
      "Prioritized list of problems ranked by severity and market potential"
    ],
    resources: [
      {
        title: "Customer Interview Mastery Guide",
        url: "/guides/interview-mastery.pdf",
        type: "reading",
        description: "Complete guide to conducting unbiased customer interviews with frameworks and question banks",
        estimatedTime: "45 min"
      },
      {
        title: "Pain Point Analysis Toolkit",
        url: "/tools/pain-analysis-pro",
        type: "tool",
        description: "Professional toolkit for analyzing and scoring customer pain points across multiple dimensions",
        estimatedTime: "30 min"
      },
      {
        title: "Costa Rica Customer Behavior Study",
        url: "/research/cr-customer-behavior.pdf",
        type: "case_study",
        description: "2024 study of Costa Rican consumer behavior patterns and decision-making factors",
        estimatedTime: "25 min"
      },
      {
        title: "Problem Validation Worksheet",
        url: "/worksheets/problem-validation.xlsx",
        type: "worksheet",
        description: "Structured worksheet for systematically validating and scoring problem opportunities",
        estimatedTime: "40 min"
      }
    ],
    communityChallenge: {
      title: "Problem Evidence Battle",
      description: "Present your strongest problem evidence to the cohort. Include customer quotes, data, and validation. Vote on the most compelling problem identified.",
      rewards: ["Expert feedback session", "Priority mentor office hours", "Research methodology recognition"]
    },
    expertTips: [
      "Listen for emotional language in interviews - words like 'frustrated,' 'hate,' 'waste' indicate strong pain points",
      "Ask 'How do you solve this today?' rather than 'Do you have this problem?' to avoid leading questions",
      "Costa Rican customers value personal relationships - warm introductions lead to more honest interviews",
      "Track the customer's willingness to spend time explaining problems - time investment indicates real pain"
    ],
    commonMistakes: [
      "Leading customers to validate your assumptions instead of discovering their real problems",
      "Focusing on features customers want instead of problems they need solved",
      "Interviewing friends and family who will tell you what you want to hear",
      "Assuming problems exist globally without validating in your specific market context"
    ],
    nextDayPrep: [
      "Research competitors and alternatives for your validated problems",
      "Prepare competitive analysis framework and research tools",
      "Schedule time for comprehensive market analysis"
    ]
  },

  {
    day: 3,
    title: "Competitive Intelligence & Blue Ocean Strategy Development",
    phase: "Foundation",
    week: 1,
    description: "Master competitive analysis and discover uncontested market spaces where you can dominate",
    objectives: [
      "Conduct comprehensive competitive intelligence across direct and indirect competitors",
      "Apply Blue Ocean Strategy frameworks to identify uncontested market opportunities",
      "Develop unique positioning and differentiation strategies",
      "Create a competitive advantage matrix for strategic decision-making"
    ],
    keyLearnings: [
      "Advanced competitive analysis methodologies and intelligence gathering",
      "Blue Ocean Strategy principles: Eliminate, Reduce, Raise, Create framework",
      "Market positioning strategies and competitive moats",
      "Costa Rica's competitive landscape and unique market positioning opportunities"
    ],
    morningLesson: {
      id: "3-morning",
      title: "Competitive Intelligence & Blue Ocean Mastery",
      type: "video",
      duration: "42 min",
      completed: false,
      difficulty: "intermediate",
      description: "Advanced masterclass on competitive analysis and Blue Ocean Strategy implementation. Learn intelligence gathering techniques used by top consulting firms and successful startups.",
      videoUrl: "/videos/competitive-intelligence-mastery.mp4",
      learningOutcomes: [
        "Master systematic competitive intelligence gathering",
        "Understand Blue Ocean vs. Red Ocean market dynamics",
        "Learn the ERRC (Eliminate-Reduce-Raise-Create) framework",
        "Develop sustainable competitive advantage strategies"
      ],
      actionItems: [
        "Complete competitive landscape mapping",
        "Apply ERRC framework to your opportunity",
        "Identify potential Blue Ocean spaces"
      ]
    },
    workshop: {
      id: "3-workshop",
      title: "Competitive Analysis Matrix & Blue Ocean Canvas Creation",
      type: "canvas",
      duration: "120 min",
      completed: false,
      difficulty: "advanced",
      description: "Intensive workshop creating professional-grade competitive analysis and identifying your Blue Ocean opportunity using strategic frameworks.",
      canvasId: "competitive-analysis-pro",
      learningOutcomes: [
        "Create comprehensive competitive analysis matrix",
        "Develop Blue Ocean opportunity canvas",
        "Identify unique value proposition elements",
        "Map competitive positioning strategy"
      ],
      actionItems: [
        "Complete detailed competitor profiles",
        "Execute Blue Ocean framework analysis",
        "Define unique market positioning"
      ]
    },
    tasks: [
      {
        id: "3-t1",
        title: "Research and analyze 7 direct competitors comprehensively",
        description: "Conduct deep competitive intelligence on direct competitors including business models, pricing, features, marketing strategies, customer reviews, team backgrounds, and growth trajectories.",
        type: "research",
        estimatedTime: "180 min",
        completed: false,
        priority: "critical",
        category: "business",
        tools: ["Competitive Analysis Framework", "Intelligence Gathering Toolkit", "Market Research Tools"],
        successCriteria: [
          "Profile 7+ direct competitors with detailed analysis",
          "Analyze pricing, features, and positioning strategies",
          "Identify strengths, weaknesses, and market gaps",
          "Document customer sentiment and review analysis"
        ]
      },
      {
        id: "3-t2",
        title: "Identify and evaluate 5 indirect competitors and alternative solutions",
        description: "Research indirect competitors and alternative ways customers currently solve the problem. Include manual processes, workarounds, and adjacent industry solutions.",
        type: "research",
        estimatedTime: "90 min",
        completed: false,
        priority: "high",
        category: "business",
        tools: ["Alternative Solutions Framework", "Customer Journey Analysis"],
        successCriteria: [
          "Identify 5+ indirect competitors/alternatives",
          "Analyze why customers choose these alternatives",
          "Evaluate switching costs and barriers",
          "Map customer satisfaction with current solutions"
        ]
      },
      {
        id: "3-t3",
        title: "Apply Blue Ocean Strategy framework to identify uncontested market space",
        description: "Use the Eliminate-Reduce-Raise-Create framework to identify how you can compete in uncontested market space rather than fighting in bloody red oceans.",
        type: "analysis",
        estimatedTime: "75 min",
        completed: false,
        priority: "high",
        category: "business",
        tools: ["Blue Ocean Canvas", "ERRC Framework", "Value Innovation Matrix"],
        successCriteria: [
          "Complete ERRC analysis for your opportunity",
          "Identify factors to eliminate from industry standards",
          "Define factors to raise well above industry standards",
          "Create new factors the industry has never offered"
        ],
        dependencies: ["Competitive research completion"]
      },
      {
        id: "3-t4",
        title: "Develop unique value proposition and positioning statement",
        description: "Synthesize competitive analysis and Blue Ocean insights into a clear, compelling unique value proposition that differentiates you in the market.",
        type: "creation",
        estimatedTime: "60 min",
        completed: false,
        priority: "high",
        category: "marketing",
        tools: ["Value Proposition Canvas", "Positioning Statement Template"],
        successCriteria: [
          "Create clear, compelling value proposition",
          "Develop 3-4 positioning statement variations",
          "Test positioning with target customer language",
          "Align positioning with Blue Ocean strategy"
        ],
        dependencies: ["Blue Ocean analysis", "Competitive research"]
      }
    ],
    reflection: {
      questions: [
        "What significant gaps exist in the current competitive landscape that I can exploit?",
        "How can I apply the Eliminate-Reduce-Raise-Create framework to create uncontested market space?",
        "What would make customers choose my solution over all alternatives, including doing nothing?",
        "How can I leverage Costa Rica's unique advantages to compete globally?",
        "What assumptions are competitors making that I can challenge or innovate around?"
      ],
      timeEstimate: "18 min",
      promptType: "strategic"
    },
    keyDeliverables: [
      "Comprehensive competitive analysis matrix with 7+ direct competitors",
      "Blue Ocean opportunity canvas with ERRC framework application",
      "Unique value proposition and positioning statement variations",
      "Competitive advantage strategy document with moat identification"
    ],
    resources: [
      {
        title: "Competitive Intelligence Toolkit",
        url: "/tools/competitive-intelligence",
        type: "tool",
        description: "Professional toolkit for gathering and analyzing competitive intelligence across multiple dimensions",
        estimatedTime: "60 min"
      },
      {
        title: "Blue Ocean Strategy Implementation Guide",
        url: "/guides/blue-ocean-implementation.pdf",
        type: "reading",
        description: "Step-by-step guide to implementing Blue Ocean Strategy with real case studies and frameworks",
        estimatedTime: "50 min"
      },
      {
        title: "Costa Rica Market Positioning Case Studies",
        url: "/case-studies/cr-positioning.pdf",
        type: "case_study",
        description: "Analysis of successful Costa Rican companies that created unique market positions",
        estimatedTime: "35 min"
      },
      {
        title: "Value Proposition Design Masterclass",
        url: "/videos/value-prop-design.mp4",
        type: "video",
        description: "Advanced masterclass on creating compelling value propositions that customers can't resist",
        estimatedTime: "45 min"
      }
    ],
    communityChallenge: {
      title: "Blue Ocean Innovation Challenge",
      description: "Present your Blue Ocean opportunity and unique positioning to the cohort. Vote on the most innovative market approach.",
      rewards: ["Strategy session with Blue Ocean expert", "Implementation feedback", "Investor pitch opportunity"]
    },
    expertTips: [
      "Study customer complaints about competitors - they reveal opportunities to eliminate pain points",
      "Costa Rica's bilingual workforce and cultural bridge to Latin America creates unique competitive advantages",
      "Look for factors the industry takes for granted that you can eliminate to reduce costs and complexity",
      "The best competitive advantage is not competing - create your own category where you set the rules"
    ],
    commonMistakes: [
      "Copying competitor features instead of understanding why customers value them",
      "Competing on price in red oceans instead of creating new value dimensions",
      "Underestimating the power of local market knowledge and relationships in Costa Rica",
      "Trying to be better at everything instead of being different where it matters most"
    ],
    nextDayPrep: [
      "Begin researching target customer demographics and psychographics",
      "Prepare customer avatar development materials and research sources",
      "Schedule time for detailed customer profiling work"
    ]
  }

  // ... Continue with remaining 27 days following this comprehensive structure
];

export const phaseColors = {
  Foundation: "bg-gradient-to-r from-blue-600 to-indigo-600",
  Build: "bg-gradient-to-r from-green-600 to-emerald-600", 
  Launch: "bg-gradient-to-r from-purple-600 to-violet-600"
};

export const getCurrentDay = (): number => {
  // Calculate based on program start date stored in localStorage or database
  const startDate = localStorage.getItem('programStartDate');
  if (!startDate) return 1;
  
  const start = new Date(startDate);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.min(diffDays, 30);
};

export const getDayProgress = (day: number): number => {
  // Calculate real completion percentage based on completed tasks and lessons
  const dayData = dailyCurriculum.find(d => d.day === day);
  if (!dayData) return 0;
  
  const totalItems = dayData.tasks.length + 2; // tasks + morning lesson + workshop
  const completedTasks = dayData.tasks.filter(task => task.completed).length;
  const completedLessons = (dayData.morningLesson.completed ? 1 : 0) + (dayData.workshop.completed ? 1 : 0);
  
  return Math.round((completedTasks + completedLessons) / totalItems * 100);
};

export const getWeekProgress = (week: number): number => {
  const weekDays = dailyCurriculum.filter(day => day.week === week);
  const totalProgress = weekDays.reduce((sum, day) => sum + getDayProgress(day.day), 0);
  return Math.round(totalProgress / weekDays.length);
};

export const getPhaseProgress = (phase: string): number => {
  const phaseDays = dailyCurriculum.filter(day => day.phase === phase);
  const totalProgress = phaseDays.reduce((sum, day) => sum + getDayProgress(day.day), 0);
  return Math.round(totalProgress / phaseDays.length);
};