import { Course, Project, BlogPost, Service, ServiceQuote, CourseRegistration, InternshipApplication, Enquiry } from '../types';

export const initialServices: Service[] = [
  {
    id: 'srv-1',
    iconName: 'Code',
    titleEn: 'Custom Enterprise Software',
    titleAr: 'تطوير البرمجيات المؤسسية المخصصة',
    descriptionEn: 'High-performance web applications, microservices architecture, and scalable backends built with React, Node.js, Go, and PostgreSQL.',
    descriptionAr: 'منصات ويب عالية الأداء، وبنية خدمات مصغرة، وقواعد بيانات متطورة باستخدام React و Node.js و Go و PostgreSQL.',
    featuresEn: ['Microservices Architecture', 'High Concurrency REST & gRPC APIs', 'Automated Unit & Integration Testing', 'Enterprise RBAC & Security'],
    featuresAr: ['معمارية الخدمات المصغرة', 'واجهات برمجية عالية الاستجابة REST و gRPC', 'اختبارات برمجية شاملة وتلقائية', 'أمان وصلاحيات مؤسسية متقدمة'],
    category: 'engineering'
  },
  {
    id: 'srv-2',
    iconName: 'BrainCircuit',
    titleEn: 'AI & Machine Learning Integration',
    titleAr: 'حلول الذكاء الاصطناعي وتعلّم الآلة',
    descriptionEn: 'Custom LLM fine-tuning, RAG enterprise search engines, computer vision automation, and predictive data pipelines.',
    descriptionAr: 'تخصيص نماذج اللغات الضخمة (LLMs)، ومحركات البحث الذكية للشركات (RAG)، والرؤية الحاسوبية، والتحليلات التنبؤية.',
    featuresEn: ['Custom RAG Knowledge Bases', 'LLM Agentic Automation', 'Predictive Analytics Models', 'Computer Vision & OCR Systems'],
    featuresAr: ['قواعد معرفية ذكية (RAG)', 'أتمتة الوكلاء الأذكياء (Agents)', 'نماذج التحليل التنبؤي', 'أنظمة الرؤية الحاسوبية والتعرف على النصوص'],
    category: 'ai'
  },
  {
    id: 'srv-3',
    iconName: 'ShieldCheck',
    titleEn: 'Cybersecurity & Code Auditing',
    titleAr: 'الأمن السيبراني وتدقيق الكود',
    descriptionEn: 'End-to-end vulnerability assessments, penetration testing, source code security review, and ISO/NCA compliance readiness.',
    descriptionAr: 'تقييم الثغرات الشامل، واختبارات الاختراق، وتدقيق أمان الكود المصدري، والجاهزية للامتثال لمعايير الهيئة الوطنية للأمن السيبراني.',
    featuresEn: ['Penetration Testing & SAST/DAST', 'Zero-Trust Security Architecture', 'DevSecOps Pipeline Integration', 'Compliance & Risk Reporting'],
    featuresAr: ['اختبارات الاختراق والتدقيق الآلي', 'معمارية أمان عدم الثقة', 'دمج الأمان في خطوط الإطلاق DevSecOps', 'تقارير الامتثال والمخاطر السيبرانية'],
    category: 'cybersecurity'
  },
  {
    id: 'srv-4',
    iconName: 'Smartphone',
    titleEn: 'Mobile App Engineering',
    titleAr: 'هندسة تطبيقات الجوال',
    descriptionEn: 'Sleek, fluid iOS and Android mobile applications crafted using Flutter and React Native with native plugin integration.',
    descriptionAr: 'تطبيقات جوال سريعة وسلسة لنظامي iOS و Android يتم تطويرها باستخدام Flutter و React Native مع ربط ملحقات النظام.',
    featuresEn: ['Native Level Performance', 'Offline-First Data Syncing', 'Biometric Auth & Secure Enclaves', 'Real-Time Push Notifications'],
    featuresAr: ['أداء يعادل التطبيقات الأصلية', 'مزامنة البيانات بدون إنترنت', 'المصادقة البيومترية وتشفير البيانات', 'إشعارات فورية وتنبيهات حية'],
    category: 'mobile'
  },
  {
    id: 'srv-5',
    iconName: 'Cloud',
    titleEn: 'Cloud Infrastructure & DevOps',
    titleAr: 'الحوسبة السحابية وأتمتة DevOps',
    descriptionEn: 'Kubernetes cluster setup, AWS/GCP multi-region architecture, Terraform Infrastructure as Code, and zero-downtime CI/CD.',
    descriptionAr: 'إعداد عنقودية Kubernetes، وبنية سحابية متعددة المناطق على AWS/GCP، وإدارة البنية التحتية ككود Terraform.',
    featuresEn: ['Automated CI/CD Pipelines', 'Kubernetes Cluster Management', 'Terraform & IaC Automation', '24/7 Monitoring & APM Setup'],
    featuresAr: ['أتمتة خطوط الإطلاق المستمرة', 'إدارة عناقيد Kubernetes', 'أتمتة البنية التحتية ككود', 'مراقبة الأداء والتشغيل على مدار الساعة'],
    category: 'cloud'
  },
  {
    id: 'srv-6',
    iconName: 'Palette',
    titleEn: 'UI/UX & Product Design System',
    titleAr: 'تصميم الواجهات وأنظمة المنتجات UI/UX',
    descriptionEn: 'Data-driven user research, interactive wireframing, high-converting design systems, and responsive component libraries.',
    descriptionAr: 'أبحاث مستخدم مستندة للبيانات، نماذج أولية تفاعلية، نظام تصميم مرن ومتناسق لرفع معدلات التحويل وتجربة الاستخدام.',
    featuresEn: ['User Journey & Heuristic Audit', 'Figma Design System Tokenization', 'Interactive Prototype Testing', 'WCAG Accessibility Standards'],
    featuresAr: ['دراسة رحلة المستفيد وتدقيق التجربة', 'بناء مكتبة عناصر Figma متكاملة', 'اختبار النماذج التفاعلية الحية', 'مطابقة معايير إمكانية الوصول WCAG'],
    category: 'design'
  }
];

