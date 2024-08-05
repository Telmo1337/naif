import animation1 from "../assets/text1.json";
import animation2 from "../assets/text2.json";
import animation3 from "../assets/text3.json";


import slack from '../assets/icons/slack.svg';
import jira from '../assets/icons/jira.svg';
import confluence from '../assets/icons/confluence.svg';
import figma from '../assets/icons/figma.svg';
import vuejs from '../assets/icons/vuejs.svg';
import react from '../assets/icons/react.svg';
import gatsbyjs from '../assets/icons/gatsbyjs.svg';
import swift from '../assets/icons/swift.svg';
import kotlin from '../assets/icons/kotlin.svg';
import nestjs from '../assets/icons/nestjs.svg';
import django from '../assets/icons/django.svg';
import postgresql from '../assets/icons/postgresql.svg';
import redis from '../assets/icons/redis.svg';
import webflow from '../assets/icons/webflow.svg';
import wordpress from '../assets/icons/wordpress.svg';
import aws from '../assets/icons/aws.svg';
import heroku from '../assets/icons/heroku.svg';
import cloudflare from '../assets/icons/cloudflare.svg';
import docker from '../assets/icons/docker.svg';
import github from '../assets/icons/github.svg';
import browserstack from '../assets/icons/browserstack.svg';

export const navigation = [
    {
        id: "0",
        title: "Expertise",
        url: "/",
    },

    {
        id: "1",
        title: "Work",
        url: "/",
    },

    {
        id: "2",
        title: "About",
        url: "/",
    },

]

export const sections = [
    {
        id: "0",
        animation: animation1,
        title: "Discover & define",
        content: "Together we dive right into the problem with the goal of uncovering ideas and opportunities. No vision is too big for a simple prototype. Validated ideas ensure we’re on the right path.",
    },
    {
        id: "1",
        animation: animation2,
        title: "Design & build",
        content: "Delightful user experiences meet precise engineering. By continuously optimizing and improving with user feedback, we craft products that are rock-solid and simple to use.",
    },
    {
        id: "2",
        animation: animation3,
        title: "Launch & scale",
        content: "Achieving a product-market-fit is about making the right decisions. The data-driven approach helps us draw insights, refine the product, and utilize the right distribution and promotion strategy.",
    }
];


export const techData = [
    { 
        category: "Communication", 
        tools: [{ name: "Slack", icon: slack }] 
    },
    { 
        category: "Project Management", 
        tools: [{ name: "Jira", icon: jira }, { name: "Confluence", icon: confluence }] 
    },
    { 
        category: "Product Design", 
        tools: [{ name: "Figma", icon: figma }] 
    },
    { 
        category: "Front-End Development", 
        tools: [{ name: "Vue.js", icon: vuejs }, { name: "React.js", icon: react }, { name: "Gatsby", icon: gatsbyjs }] 
    },
    { 
        category: "Mobile Development", 
        tools: [{ name: "Swift", icon: swift }, { name: "Kotlin", icon: kotlin }, { name: "React Native", icon: react }] 
    },
    { 
        category: "Back-End Development", 
        tools: [{ name: "NestJS", icon: nestjs }, { name: "Django", icon: django }, { name: "PostgreSQL", icon: postgresql }, { name: "Redis", icon: redis }] 
    },
    { 
        category: "CMSs", 
        tools: [{ name: "Webflow", icon: webflow }, { name: "WordPress", icon: wordpress }] 
    },
    { 
        category: "Infrastructure", 
        tools: [{ name: "AWS", icon: aws }, { name: "Heroku", icon: heroku }, { name: "Cloudflare", icon: cloudflare }] 
    },
    { 
        category: "DevOps", 
        tools: [{ name: "Docker", icon: docker }, { name: "Github Actions", icon: github }] 
    },
    { 
        category: "Quality Assurance", 
        tools: [{ name: "BrowserStack", icon: browserstack }] 
    },
];


export const reviews = [
    {
        id: "0",
        rating: "5.0",
        text: "''This service exceeded all my expectations! The team was professional and the results were phenomenal. I would highly recommend them to anyone looking for quality and reliability.''",
        name: "John Doe",
        company: "Acme Corp"
        
    },

    {
        id: "1",
        rating: "5.0",
        text: "''Great experience overall. The project was completed on time and within budget. The customer support was also very responsive and helpful.''",
        name: "Jane Smith",
        company: "Widget Co."

    },

    {
        id: "2",
        rating: "5.0",
        text: "''I am very pleased with the outcome. The team took my ideas and turned them into something truly special. Will definitely use their services again in the future.''",
        name: "Mark Johnson",
        company: "Tech Innovators"

    },

    {
        id: "3",
        rating: "5.0",
        text: "''Outstanding service from start to finish. The attention to detail and commitment to quality were evident in every step of the process. Highly recommended!''",
        name: "Sarah Williams",
        company: "Creative Solutions"

    }, 
    {
        id: "4",
        rating: "5.0",
        text: "''We are extremely satisfied with the results. The team was attentive, professional, and delivered exactly what we needed. Their dedication to their work is evident in the high quality of the final product.''",
        name: "Emily Brown",
        company: "Horizon Enterprises"

    }, 
    {
        id: "5",
        rating: "5.0",
        text: "''The team was a pleasure to work with. They were responsive, creative, and delivered exceptional results. I would not hesitate to recommend them to anyone looking for top-notch service.''",
        name: "Michael Davis",
        company: "Innovative Solutions",

    },

    {
        id: "6",
        rating: "5.0",
        text: "''I cannot say enough good things about this service. The team went above and beyond to ensure that our project was a success. I would not hesitate to work with them again in the future.''",
        name: "Laura Wilson",
        company: "Digital Creations",

    },

    {
        id: "7",
        rating: "5.0",
        text: "''The team was fantastic to work with. They were professional, creative, and delivered exactly what we needed. I would highly recommend them to anyone looking for top-quality service.''",
        name: "Chris Miller",
        company: "Tech Solutions",
    }


]


export const questions = [
    {
        question: "What kind of projects do you work on more often?",
        answer: "We work on a wide range of projects, from small startups to large enterprises. Our team has experience in various industries, including e-commerce, healthcare, finance, and more. We are always excited to take on new challenges and help our clients achieve their goals.",
    },
    {
        question: "What is the typical process you follow from the initial concept to product delivery?",
        answer: "Opportunity Selection → Requirements → User Experience — User Interface → Back-End — Front-End — Mobile Engineering → QA → Deploy → Measurement & Feedback → Repeat 🔄",
    },

    {
        question: "How does your team adapt to accommodate different clients’ preferences and goals?",
        answer: "With a flexible, made-to-fit process, that is based on ensuring alignment and management of expectations at all times, with lots of flexibility and questions asked.",
    },
    {
        question: "Do you work with a specific industry or type of business?",
        answer: "Naif is industry-agnostic. We have, however, long experience solving complex problems in industries like Healthcare, Finance, Recruitment, EdTech, and AI."
    },
    {
        question:"At which moments do you support your clients in the product development lifecycle?",
        answer: "Usually, when there’s a need to create something new or revamp an existing product and/or website. Nevertheless, we also provide support, maintenance, and optimization when products reach stability mode after the “heavy lifting” phase is done.",
    },
    {
        question:"How do you ensure constant, clear, and effective communication with clients?",
        answer: "Communication is key and we know it. We do it well with a combination of the right tools and the right mindset. Slack and Basecamp are used for written communication, and Google Meet for calls. We provide constant context, make lots of questions, and make no assumptions.",
    }
]