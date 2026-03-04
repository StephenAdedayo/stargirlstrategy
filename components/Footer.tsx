import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Services", "Quote", "Contact"]
        },
        {
            title: "Services",
            links: [
                "Social Media Management",
                 "Sponsored Ads",
                "Graphics Design",
                "Copywriting",
                "Website Design & Management",
                "Video Shoot & Editing"
            ]

        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];

    const year = new Date().getFullYear()

    return (
        <div className="px-6 md:px-16 lg:px-20 bg-nav">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-14 border-b border-gray-500/30  text-white/70">
                <div>
          <Image src={assets.stargirl}  className='w-20 aspect-auto'  alt='logo'/>
                    <p className="max-w-102.5 text-sm mt-4">We're a full-service social media agency dedicated to helping brands grow their online presence through strategic content, community building, and data-driven insights.</p>
                </div>
                <div className="flex flex-wrap md:flex-row flex-col justify-between w-full md:w-[45%] md:gap-5 gap-8">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold font-ovo text-base text-[#fa7a1e] md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={`/${i === 0 ? "/" : link }`} className="hover:underline transition">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm  text-white/70">
              © {year} StargirlStrategy. All rights reserved.  
            </p>
        </div>
    );
};

export default Footer