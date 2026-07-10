'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

// --- DATA STRUCTURES FOR HIGH-FIDELITY MEGA MENUS ---

const EXPERTISE_MENU = {
  left: {
    image: 'https://dd.mocup.in/assets/web/images/expertise.webp',
    title: 'ENGAGEMENT MODELS',
    subtitle: 'Hiring Software Developers. It Only Takes A Few Clicks',
    items: [
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/Dedicated.svg',
        title: 'DEDICATED TEAMS OF DEVELOPERS',
        desc: 'Hire developers who are committed to your project.'
      },
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/Outsource.svg',
        title: 'OUTSOURCE YOUR WORK',
        desc: 'Get a solution that is tailored to your needs.'
      },
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/staf.svg',
        title: 'STAFF AUGMENTATION',
        desc: 'Close the talent gap on your internal staff.'
      }
    ]
  },
  center: {
    categories: [
      'ENGINEERING',
      'WEB & ECOMMERCE',
      'MOBILE APP',
      'CLOUD SERVICES',
      'BRAND DEVELOPMENT',
      'MEDIA ADVERTISING',
      'DIGITAL MARKETING',
      'DIGITAL TRANSFORMATION',
      'EMERGING TECHNOLOGIES',
      'QUALITY & SUPPORT',
      'SOLUTIONS'
    ],
    subServices: {
      'ENGINEERING': [
        'Software Engineering & Consulting',
        'Enterprise Software Development',
        'CRM Software Development',
        'SAAS',
        'E-Learning Application',
        'Software Development Outsourcing',
        'Offshore Software Development',
        'Big Data Analytics',
        'ERP Development',
        'Application Modernization Services',
        'API Development',
        'AI In Software'
      ],
      'WEB & ECOMMERCE': [
        'Custom Web Development',
        'Shopify E-Commerce',
        'Magento Solutions',
        'WooCommerce Development',
        'Headless Commerce',
        'B2B E-Commerce Solutions'
      ],
      'MOBILE APP': [
        'iOS App Development',
        'Android App Development',
        'Flutter App Development',
        'React Native Development',
        'Kotlin App Development',
        'Swift App Development'
      ],
      'CLOUD SERVICES': [
        'AWS Solutions & DevOps',
        'Azure Cloud Integration',
        'Google Cloud Management',
        'Cloud Migration & Consulting',
        'Kubernetes Containerization',
        'Cloud Security Audits'
      ],
      'BRAND DEVELOPMENT': [
        'Corporate Identity Design',
        'Brand Guidelines',
        'Logo Design Systems',
        'Visual Asset Management',
        'Rebranding Strategy'
      ],
      'MEDIA ADVERTISING': [
        'Creative Ad Campaigns',
        'Paid Media Planning',
        'Video Production & Editing',
        'Display Ads & Strategy'
      ],
      'DIGITAL MARKETING': [
        'Search Engine Optimization',
        'Content Marketing Strategy',
        'Social Media Management',
        'Email Campaigns & Flows',
        'PPC & Ad Performance'
      ],
      'DIGITAL TRANSFORMATION': [
        'Legacy Modernization',
        'Workflow Automation',
        'Data-Driven Decoupling',
        'Enterprise Integrations'
      ],
      'EMERGING TECHNOLOGIES': [
        'Generative AI Integrations',
        'Blockchain Solutions',
        'IoT Hardware Pipelines',
        'AR/VR Applications'
      ],
      'QUALITY & SUPPORT': [
        'Automation QA Testing',
        'Manual Acceptance Testing',
        '24/7 Server Monitoring',
        'Security Penetration Testing'
      ],
      'SOLUTIONS': [
        'Custom CRM Systems',
        'ERP Platforms',
        'Healthcare Applications',
        'FinTech Gateways'
      ]
    }
  }
};

