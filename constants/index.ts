// DesignDot Website Constants

export const NAVIGATION_LINKS = [
  {
    label: "Expertise",
    hasMegaMenu: true,
    megaMenuType: "expertise",
  },
  {
    label: "AI Ingenuity",
    hasMegaMenu: true,
    megaMenuType: "ai",
  },
  {
    label: "Design Build",
    href: "https://dd.mocup.in/services/design-build",
    hasMegaMenu: false,
  },
  {
    label: "Technology",
    hasMegaMenu: true,
    megaMenuType: "technology",
  },
  {
    label: "Corporate",
    hasMegaMenu: true,
    megaMenuType: "corporate",
  },
  {
    label: "Contact Us",
    href: "https://dd.mocup.in/contact-us",
    hasMegaMenu: false,
  },
];

export const ENGAGEMENT_MODELS = [
  {
    title: "DEDICATED TEAMS OF DEVELOPERS",
    description: "Hire developers who are committed to your project.",
    icon: "Dedicated",
  },
  {
    title: "OUTSOURCE YOUR WORK",
    description: "Get a solution that is tailored to your needs.",
    icon: "Outsource",
  },
  {
    title: "STAFF AUGMENTATION",
    description: "Close the talent gap on your internal staff.",
    icon: "staf",
  },
];

export const EXPERTISE_CATEGORIES = [
  { id: "engineering", label: "ENGINEERING" },
  { id: "web-ecommerce", label: "WEB & Ecommerce" },
  { id: "mobile-app", label: "MOBILE App" },
  { id: "expt-cloud", label: "CLOUD SERVICES" },
  { id: "brand-dev", label: "BRAND DEVELOPMENT" },
  { id: "media-advertising", label: "MEDIA ADVERTISING" },
  { id: "digital-marketing", label: "DIGITAL MARKETING" },
  { id: "digital-transformation", label: "Digital Transformation" },
  { id: "emerging-technologies", label: "EMERGING TECHNOLOGIES" },
  { id: "it-support", label: "QUALITY & SUPPORT" },
  { id: "solution", label: "SOLUTIONS" },
];

