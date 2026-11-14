import {
    Code2,
    // GradutionCap,
    // Briefcase,
    // Award,
    // Rocket,
    Heart,
    Coffee,
    BookOpen,
    // Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiX } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png"
import PROJECT_IMG_2 from "../assets/images/project-2 copy 2.png"
import PROJECT_IMG_3 from "../assets/images/project-3 copy 3.png"
// import PROJECT_IMG_4 from "../assets/images/project-4 copy 4.png"
// import PROJECT_IMG_5 from "../assets/images/project-5 copy.png"
import { color, number } from "framer-motion";
import { col, label, title } from "framer-motion/client";
// import {FiGithub, FiLinkedin, FiX} from "lucide-react/icons/";


export const SKILL_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 90, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-blue-600" },
            { name: "Nex.js", level: 88, color: "bg-gray-800" },
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-600" },
            { name: "TypeScript", level: 90, color: "bg-pink-600" },

        ],
    },

    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side Solution",
        skills: [
            { name: "Node.js", level: 90, color: "bg-green-500 " },
            { name: "Express.js", level: 88, color: "bg-gray-700 " },
            { name: "REST APIs", level: 92, color: "bg-green-500 " },
        ]
    },

    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        skills: [
            { name: "MongoDB", level: 88, color: "bg-green-600" },
            { name: "Firebase", level: 88, color: "bg-yellow-600" },

        ],
    },

    {
        title: "DevOps",
        icon: Cloud,
        description: "Deploying and scailing application",
        skills: [
            { name: "AWS", level: 78, color: "bg-orange-600" }
        ],
    },

];

export const TECH_STACK = [
    "HTML",
    "CSS",
    "Javascript",
];

export const START = [

    { number: "50", label: "Projects Complete" },
    { number: "3+", label: "Years Experience" },
    { number: "20", label: "Technologies" },
    { number: "100", label: "Clientes Satisfaction" },

];

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with advanced filltering, payment integration, and real-time inventor",
        image: PROJECT_IMG_1,
        tags: ["React", "Tailwind", "Framer motion"],
        liverUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full-stack",
    },
    {
        id: 2,
        title: "Todo-List",
        description: "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        image: PROJECT_IMG_2,
        tags: ["React, html ,Css"],
        githubUrl: "#",
        featured: true,
        categoryf: "Full-Stack",
    },
    {
        id: 3,
        title: "netfilx-Clone",
        description: "dddddddddddddddddddddddddd",
        images: PROJECT_IMG_3,
        tags: ["React, html, css"],
        category: "Web App"
    }


];

export const JOURNEY_STEPS = [
    {
        year: "2025",
        title: "Started Coding Journey",
        Company: "Self-taught",
        description:
            ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
        icon: Code2,
        color: "bg-blue-500",

    },

];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: ">>>>>>>>>>>>>>>>>"

    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: ">>>>>>>>>>>>>>>>"
    },
    {
        icon: BookOpen,
        title: "Continous Learning",
        description: "<<<<<<<<<<<<<<<<<<",

    },
];

export const SOCIAL_LINKS = [
    {
        names: "Github",
        icon: FiGithub,
        url: "#",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "#",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Twitter",
        icon: FiX,
        url: "#",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10",

    },
    {
        name: "Email",
        icon: Mail,
        url: "#",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "San Francisco, CA",
    },
    {
        icon: Mail,
        label: "Email",
        value: "",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (333) 123-4567"
    },
];