const AI_MENU = {
  left: {
    image: 'https://dd.mocup.in/assets/web/images/ai-Ingenuity.webp',
    title: 'AI INNOVATION MODELS',
    subtitle: 'Hiring Software Developers. It Only Takes A Few Clicks',
    items: [
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/Dedicated.svg',
        title: 'DEDICATED TEAMS OF DEVELOPERS',
        desc: 'Hire developers who are committed to your project.'
      },
      {
        title: 'LEADING TECHNOLOGY OFFERING FOR',
        links: [
          { label: 'Startup', href: '#' },
          { label: 'Private Public Entities', href: '#' },
          { label: 'Enterprises', href: '#' }
        ]
      }
    ]
  },
  center: {
    categories: [
      'AI SERVICES',
      'DATA ENGINEERING',
      'GENERATIVE AI',
      'DEVOPS',
      'KUBERNETES'
    ],
    subServices: {
      'AI SERVICES': [
        'AI Consulting',
        'RAG (Data To LLMs)',
        'Custom LLMs For Enterprises',
        'AI In Mobile Apps',
        'AI In Software'
      ],
      'DATA ENGINEERING': [
        'Data Pipelines (ETL)',
        'Data Warehousing Solutions',
        'Big Data Analytics',
        'Real-time Stream Processing',
        'Business Intelligence Dashboards'
      ],
      'GENERATIVE AI': [
        'LLM Fine-Tuning & Prompting',
        'Retrieval Augmented Generation',
        'AI Copilots & Chatbots',
        'Multi-Agent System Design'
      ],
      'DEVOPS': [
        'CI/CD Pipelines & Testing',
        'Infrastructure as Code (IaC)',
        'Cloud-Native Integrations',
        'SRE & Monitoring Services'
      ],
      'KUBERNETES': [
        'Cluster Orchestration',
        'Microservices Autoscaling',
        'Helm Charts Deployment',
        'Service Mesh Configuration'
      ]
    }
  }
};

const TECH_MENU = {
  left: {
    image: 'https://dd.mocup.in/assets/web/images/expertise.webp',
    title: 'TECHNOLOGIES',
    subtitle: 'Hiring Software Developers. It Only Takes A Few Clicks',
    items: [
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/Dedicated.svg',
        title: 'DEDICATED TEAMS OF DEVELOPERS',
        desc: 'Hire developers who are committed to your project.'
      },
      {
        title: 'LEADING TECHNOLOGY OFFERING FOR',
        links: [
          { label: 'Startup', href: '#' },
          { label: 'Private Public Entities', href: '#' },
          { label: 'Enterprises', href: '#' }
        ]
      }
    ]
  },
  center: {
    categories: [
      'MOBILE',
      'FRONTEND',
      'BACKEND',
      'TRENDING',
      'CLOUD SERVICES',
      'AWS SERVICES',
      'AZURE',
      'GOOGLE CLOUD'
    ],
    subServices: {
      'MOBILE': [
        'Flutter',
        'iOS',
        'Android',
        'Swift',
        'React Native',
        'Ionic',
        'Progressive App'
      ],
      'FRONTEND': [
        'React.js Solutions',
        'Next.js Apps',
        'Vue.js Frontends',
        'Angular Applications',
        'TypeScript Implementation',
        'Tailwind CSS Styling'
      ],
      'BACKEND': [
        'Node.js REST Services',
        'Python Django & FastAPI',
        'Go (Golang) Microservices',
        'Java Spring Boot Projects',
        'PHP Laravel Backends'
      ],
      'TRENDING': [
        'Generative AI Agents',
        'Rust Programming',
        'WebAssembly Execution',
        'Edge Computing Layers'
      ],
      'CLOUD SERVICES': [
        'Multi-Cloud Orchestration',
        'Cloud-Native Security',
        'Serverless Architectures',
        'Cost Optimization Audits'
      ],
      'AWS SERVICES': [
        'AWS EC2 & ECS Setup',
        'AWS Lambda Serverless',
        'AWS Aurora & DynamoDB',
        'AWS IAM Security Auditing'
      ],
      'AZURE': [
        'Azure App Services',
        'Azure SQL Database Management',
        'Azure Kubernetes Services',
        'Azure AD Identity Mapping'
      ],
      'GOOGLE CLOUD': [
        'Google Cloud Consulting',
        'Google Cloud Migration',
        'Google Cloud Support and Maintenance',
        'Google Cloud Managed Services',
        'Google Cloud Integration'
      ]
    }
  }
};