export const EXPERTISE_SUBMENUS: Record<string, { title: string; links: { label: string; href: string }[] }[]> = {
  engineering: [
    {
      title: "ENGINEERING",
      links: [
        { label: "Software Engineering & Consulting", href: "https://dd.mocup.in/services/software-engineering-consulting" },
        { label: "Enterprise Software Development", href: "https://dd.mocup.in/services/enterprise-software-development" },
        { label: "CRM Software Development", href: "https://dd.mocup.in/services/crm-software-development" },
        { label: "SAAS", href: "https://dd.mocup.in/services/saas" },
        { label: "E-Learning Application", href: "https://dd.mocup.in/services/e-learning" },
        { label: "Software Development Outsourcing", href: "https://dd.mocup.in/services/software-development-outsourcing" },
        { label: "Offshore Software Development", href: "https://dd.mocup.in/services/offshore-software-development" },
        { label: "Big Data Analytics", href: "https://dd.mocup.in/services/big-data-analytics" },
        { label: "ERP Development", href: "https://dd.mocup.in/services/erp-development" },
        { label: "Application Modernization Services", href: "https://dd.mocup.in/services/application-modernization-services" },
        { label: "API Development", href: "https://dd.mocup.in/services/api-development" },
        { label: "AI in Software", href: "https://dd.mocup.in/services/ai-in-software" },
      ],
    },
  ],
  "web-ecommerce": [
    {
      title: "WEB & Ecommerce",
      links: [
        { label: "Web Portal Development", href: "https://dd.mocup.in/services/web-portal-development" },
        { label: "Ecommerce App Development", href: "https://dd.mocup.in/services/ecommerce-app-development" },
        { label: "CRM for Ecommerce", href: "https://dd.mocup.in/services/crm-for-ecommerce" },
        { label: "BigCommerce Development", href: "https://dd.mocup.in/services/bigcommerce-development" },
        { label: "Full Stack Development", href: "https://dd.mocup.in/services/full-stack-development" },
        { label: "UI UX Design", href: "https://dd.mocup.in/services/ui-and-ux-design" },
        { label: "Frontend Development", href: "https://dd.mocup.in/services/frontend-development" },
        { label: "Backend Development", href: "https://dd.mocup.in/services/backend-development" },
        { label: "MVP Development", href: "https://dd.mocup.in/services/mvp-development" },
      ],
    },
  ],
  "mobile-app": [
    {
      title: "MOBILE App",
      links: [
        { label: "Mobile Apps Development", href: "https://dd.mocup.in/services/mobile-apps-development" },
        { label: "Android App Development", href: "https://dd.mocup.in/services/android-development" },
        { label: "iOS/iPadOS Apps Development", href: "https://dd.mocup.in/services/iOS-development" },
        { label: "React Native App Development", href: "https://dd.mocup.in/services/react-native-development" },
        { label: "Flutter App Development", href: "https://dd.mocup.in/services/flutter-app-development" },
        { label: "Progressive Web Apps", href: "https://dd.mocup.in/services/progressive-web-apps" },
        { label: "Game Development", href: "https://dd.mocup.in/services/game-development" },
        { label: "AI In all Mobile Apps", href: "https://dd.mocup.in/services/ai-in-all-mobileapp" },
      ],
    },
  ],
  "brand-dev": [
    {
      title: "BRAND DEVELOPMENT",
      links: [
        { label: "Corporate Brand Identity & Strategy", href: "https://dd.mocup.in/services/brand-strategy" },
        { label: "Signage Design", href: "https://dd.mocup.in/services/signage-design" },
        { label: "Product & Packaging Design", href: "https://dd.mocup.in/services/product-design" },
        { label: "Brand Reimagination", href: "https://dd.mocup.in/services/brand-reimagination" },
        { label: "Stationary Design", href: "https://dd.mocup.in/services/stationary-design" },
        { label: "Photography", href: "https://dd.mocup.in/services/photography" },
        { label: "Campaign Design", href: "https://dd.mocup.in/services/campaign-design" },
        { label: "Hoarding Design", href: "https://dd.mocup.in/services/hoarding-design" },
        { label: "Totem Design", href: "https://dd.mocup.in/services/totem-design" },
      ],
    },
  ],
  "media-advertising": [
    {
      title: "MEDIA ADVERTISING",
      links: [
        { label: "Visual Identity", href: "https://dd.mocup.in/services/visual-identity" },
        { label: "Public Relations", href: "https://dd.mocup.in/services/public-relations" },
        { label: "Outdoor Advertising", href: "https://dd.mocup.in/services/outdoor-advertising" },
        { label: "Media Planning & Buying", href: "https://dd.mocup.in/services/media-planning-and-buying" },
        { label: "Corporate Communication", href: "https://dd.mocup.in/services/corporate-communication" },
        { label: "Content Strategy", href: "https://dd.mocup.in/services/content-strategy" },
        { label: "Market Research & Consumer Study", href: "https://dd.mocup.in/services/market-research" },
        { label: "Illustration / Sketch Design", href: "https://dd.mocup.in/services/sketch-story-building" },
        { label: "Motion & Video Creation", href: "https://dd.mocup.in/services/motion-design" },
      ],
    },
  ],
  "digital-marketing": [
    {
      title: "DIGITAL MARKETING",
      links: [
        { label: "Search Engine Optimization", href: "https://dd.mocup.in/services/sketch-story-building" },
        { label: "Paid Advertising", href: "https://dd.mocup.in/services/paid-advertising" },
        { label: "Social Media Marketing", href: "https://dd.mocup.in/services/social-media-marketing" },
        { label: "Specialized eCommerce SEO", href: "https://dd.mocup.in/services/specialized-ecommerce-seo" },
        { label: "Content Marketing", href: "https://dd.mocup.in/services/content-writing" },
        { label: "Conversion Rate Optimization", href: "https://dd.mocup.in/services/conversion-rate-optimization" },
        { label: "Mobile Advertising", href: "https://dd.mocup.in/services/mobile-advertising" },
        { label: "Brand Management", href: "https://dd.mocup.in/services/brand-management" },
        { label: "Influencer Marketing", href: "https://dd.mocup.in/services/influencer-marketing" },
        { label: "Internet Advertising", href: "https://dd.mocup.in/services/internet-advertising" },
      ],
    },
  ],
  "digital-transformation": [
    {
      title: "Digital Transformation",
      links: [
        { label: "Internet of Things", href: "https://dd.mocup.in/services/internet-of-things" },
        { label: "Wearable App Development", href: "https://dd.mocup.in/services/wearable-app-development" },
        { label: "Enterprise Solutions", href: "https://dd.mocup.in/services/enterprise-solutions" },
        { label: "IT Consulting", href: "https://dd.mocup.in/services/it-consulting" },
        { label: "Software Consulting", href: "https://dd.mocup.in/services/software-consulting" },
        { label: "Enterprise Mobility Services", href: "https://dd.mocup.in/services/enterprise-mobility-services" },
        { label: "AI Marketplace Engine", href: "https://dd.mocup.in/services/ai-marketplace-engine" },
        { label: "Digital Product Engineering", href: "https://dd.mocup.in/services/digital-product-engineering" },
      ],
    },
  ],
  "emerging-technologies": [
    {
      title: "EMERGING TECHNOLOGIES",
      links: [
        { label: "AI Chatbot Development", href: "https://dd.mocup.in/services/ai-chatbot-development" },
        { label: "AR/VR Development", href: "https://dd.mocup.in/services/ar-vr-development" },
        { label: "Encrypted Video Streaming", href: "https://dd.mocup.in/services/encrypted-video-streaming" },
        { label: "iBeacon App Development", href: "https://dd.mocup.in/services/ibeacon-app-development" },
        { label: "iWatch App Development", href: "https://dd.mocup.in/services/iwatch-app-development" },
        { label: "Blockchain", href: "https://dd.mocup.in/services/blockchain-application-development" },
        { label: "dApps Development", href: "https://dd.mocup.in/services/dapps-development" },
        { label: "NFT Marketplace", href: "https://dd.mocup.in/services/NFT-marketplace" },
        { label: "Metaverse", href: "https://dd.mocup.in/services/metaverse" },
        { label: "Cryptocurrency Wallet", href: "https://dd.mocup.in/services/cryptocurrency-wallet" },
      ],
    },
  ],
  "expt-cloud": [
    {
      title: "CLOUD SERVICES",
      links: [
        { label: "DevOps", href: "https://dd.mocup.in/services/devops" },
        { label: "Amazon Web Services", href: "https://dd.mocup.in/services/amazon-web-service" },
        { label: "Azure Cloud Service", href: "https://dd.mocup.in/services/azure-cloud-service" },
        { label: "Google App Engine Services", href: "https://dd.mocup.in/services/google-app-engine-service" },
        { label: "Office 365", href: "https://dd.mocup.in/services/office-365" },
        { label: "Cloud Migration & Modernization", href: "https://dd.mocup.in/services/cloud-migration-modernization" },
        { label: "Cloud Architecture Review", href: "https://dd.mocup.in/services/cloud-architecture-review" },
        { label: "Cloud Consulting", href: "https://dd.mocup.in/services/cloud-consulting" },
        { label: "Gen AI", href: "https://dd.mocup.in/services/gen-ai" },
        { label: "Security & Compliance", href: "https://dd.mocup.in/services/security-compliance" },
        { label: "Cybersecurity", href: "https://dd.mocup.in/services/cybersecurity" },
      ],
    },
  ],
  "it-support": [
    {
      title: "QUALITY & SUPPORT",
      links: [
        { label: "Quality Assurance Testing", href: "https://dd.mocup.in/services/devops" },
        { label: "Support", href: "https://dd.mocup.in/services/amazon-web-service" },
      ],
    },
  ],
  solution: [
    {
      title: "SOLUTIONS",
      links: [
        { label: "Enterprise solution", href: "https://dd.mocup.in/services/enterprise-solutions" },
        { label: "Business Intelligence", href: "https://dd.mocup.in/services/business-intelligence" },
        { label: "Portal/Portlet development", href: "https://dd.mocup.in/services/portal-development" },
        { label: "CMS", href: "https://dd.mocup.in/services/cms" },
        { label: "CRM application", href: "https://dd.mocup.in/services/crm-application" },
        { label: "E-commerce application", href: "https://dd.mocup.in/services/ecommerce-application" },
        { label: "Point of sales application", href: "https://dd.mocup.in/services/pos-application" },
        { label: "HRM application", href: "https://dd.mocup.in/services/hrm-application" },
        { label: "Mobile application solution", href: "https://dd.mocup.in/services/mobile-application-solution" },
        { label: "ERP on demand designing solution", href: "https://dd.mocup.in/services/erp-designing-solution" },
        { label: "Ecommerce", href: "https://dd.mocup.in/services/e-commerce" },
      ],
    },
  ],
};

