import { WorksheetSection } from '@/components/enhanced/WorksheetBuilder';

export const worksheetDefinitions: Record<string, {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  learningObjectives: string[];
  sections: WorksheetSection[];
}> = {
  'opportunity-discovery-pro': {
    title: 'Professional Opportunity Discovery Worksheet',
    description: 'Comprehensive framework for identifying and evaluating business opportunities using proven methodologies',
    difficulty: 'beginner',
    estimatedTime: '90 minutes',
    learningObjectives: [
      'Master systematic opportunity identification techniques',
      'Apply evaluation frameworks to assess opportunity potential',
      'Understand market context and competitive dynamics',
      'Create actionable opportunity assessment reports'
    ],
    sections: [
      {
        id: 'personal-assessment',
        title: 'Personal Foundation Assessment',
        description: 'Understand your strengths, interests, and entrepreneurial readiness',
        timeEstimate: '20 minutes',
        learningObjectives: [
          'Identify personal strengths and competencies',
          'Clarify entrepreneurial motivations and goals',
          'Assess risk tolerance and resource availability'
        ],
        questions: [
          {
            id: 'strengths-analysis',
            type: 'checklist',
            question: 'Select your top 5 professional strengths and competencies:',
            description: 'Choose the skills where you excel compared to most people',
            required: true,
            checklistItems: [
              'Strategic thinking and planning',
              'Sales and persuasion',
              'Technical/engineering skills',
              'Creative problem solving',
              'Financial analysis and management',
              'Leadership and team building',
              'Marketing and communications',
              'Operations and process optimization',
              'Customer relationship management',
              'Product development and design',
              'Data analysis and insights',
              'Project management',
              'Networking and relationship building',
              'Teaching and knowledge transfer',
              'Innovation and idea generation'
            ],
            hint: 'Think about what colleagues, friends, and mentors consistently praise you for'
          },
          {
            id: 'entrepreneurial-motivation',
            type: 'textarea',
            question: 'Why do you want to become an entrepreneur?',
            description: 'Be specific about your motivations, both professional and personal',
            required: true,
            placeholder: 'Describe your core motivations for pursuing entrepreneurship...',
            validation: {
              minLength: 100,
              maxLength: 500
            },
            hint: 'Strong motivations include: solving meaningful problems, financial independence, creative control, making an impact, building something lasting'
          },
          {
            id: 'risk-tolerance',
            type: 'scale',
            question: 'How comfortable are you with business and financial risk?',
            description: 'Rate your comfort level with uncertainty and potential losses',
            required: true,
            scaleMin: 1,
            scaleMax: 10,
            scaleLabels: ['Very risk-averse', 'Very risk-tolerant'],
            hint: 'Most successful entrepreneurs rate themselves 6-8 on this scale'
          },
          {
            id: 'available-resources',
            type: 'checklist',
            question: 'What resources do you currently have available for your business?',
            description: 'Check all that apply to your current situation',
            required: true,
            checklistItems: [
              'Personal savings ($5,000+)',
              'Access to investment capital',
              'Professional network in target industry',
              'Technical skills for product development',
              'Marketing and sales experience',
              'Industry expertise and knowledge',
              'Time availability (20+ hours/week)',
              'Supportive family/friends',
              'Existing business relationships',
              'Legal and financial advisory access'
            ]
          }
        ]
      },
      {
        id: 'opportunity-identification',
        title: 'Opportunity Identification & Research',
        description: 'Systematically identify and document potential business opportunities',
        timeEstimate: '35 minutes',
        learningObjectives: [
          'Apply opportunity spotting frameworks',
          'Document problems and market gaps',
          'Research market size and trends',
          'Identify potential customer segments'
        ],
        questions: [
          {
            id: 'problem-inventory',
            type: 'textarea',
            question: 'List 10+ problems you or people around you have experienced recently:',
            description: 'Include personal frustrations, inefficiencies, and unmet needs',
            required: true,
            placeholder: '1. Problem description and context...\n2. Another problem...',
            validation: {
              minLength: 200,
              maxLength: 1000
            },
            hint: 'Think about daily frustrations at work, home, shopping, travel, health, finance, education, etc.'
          },
          {
            id: 'market-trends',
            type: 'textarea',
            question: 'What major trends do you see affecting Costa Rica and your areas of interest?',
            description: 'Consider technology, social, economic, environmental, and cultural trends',
            required: true,
            placeholder: 'Describe trends you\'ve observed and their potential business implications...',
            validation: {
              minLength: 150,
              maxLength: 500
            },
            hint: 'Examples: digital transformation, remote work adoption, sustainability focus, demographic changes, regulatory shifts'
          },
          {
            id: 'opportunity-areas',
            type: 'checklist',
            question: 'Which opportunity areas most interest you?',
            description: 'Select 3-5 areas where you see potential for business creation',
            required: true,
            checklistItems: [
              'B2B Software/SaaS solutions',
              'E-commerce and marketplace platforms',
              'FinTech and financial services',
              'HealthTech and wellness solutions',
              'EdTech and online learning',
              'Sustainable/green technology',
              'AgTech and food innovation',
              'Tourism and hospitality tech',
              'Logistics and supply chain',
              'Professional services',
              'Creative and media services',
              'Manufacturing and physical products',
              'Real estate and proptech',
              'Gaming and entertainment'
            ]
          },
          {
            id: 'target-customers',
            type: 'textarea',
            question: 'Describe your potential target customers for your top opportunity:',
            description: 'Be specific about demographics, behaviors, and characteristics',
            required: true,
            placeholder: 'Describe who would benefit most from solving this problem...',
            validation: {
              minLength: 100,
              maxLength: 400
            },
            hint: 'Consider: age, location, income, profession, company size, pain points, current behavior patterns'
          }
        ]
      },
      {
        id: 'opportunity-evaluation',
        title: 'Opportunity Evaluation & Prioritization',
        description: 'Apply evaluation frameworks to assess and rank your opportunities',
        timeEstimate: '35 minutes',
        learningObjectives: [
          'Use systematic evaluation criteria',
          'Assess market potential and competition',
          'Evaluate personal fit and capability',
          'Create prioritized opportunity rankings'
        ],
        questions: [
          {
            id: 'top-opportunities',
            type: 'ranking',
            question: 'Rank your top 5 business opportunities from most to least promising:',
            description: 'Consider market size, personal fit, competition, and execution difficulty',
            required: true,
            options: [
              'Write a brief description for each opportunity you want to rank'
            ],
            hint: 'Use criteria like: market size, growth potential, competition level, your expertise, resource requirements, time to market'
          },
          {
            id: 'market-size-assessment',
            type: 'multiple-choice',
            question: 'What is your estimated total addressable market (TAM) for your #1 opportunity?',
            description: 'Choose the range that best represents the total market size',
            required: true,
            options: [
              'Under $10 million (niche market)',
              '$10-100 million (small market)',
              '$100 million - $1 billion (medium market)',
              '$1-10 billion (large market)',
              'Over $10 billion (massive market)',
              'Unknown - need more research'
            ],
            hint: 'TAM = Total Addressable Market. Research similar companies, industry reports, and government data for estimates'
          },
          {
            id: 'competition-analysis',
            type: 'textarea',
            question: 'Describe the competitive landscape for your top opportunity:',
            description: 'Include direct competitors, indirect alternatives, and market gaps',
            required: true,
            placeholder: 'List competitors and analyze their strengths/weaknesses...',
            validation: {
              minLength: 150,
              maxLength: 500
            },
            hint: 'Consider: established companies, startups, DIY solutions, manual processes, substitute products'
          },
          {
            id: 'differentiation-strategy',
            type: 'textarea',
            question: 'How would your solution be different from and better than existing alternatives?',
            description: 'Describe your unique value proposition and competitive advantages',
            required: true,
            placeholder: 'Explain what makes your approach unique and superior...',
            validation: {
              minLength: 100,
              maxLength: 400
            },
            hint: 'Focus on: faster, cheaper, easier, more effective, better experience, unserved segments, new technology'
          },
          {
            id: 'execution-confidence',
            type: 'scale',
            question: 'How confident are you in your ability to execute this opportunity?',
            description: 'Consider your skills, resources, network, and market knowledge',
            required: true,
            scaleMin: 1,
            scaleMax: 10,
            scaleLabels: ['No confidence', 'Extremely confident'],
            hint: 'Factor in: relevant experience, available time, financial resources, industry connections, technical skills'
          }
        ]
      }
    ]
  },
  'pain-point-research-pro': {
    title: 'Professional Customer Pain Point Research',
    description: 'Systematic approach to discovering, validating, and prioritizing customer pain points',
    difficulty: 'intermediate',
    estimatedTime: '105 minutes',
    learningObjectives: [
      'Master customer pain point discovery methodologies',
      'Conduct effective customer research interviews',
      'Analyze and prioritize pain points systematically',
      'Create evidence-based problem validation reports'
    ],
    sections: [
      {
        id: 'research-planning',
        title: 'Research Planning & Methodology',
        description: 'Plan your customer research approach and methodology',
        timeEstimate: '25 minutes',
        questions: [
          {
            id: 'research-objectives',
            type: 'checklist',
            question: 'What are your primary research objectives?',
            description: 'Select all objectives that apply to your research goals',
            required: true,
            checklistItems: [
              'Validate specific pain points exist',
              'Understand pain point frequency and intensity',
              'Discover unknown problems and frustrations',
              'Learn how customers currently solve problems',
              'Assess willingness to pay for solutions',
              'Identify decision-making processes',
              'Understand customer priorities and constraints',
              'Map the customer journey and touchpoints'
            ]
          },
          {
            id: 'target-research-segments',
            type: 'textarea',
            question: 'Describe your target customer segments for research:',
            description: 'Be specific about demographics, roles, and characteristics',
            required: true,
            placeholder: 'Segment 1: Description...\nSegment 2: Description...',
            validation: {
              minLength: 100,
              maxLength: 400
            }
          }
        ]
      },
      {
        id: 'interview-execution',
        title: 'Customer Interview Data Collection',
        description: 'Document findings from your customer discovery interviews',
        timeEstimate: '40 minutes',
        questions: [
          {
            id: 'interview-summaries',
            type: 'textarea',
            question: 'Provide detailed summaries of your customer interviews:',
            description: 'Include key insights, quotes, and pain points from each interview',
            required: true,
            placeholder: 'Interview 1 Summary:\nCustomer profile: ...\nKey pain points: ...\nCurrent solutions: ...\nQuotes: ...\n\n',
            validation: {
              minLength: 300,
              maxLength: 1500
            },
            hint: 'Include customer demographics, specific pain points mentioned, current solutions tried, emotional reactions, and exact quotes'
          },
          {
            id: 'pain-point-patterns',
            type: 'textarea',
            question: 'What patterns do you see across multiple customer interviews?',
            description: 'Identify common themes, repeated problems, and consistent feedback',
            required: true,
            placeholder: 'Pattern 1: Commonly mentioned across X interviews...\nPattern 2: ...',
            validation: {
              minLength: 150,
              maxLength: 600
            }
          }
        ]
      },
      {
        id: 'pain-analysis',
        title: 'Pain Point Analysis & Prioritization',
        description: 'Analyze and prioritize discovered pain points using systematic frameworks',
        timeEstimate: '40 minutes',
        questions: [
          {
            id: 'validated-pain-points',
            type: 'textarea',
            question: 'List your top 5 validated pain points with evidence:',
            description: 'Include frequency, intensity, and customer quotes as evidence',
            required: true,
            placeholder: 'Pain Point 1:\nDescription: ...\nFrequency: ...\nIntensity: ...\nEvidence: ...\n\n',
            validation: {
              minLength: 250,
              maxLength: 1000
            }
          },
          {
            id: 'pain-prioritization',
            type: 'multiple-choice',
            question: 'Which pain point scores highest on frequency + intensity + willingness to pay?',
            description: 'Select the pain point with the best combination of these factors',
            required: true,
            options: [
              'Pain Point 1 from your list above',
              'Pain Point 2 from your list above', 
              'Pain Point 3 from your list above',
              'Pain Point 4 from your list above',
              'Pain Point 5 from your list above'
            ]
          },
          {
            id: 'solution-landscape',
            type: 'textarea',
            question: 'How do customers currently attempt to solve your top pain point?',
            description: 'Include existing solutions, workarounds, and why they fail',
            required: true,
            placeholder: 'Current Solution 1: Description and why it fails...\nCurrent Solution 2: ...',
            validation: {
              minLength: 150,
              maxLength: 500
            }
          }
        ]
      }
    ]
  },
  'competitive-analysis': {
    title: 'Comprehensive Competitive Analysis Worksheet',
    description: 'Professional framework for analyzing competitors and identifying market opportunities',
    difficulty: 'advanced',
    estimatedTime: '120 minutes',
    learningObjectives: [
      'Conduct systematic competitive intelligence gathering',
      'Apply Blue Ocean Strategy frameworks',
      'Identify competitive gaps and opportunities',
      'Develop unique positioning strategies'
    ],
    sections: [
      {
        id: 'competitor-identification',
        title: 'Competitor Identification & Mapping',
        description: 'Identify and categorize your competitive landscape',
        timeEstimate: '30 minutes',
        questions: [
          {
            id: 'direct-competitors',
            type: 'textarea',
            question: 'List and describe your direct competitors:',
            description: 'Companies solving the same problem for the same customers',
            required: true,
            placeholder: 'Competitor 1: Company name, description, target market...\nCompetitor 2: ...',
            validation: {
              minLength: 200,
              maxLength: 800
            }
          },
          {
            id: 'indirect-competitors',
            type: 'textarea',
            question: 'List indirect competitors and alternative solutions:',
            description: 'Different approaches to solving the same customer problem',
            required: true,
            placeholder: 'Alternative 1: Description and how customers use it...\nAlternative 2: ...',
            validation: {
              minLength: 150,
              maxLength: 600
            }
          }
        ]
      },
      {
        id: 'competitive-analysis-matrix',
        title: 'Detailed Competitive Analysis',
        description: 'Analyze competitors across key dimensions',
        timeEstimate: '50 minutes',
        questions: [
          {
            id: 'competitor-strengths-weaknesses',
            type: 'textarea',
            question: 'Analyze the strengths and weaknesses of your top 3 competitors:',
            description: 'Include business model, features, pricing, marketing, and customer feedback',
            required: true,
            placeholder: 'Competitor 1:\nStrengths: ...\nWeaknesses: ...\nPricing: ...\nCustomer sentiment: ...\n\n',
            validation: {
              minLength: 300,
              maxLength: 1200
            }
          },
          {
            id: 'market-gaps',
            type: 'textarea',
            question: 'What gaps or opportunities do you see in the competitive landscape?',
            description: 'Identify unserved customer segments, missing features, or poor experiences',
            required: true,
            placeholder: 'Gap 1: Description and opportunity...\nGap 2: ...',
            validation: {
              minLength: 150,
              maxLength: 500
            }
          }
        ]
      },
      {
        id: 'blue-ocean-strategy',
        title: 'Blue Ocean Strategy Analysis',
        description: 'Apply Blue Ocean framework to identify uncontested market space',
        timeEstimate: '40 minutes',
        questions: [
          {
            id: 'eliminate-factors',
            type: 'textarea',
            question: 'What factors can you eliminate that the industry takes for granted?',
            description: 'Industry standard features or practices that add cost but little value',
            required: true,
            placeholder: 'Factor 1: What to eliminate and why...\nFactor 2: ...',
            validation: {
              minLength: 100,
              maxLength: 400
            }
          },
          {
            id: 'reduce-factors',
            type: 'textarea',
            question: 'What factors should be reduced well below industry standard?',
            description: 'Areas where the industry over-serves relative to customer needs',
            required: true,
            placeholder: 'Factor 1: What to reduce and why...\nFactor 2: ...',
            validation: {
              minLength: 100,
              maxLength: 400
            }
          },
          {
            id: 'raise-factors',
            type: 'textarea',
            question: 'What factors should be raised well above industry standard?',
            description: 'Areas where you can dramatically exceed customer expectations',
            required: true,
            placeholder: 'Factor 1: What to raise and why...\nFactor 2: ...',
            validation: {
              minLength: 100,
              maxLength: 400
            }
          },
          {
            id: 'create-factors',
            type: 'textarea',
            question: 'What new factors can you create that the industry has never offered?',
            description: 'Completely new value propositions or approaches',
            required: true,
            placeholder: 'Factor 1: What to create and why...\nFactor 2: ...',
            validation: {
              minLength: 100,
              maxLength: 400
            }
          }
        ]
      }
    ]
  }
};