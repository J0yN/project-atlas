import type { Category } from '@/components/home/Categories';
import type { Service } from '@/components/home/Services';
import type { AppLocale } from '@/i18n/config';
import type { TimelineEvent } from '@/components/portfolio/Timeline';

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

type WorkspaceSection<Items> = {
  eyebrow: string;
  title: string;
  items: Items;
};

export type WorkspaceContent = {
  metadata: {
    title: string;
    description: string;
  };
  languageSwitcher: {
    label: string;
    ariaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    stats: readonly WorkspaceStat[];
  };
  process: WorkspaceSection<readonly ProcessStep[]>;
  timeline: WorkspaceSection<readonly TimelineEvent[]>;
  skills: WorkspaceSection<readonly Category[]> & {
    description: string;
  };
  experience: WorkspaceSection<readonly ExperienceHighlight[]>;
  philosophy: WorkspaceSection<readonly PhilosophyPoint[]> & {
    quote: string;
    author: string;
    role: string;
  };
  services: WorkspaceSection<readonly Service[]> & {
    description: string;
  };
  faq: WorkspaceSection<readonly FAQItem[]>;
};

const workspaceContent: Record<AppLocale, WorkspaceContent> = {
  en: {
    metadata: {
      title: 'Project Atlas',
      description:
        'Project Atlas presents a localized workspace story for product delivery, strategy, and implementation.'
    },
    languageSwitcher: {
      label: 'Language',
      ariaLabel: 'Language switcher'
    },
    hero: {
      eyebrow: 'Sprint 15 · Internationalization',
      title: 'A workspace built for steady product delivery.',
      description:
        'Project Atlas now presents a focused workspace story: how work moves from discovery to release, the skills behind each engagement, and the operating philosophy that keeps teams aligned.',
      stats: [
        { id: 'process', value: '4-step', label: 'delivery process' },
        { id: 'cadence', value: 'Weekly', label: 'decision cadence' },
        {
          id: 'support',
          value: 'End-to-end',
          label: 'design to delivery coverage'
        }
      ]
    },
    process: {
      eyebrow: 'Process',
      title: 'A consistent path from ambiguity to release.',
      items: [
        {
          id: 'discover',
          title: 'Process · Discover',
          description:
            'Clarify the user problem, operating constraints, and success criteria before choosing a solution.',
          outcome: 'Shared brief, scoped backlog, and measurable goals.'
        },
        {
          id: 'shape',
          title: 'Process · Shape',
          description:
            'Turn priorities into clear flows, technical tradeoffs, and a production-minded implementation plan.',
          outcome: 'Aligned roadmap, system choices, and delivery sequence.'
        },
        {
          id: 'build',
          title: 'Process · Build',
          description:
            'Pair interaction design with engineering execution so the shipped experience matches the intent.',
          outcome:
            'Stable increments, fewer handoff gaps, and faster reviews.'
        },
        {
          id: 'learn',
          title: 'Process · Learn',
          description:
            'Review outcomes with stakeholders, fold insights back into the roadmap, and prepare the next release.',
          outcome: 'Continuous improvement grounded in evidence.'
        }
      ]
    },
    timeline: {
      eyebrow: 'Timeline',
      title: 'Structured delivery without losing momentum.',
      items: [
        {
          id: 'timeline-1',
          date: 'Week 1',
          title: 'Frame the problem',
          body:
            'Audit the current workflow, identify friction points, and define what success looks like for the team.'
        },
        {
          id: 'timeline-2',
          date: 'Week 2',
          title: 'Prototype the path',
          body:
            'Map the journey, validate assumptions, and turn concepts into implementation-ready decisions.'
        },
        {
          id: 'timeline-3',
          date: 'Weeks 3–4',
          title: 'Ship core improvements',
          body:
            'Launch the highest-leverage updates first, keeping feedback loops short and visibility high.'
        },
        {
          id: 'timeline-4',
          date: 'Ongoing',
          title: 'Measure and iterate',
          body:
            'Track what changed, compare outcomes against goals, and shape the next cycle with confidence.'
        }
      ]
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Skills',
      description:
        'Capabilities applied across discovery, delivery, and iteration to keep the workspace cohesive.',
      items: [
        { id: 'skill-systems', name: 'System design' },
        { id: 'skill-ux', name: 'UX strategy' },
        { id: 'skill-research', name: 'Research synthesis' },
        { id: 'skill-front-end', name: 'Front-end architecture' },
        { id: 'skill-content', name: 'Content design' },
        { id: 'skill-facilitation', name: 'Stakeholder facilitation' },
        { id: 'skill-prototyping', name: 'Rapid prototyping' },
        { id: 'skill-accessibility', name: 'Accessibility review' }
      ]
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Experience shaped by delivery realities.',
      items: [
        {
          id: 'experience-platform',
          title: 'Platform modernization',
          summary:
            'Restructured a fragmented product surface into a clearer, release-ready workspace with shared patterns.',
          impact:
            'Improved delivery confidence by aligning design, engineering, and product decisions in one loop.'
        },
        {
          id: 'experience-ops',
          title: 'Workflow operations',
          summary:
            'Defined the rituals, artifacts, and ownership model needed to keep multi-disciplinary work moving.',
          impact:
            'Reduced review churn and made priorities visible across stakeholders.'
        },
        {
          id: 'experience-iteration',
          title: 'Iteration planning',
          summary:
            'Translated qualitative feedback and technical constraints into sequenced improvements that teams could ship.',
          impact:
            'Created a repeatable system for learning from each release instead of resetting every sprint.'
        }
      ]
    },
    philosophy: {
      eyebrow: 'Philosophy',
      title: 'Principles that keep the workspace practical.',
      quote:
        'Good workspace design is less about adding tools and more about reducing hesitation between the next right decisions.',
      author: 'Project Atlas',
      role: 'Workspace philosophy',
      items: [
        {
          id: 'principle-clarity',
          title: 'Clarity before velocity',
          description:
            'Teams move faster when goals, tradeoffs, and ownership are legible from the start.'
        },
        {
          id: 'principle-systems',
          title: 'Systems over one-off fixes',
          description:
            'Patterns should make future work easier, not only solve today’s request.'
        },
        {
          id: 'principle-feedback',
          title: 'Feedback in the loop',
          description:
            'Every release should create better information for the next decision.'
        }
      ]
    },
    services: {
      eyebrow: 'Services',
      title: 'Services',
      description:
        'Practical support matched to the stages of work teams need to move from direction to delivery.',
      items: [
        {
          id: 'service-direction',
          title: 'Product direction',
          description:
            'Translate opportunities, constraints, and stakeholder goals into a practical delivery roadmap.'
        },
        {
          id: 'service-design',
          title: 'Experience design',
          description:
            'Design the flows, content, and interaction patterns that make the workspace feel coherent.'
        },
        {
          id: 'service-delivery',
          title: 'Implementation support',
          description:
            'Bridge planning and production with front-end collaboration, QA thinking, and release readiness.'
        }
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Common questions about the workspace approach.',
      items: [
        {
          id: 'faq-1',
          question: 'What does “workspace” mean in this sprint?',
          answer:
            'It is the operating layer of the product: the process, rituals, and interfaces that help a team move work from idea to release.'
        },
        {
          id: 'faq-2',
          question: 'Who is this workspace experience for?',
          answer:
            'Teams that need clearer handoffs between product, design, and engineering without adding unnecessary complexity.'
        },
        {
          id: 'faq-3',
          question: 'How are the services different from the process?',
          answer:
            'The process explains how work moves. Services explain the practical support available at each stage of that work.'
        },
        {
          id: 'faq-4',
          question: 'Why include philosophy on the page?',
          answer:
            'The philosophy section makes the decision-making lens explicit so visitors understand the principles behind the delivery approach.'
        }
      ]
    }
  },
  ar: {
    metadata: {
      title: 'بروجكت أطلس',
      description:
        'يقدم Project Atlas مساحة عمل مترجمة لسرد رحلة تسليم المنتج والاستراتيجية والتنفيذ.'
    },
    languageSwitcher: {
      label: 'اللغة',
      ariaLabel: 'مبدّل اللغة'
    },
    hero: {
      eyebrow: 'السبرنت 15 · التدويل',
      title: 'مساحة عمل مصممة لتسليم منتجات بثبات.',
      description:
        'يعرض Project Atlas الآن قصة مساحة عمل مركّزة توضّح كيف ينتقل العمل من الاكتشاف إلى الإطلاق، والمهارات التي تدعم كل مشاركة، والفلسفة التشغيلية التي تُبقي الفرق على توافق.',
      stats: [
        { id: 'process', value: '4 مراحل', label: 'عملية التسليم' },
        { id: 'cadence', value: 'أسبوعي', label: 'وتيرة اتخاذ القرار' },
        {
          id: 'support',
          value: 'من البداية للنهاية',
          label: 'تغطية من التصميم إلى التسليم'
        }
      ]
    },
    process: {
      eyebrow: 'العملية',
      title: 'مسار ثابت من الغموض إلى الإطلاق.',
      items: [
        {
          id: 'discover',
          title: 'العملية · الاكتشاف',
          description:
            'وضّح مشكلة المستخدم والقيود التشغيلية ومعايير النجاح قبل اختيار الحل.',
          outcome: 'ملخص مشترك وقائمة مهام محددة وأهداف قابلة للقياس.'
        },
        {
          id: 'shape',
          title: 'العملية · التشكيل',
          description:
            'حوّل الأولويات إلى تدفقات واضحة ومفاضلات تقنية وخطة تنفيذ جاهزة للإنتاج.',
          outcome: 'خارطة طريق متفق عليها وخيارات نظام وتسلسل واضح للتسليم.'
        },
        {
          id: 'build',
          title: 'العملية · البناء',
          description:
            'اربط تصميم التفاعل بالتنفيذ الهندسي حتى تطابق التجربة المطروحة النية الأصلية.',
          outcome: 'زيادات مستقرة وفجوات تسليم أقل ومراجعات أسرع.'
        },
        {
          id: 'learn',
          title: 'العملية · التعلّم',
          description:
            'راجع النتائج مع أصحاب المصلحة، وأعد إدخال التعلّمات في خارطة الطريق، وجهّز الإصدار التالي.',
          outcome: 'تحسين مستمر قائم على الأدلة.'
        }
      ]
    },
    timeline: {
      eyebrow: 'الجدول الزمني',
      title: 'تسليم منظم من دون فقدان الزخم.',
      items: [
        {
          id: 'timeline-1',
          date: 'الأسبوع 1',
          title: 'تأطير المشكلة',
          body:
            'راجع سير العمل الحالي وحدد نقاط الاحتكاك وعرّف معنى النجاح للفريق.'
        },
        {
          id: 'timeline-2',
          date: 'الأسبوع 2',
          title: 'نمذجة المسار',
          body:
            'ارسم الرحلة، واختبر الافتراضات، وحوّل المفاهيم إلى قرارات جاهزة للتنفيذ.'
        },
        {
          id: 'timeline-3',
          date: 'الأسبوعان 3–4',
          title: 'إطلاق التحسينات الأساسية',
          body:
            'أطلق التحديثات الأعلى أثرًا أولًا مع الحفاظ على دورات ملاحظات قصيرة ورؤية واضحة.'
        },
        {
          id: 'timeline-4',
          date: 'مستمر',
          title: 'القياس والتكرار',
          body:
            'تابع ما تغيّر، وقارن النتائج بالأهداف، وشكّل الدورة التالية بثقة.'
        }
      ]
    },
    skills: {
      eyebrow: 'المهارات',
      title: 'المهارات',
      description:
        'قدرات تُطبق عبر الاكتشاف والتسليم والتكرار للحفاظ على تماسك مساحة العمل.',
      items: [
        { id: 'skill-systems', name: 'تصميم الأنظمة' },
        { id: 'skill-ux', name: 'استراتيجية تجربة المستخدم' },
        { id: 'skill-research', name: 'تركيب الأبحاث' },
        { id: 'skill-front-end', name: 'هندسة الواجهات الأمامية' },
        { id: 'skill-content', name: 'تصميم المحتوى' },
        { id: 'skill-facilitation', name: 'تيسير أصحاب المصلحة' },
        { id: 'skill-prototyping', name: 'النمذجة السريعة' },
        { id: 'skill-accessibility', name: 'مراجعة إمكانية الوصول' }
      ]
    },
    experience: {
      eyebrow: 'الخبرة',
      title: 'خبرة تشكلت من واقع التسليم.',
      items: [
        {
          id: 'experience-platform',
          title: 'تحديث المنصة',
          summary:
            'أُعيد تنظيم سطح منتج متشظٍ إلى مساحة عمل أوضح وجاهزة للإطلاق بأنماط مشتركة.',
          impact:
            'زاد وضوح التسليم عبر مواءمة قرارات التصميم والهندسة والمنتج ضمن حلقة واحدة.'
        },
        {
          id: 'experience-ops',
          title: 'تشغيل سير العمل',
          summary:
            'تم تحديد الطقوس والمخرجات ونموذج الملكية اللازم للحفاظ على حركة العمل متعدد التخصصات.',
          impact:
            'انخفضت فوضى المراجعات وأصبحت الأولويات أكثر وضوحًا بين أصحاب المصلحة.'
        },
        {
          id: 'experience-iteration',
          title: 'تخطيط التكرار',
          summary:
            'تُرجمت الملاحظات النوعية والقيود التقنية إلى تحسينات متسلسلة يمكن للفرق شحنها.',
          impact:
            'أُنشئ نظام قابل للتكرار للتعلم من كل إصدار بدل البدء من الصفر كل مرة.'
        }
      ]
    },
    philosophy: {
      eyebrow: 'الفلسفة',
      title: 'مبادئ تجعل مساحة العمل عملية.',
      quote:
        'تصميم مساحة العمل الجيد لا يتعلق بإضافة أدوات أكثر، بل بتقليل التردد قبل القرار الصحيح التالي.',
      author: 'Project Atlas',
      role: 'فلسفة مساحة العمل',
      items: [
        {
          id: 'principle-clarity',
          title: 'الوضوح قبل السرعة',
          description:
            'تتحرك الفرق أسرع عندما تكون الأهداف والمفاضلات والملكية واضحة منذ البداية.'
        },
        {
          id: 'principle-systems',
          title: 'الأنظمة بدل الإصلاحات المؤقتة',
          description:
            'يجب أن تجعل الأنماط العمل المستقبلي أسهل، لا أن تحل طلب اليوم فقط.'
        },
        {
          id: 'principle-feedback',
          title: 'إبقاء الملاحظات داخل الحلقة',
          description:
            'يجب أن يولّد كل إصدار معلومات أفضل تدعم القرار التالي.'
        }
      ]
    },
    services: {
      eyebrow: 'الخدمات',
      title: 'الخدمات',
      description:
        'دعم عملي يتوافق مع مراحل العمل التي تحتاجها الفرق للانتقال من الاتجاه إلى التسليم.',
      items: [
        {
          id: 'service-direction',
          title: 'اتجاه المنتج',
          description:
            'حوّل الفرص والقيود وأهداف أصحاب المصلحة إلى خارطة طريق عملية للتسليم.'
        },
        {
          id: 'service-design',
          title: 'تصميم التجربة',
          description:
            'صمّم التدفقات والمحتوى وأنماط التفاعل التي تجعل مساحة العمل متماسكة.'
        },
        {
          id: 'service-delivery',
          title: 'دعم التنفيذ',
          description:
            'اربط التخطيط بالإنتاج عبر التعاون في الواجهة الأمامية والتفكير في الجودة وجاهزية الإطلاق.'
        }
      ]
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة متكررة حول نهج مساحة العمل.',
      items: [
        {
          id: 'faq-1',
          question: 'ماذا تعني “مساحة العمل” في هذا السبرنت؟',
          answer:
            'إنها الطبقة التشغيلية للمنتج: العملية والطقوس والواجهات التي تساعد الفريق على نقل العمل من الفكرة إلى الإطلاق.'
        },
        {
          id: 'faq-2',
          question: 'لمن صُممت تجربة مساحة العمل هذه؟',
          answer:
            'للفرق التي تحتاج إلى تسليمات أوضح بين المنتج والتصميم والهندسة من دون إضافة تعقيد غير ضروري.'
        },
        {
          id: 'faq-3',
          question: 'كيف تختلف الخدمات عن العملية؟',
          answer:
            'تشرح العملية كيف يتحرك العمل. أما الخدمات فتوضح نوع الدعم العملي المتاح في كل مرحلة.'
        },
        {
          id: 'faq-4',
          question: 'لماذا تضمين الفلسفة في الصفحة؟',
          answer:
            'قسم الفلسفة يجعل منظور اتخاذ القرار واضحًا حتى يفهم الزوار المبادئ التي تقف خلف نهج التسليم.'
        }
      ]
    }
  }
};

export function getWorkspaceContent(locale: AppLocale): WorkspaceContent {
  return workspaceContent[locale];
}