export const AI_CATEGORIES = [
  { id: "ai-services", label: "AI Services" },
  { id: "data-engineering", label: "Data Engineering" },
  { id: "gen-ai-services", label: "Generative AI" },
  { id: "ai-devops", label: "DevOps" },
  { id: "kubernetes-services", label: "Kubernetes" },
];

export const AI_SUBMENUS: Record<string, { title: string; links: { label: string; href: string }[] }[]> = {
  "ai-services": [
    {
      title: "AI Services",
      links: [
        { label: "AI Consulting", href: "https://dd.mocup.in/services/ai-consulting" },
        { label: "RAG (Data to LLMs)", href: "https://dd.mocup.in/services/rag" },
        { label: "Custom LLMs for Enterprises", href: "https://dd.mocup.in/services/custom-llms-for-enterprises" },
        { label: "AI in Mobile Apps", href: "https://dd.mocup.in/services/ai-in-mobile-apps" },
        { label: "AI in Software", href: "https://dd.mocup.in/services/ai-in-software" },
      ],
    },
  ],
  "data-engineering": [
    {
      title: "Data Engineering",
      links: [
        { label: "Data Analytics", href: "https://dd.mocup.in/services/data-analytics" },
        { label: "Data Analysis", href: "https://dd.mocup.in/services/data-analysis" },
        { label: "Data Warehouse", href: "https://dd.mocup.in/services/data-warehouse" },
        { label: "Data Migration", href: "https://dd.mocup.in/services/data-migration" },
        { label: "Data Cleaning", href: "https://dd.mocup.in/services/data-cleaning" },
        { label: "Data Visualization", href: "https://dd.mocup.in/services/data-visualization" },
        { label: "Data Collection", href: "https://dd.mocup.in/services/data-collection" },
        { label: "Data Integration", href: "https://dd.mocup.in/services/data-integration" },
        { label: "Big Data", href: "https://dd.mocup.in/services/big-data" },
        { label: "Business Intelligence", href: "https://dd.mocup.in/services/business-intelligence" },
        { label: "Data Science Consulting", href: "https://dd.mocup.in/services/data-science-consulting" },
      ],
    },
  ],
  "gen-ai-services": [
    {
      title: "Generative AI",
      links: [
        { label: "AI Agent", href: "https://dd.mocup.in/services/ai-agent" },
        { label: "LLM Powered Chatbots", href: "https://dd.mocup.in/services/llm-powered-chatbots" },
        { label: "LLM Observability", href: "https://dd.mocup.in/services/llm-observability" },
        { label: "LLM Testing and Finetuning", href: "https://dd.mocup.in/services/llm-testing-and-finetuning" },
        { label: "GPT Integration", href: "https://dd.mocup.in/services/gpt-integration" },
      ],
    },
  ],
  "ai-devops": [
    {
      title: "DevOps",
      links: [
        { label: "DevOps Consulting", href: "https://dd.mocup.in/services/devops-consulting" },
        { label: "AIOps", href: "https://dd.mocup.in/services/aiops" },
        { label: "DevOps Automation", href: "https://dd.mocup.in/services/devops-automation" },
        { label: "DevOps Implementation", href: "https://dd.mocup.in/services/devops-implementation" },
        { label: "DevOps Containerization", href: "https://dd.mocup.in/services/devops-containerization" },
        { label: "DevSecOps Consulting", href: "https://dd.mocup.in/services/devsecops-consulting" },
        { label: "Site Reliability Engineering", href: "https://dd.mocup.in/services/site-reliability-engineering" },
      ],
    },
  ],
  "kubernetes-services": [
    {
      title: "Kubernetes",
      links: [
        { label: "Kubernetes Consulting", href: "https://dd.mocup.in/services/kubernets-consulting" },
      ],
    },
  ],
};

