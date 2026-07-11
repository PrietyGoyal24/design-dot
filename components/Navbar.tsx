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
        'Visual Identity',
        'Public Relations',
        'Outdoor Advertising',
        'Media Planning & Buying',
        'Corporate Communication',
        'Content Strategy',
        'Market Research & Consumer Study',
        'Illustration / Sketch Design',
        'Motion & Video Creation'
      ],
      'DIGITAL MARKETING': [
        'Search Engine Optimization',
        'Paid Advertising',
        'Social Media Marketing',
        'Specialized ECommerce SEO',
        'Content Marketing',
        'Conversion Rate Optimization',
        'Mobile Advertising',
        'Brand Management',
        'Influencer Marketing',
        'Internet Advertising'
      ],
      'DIGITAL TRANSFORMATION': [
        'Internet Of Things',
        'Wearable App Development',
        'Enterprise Solutions',
        'IT Consulting',
        'Software Consulting',
        'Enterprise Mobility Services',
        'AI Marketplace Engine',
        'Digital Product Engineering'
      ],
      'EMERGING TECHNOLOGIES': [
        'AI Chatbot Development',
        'DApps Development',
        'AR/VR Development',
        'NFT Marketplace',
        'Encrypted Video Streaming',
        'Metaverse',
        'IBeacon App Development',
        'Cryptocurrency Wallet',
        'IoT Development',
        'Point Of Sales Application',
        'IWatch App Development',
        'Warehouse Management System',
        'Blockchain'
      ],
      'QUALITY & SUPPORT': [
        'Quality Assurance Testing',
        'Support'
      ],
      'SOLUTIONS': [
        'Enterprise Solution',
        'Marketing & Advertising',
        'Business Intelligence',
        'Kiosk Software',
        'Portal/Portlet Development',
        'Operations Management',
        'CMS',
        'Supply Chain Management',
        'CRM Application',
        'Warehouse Management',
        'E-Commerce Application',
        'Enterprise Asset Management',
        'Point Of Sales Application',
        'Fleet Management',
        'HRM Application',
        'Vendor Management',
        'Mobile Application Solution',
        'Project Management',
        'ERP On Demand Designing Solution',
        'Document Management',
        'Ecommerce',
        'ELearning Solutions'
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
  { label: 'Design Build', key: 'design-build', hasMegaMenu: false, href: '/services/design-build' },
  { label: 'Technology', key: 'technology', hasMegaMenu: true },
  { label: 'Corporate', key: 'corporate', hasMegaMenu: true },
  { label: 'Contact Us', key: 'contact-us', hasMegaMenu: false, href: '/contact-us' }
];

interface NavbarProps {
  theme?: 'light' | 'dark';
}

