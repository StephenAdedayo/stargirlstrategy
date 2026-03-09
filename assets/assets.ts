import service_hero from "./service_hero.webp"
import cta_image from "./cta_image.webp"
import contact_hero from "./contact_hero.webp"
import quote_hero from "./quote_hero.webp"
import work1 from "./work1.webp"
import work2 from "./work2.webp"
import stargirl from './stargirl.png'
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { MdCampaign } from 'react-icons/md';
import { FaPalette, FaPenFancy, FaGlobe, FaVideo } from 'react-icons/fa';
import { IconType } from "react-icons"
import { FaMoneyBillWave, FaHome, FaChartLine } from 'react-icons/fa';


interface Service {
  number: string;
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  link: string;
}

interface Benefits {
  icon : IconType,
  title : string,
  description : string,

}

export const assets = {
    service_hero,
    cta_image,
    contact_hero,
    quote_hero,
    work1,
    work2,
    stargirl
}


export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 40000,
    currency: "₦",
    duration: "per month",
    description: "Perfect for small brands looking to establish a professional presence.",
    features: [
      "2 social platforms",
      "12 posts per month",
      "Basic content creation",
      "Monthly reporting",
      "Community management"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    id: "growth",
    name: "Growth",
    price: 80000,
    currency: "₦",
    duration: "per month",
    description: "Ideal for scaling businesses that need a dedicated strategy.",
    features: [
      "4 social platforms",
      "24 posts per month",
      "Premium content creation",
      "Strategy & consulting",
      "Advanced analytics",
      "Dedicated manager"
    ],
    popular: true,
    buttonText: "Get Started"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    currency: "",
    duration: "tailored to you",
    description: "Full-service management for large-scale operations.",
    features: [
      "Unlimited platforms",
      "Custom posting schedule",
      "Full-service management",
      "Executive strategy",
      "Priority support",
      "Custom integrations"
    ],
    popular: false,
    buttonText: "Contact Us"
  }
];


export const faqData = [
  {
    question: "What platforms do you manage?",
    answer: "We manage all major platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and YouTube."
  },
  {
    question: "Do you create content?",
    answer: "Yes! We have an in-house team of designers, videographers, and copywriters who create all content."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see measurable improvements within 30-60 days, with significant growth by month 3."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, our contracts are month-to-month with no long-term commitment required."
  }
];

export const services : Service[] = [
  {
    number: "01",
    icon: HiDevicePhoneMobile ,
    title: "Social Media Management",
    description: "Comprehensive social media management across all platforms. We create, schedule, and engage to grow your online presence.",
    features: [
      "Daily content posting",
      "Community engagement",
      "Content calendar planning",
      "Platform optimization",
      "Monthly analytics reports"
    ],
    link: "https://tally.so/r/A7Jx9z"
  },
  {
    number: "02",
    icon: MdCampaign  ,
    title: "Sponsored Ads",
    description: "Strategic paid advertising campaigns that maximize ROI and reach your target audience effectively.",
    features: [
      "Facebook & Instagram ads",
      "Google Ads campaigns",
      "Audience targeting",
      "Ad creative design",
      "Performance optimization"
    ],
    link: "https://tally.so/r/A7Jx9z"
  },
  {
    number: "03",
    icon: FaPalette  ,
    title: "Graphics Design",
    description: "Eye-catching visual designs that capture attention and communicate your brand message effectively.",
    features: [
      "Social media graphics",
      "Brand identity design",
      "Marketing materials",
      "Infographics",
      "Print design"
    ],
    link: "https://tally.so/r/A7Jx9z"
  },
  {
    number: "04",
    icon: FaPenFancy  ,
    title: "Copywriting",
    description: "Compelling, conversion-focused copy that resonates with your audience and drives action.",
    features: [
      "Social media captions",
      "Website content",
      "Ad copywriting",
      "Email campaigns",
      "Blog articles"
    ],
    link: "https://tally.so/r/A7Jx9z"
  },
  {
    number: "05",
    icon: FaGlobe ,
    title: "Website Design & Management",
    description: "Professional websites that look stunning and convert visitors into customers.",
    features: [
      "Custom website design",
      "Responsive development",
      "SEO optimization",
      "Website maintenance",
      "Performance monitoring"
    ],
    link: "https://tally.so/r/A7Jx9z"
  },
  {
    number: "06",
    icon: FaVideo,
    title: "Video Shoot & Editing",
    description: "Professional video production that tells your brand story and engages your audience.",
    features: [
      "Professional videography",
      "Video editing",
      "Motion graphics",
      "Social media reels",
      "Corporate videos"
    ],
    link: "https://tally.so/r/A7Jx9z"
  }
];

export const benefits :Benefits[] = [
    {
  icon: FaMoneyBillWave ,
  title: "Competitive Salary",
  description: "Top-tier compensation with performance bonuses"
},
{
  icon: FaHome ,
  title: "Remote First",
  description: "Work from anywhere in the world"
},
{
  icon: FaChartLine,
  title: "Growth Opportunities",
  description: "Continuous learning and career development"
}
  ];