export const TECH_CATEGORIES = [
  { id: "mobile1", label: "MOBILE" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "trending", label: "TRENDING" },
  { id: "cloud", label: "CLOUD SERVICES" },
  { id: "aws", label: "AWS SERVICES" },
  { id: "azure", label: "AZURE" },
  { id: "gcloud", label: "GOOGLE CLOUD" },
];

export const TECH_SUBMENUS: Record<string, { title: string; links: { label: string; href: string }[] }[]> = {
  mobile1: [
    {
      title: "MOBILE",
      links: [
        { label: "Flutter", href: "https://dd.mocup.in/services/flutter-app-development" },
        { label: "iOS", href: "https://dd.mocup.in/services/iOS-development" },
        { label: "Android", href: "https://dd.mocup.in/services/android-development" },
        { label: "Swift", href: "https://dd.mocup.in/services/swift" },
        { label: "React Native", href: "https://dd.mocup.in/services/react-native-development" },
        { label: "Ionic", href: "https://dd.mocup.in/services/ionic" },
        { label: "Progressive App", href: "https://dd.mocup.in/services/progressive-web-apps" },
      ],
    },
  ],
  frontend: [
    {
      title: "FRONTEND",
      links: [
        { label: "React", href: "https://dd.mocup.in/services/react-js-development" },
        { label: "Vue", href: "https://dd.mocup.in/services/vue" },
        { label: "Next.js", href: "https://dd.mocup.in/services/nextjs" },
        { label: "Backbone.js", href: "https://dd.mocup.in/services/backbonejs" },
        { label: "JavaScript", href: "https://dd.mocup.in/services/javascript" },
        { label: "Angular", href: "https://dd.mocup.in/services/angular" },
      ],
    },
  ],
  backend: [
    {
      title: "BACKEND",
      links: [
        { label: "Node", href: "https://dd.mocup.in/services/node" },
        { label: "Laravel", href: "https://dd.mocup.in/services/laravel" },
        { label: "CodeIgniter", href: "https://dd.mocup.in/services/codeigniter" },
        { label: "Python", href: "https://dd.mocup.in/services/golang" },
        { label: "Golang", href: "https://dd.mocup.in/services/golang" },
        { label: "Ruby on Rails", href: "https://dd.mocup.in/services/ruby-on-rails-development" },
        { label: "Java", href: "https://dd.mocup.in/services/java" },
        { label: "PHP", href: "https://dd.mocup.in/services/php" },
        { label: "Rust", href: "https://dd.mocup.in/services/rust" },
        { label: ".NET", href: "https://dd.mocup.in/services/dot-net" },
        { label: "MERN", href: "https://dd.mocup.in/services/mern" },
        { label: "MEAN", href: "https://dd.mocup.in/services/mean" },
      ],
    },
  ],
  trending: [
    {
      title: "TRENDING",
      links: [
        { label: "Cloud", href: "https://dd.mocup.in/services/cloud" },
        { label: "DevOps", href: "https://dd.mocup.in/services/devops" },
        { label: "Internet of Things", href: "https://dd.mocup.in/services/internet-of-things" },
        { label: "Big Data & Analytics", href: "https://dd.mocup.in/services/big-data-and-analytics" },
        { label: "Data Science", href: "https://dd.mocup.in/services/data-science" },
        { label: "AI/ML", href: "https://dd.mocup.in/services/ai-and-ml" },
        { label: "Tailwind CSS", href: "https://dd.mocup.in/services/tailwind-css" },
        { label: "Generative AI", href: "https://dd.mocup.in/services/generative-ai" },
        { label: "Wearable App Development", href: "https://dd.mocup.in/services/wearable-app-development" },
      ],
    },
  ],
  cloud: [
    {
      title: "CLOUD SERVICES",
      links: [
        { label: "Cloud Services and Solution", href: "https://dd.mocup.in/services/cloud-services-and-solution" },
        { label: "Cloud Migration", href: "https://dd.mocup.in/services/cloud-migration" },
        { label: "Cloud Consulting", href: "https://dd.mocup.in/services/cloud-consulting" },
        { label: "Cloud Integration", href: "https://dd.mocup.in/services/cloud-integration" },
        { label: "Cloud Support And Maintenance", href: "https://dd.mocup.in/services/cloud-support-and-maintenance" },
        { label: "Cloud Managed", href: "https://dd.mocup.in/services/cloud-managed" },
        { label: "Cloud Data", href: "https://dd.mocup.in/services/cloud-data" },
        { label: "Cloud Native Application Development", href: "https://dd.mocup.in/services/cloud-native-application-development" },
      ],
    },
  ],
  aws: [
    {
      title: "AWS SERVICES",
      links: [
        { label: "AWS Consulting", href: "https://dd.mocup.in/services/aws-consulting" },
        { label: "AWS Migration", href: "https://dd.mocup.in/services/aws-migration" },
        { label: "AWS Managed", href: "https://dd.mocup.in/services/aws-managed" },
        { label: "AWS Integration", href: "https://dd.mocup.in/services/aws-integration" },
        { label: "AWS Support And Maintenance", href: "https://dd.mocup.in/services/aws-support-and-maintenance" },
      ],
    },
  ],
  azure: [
    {
      title: "AZURE",
      links: [
        { label: "Azure Consulting", href: "https://dd.mocup.in/services/azure-consulting" },
        { label: "Azure Migration", href: "https://dd.mocup.in/services/azure-migration" },
        { label: "Azure Support and Maintenance", href: "https://dd.mocup.in/services/azure-support-and-maintenance" },
        { label: "Azure Managed", href: "https://dd.mocup.in/services/azure-managed" },
        { label: "Azure Integration", href: "https://dd.mocup.in/services/azure-integration" },
      ],
    },
  ],
  gcloud: [
    {
      title: "GOOGLE CLOUD",
      links: [
        { label: "Google Cloud Consulting", href: "https://dd.mocup.in/services/google-cloud-consulting" },
        { label: "Google Cloud Migration", href: "https://dd.mocup.in/services/google-cloud-migration" },
        { label: "Google Cloud Support and Maintenance", href: "https://dd.mocup.in/services/google-cloud-support-and-maintenance" },
        { label: "Google Cloud Managed", href: "https://dd.mocup.in/services/google-cloud-managed" },
        { label: "Google Cloud Integration", href: "https://dd.mocup.in/services/google-cloud-integratione" },
      ],
    },
  ],
};