export const initialCourses: Course[] = [
  {
    id: 'crs-1',
    titleEn: 'Full-Stack Web Architecture & Engineering',
    titleAr: 'معسكر معمارية وتطوير الويب المتكامل (Full-Stack)',
    category: 'web',
    descriptionEn: 'Master modern full-stack web development with React 19, TypeScript, Node.js, Next.js, GraphQL, PostgreSQL, and cloud deployment.',
    descriptionAr: 'احتراف تطوير الويب المتكامل باستخدام React 19 و TypeScript و Node.js و Next.js و PostgreSQL مع النشر السحابي.',
    duration: '12 Weeks',
    level: 'Intermediate',
    levelAr: 'متوسط إلى متقدم',
    price: 1499,
    currency: 'USD',
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    scheduleEn: 'Sundays & Tuesdays (6:00 PM - 9:00 PM AST)',
    scheduleAr: 'الأحد والثلاثاء (6:00 مساءً - 9:00 مساءً بتوقيت مكة)',
    syllabusEn: [
      'Week 1-2: Modern TypeScript & ESNext Design Patterns',
      'Week 3-4: Advanced React 19, State Management & Custom Hooks',
      'Week 5-6: Server Architecture with Express & NestJS',
      'Week 7-8: Database Engineering with PostgreSQL & Prisma/Drizzle',
      'Week 9-10: Microservices, Caching with Redis & System Design',
      'Week 11-12: Capstone Enterprise Project & Docker Deployment'
    ],
    syllabusAr: [
      'الأسبوع 1-2: إتقان TypeScript وأنماط التكوين البرمجي الحديثة',
      'الأسبوع 3-4: تقنيات React 19 المتقدمة وإدارة الحالة',
      'الأسبوع 5-6: بناء السيرفرات باستخدام Express و NestJS',
      'الأسبوع 7-8: هندسة قواعد البيانات PostgreSQL وأدوات ORM',
      'الأسبوع 9-10: تصميم الأنظمة الموزعة والخدمات المصغرة والذاكرة المؤقتة',
      'الأسبوع 11-12: مشروع التخرج المؤسسي وتدشين الحاويات Docker'
    ],
    featuresEn: [
      '120+ Hours of Live Interactive Coding',
      'Production Codebase Reviews by Senior Engineers',
      'Career Prep, Portfolio Defense & CV Support',
      'Official CypherDevs Certified Diploma'
    ],
    featuresAr: [
      'أكثر من 120 ساعة تدريبية تفاعلية مباشرة',
      'مراجعة كود المشاريع من قبل كبار المهندسين',
      'إعداد السيرة الذاتية والمحفظة التقنية وجلسات المقابلات',
      'شهادة معتمدة من أكاديمية سيفرديفز'
    ],
    active: true
  },
  {
    id: 'crs-2',
    titleEn: 'Defensive & Offensive Cybersecurity Bootcamp',
    titleAr: 'معسكر الأمن السيبراني الدفاعي والهجومي',
    category: 'cybersecurity',
    descriptionEn: 'Comprehensive cyber defense, ethical hacking, SOC monitoring, penetration testing, network packet analysis, and incident response.',
    descriptionAr: 'برنامج شامل للأمن السيبراني، الاختراق الأخلاقي، مراقبة مراكز العمليات (SOC)، واختبارات الاختراق والاستجابة للحوادث.',
    duration: '10 Weeks',
    level: 'Intermediate',
    levelAr: 'متوسط',
    price: 1699,
    currency: 'USD',
    rating: 4.95,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    scheduleEn: 'Mondays & Wednesdays (7:00 PM - 10:00 PM AST)',
    scheduleAr: 'الإثنين والأربعاء (7:00 مساءً - 10:00 مساءً بتوقيت مكة)',
    syllabusEn: [
      'Week 1-2: Networking Fundamentals, Linux Hardening & Protocol Security',
      'Week 3-4: Vulnerability Scanning, Metasploit & Web App Exploitation',
      'Week 5-6: Reverse Engineering & Malware Analysis Basics',
      'Week 7-8: SOC Operations, SIEM Configuration & Threat Hunting',
      'Week 9-10: Red Team vs Blue Team Live Simulation'
    ],
    syllabusAr: [
      'الأسبوع 1-2: أساسيات شبكات الاتصال وتأمين أنظمة Linux',
      'الأسبوع 3-4: فحص الثغرات واختبار تطبيقات الويب Metasploit',
      'الأسبوع 5-6: الهندسة العكسية وتحليل البرمجيات الخبيثة',
      'الأسبوع 7-8: عمليات مركز SOC وإدارة أنظمة SIEM',
      'الأسبوع 9-10: محاكاة الفريق الأحمر ضد الفريق الأزرق'
    ],
    featuresEn: [
      'Access to Cyber Range Hands-On Labs',
      'Real-World Vulnerability Exploitation Exercises',
      'Preparation for CEH & CompTIA Security+ Exams',
      'Certificate of Practical Mastery'
    ],
    featuresAr: [
      'وصول كامل للمختبرات السيبرانية والتطبيقات الحية',
      'تمارين اختبار الثغرات الحقيقية في بيئة آمنة',
      'إعداد للاختبارات العالمية CEH و CompTIA Security+',
      'شهادة احترافية معتمدة'
    ],
    active: true
  },
  {
    id: 'crs-3',
    titleEn: 'Applied AI & Data Science Engineering',
    titleAr: 'معسكر الذكاء الاصطناعي التطبيقي وهندسة البيانات',
    category: 'ai',
    descriptionEn: 'Build intelligent applications using Python, PyTorch, OpenAI APIs, Gemini 2.5, LangChain, vector databases, and RAG pipelines.',
    descriptionAr: 'بناء تطبيقات ذكية متقدمة باستعمال Python و PyTorch ورابط Gemini 2.5 ونماذج اللغات وقواعد البيانات المتجهة.',
    duration: '10 Weeks',
    level: 'Intermediate',
    levelAr: 'متوسط',
    price: 1599,
    currency: 'USD',
    rating: 4.88,
    reviewsCount: 116,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    scheduleEn: 'Saturdays & Thursdays (5:00 PM - 8:00 PM AST)',
    scheduleAr: 'السبت والخميس (5:00 مساءً - 8:00 مساءً بتوقيت مكة)',
    syllabusEn: [
      'Week 1-2: Advanced Python, Pandas & Machine Learning Math',
      'Week 3-4: Supervised & Unsupervised Learning with Scikit-Learn',
      'Week 5-6: Deep Learning & Computer Vision with PyTorch',
      'Week 7-8: Generative AI, Prompt Engineering & Vector DBs (Pinecone/Qdrant)',
      'Week 9-10: Building Autonomous AI Agents & Production API Deployment'
    ],
    syllabusAr: [
      'الأسبوع 1-2: بايثون المتقدمة وتحليل البيانات والرياضيات المالية',
      'الأسبوع 3-4: الخوارزميات التعليمية الموجهة وغير الموجهة',
      'الأسبوع 5-6: التعلم العميق والرؤية الحاسوبية مع PyTorch',
      'الأسبوع 7-8: الذكاء الاصطناعي التوليدي والقواعد المتجهة',
      'الأسبوع 9-10: بناء وكلاء الذكاء الاصطناعي المستقلين وتدشين النماذج'
    ],
    featuresEn: [
      'Build 4 End-to-End AI Products for Portfolio',
      'Free Cloud GPU Credits for Neural Network Training',
      'Mentorship from Senior Data Scientists',
      'Industry-Recognized Certification'
    ],
    featuresAr: [
      'بناء 4 مشاريع ذكاء اصطناعي متكاملة للمحفظة المهنية',
      'رصيد سحابي لمعالجات GPU لتدريب الشبكات العصبية',
      'إرشاد من كبار علماء البيانات والتكيف مع متطلبات السوق',
      'شهادة تخرج معتمدة'
    ],
    active: true
  },
  {
    id: 'crs-4',
    titleEn: 'Cross-Platform Mobile Architecture (Flutter & RN)',
    titleAr: 'دبلوم تطوير تطبيقات الجوال (Flutter & React Native)',
    category: 'mobile',
    descriptionEn: 'Create production-grade mobile applications with state management (Riverpod/Redux), native plugins, push messaging, and App Store publishing.',
    descriptionAr: 'إنشاء تطبيقات جوال احترافية مع إدارة الحالة وإرسال الإشعارات وتكامل الدفع الإلكتروني ونشر التطبيقات على المتاجر.',
    duration: '8 Weeks',
    level: 'Beginner',
    levelAr: 'مبتدئ إلى متوسط',
    price: 1299,
    currency: 'USD',
    rating: 4.85,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    scheduleEn: 'Mondays & Thursdays (6:00 PM - 9:00 PM AST)',
    scheduleAr: 'الإثنين والخميس (6:00 مساءً - 9:00 مساءً بتوقيت مكة)',
    syllabusEn: [
      'Week 1-2: Dart & Flutter UI Components / React Native Basics',
      'Week 3-4: State Management Patterns & Architecture',
      'Week 5-6: REST APIs, GraphQL & SQLite Local Database',
      'Week 7-8: In-App Purchases, Auth & Publishing to App Store / Google Play'
    ],
    syllabusAr: [
      'الأسبوع 1-2: لغة Dart وواجهات Flutter وتطوير React Native',
      'الأسبوع 3-4: أنماط إدارة الحالة والمعمارية النظيفة',
      'الأسبوع 5-6: الربط مع الواجهات البرمجية وقواعد البيانات المحلية',
      'الأسبوع 7-8: خدمات المشتريات والمصادقة ونشر التطبيق على App Store و Google Play'
    ],
    featuresEn: [
      'Publish 2 Live Apps to App Stores',
      'UI Design Component Kit Included',
      'Mock App Store Review Guidance',
      'Official Certificate of Completion'
    ],
    featuresAr: [
      'نشر تطبيقين حيّين على المتاجر العالمية',
      'حزمة مكونات واجهات جاهزة ومجانية',
      'توجيه كامل لإجراءات مراجعة المتاجر الرسمية',
      'شهادة تخرج معتمدة'
    ],
    active: true
  },
  {
    id: 'crs-5',
    titleEn: 'Cloud-Native DevOps & Kubernetes Architecture',
    titleAr: 'معسكر مهندس DevOps والحوسبة السحابية (Kubernetes)',
    category: 'cloud',
    descriptionEn: 'Learn Docker, Kubernetes, Helm, Terraform, Prometheus/Grafana, and GitOps workflows to automate modern enterprise infrastructure.',
    descriptionAr: 'تعلم Docker و Kubernetes و Terraform ومراقبة الأنظمة وأتمتة خطوط الإطلاق المستمر لبناء بنية سحابية مرنة.',
    duration: '8 Weeks',
    level: 'Advanced',
    levelAr: 'متقدم',
    price: 1399,
    currency: 'USD',
    rating: 4.92,
    reviewsCount: 79,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    scheduleEn: 'Sundays & Wednesdays (7:00 PM - 10:00 PM AST)',
    scheduleAr: 'الأحد والأربعاء (7:00 مساءً - 10:00 مساءً بتوقيت مكة)',
    syllabusEn: [
      'Week 1-2: Containerization Fundamentals with Docker & Multi-Stage Builds',
      'Week 3-4: Kubernetes Clustering, Pods, Deployments & Ingress Controllers',
      'Week 5-6: Infrastructure as Code with Terraform & Ansible',
      'Week 7-8: GitOps Automation with ArgoCD & Observability'
    ],
    syllabusAr: [
      'الأسبوع 1-2: أساسيات الحاويات وتحسين صور Docker',
      'الأسبوع 3-4: إشعال عناقيد Kubernetes وإدارة الشبكات الداخليّة',
      'الأسبوع 5-6: أتمتة البنية التحتية باستخدام Terraform و Ansible',
      'الأسبوع 7-8: أتمتة GitOps بـ ArgoCD ومراقبة الأداء'
    ],
    featuresEn: [
      'Real Multi-Node Cloud Lab Environments',
      'Prepare for CKA (Certified Kubernetes Administrator)',
      'Enterprise Deployment Projects',
      'Certified DevOps Specialist Award'
    ],
    featuresAr: [
      'مختبرات سحابية متعددة العقد متوفرة 24/7',
      'تحضير كامل لاختبار CKA العالمي المعتمد',
      'مشاريع إطلاق حية للشركات الكبرى',
      'شهادة أخصائي DevOps معتمدة'
    ],
    active: true
  }
];

