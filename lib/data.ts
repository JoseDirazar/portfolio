import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Buenos Aires, ARG",
    description:
      "I graduated after an intensive 6-month bootcamp, putting all the theory into practice every day.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep - 2023",
  },
  {
    title: "Bootcamp final project",
    location: "Remote, Henry",
    description:
      "I worked as a FullStack developer for one month with 6 more colleagues, learning how to scale our App using scrum agile method. I also learned a lot more api, libreries and new stacks",
    icon: React.createElement(CgWorkAlt),
    date: "Oct - 2023",
  },
  {
    title: "Personal project",
    location: "Remote, Henry",
    description:
      "For the first time as student I put the full stack learned on the bootcamp to make Freak-Games.",
    icon: React.createElement(FaReact),
    date: "Mar to Jul - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Hyper-Event",
    description:
      "I worked as a full-stack developer with 6 more students for 3 intense weeks at Henry's bootcamp. Users can search and buy tickets for events and organizations can create their own.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Sequelize", "jwt"],
    imageUrl: corpcommentImg,
    url: 'https://hyperevent-fe.vercel.app'
  },
  {
    title: "Admin Dashboard",
    description:
      "This is a follow-up project for Hyper-Event. The admin can look revenues, manage users, events and more.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: rmtdevImg,
    url: 'https://hyper-admin-sigma.vercel.app'
  },
  {
    title: "Freak-Games",
    description:
      "On this project I put to practice all the skills learned at Henry for the first time. Users can search info about more than 500.000 videogames",
    tags: ["React", "ViteJS", "SQL", 'Sequelize', "CSS Modules", "Redux", 'PostgreSQL'],
    imageUrl: wordanalyticsImg,
    url:'https://freak-games.vercel.app'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  'Sequelize',
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Nest.JS"
] as const;