export const CORPORATE_LINKS = [
  { label: "ABOUT DESIGNDOT", href: "https://dd.mocup.in/about-us", desc: "Learn more about our vision, leadership, and digital path." },
  { label: "INDUSTRIES", href: "https://dd.mocup.in/industries", desc: "Discover the business sectors we transform through code." },
  { label: "INSIGHTS", href: "https://blog.designdot.co.in/", desc: "Stay ahead with our tech columns, reviews, and design trends." },
  { label: "TESTIMONIALS", href: "https://dd.mocup.in/testimonial", desc: "What our 1500+ happy clients say about our support." },
  { label: "PROJECTS", href: "https://dd.mocup.in/projects", desc: "Explore our software, web, and mobile app case studies." },
  { label: "Blog", href: "https://dd.mocup.in/career", desc: "Career opportunities, developer culture, and technology posts." },
];

export const SERVICE_CARDS = [
  {
    icon: "mobile",
    title: "Mobile App Development",
    description: "We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.",
  },
  {
    icon: "code",
    title: "Software Development",
    description: "From custom development to system upgrades, we craft software that enhances operational efficiency and drives innovation.",
  },
  {
    icon: "lightbulb",
    title: "Digital Transformation",
    description: "We help businesses stay competitive by transforming legacy systems with modern, digital-first solutions that drive growth.",
  },
  {
    icon: "compass",
    title: "Ideation And Design Strategy",
    description: "Our strategic ideation and design processes ensure your digital products are functional and resonate with users.",
  },
  {
    icon: "user",
    title: "IT Consulting",
    description: "We provide expert IT consulting services to help your organization navigate complex technology decisions and align strategies.",
  },
  {
    icon: "sync",
    title: "DevOps",
    description: "Our DevOps services streamline development and operations to accelerate your project timelines and improve quality.",
  },
  {
    icon: "cloud",
    title: "Cloud Managed Services",
    description: "We manage your cloud infrastructure end-to-end, ensuring it's secure, optimized, and cost-effective for business success.",
  },
];

