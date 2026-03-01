import service_hero from "./service_hero.webp"
import cta_image from "./cta_image.webp"
import contact_hero from "./contact_hero.webp"
import quote_hero from "./quote_hero.webp"
import work1 from "./work1.webp"
import work2 from "./work2.webp"

export const assets = {
    service_hero,
    cta_image,
    contact_hero,
    quote_hero,
    work1,
    work2
}


export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 2500,
    currency: "$",
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
    price: 5000,
    currency: "$",
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