export const initialProjects: Project[] = [
  {
    id: 'prj-1',
    titleEn: 'Sovereign Financial Gateway & Open Banking Engine',
    titleAr: 'بوابة المدفوعات والمصرفية المفتوحة السيادية',
    category: 'fintech',
    client: 'Saudi Financial Tech Group',
    descriptionEn: 'Built a multi-region open banking gateway compliant with SAMA specifications, handling 40,000 requests per second with microsecond latency.',
    descriptionAr: 'بناء بوابة مصرفية مفتوحة متعددة المناطق متوافقة مع اشتراطات البنك المركزي، تستوعب 40 ألف طلب بالثانية وبسرعة فائقة.',
    techStack: ['Go (Golang)', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'React'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { labelEn: 'Peak Throughput', labelAr: 'سعة المعالجة القسوى', value: '40K TPS' },
      { labelEn: 'Uptime Reliability', labelAr: 'معدل الجاهزية والاستقرار', value: '99.999%' },
      { labelEn: 'API Latency', labelAr: 'زمن استجابة الواجهة', value: '< 18ms' }
    ],
    demoUrl: 'https://cypherdevs.com/case-studies/fintech-gateway',
    fullCaseStudyEn: 'CypherDevs engineered a high-concurrency transaction pipeline using Go microservices and Apache Kafka. The architecture incorporates HSM encryption, zero-trust tokenization, and active-active multi-datacenter failover.',
    fullCaseStudyAr: 'صممت سيفرديفز مسار معالجة عمليات مالية متوازية باستخدام خدمات Go المصغرة وتقنية Apache Kafka مع تشفير التجزئة المتقدم وغرف البيئات متعددة الخوادم ضماناً للاستمرارية.'
  },
  {
    id: 'prj-2',
    titleEn: 'AI Diagnostics & Radiography Processing Platform',
    titleAr: 'منصة التشخيص الطبي بالذكاء الاصطناعي ومعالجة الأشعة',
    category: 'healthcare',
    client: 'Middle East Healthcare Alliance',
    descriptionEn: 'Deployed a HIPAA-compliant computer vision AI platform that analyzes CT scans and X-rays in real-time with 97.8% diagnostic precision.',
    descriptionAr: 'منصة ذكاء اصطناعي برؤية حاسوبية تتوافق مع معايير HIPAA لتحليل الأشعة المقطعية والأشعة السينية فورياً بدقة تشخيصية تصل إلى 97.8%.',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'React', 'Docker', 'AWS Medical S3'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { labelEn: 'Diagnostic Accuracy', labelAr: 'دقة التشخيص الطبي', value: '97.8%' },
      { labelEn: 'Scan Processing Time', labelAr: 'زمن تحليل الأشعة', value: '1.2 sec' },
      { labelEn: 'Hospitals Deployed', labelAr: 'المستشفيات المعتمدة', value: '24+' }
    ],
    demoUrl: 'https://cypherdevs.com/case-studies/ai-healthcare',
    fullCaseStudyEn: 'Integrating PyTorch deep learning models into clinical workflows allowed radiologists to cut review time by 60% while detecting early-stage pulmonary abnormalities.',
    fullCaseStudyAr: 'دمج نماذج التعلم العميق في مسارات عمل أطباء الأشعة أدى لخفض وقت القراءة بنسبة 60٪ مع اكتشاف التغيرات النسيجية المبكرة بدقة عالية.'
  },
  {
    id: 'prj-3',
    titleEn: 'Omnichannel B2B Commerce & Inventory Automation',
    titleAr: 'منصة التجارة الإلكترونية للمؤسسات وأتمتة المخازن',
    category: 'ecommerce',
    client: 'Global Logistics & Retail Corp',
    descriptionEn: 'Transformed traditional B2B retail operations into a cloud-native platform featuring live inventory sync, dynamic pricing, and automated invoicing.',
    descriptionAr: 'تحويل العمليات التجارية التقليدية إلى منصة سحابية ذكية تمتاز بالمزامنة اللحظية للمخزون والتسعير الديناميكي والفواتير الآلية.',
    techStack: ['Next.js', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Elasticsearch', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { labelEn: 'GMV Processed', labelAr: 'إجمالي القيمة المعالجة', value: '$85M+' },
      { labelEn: 'Order Speed Up', labelAr: 'تسريع معالجة الطلبات', value: '4.5x' },
      { labelEn: 'Cart Conversion', labelAr: 'زيادة إتمام الشراء', value: '+34%' }
    ],
    demoUrl: 'https://cypherdevs.com/case-studies/b2b-commerce',
    fullCaseStudyEn: 'Built on Next.js App Router and Elasticsearch, the platform allows wholesalers to query over 500,000 SKUs with sub-second response times and automated SAP ERP sync.',
    fullCaseStudyAr: 'تم بناء المنصة باستخدام Next.js و Elasticsearch للبحث التلقائي بين أكثر من 500 ألف منتج مع الربط اللحظي بنظام SAP.'
  },
  {
    id: 'prj-4',
    titleEn: 'Enterprise DevSecOps & Security Penetration Defense',
    titleAr: 'تأهيل الأمن السيبراني واختبار الاختراق للمنشآت الكبرى',
    category: 'cybersecurity',
    client: 'National Logistics Infrastructure Authority',
    descriptionEn: 'Executed a complete cyber audit, closed 142 potential threat vectors, and built an automated DevSecOps CI/CD pipeline.',
    descriptionAr: 'تنفيذ تدقيق سيبراني شامل، وإغلاق 142 ثغرة محتملة، وإنشاء خطوط إطلاق برمجية آمنة ومؤتمتة بالكامل.',
    techStack: ['Burp Suite', 'SonarQube', 'Terraform', 'Vault', 'Kubernetes', 'Python Security'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { labelEn: 'Vulnerabilities Mitigated', labelAr: 'الثغرات المعالجة', value: '142' },
      { labelEn: 'Compliance Score', labelAr: 'معدل الامتثال لمعايير NCA', value: '100%' },
      { labelEn: 'Audit Completion', labelAr: 'سرعة انجاز التدقيق', value: '3 Weeks' }
    ],
    demoUrl: 'https://cypherdevs.com/case-studies/cyber-defense',
    fullCaseStudyEn: 'CypherDevs cybersecurity engineers performed black-box and white-box testing, establishing strict secret management with HashiCorp Vault and mandatory automated security scanning.',
    fullCaseStudyAr: 'أجرى مهندسو الأمن السيبراني اختراقات شاملة للمنظومة، مع تفعيل أنظمة التشفير وحماية البيانات الحساسة عبر HashiCorp Vault.'
  }
];