export const INDUSTRY_ITEMS = [
  {
    icon: "robot",
    title: "Artificial Intelligence",
    description: "We leverage our AI Development services to craft intelligent solutions that streamline operations and enhance decision-making capabilities.",
  },
  {
    icon: "cogs",
    title: "Generative AI",
    description: "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
  },
  {
    icon: "brain",
    title: "Machine Learning",
    description: "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
  },
  {
    icon: "eye",
    title: "Computer Vision",
    description: "We employ computer vision to analyze visual data, automate image processing tasks and enhance the accuracy and speed of visual recognition systems.",
  },
  {
    icon: "cloud",
    title: "Cloud",
    description: "We offer scalable and secure cloud consulting services that enhance flexibility and reduce IT overhead, allowing your team to focus on business growth.",
  },
  {
    icon: "language",
    title: "Data Science And Analytics",
    description: "We leverage data to extract actionable insights, helping your business make informed decisions and optimize operations.",
  },
  {
    icon: "chart",
    title: "Business Intelligence",
    description: "We empower your business with BI tools that provide clear, concise data visualization, helping your team to understand trends and drive business performance.",
  },
];

export const GRID_TECH_DATA = {
  frontend: [
    { name: "HTML", img: "https://dd.mocup.in/assets/web/images/icon/html-logo.svg" },
    { name: "CSS", img: "https://dd.mocup.in/assets/web/images/icon/css-logo.svg" },
    { name: "JAVASCRIPT", img: "https://dd.mocup.in/assets/web/images/icon/javascript-lg.svg" },
    { name: "REACT", img: "https://dd.mocup.in/assets/web/images/icon/react-logo-icon.svg" },
    { name: "NEXTJS", img: "https://dd.mocup.in/assets/web/images/icon/nextlogo.svg" },
    { name: "VUE.JS", img: "https://dd.mocup.in/assets/web/images/icon/vuejs-logo.svg" },
    { name: "ANGULAR", img: "https://dd.mocup.in/assets/web/images/icon/ng-logo.svg" },
  ],
  backend: [
    { name: "Node.js", img: "https://dd.mocup.in/assets/web/images/icon/node_js.svg" },
    { name: "PHP", img: "https://dd.mocup.in/assets/web/images/icon/php-logo.svg" },
    { name: "Codeigniter", img: "https://dd.mocup.in/assets/web/images/icon/codeigniter.webp" },
    { name: "Laravel", img: "https://dd.mocup.in/assets/web/images/icon/laravel.webp" },
  ],
  mobile: [
    { name: "Android", img: "https://dd.mocup.in/assets/web/images/icon/mobile-android.svg" },
    { name: "iOS", img: "https://dd.mocup.in/assets/web/images/icon/mobile-ios.svg" },
    { name: "React Native", img: "https://dd.mocup.in/assets/web/images/icon/mobile-react.svg" },
    { name: "Flutter", img: "https://dd.mocup.in/assets/web/images/icon/mobile-futter.svg" },
  ],
  bigdata: [
    { name: "amazon KINESIS", img: "https://dd.mocup.in/assets/web/images/icon/amazon-kinesis-tech-icon.svg" },
    { name: "Apache Storm ", img: "https://dd.mocup.in/assets/web/images/icon/apache-storm-tech-icon.svg" },
    { name: "Azure Event Hubs", img: "https://dd.mocup.in/assets/web/images/icon/azure-event-hub-tech-icon.svg" },
    { name: "APACHE kafka Streams", img: "https://dd.mocup.in/assets/web/images/icon/kafka-streams-tech-icon.svg" },
    { name: "APACHE Spark Streaming", img: "https://dd.mocup.in/assets/web/images/icon/spark-streaming-tech-icon.svg" },
    { name: "Flink", img: "https://dd.mocup.in/assets/web/images/icon/flink-tech-icon.svg" },
    { name: "Azure Stream Analytics", img: "https://dd.mocup.in/assets/web/images/icon/stream-analytics-tech-icon.svg" },
    { name: "RabbitMQ", img: "https://dd.mocup.in/assets/web/images/icon/rabbitmq-tech-icon.svg" },
  ],
  database: [
    { name: "Microsoft SQL Server", img: "https://dd.mocup.in/assets/web/images/icon/ms-sql-server-tech-icon.svg" },
    { name: "MySQL", img: "https://dd.mocup.in/assets/web/images/icon/mysql-tech-icon.svg" },
    { name: "Mongo DB", img: "https://dd.mocup.in/assets/web/images/icon/azure-event-hub-tech-icon.svg" },
    { name: "Oracle", img: "https://dd.mocup.in/assets/web/images/icon/oracle-tech-icon.svg" },
    { name: "PostgreSQL", img: "https://dd.mocup.in/assets/web/images/icon/postgre-sql-tech-icon.svg" },
    { name: "Apache Hbase", img: "https://dd.mocup.in/assets/web/images/icon/hbase-tech-icon.svg" },
  ],
  clouddb: [
    { name: "Google Cloud", img: "https://dd.mocup.in/assets/web/images/icon/google-cloud.webp" },
    { name: "AWS", img: "https://dd.mocup.in/assets/web/images/icon/aws.webp" },
    { name: "Amazon DocumentDB", img: "https://dd.mocup.in/assets/web/images/icon/amazon-documentdb.svg" },
    { name: "Azure SQL DB", img: "https://dd.mocup.in/assets/web/images/icon/azure-sql-database.svg" },
    { name: "Google Cloud Datastore", img: "https://dd.mocup.in/assets/web/images/icon/google-cloud-sql-1.svg" },
  ],
  devops: [
    { name: "Docker", img: "https://dd.mocup.in/assets/web/images/icon/docker-logo.svg" },
    { name: "Apache Mesos", img: "https://dd.mocup.in/assets/web/images/icon/mesos-logo.svg" },
  ],
  architecturedesigns: [
    { name: "Traditional 3-Layer Architecture", img: "https://dd.mocup.in/assets/web/images/icon/traditional-3-layer.svg" },
    { name: "Cloud-Native Architecture", img: "https://dd.mocup.in/assets/web/images/icon/cloud-native-architecture.svg" },
    { name: "Reactive Architecture", img: "https://dd.mocup.in/assets/web/images/icon/reactive-architecture.svg" },
    { name: "PWA", img: "https://dd.mocup.in/assets/web/images/icon/pwa-architecture.svg" },
  ],
  artificialintelligence: [
    { name: "OpenAI", img: "https://dd.mocup.in/assets/web/images/icon/open-ai-tech-icon.svg" },
    { name: "Meta", img: "https://dd.mocup.in/assets/web/images/icon/meta-tech-icon.svg" },
  ],
};