const CORPORATE_MENU = {
  left: {
    image: 'https://dd.mocup.in/assets/web/images/expertise.webp',
    title: 'ENGAGEMENT MODELS',
    subtitle: 'Hiring Software Developers. It Only Takes A Few Clicks',
    items: [
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/Dedicated.svg',
        title: 'DEDICATED TEAMS OF DEVELOPERS',
        desc: 'Hire developers who are committed to your project.'
      },
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/Outsource.svg',
        title: 'OUTSOURCE YOUR WORK',
        desc: 'Get a solution that is tailored to your needs.'
      },
      {
        icon: 'https://dd.mocup.in/assets/web/images/icon/staf.svg',
        title: 'STAFF AUGMENTATION',
        desc: 'Close the talent gap on your internal staff.'
      }
    ]
  },
  columns: [
    {
      title: 'ABOUT DESIGNDOT',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      href: '#'
    },
    {
      title: 'INDUSTRIES',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      href: '#'
    },
    {
      title: 'INSIGHTS',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      href: '#'
    },
    {
      title: 'TESTIMONIALS',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      href: '#'
    },
    {
      title: 'PROJECTS',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      href: '#'
    },
    {
      title: 'Blog',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      href: '#'
    }
  ]
};

const NAVIGATION_LINKS = [
  { label: 'Expertise', key: 'expertise', hasMegaMenu: true },
  { label: 'AI Ingenuity', key: 'ai-ingenuity', hasMegaMenu: true },
  { label: 'Design Build', key: 'design-build', hasMegaMenu: false, href: '#design-build' },
  { label: 'Technology', key: 'technology', hasMegaMenu: true },
  { label: 'Corporate', key: 'corporate', hasMegaMenu: true },
  { label: 'Contact Us', key: 'contact-us', hasMegaMenu: false, href: '#contact-us' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Active mega menu hovered/selected
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Active submenus inside mega menus
  const [activeExpertiseCategory, setActiveExpertiseCategory] = useState("ENGINEERING");
  const [activeAICategory, setActiveAICategory] = useState("AI SERVICES");
  const [activeTechCategory, setActiveTechCategory] = useState("MOBILE");

  // Mobile submenu accordion collapses
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const [mobileOpenSubSection, setMobileOpenSubSection] = useState<string | null>(null);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerModal = () => {
    setIsModalOpen((prev) => !prev);
    setIsMobileMenuOpen(false);
  };

  const handleMegaTabClick = (e: React.MouseEvent, menuKey: string) => {
    setActiveMenu(menuKey);
    if (typeof window !== 'undefined' && (window as any).cycleTheme) {
      (window as any).cycleTheme(e.clientX, e.clientY);
    }
  };

  const handleMobileSectionToggle = (section: string) => {
    setMobileOpenSection(mobileOpenSection === section ? null : section);
    setMobileOpenSubSection(null);
  };

  const handleMobileSubSectionToggle = (subSection: string) => {
    setMobileOpenSubSection(mobileOpenSubSection === subSection ? null : subSection);
  };

  const handleMouseEnter = (menuKey: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setHoveredMenu(menuKey);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200); // 200ms grace period to translate cursor without closing menu
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };

  const renderLinkLabel = (label: string, isScrolled: boolean, menuKey: string) => {
    const isActive = hoveredMenu === menuKey || activeMenu === menuKey;
    if (label.toLowerCase() === 'ai ingenuity') {
      return (
        <span className="relative flex items-center h-full focus:outline-none focus-visible:outline-none select-none">
          <span className="relative">
            <span className={isActive ? 'text-white' : 'text-[#B2C5D4] transition-colors'}>AI&nbsp;</span>
            <span className="bg-gradient-to-r from-[#D1C0AE] to-[#F67E29] text-transparent bg-clip-text transition-colors inline-block">INGENUITY</span>
            <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          </span>
        </span>
      );
    }

    const displayLabel = label.toUpperCase();
    return (
      <span className="relative flex items-center h-full focus:outline-none focus-visible:outline-none select-none">
        <span className="relative text-white">
          {displayLabel}
          <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
        </span>
      </span>
    );
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 bg-[var(--background)] py-0 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled ? 'shadow-lg border-b border-white/5' : ''}`}>
        {/* Main Navbar (Always Compact Single-Row) */}
        <div className={`w-full px-[50px] flex justify-between items-center relative transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled ? 'h-[72px]' : 'h-[96px]'}`}>

          {/* Left/Middle Group: Navigation links, Support and Consultation button */}
          <div className="flex items-center gap-[25px] h-full">
            {/* Hamburger Menu trigger (hidden on desktop) */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center gap-2 text-white hover:text-[#f58331] font-bold text-xs tracking-wider cursor-pointer focus:outline-none focus-visible:outline-none font-display"
              >
                <Menu size={16} />
                <span>MENU</span>
              </button>
            </div>

            {/* Navigation Links and Support/Consultation */}
            <ul
              className={`desk-menu navbar px-0 hidden lg:flex items-center gap-[25px] h-full -mt-2 ${isScrolled ? '!hidden' : ''}`}
              style={{
                color: '#1A1A1A',
                fontFamily: 'GTWalsheimPro-Bold, sans-serif',
                fontSize: '14px',
                padding: '8px 0px',
                margin: 0,
                listStyle: 'none'
              }}
            >
              {NAVIGATION_LINKS.map((link) => {
                return (
                  <li
                    key={link.label}
                    className="h-full flex items-center"
                    onMouseEnter={() => handleMouseEnter(link.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.hasMegaMenu ? (
                      <button className="group flex items-center gap-0.5 transition-colors cursor-pointer h-full border-b-2 border-transparent focus:outline-none focus-visible:outline-none">
                        {renderLinkLabel(link.label, true, link.key)}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setActiveMenu(link.key)}
                        className="group transition-colors h-full flex items-center border-b-2 border-transparent focus:outline-none focus-visible:outline-none"
                      >
                        {renderLinkLabel(link.label, true, link.key)}
                      </a>
                    )}
                  </li>
                );
              })}

              <li className="flex items-center gap-[25px] select-none h-full">
                {/* support numbers with 24 hours support icon */}
                <div className="flex items-center gap-2.5 text-white h-[34px]">
                  <img
                    src="https://dd.mocup.in/assets/web/images/all/support-icon.svg"
                    alt="Support Icon"
                    className="w-[34px] h-[34px]"
                  />
                  <span className="whitespace-nowrap">+91 9873282812 / +1 4694410125</span>
                </div>

                {/* Orange consultation button */}
                <button
                  onClick={(e) => {
                    triggerModal();
                    if (typeof window !== 'undefined' && (window as any).cycleTheme) {
                      (window as any).cycleTheme(e.clientX, e.clientY);
                    }
                  }}
                  className="bg-[#f58331] text-white hover:bg-white hover:text-black transition-colors w-[186.24px] h-[44px] rounded-[4px] uppercase cursor-pointer flex items-center justify-center whitespace-nowrap px-[15px] focus:outline-none focus-visible:outline-none"
                >
                  FREE CONSULTATION
                </button>
              </li>
            </ul>
          </div>

          {/* Right Logo */}
          <div className="flex items-center pl-6 select-none shrink-0">
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex flex-col items-end select-none focus:outline-none focus-visible:outline-none cursor-pointer"
            >
              <img
                src={isScrolled ? "https://dd.mocup.in/assets/web/images/logo-icon.svg" : "https://dd.mocup.in/assets/web/images/designdot_logo.svg"}
                className={isScrolled ? "w-[70px] h-[70px] object-contain" : "w-[202px] h-[56px] object-contain"}
                alt="DesignDot"
              />
            </a>
          </div>

          {/* --- HIGH-FIDELITY MEGA MENU OVERLAYS --- */}

          {/* 1. Expertise Mega Menu */}
          {hoveredMenu === 'expertise' && (
            <div
              onMouseEnter={() => handleMouseEnter('expertise')}
              onMouseLeave={handleMouseLeave}
              onMouseDown={(e) => handleMegaTabClick(e, 'expertise')}
              className="fixed left-0 w-screen bg-[#fffbf8] border-t border-b border-slate-200/80 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-8 px-10 py-10 select-none text-left">
                {/* Left Column (col-span-4) */}
                <div className="col-span-4 border-r border-slate-200 pr-8">
                  <img
                    src={EXPERTISE_MENU.left.image}
                    alt="Expertise Development"
                    className="w-full h-40 object-cover rounded-lg mb-5 shadow-sm border border-slate-100"
                  />
                  <h3 className="font-extrabold text-[18px] tracking-wider text-slate-900 mb-1">
                    {EXPERTISE_MENU.left.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-semibold mb-6">
                    {EXPERTISE_MENU.left.subtitle}
                  </p>

                  <div className="flex flex-col gap-[24px]">
                    {EXPERTISE_MENU.left.items.map((item: any) => (
                      <div key={item.title} className="grid grid-cols-[auto_1fr] items-start gap-4">
                        <img src={item.icon} alt={item.title} className="w-[32px] h-[32px] mt-1" />
                        <div className="flex flex-col">
                          <span className="text-[13px] font-[800] tracking-widest text-slate-800 uppercase leading-snug">
                            {item.title}
                          </span>
                          <span className="text-[12px] text-slate-600 font-[400] leading-normal mt-1">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center Column (col-span-3) */}
                <div className="col-span-3 border-r-[2.5px] border-slate-200 pr-[32px] flex flex-col gap-4 select-none">
                  {EXPERTISE_MENU.center.categories.map((cat) => (
                    <button
                      key={cat}
                      onMouseEnter={() => setActiveExpertiseCategory(cat)}
                      onClick={() => setActiveExpertiseCategory(cat)}
                      className={`flex items-center justify-between w-full text-left px-4 py-[8px] font-bold text-[13px] tracking-widest uppercase rounded-[4px] transition-all duration-150 cursor-pointer ${activeExpertiseCategory === cat
                        ? 'bg-[#00539c] text-white shadow-sm'
                        : 'text-slate-800 hover:bg-slate-100/80 hover:text-[#00539c]'
                        }`}
                    >
                      <span>{cat}</span>
                      <span className={activeExpertiseCategory === cat ? 'text-white' : 'text-slate-400'}>
                        ▸
                      </span>
                    </button>
                  ))}
                </div>

                {/* Right Column (col-span-5) */}
                <div className="col-span-5 pl-4">
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="font-black text-[14px] tracking-widest text-[#00539c] uppercase">
                      {activeExpertiseCategory}
                    </h4>
                    <div className="flex-1 h-[1px] bg-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-[16px] pr-4">
                    {(EXPERTISE_MENU.center.subServices[activeExpertiseCategory as keyof typeof EXPERTISE_MENU.center.subServices] || []).map((serv) => (
                      <a
                        key={serv}
                        href="#"
                        className="text-[#333333] hover:text-[#00539c] transition-colors text-[13px] font-[200] leading-[24px] py-0.5"
                      >
                        {serv}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom line and All Services Button */}
                <div className="col-span-12 flex justify-center items-center mt-6 border-t border-slate-200/60 pt-6">
                  <div className="w-1/3 h-[1px] bg-slate-200" />
                  <a
                    onClick={triggerModal}
                    className="bg-[#f58331] text-white hover:bg-black transition-colors px-6 py-2 rounded-[4px] font-bold tracking-widest text-[9px] uppercase mx-4 select-none cursor-pointer"
                  >
                    All Services
                  </a>
                  <div className="w-1/3 h-[1px] bg-slate-200" />
                </div>

              </div>
            </div>
          )}

          {/* 2. AI Ingenuity Mega Menu */}
          {hoveredMenu === 'ai-ingenuity' && (
            <div
              onMouseEnter={() => handleMouseEnter('ai-ingenuity')}
              onMouseLeave={handleMouseLeave}
              onMouseDown={(e) => handleMegaTabClick(e, 'ai-ingenuity')}
              className="fixed left-0 w-screen bg-[#fffbf8] border-t border-b border-slate-200/80 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-8 px-10 py-10 select-none text-left">
                {/* Left Column (col-span-4) */}
                <div className="col-span-4 border-r border-slate-200 pr-8">
                  <img
                    src={AI_MENU.left.image}
                    alt="AI Innovation Models"
                    className="w-full h-40 object-cover rounded-lg mb-5 shadow-sm border border-slate-100"
                  />
                  <h3 className="font-extrabold text-[18px] tracking-wider text-slate-900 mb-1">
                    {AI_MENU.left.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-semibold mb-6">
                    {AI_MENU.left.subtitle}
                  </p>

                  <div className="flex flex-col gap-[24px]">
                    {AI_MENU.left.items.map((item: any) => (
                      <div key={item.title} className="grid grid-cols-[auto_1fr] items-start gap-4">
                        {item.icon ? (
                          <img src={item.icon} alt={item.title} className="w-[32px] h-[32px] mt-1" />
                        ) : (
                          <div className="w-[32px] h-[32px] bg-slate-100 rounded-lg flex items-center justify-center text-[#f58331] font-bold text-xs mt-1">
                            AI
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-[13px] font-[800] tracking-widest text-slate-800 uppercase leading-snug">
                            {item.title}
                          </span>
                          {item.desc && (
                            <span className="text-[12px] text-slate-600 font-[400] leading-normal mt-1">
                              {item.desc}
                            </span>
                          )}
                          {item.links && (
                            <div className="flex flex-col gap-1.5 mt-2">
                              {item.links.map((lnk: any) => (
                                <a
                                  key={lnk.label}
                                  href={lnk.href}
                                  className="text-[#00539c] font-bold text-[12px] tracking-widest hover:underline hover:text-[#f58331] transition-colors"
                                >
                                  {lnk.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center Column (col-span-3) */}
                <div className="col-span-3 border-r-[2.5px] border-slate-200 pr-[32px] flex flex-col gap-4 select-none">
                  {AI_MENU.center.categories.map((cat) => (
                    <button
                      key={cat}
                      onMouseEnter={() => setActiveAICategory(cat)}
                      onClick={() => setActiveAICategory(cat)}
                      className={`flex items-center justify-between w-full text-left px-4 py-[8px] font-bold text-[13px] tracking-widest uppercase rounded-[4px] transition-all duration-150 cursor-pointer ${activeAICategory === cat
                        ? 'bg-[#00539c] text-white shadow-sm'
                        : 'text-slate-800 hover:bg-slate-100/80 hover:text-[#00539c]'
                        }`}
                    >
                      <span>{cat}</span>
                      <span className={activeAICategory === cat ? 'text-white' : 'text-slate-400'}>
                        ▸
                      </span>
                    </button>
                  ))}
                </div>

                {/* Right Column (col-span-5) */}
                <div className="col-span-5 pl-4">
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="font-black text-[14px] tracking-widest text-[#00539c] uppercase">
                      {activeAICategory}
                    </h4>
                    <div className="flex-1 h-[1px] bg-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-[16px] pr-4">
                    {(AI_MENU.center.subServices[activeAICategory as keyof typeof AI_MENU.center.subServices] || []).map((serv) => (
                      <a
                        key={serv}
                        href="#"
                        className="text-[#333333] hover:text-[#00539c] transition-colors text-[13px] font-[200] leading-[24px] py-0.5"
                      >
                        {serv}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom line and All Services Button */}
                <div className="col-span-12 flex justify-center items-center mt-6 border-t border-slate-200/60 pt-6">
                  <div className="w-1/3 h-[1px] bg-slate-200" />
                  <a
                    onClick={triggerModal}
                    className="bg-[#f58331] text-white hover:bg-black transition-colors px-6 py-2 rounded-[4px] font-bold tracking-widest text-[9px] uppercase mx-4 select-none cursor-pointer"
                  >
                    All Services
                  </a>
                  <div className="w-1/3 h-[1px] bg-slate-200" />
                </div>

              </div>
            </div>
          )}

          {/* 3. Technology Mega Menu */}
          {hoveredMenu === 'technology' && (
            <div
              onMouseEnter={() => handleMouseEnter('technology')}
              onMouseLeave={handleMouseLeave}
              onMouseDown={(e) => handleMegaTabClick(e, 'technology')}
              className="fixed left-0 w-screen bg-[#fffbf8] border-t border-b border-slate-200/80 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-8 px-10 py-10 select-none text-left">
                {/* Left Column (col-span-4) */}
                <div className="col-span-4 border-r border-slate-200 pr-8">
                  <img
                    src={TECH_MENU.left.image}
                    alt="Technologies"
                    className="w-full h-40 object-cover rounded-lg mb-5 shadow-sm border border-slate-100"
                  />
                  <h3 className="font-extrabold text-[18px] tracking-wider text-slate-900 mb-1">
                    {TECH_MENU.left.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-semibold mb-6">
                    {TECH_MENU.left.subtitle}
                  </p>

                  <div className="flex flex-col gap-[24px]">
                    {TECH_MENU.left.items.map((item: any) => (
                      <div key={item.title} className="grid grid-cols-[auto_1fr] items-start gap-4">
                        {item.icon ? (
                          <img src={item.icon} alt={item.title} className="w-[32px] h-[32px] mt-1" />
                        ) : (
                          <div className="w-[32px] h-[32px] bg-slate-100 rounded-lg flex items-center justify-center text-[#f58331] font-bold text-xs mt-1">
                            ⚙
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-[13px] font-[800] tracking-widest text-slate-800 uppercase leading-snug">
                            {item.title}
                          </span>
                          {item.desc && (
                            <span className="text-[12px] text-slate-600 font-[400] leading-normal mt-1">
                              {item.desc}
                            </span>
                          )}
                          {item.links && (
                            <div className="flex flex-col gap-1.5 mt-2">
                              {item.links.map((lnk: any) => (
                                <a
                                  key={lnk.label}
                                  href={lnk.href}
                                  className="text-[#00539c] font-bold text-[12px] tracking-widest hover:underline hover:text-[#f58331] transition-colors"
                                >
                                  {lnk.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center Column (col-span-3) */}
                <div className="col-span-3 border-r-[2.5px] border-slate-200 pr-[32px] flex flex-col gap-4 select-none">
                  {TECH_MENU.center.categories.map((cat) => (
                    <button
                      key={cat}
                      onMouseEnter={() => setActiveTechCategory(cat)}
                      onClick={() => setActiveTechCategory(cat)}
                      className={`flex items-center justify-between w-full text-left px-4 py-[8px] font-bold text-[13px] tracking-widest uppercase rounded-[4px] transition-all duration-150 cursor-pointer ${activeTechCategory === cat
                        ? 'bg-[#00539c] text-white shadow-sm'
                        : 'text-slate-800 hover:bg-slate-100/80 hover:text-[#00539c]'
                        }`}
                    >
                      <span>{cat}</span>
                      <span className={activeTechCategory === cat ? 'text-white' : 'text-slate-400'}>
                        ▸
                      </span>
                    </button>
                  ))}
                </div>

                {/* Right Column (col-span-5) */}
                <div className="col-span-5 pl-4">
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="font-black text-[14px] tracking-widest text-[#00539c] uppercase">
                      {activeTechCategory}
                    </h4>
                    <div className="flex-1 h-[1px] bg-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-[16px] pr-4">
                    {(TECH_MENU.center.subServices[activeTechCategory as keyof typeof TECH_MENU.center.subServices] || []).map((serv) => (
                      <a
                        key={serv}
                        href="#"
                        className="text-[#333333] hover:text-[#00539c] transition-colors text-[13px] font-[200] leading-[24px] py-0.5"
                      >
                        {serv}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom line and All Services Button */}
                <div className="col-span-12 flex justify-center items-center mt-6 border-t border-slate-200/60 pt-6">
                  <div className="w-1/3 h-[1px] bg-slate-200" />
                  <a
                    onClick={triggerModal}
                    className="bg-[#f58331] text-white hover:bg-black transition-colors px-6 py-2 rounded-[4px] font-bold tracking-widest text-[9px] uppercase mx-4 select-none cursor-pointer"
                  >
                    All Services
                  </a>
                  <div className="w-1/3 h-[1px] bg-slate-200" />
                </div>

              </div>
            </div>
          )}

          {/* 4. Corporate Mega Menu */}
          {hoveredMenu === 'corporate' && (
            <div
              onMouseEnter={() => handleMouseEnter('corporate')}
              onMouseLeave={handleMouseLeave}
              onMouseDown={(e) => handleMegaTabClick(e, 'corporate')}
              className="fixed left-0 w-screen bg-[#fffbf8] border-t border-b border-slate-200/80 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-8 px-10 py-10 select-none text-left">
                {/* Left Column (col-span-4) */}
                <div className="col-span-4 border-r border-slate-200 pr-8">
                  <img
                    src={CORPORATE_MENU.left.image}
                    alt="Corporate Models"
                    className="w-full h-40 object-cover rounded-lg mb-5 shadow-sm border border-slate-100"
                  />
                  <h3 className="font-extrabold text-[18px] tracking-wider text-slate-900 mb-1">
                    {CORPORATE_MENU.left.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-semibold mb-6">
                    {CORPORATE_MENU.left.subtitle}
                  </p>

                  <div className="flex flex-col gap-[24px]">
                    {CORPORATE_MENU.left.items.map((item: any) => (
                      <div key={item.title} className="grid grid-cols-[auto_1fr] items-start gap-4">
                        <img src={item.icon} alt={item.title} className="w-[32px] h-[32px] mt-1" />
                        <div className="flex flex-col">
                          <span className="text-[13px] font-[800] tracking-widest text-slate-800 uppercase leading-snug">
                            {item.title}
                          </span>
                          <span className="text-[12px] text-slate-600 font-[400] leading-normal mt-1">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Columns (col-span-8) for Descriptions (ABOUT DESIGNDOT, INDUSTRIES, etc.) */}
                <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-6 pt-2">
                  {CORPORATE_MENU.columns.map((col) => (
                    <a
                      key={col.title}
                      href={col.href}
                      className="flex flex-col border-b border-slate-200/60 pb-4 group cursor-pointer"
                    >
                      <h4 className="font-extrabold text-[12px] tracking-widest text-[#00539c] uppercase mb-2 group-hover:text-[#f58331] transition-colors">
                        {col.title}
                      </h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed font-semibold">
                        {col.desc}
                      </p>
                    </a>
                  ))}
                </div>

                {/* Bottom Stats Banner */}
                <div className="col-span-12 bg-[#1b1c3a] border-t border-slate-700/60 p-5 px-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-center mt-6 text-white rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#f58331]">20 +</span>
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Years in Business</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#f58331]">5000 +</span>
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Clients Worldwide</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#f58331]">1700 +</span>
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Projects Executed</span>
                  </div>
                  <div className="flex flex-col max-w-[320px] text-[10px] text-slate-400 font-semibold">
                    <strong>Want to consult on a project?</strong>
                    <span>Get timeline estimate with free exploratory consultation.</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </header>

      {/* Mobile drawer canvas menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#131126] text-white flex flex-col animate-in slide-in-from-left duration-300">
          {/* Header of Mobile Menu */}
          <div className="flex justify-between items-center p-6 border-b border-slate-800">
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center font-display text-xl font-bold cursor-pointer"
            >
              <span className="text-white font-normal">design</span>
              <span className="text-[var(--accent)] font-extrabold">dot</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[var(--accent)] cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 select-none text-left">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.label} className="border-b border-slate-800 pb-4">
                {link.hasMegaMenu ? (
                  <div>
                    <button
                      onClick={() => handleMobileSectionToggle(link.key)}
                      className="flex justify-between items-center w-full font-bold uppercase tracking-widest text-sm hover:text-[var(--accent)] cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs">{mobileOpenSection === link.key ? '▲' : '▼'}</span>
                    </button>

                    {/* Collapsible Mobile Sub-items */}
                    {mobileOpenSection === link.key && (
                      <div className="mt-4 pl-4 space-y-4 animate-in fade-in duration-200">
                        {link.key === 'corporate' ? (
                          <>
                            {CORPORATE_MENU.columns.map(col => (
                              <a key={col.title} href={col.href} className="block text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider py-1">
                                {col.title}
                              </a>
                            ))}
                          </>
                        ) : (
                          <>
                            {/* Render links based on menu categories */}
                            {(link.key === 'expertise' ? EXPERTISE_MENU : link.key === 'ai-ingenuity' ? AI_MENU : TECH_MENU).center.categories.map(cat => (
                              <div key={cat} className="space-y-2">
                                <button
                                  onClick={() => handleMobileSubSectionToggle(cat)}
                                  className="flex justify-between items-center w-full text-xs font-extrabold text-slate-300 uppercase tracking-widest py-1 hover:text-white"
                                >
                                  <span>{cat}</span>
                                  <span>{mobileOpenSubSection === cat ? '−' : '+'}</span>
                                </button>
                                {mobileOpenSubSection === cat && (
                                  <div className="pl-4 space-y-2 text-[11px] text-slate-400 uppercase tracking-wider font-semibold animate-in fade-in duration-150">
                                    {((((link.key === 'expertise' ? EXPERTISE_MENU : link.key === 'ai-ingenuity' ? AI_MENU : TECH_MENU).center.subServices) as Record<string, string[]>)[cat] || []).map((sub: string) => (
                                      <a key={sub} href="#" className="block py-1 hover:text-white">{sub}</a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-bold uppercase tracking-widest text-sm hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Footer of Mobile Menu */}
          <div className="bg-[#1b1c3a] border-t border-slate-800 p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Phone size={14} className="text-[var(--accent)]" />
              <span>+91 9873282812 / +1 469-441-0125</span>
            </div>
            <button
              onClick={triggerModal}
              className="w-full bg-[#f58331] hover:bg-[#d56113] text-white py-3 rounded-lg text-xs font-bold tracking-wider cursor-pointer shadow-md"
            >
              FREE CONSULTATION
            </button>
          </div>
        </div>
      )}

      {/* Consultation Popup Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
