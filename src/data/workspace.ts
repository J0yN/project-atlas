import type { Category } from '@/components/home/Categories';
import type { Service } from '@/components/home/Services';
import type { TimelineEvent } from '@/components/portfolio/Timeline';
import type { QuoteBlockProps } from '@/components/portfolio/QuoteBlock';

export type WorkspaceStat = {
  id: string;
  value: string;
  label: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  outcome: string;
};

export type ExperienceHighlight = {
  id: string;
  title: string;
  summary: string;
  impact: string;
};

export type PhilosophyPoint = {
  id: string;
  title: string;
  description: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type WorkspaceContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    stats: readonly WorkspaceStat[];
  };
  process: readonly ProcessStep[];
  timeline: readonly TimelineEvent[];
  skills: readonly Category[];
  experience: readonly ExperienceHighlight[];
  philosophy: QuoteBlockProps & {
    principles: readonly PhilosophyPoint[];
  };
  services: readonly Service[];
  faq: readonly FAQItem[];
};

export const workspaceContent: WorkspaceContent = {
  hero: {
    eyebrow: 'Sprint 11 · Workspace',
    title: 'A workspace built for steady product delivery.',
    description:
      'Project Atlas now presents a focused workspace story: how work moves from discovery to release, the skills behind each engagement, and the operating philosophy that keeps teams aligned.',
    stats: [
      { id: 'process', value: '4-step', label: 'delivery process' },
      { id: 'cadence', value: 'Weekly', label: 'decision cadence' },
      { id: 'support', value: 'End-to-end', label: 'design to delivery coverage' }
    ]
  },
  process: [
    {
      id: 'discover',
      title: 'Process · Discover',
      description: 'Clarify the user problem, operating constraints, and success criteria before choosing a solution.',
      outcome: 'Shared brief, scoped backlog, and measurable goals.'
    },
    {
      id: 'shape',
      title: 'Process · Shape',
      description: 'Turn priorities into clear flows, technical tradeoffs, and a production-minded implementation plan.',
      outcome: 'Aligned roadmap, system choices, and delivery sequence.'
    },
    {
      id: 'build',
      title: 'Process · Build',
      description: 'Pair interaction design with engineering execution so the shipped experience matches the intent.',
      outcome: 'Stable increments, fewer handoff gaps, and faster reviews.'
    },
    {
      id: 'learn',
      title: 'Process · Learn',
      description: 'Review outcomes with stakeholders, fold insights back into the roadmap, and prepare the next release.',
      outcome: 'Continuous improvement grounded in evidence.'
    }
  ],
  timeline: [
    {
      id: 'timeline-1',
      date: 'Week 1',
      title: 'Frame the problem',
      body: 'Audit the current workflow, identify friction points, and define what success looks like for the team.'
    },
    {
      id: 'timeline-2',
      date: 'Week 2',
      title: 'Prototype the path',
      body: 'Map the journey, validate assumptions, and turn concepts into implementation-ready decisions.'
    },
    {
      id: 'timeline-3',
      date: 'Weeks 3–4',
      title: 'Ship core improvements',
      body: 'Launch the highest-leverage updates first, keeping feedback loops short and visibility high.'
    },
    {
      id: 'timeline-4',
      date: 'Ongoing',
      title: 'Measure and iterate',
      body: 'Track what changed, compare outcomes against goals, and shape the next cycle with confidence.'
    }
  ],
  skills: [
    { id: 'skill-systems', name: 'System design' },
    { id: 'skill-ux', name: 'UX strategy' },
    { id: 'skill-research', name: 'Research synthesis' },
    { id: 'skill-front-end', name: 'Front-end architecture' },
    { id: 'skill-content', name: 'Content design' },
    { id: 'skill-facilitation', name: 'Stakeholder facilitation' },
    { id: 'skill-prototyping', name: 'Rapid prototyping' },
    { id: 'skill-accessibility', name: 'Accessibility review' }
  ],
  experience: [
    {
      id: 'experience-platform',
      title: 'Platform modernization',
      summary: 'Restructured a fragmented product surface into a clearer, release-ready workspace with shared patterns.',
      impact: 'Improved delivery confidence by aligning design, engineering, and product decisions in one loop.'
    },
    {
      id: 'experience-ops',
      title: 'Workflow operations',
      summary: 'Defined the rituals, artifacts, and ownership model needed to keep multi-disciplinary work moving.',
      impact: 'Reduced review churn and made priorities visible across stakeholders.'
    },
    {
      id: 'experience-iteration',
      title: 'Iteration planning',
      summary: 'Translated qualitative feedback and technical constraints into sequenced improvements that teams could ship.',
      impact: 'Created a repeatable system for learning from each release instead of resetting every sprint.'
    }
  ],
  philosophy: {
    quote: 'Good workspace design is less about adding tools and more about reducing hesitation between the next right decisions.',
    author: 'Project Atlas',
    role: 'Workspace philosophy',
    principles: [
      {
        id: 'principle-clarity',
        title: 'Clarity before velocity',
        description: 'Teams move faster when goals, tradeoffs, and ownership are legible from the start.'
      },
      {
        id: 'principle-systems',
        title: 'Systems over one-off fixes',
        description: 'Patterns should make future work easier, not only solve today’s request.'
      },
      {
        id: 'principle-feedback',
        title: 'Feedback in the loop',
        description: 'Every release should create better information for the next decision.'
      }
    ]
  },
  services: [
    {
      id: 'service-direction',
      title: 'Product direction',
      description: 'Translate opportunities, constraints, and stakeholder goals into a practical delivery roadmap.'
    },
    {
      id: 'service-design',
      title: 'Experience design',
      description: 'Design the flows, content, and interaction patterns that make the workspace feel coherent.'
    },
    {
      id: 'service-delivery',
      title: 'Implementation support',
      description: 'Bridge planning and production with front-end collaboration, QA thinking, and release readiness.'
    }
  ],
  faq: [
    {
      id: 'faq-1',
      question: 'What does “workspace” mean in this sprint?',
      answer: 'It is the operating layer of the product: the process, rituals, and interfaces that help a team move work from idea to release.'
    },
    {
      id: 'faq-2',
      question: 'Who is this workspace experience for?',
      answer: 'Teams that need clearer handoffs between product, design, and engineering without adding unnecessary complexity.'
    },
    {
      id: 'faq-3',
      question: 'How are the services different from the process?',
      answer: 'The process explains how work moves. Services explain the practical support available at each stage of that work.'
    },
    {
      id: 'faq-4',
      question: 'Why include philosophy on the page?',
      answer: 'The philosophy section makes the decision-making lens explicit so visitors understand the principles behind the delivery approach.'
    }
  ]
};