export const WHAT_GOOD_PROJECTS = [
  {
    title: "DRBROWNSLAB",
    description: "healthcare ecommerce web portal | hosting | maintenance | application | mobile app",
    img: "https://dd.mocup.in/uploads/project/thumbnail/1725251565_drbrownslab-t.jpg",
    href: "https://dd.mocup.in/projects/drbrownslab",
  },
  {
    title: "Maven Magnet",
    description: "Website Design Development | corporate Profile",
    img: "https://dd.mocup.in/uploads/project/thumbnail/1725253748_maven-t.jpg",
    href: "https://dd.mocup.in/projects/maven-magnet",
  },
  {
    title: "MODENEXT",
    description: "Website | Brand Consultancy | Digital Media Marketing | Business Consultancy",
    img: "https://dd.mocup.in/uploads/project/thumbnail/1725254897_mode-next-t.jpg",
    href: "https://dd.mocup.in/projects/modenext",
  },
  {
    title: "Charms",
    description: "Tour & Travel",
    img: "https://dd.mocup.in/uploads/project/thumbnail/1725511336_charms-t.jpg",
    href: "https://dd.mocup.in/projects/charms",
  },
  {
    title: "IDcube",
    description: "Branding | Website | Drupal CMS | Hosting | AMC | Software UI",
    img: "https://dd.mocup.in/uploads/project/thumbnail/1725514774_idcube-t.jpg",
    href: "https://dd.mocup.in/projects/idcube",
  },
];