export const initialBlogs: BlogPost[] = [
  {
    id: 'blg-1',
    titleEn: 'Building Resilient Microservices with Go and Kubernetes in 2026',
    titleAr: 'بناء الخدمات المصغرة المرنة باستخدام لغة Go و Kubernetes',
    category: 'Architecture',
    excerptEn: 'Explore how modern Go microservices paired with Kubernetes operators deliver unmatched reliability and low cloud operational costs.',
    excerptAr: 'استكشف كيف تساهم خدمات لغة Go المصغرة وعناقيد Kubernetes في تقديم كفاءة عالية واستقرار مطلق مع خفض تكاليف السحابة.',
    contentEn: `As software systems scale to handle millions of concurrent users, monolithic architectures often reach their structural bottlenecks. 

### Why Go for Enterprise Backends?
Go (Golang) has solidified its position as the premier language for cloud-native infrastructure. With lightweight goroutines consuming just 2KB of memory per thread, a single Go microservice container can comfortably serve tens of thousands of requests per second.

### Kubernetes Operator Pattern
By creating custom Kubernetes Operators, developers can extend K8s APIs to automate complex operational tasks:
- Automated database schema migrations upon deployment
- Self-healing stateful sets
- Dynamic horizontal pod autoscaling based on custom metrics like queue depth

### Architecture Best Practices
1. **Clean Architecture Boundaries**: Decouple domain logic from transport protocols (gRPC/HTTP).
2. **Circuit Breakers**: Implement resilience patterns with tools like Resilience4j or Go-kit.
3. **Structured Observability**: Export Prometheus metrics and OpenTelemetry traces for every RPC call.`,
    contentAr: `مع توسع الأنظمة البرمجية لتصل لخدمة ملايين المستفيدين في وقت واحد، تبدأ المعماريات القديمة بمواجهة الاختناقات في الأداء.

### لماذا نفضل لغة Go في الأنظمة السحابية؟
تتميز لغة Go بكفاءتها العالية واستجابتها البرمجية الفائقة، حيث تستهلك المعالجات البرمجية البسيطة (Goroutines) مساحة طفيفة جداً من الذاكرة، مما يسمح بحمل آلاف الطلبات في الثنائية الواحدة.

### نمط Kubernetes Operators
تتيح أدوات التحكم المخصصة في Kubernetes أتمتة مهام التشغيل المعقدة مثل:
- أتمتة التحديثات لقواعد البيانات فور التدشين.
- الإصلاح الذاتي للأنظمة المتوقفة.
- التوسع التلقائي بناءً على حجم الطلبات الحقيقية.`,
    author: 'Eng. Tariq Al-Mansoor',
    authorRole: 'Chief Technology Officer @ CypherDevs',
    date: 'August 2, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
    tags: ['Go', 'Kubernetes', 'Microservices', 'Backend Architecture']
  },
  {
    id: 'blg-2',
    titleEn: 'Zero-Trust Security & DevSecOps Implementation Guide',
    titleAr: 'دليل تطبيق أمان عدم الثقة (Zero-Trust) في خطوط الإطلاق DevSecOps',
    category: 'Cybersecurity',
    excerptEn: 'Learn how to incorporate continuous security scanning into your CI/CD pipelines without slowing down engineering release velocity.',
    excerptAr: 'تعلم كيفية دمج فحص الثغرات المستمر في خطوط الترقية والتطوير البرمجي دون التضحية بمسار سرعة الإنجاز.',
    contentEn: `Traditional perimeter-based security models are no longer sufficient in an era of distributed teams and multi-cloud environments. Zero-Trust mandates: "Never Trust, Always Verify."

### Key Pillars of DevSecOps Integration
1. **Shift Left Security**: Catch vulnerabilities during initial code commits using Static Application Security Testing (SAST).
2. **Secrets Management**: Eliminate hardcoded passwords by injecting short-lived tokens via Vault.
3. **Container Image Signing**: Enforce Cosign signatures so only verified containers run on production clusters.`,
    contentAr: `لم تعد أنظمة الحماية التقليدية القائمة على الجدران النارية كافية في عصر الخدمات السحابية المتعددة وفرق العمل الموزعة. يرتكز مفهوم عدم الثقة (Zero-Trust) على مبدأ: "لا تضع ثقة مطلقاً، وتحقق دائماً".

### ركائز دمج الأمن البرمجي DevSecOps
1. **فحص الكود المبكر (Shift Left)**: اكتشاف الثغرات في المراحل الأولى لتأليف الكود.
2. **إدارة المفاتيح التلقائية**: التخلص من كلمات المرور المكتوبة يدوياً باستخدام التشفير اللحظي.
3. **توقيع صور الحاويات**: ضمان عدم تشغيل أي تطبيق إلا بعد التوقيع الإلكتروني وتأكيد الأمان.`,
    author: 'Dr. Sarah Al-Hassan',
    authorRole: 'Principal Security Researcher',
    date: 'July 28, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tags: ['Cybersecurity', 'DevSecOps', 'Zero-Trust', 'AppSec']
  },
  {
    id: 'blg-3',
    titleEn: 'Enterprise RAG Architectures with Gemini 2.5 & Vector DBs',
    titleAr: 'معمارية البحث المعزز (RAG) للمؤسسات باستخدام Gemini 2.5 والقواعد المتجهة',
    category: 'Artificial Intelligence',
    excerptEn: 'How to construct secure, private Retrieval-Augmented Generation engines for enterprise document repositories.',
    excerptAr: 'كيفية بناء محركات بحث وتوليد نصوص ذكية آمنة ومخصصة للمستندات المؤسسية الكبرى.',
    contentEn: `Retrieval-Augmented Generation (RAG) is the gold standard for connecting Large Language Models to internal enterprise databases without hallucination risks.

By combining Gemini 2.5's massive context processing with high-performance vector databases like Qdrant or Pinecone, organizations can create conversational agents capable of answering complex compliance, legal, or technical queries instantly.`,
    contentAr: `يعتبر نمط (RAG) المعيار الذهبي لربط نماذج الذكاء الاصطناعي مع قواعد البيانات الخاصة بالشركات مع تجنب المخاطر وحماية الخصوصية.

من خلال الدمج بين نموذج Gemini 2.5 وسرعة قواعد البيانات المتجهة، تستطيع المنظمات استرجاع المعلومات الدقيقة فورياً من آلاف المستندات واللوائح الداخلية.`,
    author: 'Faisal Al-Otaibi',
    authorRole: 'Lead AI & Machine Learning Architect',
    date: 'July 19, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Gemini 2.5', 'RAG', 'Vector DB', 'Machine Learning']
  }
];