export default function Navbar({ theme = 'dark' }: NavbarProps) {
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
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 10) {
        setIsScrolled(false);
      } else if (scrollDelta > 5) {
        setIsScrolled(true);
      } else if (scrollDelta < -5) {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <span className={isActive ? (theme === 'light' ? 'text-[#f58331]' : 'text-white') : (theme === 'light' ? 'text-[#111111]' : 'text-[#B2C5D4] transition-colors')}>AI&nbsp;</span>
            <span className="bg-gradient-to-r from-[#D1C0AE] to-[#F67E29] text-transparent bg-clip-text transition-colors inline-block">INGENUITY</span>
            <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] ${theme === 'light' ? 'bg-[#f58331]' : 'bg-white'} transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          </span>
        </span>
      );
    }

    const displayLabel = label.toUpperCase();
    return (
      <span className="relative flex items-center h-full focus:outline-none focus-visible:outline-none select-none">
        <span className={`relative ${theme === 'light' ? (isActive ? 'text-[#f58331]' : 'text-[#111111] hover:text-[#f58331]') : 'text-white'}`}>
          {displayLabel}
          <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] ${theme === 'light' ? 'bg-[#f58331]' : 'bg-white'} transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
        </span>
      </span>
    );
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 ${theme === 'light' ? 'bg-[#fffbf8]' : 'bg-[var(--background)]'} py-0 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled ? 'shadow-lg border-b border-black/5' : ''}`}>
        {/* Main Navbar (Always Compact Single-Row) */}
        <div className={`w-full px-[30px] flex justify-between items-center relative transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled ? 'h-[72px]' : 'h-[96px] pb-[16px]'}`}>

          {/* Left/Middle Group: Navigation links, Support and Consultation button */}
          <div className="flex items-center gap-[25px] h-full">
            {/* Hamburger Menu trigger (hidden on desktop) */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`flex items-center gap-2 ${theme === 'light' ? 'text-[#111111]' : 'text-white'} hover:text-[#f58331] font-bold text-xs tracking-wider cursor-pointer focus:outline-none focus-visible:outline-none font-display`}
              >
                <Menu size={16} />
                <span>MENU</span>
              </button>
            </div>

            {/* Navigation Links and Support/Consultation */}
            <ul
              className={`desk-menu navbar px-0 hidden lg:flex items-center gap-[25px] h-full ${isScrolled ? '!hidden' : ''}`}
              style={{
                color: '#1A1A1A',
                fontFamily: 'GTWalsheimPro-Bold, sans-serif',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: '8px 0px',
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
                <div className={`flex items-center gap-2.5 h-[34px] ${theme === 'light' ? 'text-[#111111]' : 'text-white'}`}>
                  <img
                    src="https://dd.mocup.in/assets/web/images/all/support-icon.svg"
                    alt="Support Icon"
                    className={`w-[34px] h-[34px] ${theme === 'light' ? 'invert' : ''}`}
                  />
                  <span className="whitespace-nowrap font-bold text-[12px]">+91 9873282812 / +1 4694410125</span>
                </div>

                {/* Orange consultation button */}
                <button
                  onClick={(e) => {
                    triggerModal();
                    if (typeof window !== 'undefined' && (window as any).cycleTheme) {
                      (window as any).cycleTheme(e.clientX, e.clientY);
                    }
                  }}
                  className="bg-[#f58331] text-white w-auto h-[36px] rounded-[4px] uppercase cursor-pointer flex items-center justify-center whitespace-nowrap px-[20px] focus:outline-none focus-visible:outline-none font-bold text-[12px]"
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
              className="fixed left-0 w-screen bg-[var(--background)] px-[30px] border-b border-white/5 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="w-full flex flex-col select-none text-left bg-[#fffbf8] shadow-xl">
                <div className="w-full grid grid-cols-[1.3fr_1fr_1.7fr] gap-0 px-[40px] py-[40px]">
                  {/* Left Column */}
                  <div className="pr-[40px]">
                    <img
                      src={EXPERTISE_MENU.left.image}
                      alt="Expertise Development"
                      className="w-full h-[220px] object-cover mb-[20px]"
                    />
                    <h3 className="font-extrabold text-[20px] tracking-wide text-[#111] mb-[4px] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      ENGAGEMENT MODELS
                    </h3>
                    <p className="text-[13px] mb-[30px]">
                      <span className="font-extrabold text-[#111]" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Hiring Software Developers.</span>
                      <span className="text-slate-500 font-medium"> It Only Takes A Few Clicks</span>
                    </p>

                    <div className="flex flex-col gap-[24px]">
                      {EXPERTISE_MENU.left.items.map((item: any) => (
                        <div key={item.title} className="flex items-start gap-[16px]">
                          <img src={item.icon} alt={item.title} className="w-[30px] h-[30px] shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[13px] font-extrabold tracking-wide text-[#111] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                              {item.title}
                            </span>
                            <span className="text-[13px] text-slate-500 font-medium mt-[4px] capitalize">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column */}
                  <div className="border-r-[1.5px] border-[#00539c] pr-[24px] flex flex-col justify-between">
                    <div className="flex flex-col gap-[2px]">
                      {EXPERTISE_MENU.center.categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveExpertiseCategory(cat)}
                          className="flex items-center justify-between w-full text-left font-extrabold text-[12px] tracking-widest uppercase transition-colors cursor-pointer"
                          style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                        >
                          <span className={`px-[16px] py-[8px] rounded-[4px] ${
                            activeExpertiseCategory === cat
                              ? 'bg-[#00539c] text-white'
                              : 'text-[#00539c] hover:bg-slate-50'
                          }`}>
                            {cat}
                          </span>
                          <span className="text-[7px] text-[#00539c] pr-[16px]">
                            ▶
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Bottom line and All Services Button */}
                    <div className="flex items-center mt-[30px] pl-[16px]">
                      <div className="w-[80px] h-[1.5px] bg-slate-300 mr-[12px]" />
                      <a
                        onClick={triggerModal}
                        className="bg-[#f58331] text-white hover:bg-black transition-colors px-[12px] py-[4px] font-bold tracking-wider text-[9px] uppercase select-none cursor-pointer"
                        style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                      >
                        All Services
                      </a>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="pl-[30px]">
                    <div className="flex items-center gap-[16px] mb-[20px]">
                      <h4 className="font-extrabold text-[15px] tracking-wide text-[#00539c] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                        {activeExpertiseCategory}
                      </h4>
                      <div className="flex-1 h-[1.5px] bg-[#00539c]" />
                    </div>
                    <div className={['SOLUTIONS', 'EMERGING TECHNOLOGIES'].includes(activeExpertiseCategory) ? "grid grid-cols-2 gap-x-[30px] gap-y-[16px]" : "flex flex-col gap-[16px]"}>
                      {(EXPERTISE_MENU.center.subServices[activeExpertiseCategory as keyof typeof EXPERTISE_MENU.center.subServices] || []).map((serv) => (
                        <a
                          key={serv}
                          href="#"
                          className="text-[#00539c] hover:underline text-[13.5px] font-medium tracking-wide"
                        >
                          {serv}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Full-width bottom banner */}
                <div 
                  className="w-full text-white flex items-center justify-between px-[40px] py-[16px]"
                  style={{
                    background: 'linear-gradient(90deg, #0e2038 0%, #d87019 45%, #e27a1e 55%, #423d38 100%)',
                  }}
                >
                  {/* Left: Stats */}
                  <div className="flex items-center gap-[60px] pl-[10px]">
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>20 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">YEARS IN BUSINESS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>5000 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">CLIENTS WORLDWIDE</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>1700 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">PROJECT EXECUTED</span>
                    </div>
                  </div>

                  {/* Right: Text and Button */}
                  <div className="flex items-center gap-[24px]">
                    <div className="flex flex-col text-right max-w-[540px]">
                      <span className="text-[14px] font-extrabold mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Want to consult with us on a project but need a quote? For an estimate, click this button.</span>
                      <span className="text-[11px] text-slate-100 font-medium">Start with a free exploratory call—we'll listen to your needs and suggest tailored strategies, obligation-free.</span>
                    </div>
                    {/* Empty spacer to reserve space for the global floating WhatsApp button */}
                    <div className="w-[48px] h-[48px] shrink-0" />
                  </div>
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
              className="fixed left-0 w-screen bg-[var(--background)] px-[30px] border-b border-white/5 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="w-full flex flex-col select-none text-left bg-[#fffbf8] shadow-xl">
                <div className="w-full grid grid-cols-[1.3fr_1fr_1.7fr] gap-0 px-[40px] py-[40px]">
                  {/* Left Column */}
                  <div className="pr-[40px]">
                    <img
                      src={AI_MENU.left.image}
                      alt="AI Innovation Models"
                      className="w-full h-[220px] object-cover mb-[20px]"
                    />
                    <h3 className="font-extrabold text-[20px] tracking-wide text-[#111] mb-[4px] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      {AI_MENU.left.title}
                    </h3>
                    <p className="text-[13px] mb-[30px]">
                      <span className="font-extrabold text-[#111]" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Hiring Software Developers.</span>
                      <span className="text-slate-500 font-medium"> It Only Takes A Few Clicks</span>
                    </p>

                    <div className="flex flex-col gap-[24px]">
                      {AI_MENU.left.items.map((item: any) => (
                        <div key={item.title} className="flex items-start gap-[16px]">
                          {item.icon ? (
                            <img src={item.icon} alt={item.title} className="w-[30px] h-[30px] shrink-0" />
                          ) : (
                            <div className="w-[30px] h-[30px] shrink-0" />
                          )}
                          <div className="flex flex-col">
                            <span className="text-[13px] font-extrabold tracking-wide text-[#111] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                              {item.title}
                            </span>
                            {item.desc && (
                              <span className="text-[13px] text-slate-500 font-medium mt-[4px] capitalize">
                                {item.desc}
                              </span>
                            )}
                            {item.links && (
                              <div className="flex flex-col gap-[6px] mt-[8px]">
                                {item.links.map((lnk: any) => (
                                  <a
                                    key={lnk.label}
                                    href={lnk.href}
                                    className="text-slate-500 hover:text-[#f58331] text-[13px] font-medium transition-colors"
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

                  {/* Center Column */}
                  <div className="border-r-[1.5px] border-[#00539c] pr-[24px] flex flex-col justify-between">
                    <div className="flex flex-col gap-[2px]">
                      {AI_MENU.center.categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveAICategory(cat)}
                          className="flex items-center justify-between w-full text-left font-extrabold text-[12px] tracking-widest uppercase transition-colors cursor-pointer"
                          style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                        >
                          <span className={`px-[16px] py-[8px] rounded-[4px] ${
                            activeAICategory === cat
                              ? 'bg-[#00539c] text-white'
                              : 'text-[#00539c] hover:bg-slate-50'
                          }`}>
                            {cat}
                          </span>
                          <span className="text-[7px] text-[#00539c] pr-[16px]">
                            ▶
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Bottom line and All Services Button */}
                    <div className="flex items-center mt-[30px] pl-[16px]">
                      <div className="w-[80px] h-[1.5px] bg-slate-300 mr-[12px]" />
                      <a
                        onClick={triggerModal}
                        className="bg-[#f58331] text-white hover:bg-black transition-colors px-[12px] py-[4px] font-bold tracking-wider text-[9px] uppercase select-none cursor-pointer"
                        style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                      >
                        All Services
                      </a>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="pl-[30px]">
                    <div className="flex items-center gap-[16px] mb-[20px]">
                      <h4 className="font-extrabold text-[15px] tracking-wide text-[#00539c] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                        {activeAICategory}
                      </h4>
                      <div className="flex-1 h-[1.5px] bg-[#00539c]" />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      {(AI_MENU.center.subServices[activeAICategory as keyof typeof AI_MENU.center.subServices] || []).map((serv) => (
                        <a
                          key={serv}
                          href="#"
                          className="text-[#00539c] hover:underline text-[13.5px] font-medium tracking-wide"
                        >
                          {serv}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Full-width bottom banner */}
                <div 
                  className="w-full text-white flex items-center justify-between px-[40px] py-[16px]"
                  style={{
                    background: 'linear-gradient(90deg, #0e2038 0%, #d87019 45%, #e27a1e 55%, #423d38 100%)',
                  }}
                >
                  {/* Left: Stats */}
                  <div className="flex items-center gap-[60px] pl-[10px]">
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>20 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">YEARS IN BUSINESS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>5000 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">CLIENTS WORLDWIDE</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>1700 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">PROJECT EXECUTED</span>
                    </div>
                  </div>

                  {/* Right: Text and Button */}
                  <div className="flex items-center gap-[24px]">
                    <div className="flex flex-col text-right max-w-[540px]">
                      <span className="text-[14px] font-extrabold mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Want to consult with us on a project but need a quote? For an estimate, click this button.</span>
                      <span className="text-[11px] text-slate-100 font-medium">Start with a free exploratory call—we'll listen to your needs and suggest tailored strategies, obligation-free.</span>
                    </div>
                    {/* Empty spacer to reserve space for the global floating WhatsApp button */}
                    <div className="w-[48px] h-[48px] shrink-0" />
                  </div>
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
              className="fixed left-0 w-screen bg-[var(--background)] px-[30px] border-b border-white/5 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="w-full flex flex-col select-none text-left bg-[#fffbf8] shadow-xl">
                <div className="w-full grid grid-cols-[1.3fr_1fr_1.7fr] gap-0 px-[40px] py-[40px]">
                  {/* Left Column */}
                  <div className="pr-[40px]">
                    <img
                      src={TECH_MENU.left.image}
                      alt="Technologies"
                      className="w-full h-[220px] object-cover mb-[20px]"
                    />
                    <h3 className="font-extrabold text-[20px] tracking-wide text-[#111] mb-[4px] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      {TECH_MENU.left.title}
                    </h3>
                    <p className="text-[13px] mb-[30px]">
                      <span className="font-extrabold text-[#111]" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Hiring Software Developers.</span>
                      <span className="text-slate-500 font-medium"> It Only Takes A Few Clicks</span>
                    </p>

                    <div className="flex flex-col gap-[24px]">
                      {TECH_MENU.left.items.map((item: any) => (
                        <div key={item.title} className="flex items-start gap-[16px]">
                          {item.icon ? (
                            <img src={item.icon} alt={item.title} className="w-[30px] h-[30px] shrink-0" />
                          ) : (
                            <div className="w-[30px] h-[30px] shrink-0" />
                          )}
                          <div className="flex flex-col">
                            <span className="text-[13px] font-extrabold tracking-wide text-[#111] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                              {item.title}
                            </span>
                            {item.desc && (
                              <span className="text-[13px] text-slate-500 font-medium mt-[4px] capitalize">
                                {item.desc}
                              </span>
                            )}
                            {item.links && (
                              <div className="flex flex-col gap-[6px] mt-[8px]">
                                {item.links.map((lnk: any) => (
                                  <a
                                    key={lnk.label}
                                    href={lnk.href}
                                    className="text-slate-500 hover:text-[#f58331] text-[13px] font-medium transition-colors"
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

                  {/* Center Column */}
                  <div className="border-r-[1.5px] border-[#00539c] pr-[24px] flex flex-col justify-between">
                    <div className="flex flex-col gap-[2px]">
                      {TECH_MENU.center.categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveTechCategory(cat)}
                          className="flex items-center justify-between w-full text-left font-extrabold text-[12px] tracking-widest uppercase transition-colors cursor-pointer"
                          style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                        >
                          <span className={`px-[16px] py-[8px] rounded-[4px] ${
                            activeTechCategory === cat
                              ? 'bg-[#00539c] text-white'
                              : 'text-[#00539c] hover:bg-slate-50'
                          }`}>
                            {cat}
                          </span>
                          <span className="text-[7px] text-[#00539c] pr-[16px]">
                            ▶
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Bottom line and All Services Button */}
                    <div className="flex items-center mt-[30px] pl-[16px]">
                      <div className="w-[80px] h-[1.5px] bg-slate-300 mr-[12px]" />
                      <a
                        onClick={triggerModal}
                        className="bg-[#f58331] text-white hover:bg-black transition-colors px-[12px] py-[4px] font-bold tracking-wider text-[9px] uppercase select-none cursor-pointer"
                        style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                      >
                        All Services
                      </a>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="pl-[30px]">
                    <div className="flex items-center gap-[16px] mb-[20px]">
                      <h4 className="font-extrabold text-[15px] tracking-wide text-[#00539c] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                        {activeTechCategory}
                      </h4>
                      <div className="flex-1 h-[1.5px] bg-[#00539c]" />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      {(TECH_MENU.center.subServices[activeTechCategory as keyof typeof TECH_MENU.center.subServices] || []).map((serv) => (
                        <a
                          key={serv}
                          href="#"
                          className="text-[#00539c] hover:underline text-[13.5px] font-medium tracking-wide"
                        >
                          {serv}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Full-width bottom banner */}
                <div 
                  className="w-full text-white flex items-center justify-between px-[40px] py-[16px]"
                  style={{
                    background: 'linear-gradient(90deg, #0e2038 0%, #d87019 45%, #e27a1e 55%, #423d38 100%)',
                  }}
                >
                  {/* Left: Stats */}
                  <div className="flex items-center gap-[60px] pl-[10px]">
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>20 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">YEARS IN BUSINESS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>5000 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">CLIENTS WORLDWIDE</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>1700 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">PROJECT EXECUTED</span>
                    </div>
                  </div>

                  {/* Right: Text and Button */}
                  <div className="flex items-center gap-[24px]">
                    <div className="flex flex-col text-right max-w-[540px]">
                      <span className="text-[14px] font-extrabold mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Want to consult with us on a project but need a quote? For an estimate, click this button.</span>
                      <span className="text-[11px] text-slate-100 font-medium">Start with a free exploratory call—we'll listen to your needs and suggest tailored strategies, obligation-free.</span>
                    </div>
                    {/* Empty spacer to reserve space for the global floating WhatsApp button */}
                    <div className="w-[48px] h-[48px] shrink-0" />
                  </div>
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
              className="fixed left-0 w-screen bg-[var(--background)] px-[30px] border-b border-white/5 shadow-2xl z-50 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-200 top-[72px]"
            >
              <div className="w-full flex flex-col select-none text-left bg-[#fffbf8] shadow-xl">
                <div className="w-full grid grid-cols-[1.3fr_2.7fr] gap-0 px-[40px] py-[40px]">
                  {/* Left Column */}
                  <div className="pr-[40px]">
                    <img
                      src={CORPORATE_MENU.left.image}
                      alt="Corporate Models"
                      className="w-full h-[220px] object-cover mb-[20px]"
                    />
                    <h3 className="font-extrabold text-[20px] tracking-wide text-[#111] mb-[4px] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      {CORPORATE_MENU.left.title}
                    </h3>
                    <p className="text-[13px] mb-[30px]">
                      <span className="font-extrabold text-[#111]" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Hiring Software Developers.</span>
                      <span className="text-slate-500 font-medium"> It Only Takes A Few Clicks</span>
                    </p>

                    <div className="flex flex-col gap-[24px]">
                      {CORPORATE_MENU.left.items.map((item: any) => (
                        <div key={item.title} className="flex items-start gap-[16px]">
                          {item.icon ? (
                            <img src={item.icon} alt={item.title} className="w-[30px] h-[30px] shrink-0" />
                          ) : (
                            <div className="w-[30px] h-[30px] bg-slate-100 flex items-center justify-center text-[#f58331] font-bold text-[10px] shrink-0 border border-slate-200 rounded-full">
                              C
                            </div>
                          )}
                          <div className="flex flex-col">
                            <span className="text-[13px] font-extrabold tracking-wide text-[#111] uppercase" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                              {item.title}
                            </span>
                            {item.desc && (
                              <span className="text-[13px] text-slate-500 font-medium mt-[4px] capitalize">
                                {item.desc}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="pl-[20px] grid grid-cols-2 gap-x-[60px] gap-y-[30px] content-start">
                    {CORPORATE_MENU.columns.map((col) => (
                      <a
                        key={col.title}
                        href={col.href}
                        className="flex flex-col border-b-[1.5px] border-[#00539c] pb-[16px] cursor-pointer"
                      >
                        <h4 className="font-extrabold text-[15px] tracking-wide text-[#00539c] uppercase mb-[8px]" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                          {col.title}
                        </h4>
                        <p className="text-slate-500 text-[13.5px] font-medium leading-[1.6]">
                          {col.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
                {/* Full-width bottom banner */}
                <div 
                  className="w-full text-white flex items-center justify-between px-[40px] py-[16px]"
                  style={{
                    background: 'linear-gradient(90deg, #0e2038 0%, #d87019 45%, #e27a1e 55%, #423d38 100%)',
                  }}
                >
                  {/* Left: Stats */}
                  <div className="flex items-center gap-[60px] pl-[10px]">
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>20 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">YEARS IN BUSINESS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>5000 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">CLIENTS WORLDWIDE</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[28px] font-extrabold leading-none mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>1700 +</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">PROJECT EXECUTED</span>
                    </div>
                  </div>

                  {/* Right: Text and Button */}
                  <div className="flex items-center gap-[24px]">
                    <div className="flex flex-col text-right max-w-[540px]">
                      <span className="text-[14px] font-extrabold mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Want to consult with us on a project but need a quote? For an estimate, click this button.</span>
                      <span className="text-[11px] text-slate-100 font-medium">Start with a free exploratory call—we'll listen to your needs and suggest tailored strategies, obligation-free.</span>
                    </div>
                    {/* Empty spacer to reserve space for the global floating WhatsApp button */}
                    <div className="w-[48px] h-[48px] shrink-0" />
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