export const TESTIMONIALS = [
  {
    name: "B N SINHA",
    role: "DIRECTOR, AR GROUP",
    stars: 5,
    avatar: "https://dd.mocup.in/assets/web/images/client-icon.jpg",
    text: "Creativity is often believed to be an inborn talent, and if the talent mixes up with astute professionalism it is bound to deliver wonders. Jyoti and his venture DesignDot does the same. He helped our firm with fresh designs for our logo, web site, etc. and they did an amazing job ... We really appreciated their creativity, their intelligence ability to work with our content. They developed fresh, design concept that is on par or better than any other firm in our field. DesignDot is a great company to work with! Very professional and prompt, highly recommended for all kinds of design work. Have done multiple jobs and all have come out perfect. I wish all the very best in all of their endeavours.",
  },
  {
    name: "Kennette Burgess",
    role: "Director, International Strategic Marketing",
    stars: 5,
    avatar: "https://dd.mocup.in/assets/web/images/keneete.jpeg",
    text: "Had the pleasure of working with DesignDot after my company hired him years ago to complete web development projects for my clients. He did wonderful work for my clients. Reasonably priced. Websites were beautiful and functional with CMS (content management systems) and other features like flash sites, flash banners, document libraries, etc. Would recommend them for your web development project.",
  },
  {
    name: "Shashank Pokhriyal",
    role: "CEO",
    stars: 5,
    avatar: "https://dd.mocup.in/assets/web/images/Shashank.jpeg",
    text: "DesignDot is a group of highly professional people. They are highly recommended.",
  },
  {
    name: "DR.SATISH CHANDRA",
    role: "ADVISOR, AFGHANISTAN RAILWAY AUTHORITY",
    stars: 5,
    avatar: "https://dd.mocup.in/assets/web/images/blank-user.jpg",
    text: "I have known Mr. Jyotirmoy Sinha - since 2011 and found him a creative thinker, and an accomplished professional. His digital skills and logical mindset -to appreciate the context of a problem - have provided excellent integration of AI and Technology based,- Institutional Solutions for many for-profit and non-profit organizations. As a retired Civil Servant, as an Academician, Consultant and Social - entrepreneur, -I rate DesignDot a credible Organization under the stewardship of Mr. Jyotirmoy Sinha. DesignDot has the potential to emerge as the World Class-Technology Solution Providing Company. I wish DesignDot great success.",
  },
];

export const CLIENTELE_LOGOS = [
  // Row 1
  [
    { name: "indigo", url: "https://dd.mocup.in/assets/web/images/clientele/indigo.jpg" },
    { name: "toto", url: "https://dd.mocup.in/assets/web/images/clientele/toto.jpg" },
    { name: "wall street journal", url: "https://dd.mocup.in/assets/web/images/clientele/wall-street-journal-logo.jpg" },
    { name: "aeiforia", url: "https://dd.mocup.in/assets/web/images/clientele/aeiforia.jpg" },
    { name: "fortis", url: "https://dd.mocup.in/assets/web/images/clientele/fortis%20(1).jpg" },
    { name: "honeywell", url: "https://dd.mocup.in/assets/web/images/honeywell.jpg" },
    { name: "Apollo Hospital Logo", url: "https://dd.mocup.in/assets/web/images/clientele/Apollo%20Hospital%20Logo.jpg" },
    { name: "QRG Health City Pulmonologist", url: "https://dd.mocup.in/assets/web/images/clientele/QRG-Health-City-Pulmonologist-Chest-Physician-Asthma-Allergy-Specialist-Faridabad-28d972%20(1).jpg" },
  ],
  // Row 2
  [
    { name: "british council", url: "https://dd.mocup.in/assets/web/images/clientele/british-council-1-logo-png-transparent.jpg" },
    { name: "tnnbda", url: "https://dd.mocup.in/assets/web/images/clientele/tnnbda.jpg" },
    { name: "vivo Phone", url: "https://dd.mocup.in/assets/web/images/clientele/vivo-Phone-logo.jpg" },
    { name: "panasonic", url: "https://dd.mocup.in/assets/web/images/clientele/panasonic-logo.jpg" },
    { name: "stthomas", url: "https://dd.mocup.in/assets/web/images/clientele/stthomas.jpg" },
    { name: "gd goenka", url: "https://dd.mocup.in/assets/web/images/clientele/gd%20goenka.jpg" },
    { name: "maven", url: "https://dd.mocup.in/assets/web/images/clientele/maven.jpg" },
    { name: "benori", url: "https://dd.mocup.in/assets/web/images/clientele/benori.jpg" },
  ],
];

export const BLOG_POSTS = [
  {
    title: "Best digital marketing trends to follow in 2022",
    date: "08 July, 2022",
    img: "https://dd.mocup.in/assets/web/images/digital-marketing.jpg",
    href: "https://blog.deesigndot.com/best-digital-marketing-trends-to-follow-in-2022/",
  },
  {
    title: "Branding - Marketing",
    date: "08 July, 2022",
    img: "https://dd.mocup.in/assets/web/images/branding-marketing.jpg",
    href: "https://blog.deesigndot.com/branding-marketing/",
  },
  {
    title: "Essentials for running a successful business in 2022",
    date: "08 July, 2022",
    img: "https://dd.mocup.in/assets/web/images/business.jpg",
    href: "https://blog.deesigndot.com/essentials-for-running-a-successful-business-in-2022/",
  },
];