export const initialEnquiries: Enquiry[] = [
  {
    id: 'enq-101',
    name: 'Khaled Al-Subaie',
    email: 'k.subaie@technovations.com',
    phone: '+966 50 123 4567',
    subject: 'Enterprise Cloud Migration & AI Integration Proposal',
    category: 'Enterprise Development',
    message: 'We are looking to migrate our legacy monolith into AWS microservices and integrate custom AI document parsing.',
    status: 'In Progress',
    createdAt: '2026-08-01 14:20'
  },
  {
    id: 'enq-102',
    name: 'Noura Al-Ghamdi',
    email: 'noura@fintechstart.sa',
    phone: '+966 54 987 6543',
    subject: 'Cybersecurity Penetration Test Quote',
    category: 'Enterprise Development',
    message: 'Requesting a quote for a complete web & mobile application security audit prior to launching our Fintech product.',
    status: 'Unread',
    createdAt: '2026-08-03 09:15'
  }
];

export const initialRegistrations: CourseRegistration[] = [
  {
    id: 'reg-201',
    registrationCode: 'CYP-REG-8821',
    studentName: 'Omar Al-Zahrani',
    email: 'omar.zahrani@gmail.com',
    phone: '+966 55 444 3322',
    courseId: 'crs-1',
    courseTitle: 'Full-Stack Web Architecture & Engineering',
    cohortDate: 'September 2026 Cohort',
    paymentMode: 'Card',
    status: 'Confirmed',
    createdAt: '2026-08-02 11:30'
  },
  {
    id: 'reg-202',
    registrationCode: 'CYP-REG-9410',
    studentName: 'Reem Al-Mutairi',
    email: 'reem.m@outlook.com',
    phone: '+966 56 111 2233',
    courseId: 'crs-2',
    courseTitle: 'Defensive & Offensive Cybersecurity Bootcamp',
    cohortDate: 'September 2026 Cohort',
    paymentMode: 'Installments',
    status: 'Pending',
    createdAt: '2026-08-04 16:45'
  }
];

export const initialQuotes: ServiceQuote[] = [
  {
    id: 'qte-301',
    clientName: 'Sultan Al-Dossary',
    email: 'sultan@retailnexus.com',
    phone: '+971 50 888 7766',
    companyName: 'RetailNexus Logistics',
    serviceCategory: 'Custom Enterprise Software',
    projectBudget: '$25,000 - $50,000',
    timeline: '3 - 4 Months',
    projectDetails: 'We need an automated warehouse logistics web portal with live GPS driver tracking and customer SMS updates.',
    status: 'Under Review',
    createdAt: '2026-08-03 18:10'
  }
];

export const initialInternships: InternshipApplication[] = [
  {
    id: 'int-401',
    fullName: 'Youssef Al-Harthy',
    email: 'youssef.harthy@ksu.edu.sa',
    phone: '+966 59 777 8899',
    track: 'Frontend',
    experienceLevel: 'Recent Graduate',
    portfolioUrl: 'https://youssef-harthy.dev',
    githubUrl: 'https://github.com/yharthy',
    whyCypherDevs: 'I want to hone my React & TypeScript skills on production codebases under senior engineers at CypherDevs.',
    cvFileName: 'Youssef_Harthy_CV.pdf',
    status: 'Screening',
    createdAt: '2026-08-04 10:05'
  }
];
