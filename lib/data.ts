import React from "react";
import { CgMail, CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiAmazon,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRust,
  SiSequelize,
  SiSqlite,
  SiStellar,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiTypeorm,
  SiCypress,
  SiJest,
  SiStripe,
  SiMercadopago,
  SiAuth0,
  SiAwsamplify,
  SiGooglemaps,
  SiResend,
} from "react-icons/si";

import BelliDeportes from "@/public/BelliDeportes.png";
import multicuotasTandil from "@/public/multicuotas-tandil.png";
import tuBienestar from "@/public/tu-bienestar.png";
import padelink from "@/public/padelink.png";
import forgebyteslab from "@/public/forgebyteslab.png";
import workitfy from "@/public/Workitfy.png";
import spaceInvaders from "@/public/space-invaders.png";
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
    title: "ForgeBytes Lab",
    location: "Buenos Aires, ARG",
    description:
      "ForgeBytes Lab is my personal VPS where I develop and host client's projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Since Jan - 2025",
    url: "https://forgebyteslab.com/",
  },
  {
    title: "Bigger Tech",
    location: "Remote, Australia",
    description:
      "Bigger Tech is a company that provides IT services to small and medium-sized businesses. I'm currently work as a Full Stack Developer making web and mobile apps for Bigger clients.",
    icon: React.createElement(CgWorkAlt),
    date: "May - 2024 | Mar - 2025",
    url: "https://www.biggertech.co/",
  },
  {
    title: "Mayland Labs",
    location: "Buenos Aires, ARG",
    description:
      "Mayland labs is a small statup that provides IT services to small and medium-sized businesses located in Argentina.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov - 2023 | May - 2024",
    url: "https://www.maylandlabs.com/",
  },
  {
    title: "Henry Bootcamp",
    location: "Argentina, remote",
    description:
      "Henry is a intensive bootcamp where I learned the fundamentals of modern Full Stack development with React, Node.js, Express and PostgreSQL. Also learned about testing, best practices and learned how to work in a team with Scrum, Git and GitHub.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr - 2023 - Sep - 2023",
    url: "https://certificates.soyhenry.com/new-cert?id=2ca8a03c45ac77da0e6ddb9ccb624fdfe0a3b3c73bed6be0413138c267683122",
  },
  {
    title: "FreeCodeCamp",
    location: "Argentina, remoto",
    description:
      "FreeCodeCamp is a online platform where I learned the fundamentals of web development with HTML, CSS and advance JavaScript algorithms.",
    icon: React.createElement(LuGraduationCap),
    url: "https://www.freecodecamp.org/certification/fcce44b564a-4071-40f3-a9b8-537a761d8ec5/javascript-algorithms-and-data-structures",
    date: "Nov - 2022 | Apr - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Space Invaders",
    description:
      "This is a game developed using Bevy and Rust. It was my first game and I learned a lot about ECS, game loop and more.",
    tags: ["Rust", "Bevy", "WASM"],
    imageUrl: spaceInvaders,
    url: "/space-invaders",
  },
  {
    title: "ForgeBytes Lab",
    description: "This is the landing page for ForgeBytes Lab.",
    tags: ["React", "TypeScript", "Vite.js", "TailwindCss"],
    imageUrl: forgebyteslab,
    url: "https://forgebyteslab.com/",
  },
  {
    title: "TuBienestar Masajes Olavarría",
    description:
      "This is a booking platform for a massage salon located in Olavarría, Buenos Aires, Argentina.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCss", "Prisma"],
    imageUrl: tuBienestar,
    url: "https://tu-bienestar.forgebyteslab.com/",
  },
  {
    title: "Padelink",
    description:
      "This is a social media platform for a peddle club located in Buenos Aires C.A.B.A, Argentina.",
    tags: [
      "React",
      "TypeScript",
      "Nest.js",
      "TailwindCss",
      "TypeORM",
      "Vite.js",
    ],
    imageUrl: padelink,
    url: "https://www.padelink.com.ar/",
  },
  {
    title: "Workitfy",
    description: "Workitfy is a social platform for remote workers.",
    tags: [
      "React",
      "TypeScript",
      "Nest.js",
      "TailwindCss",
      "TypeORM",
      "Vite.js",
    ],
    imageUrl: workitfy,
    url: "https://workitfy.maylandlabs.com/",
  },
  {
    title: "Multicuotas Tandíl",
    description:
      "An e-commerce for a client store located in Tandíl. User can search products, order and pay with MercadoPago",
    tags: ["React", "TypeScript", "Next.js", "TailwindCss", "Prisma"],
    imageUrl: multicuotasTandil,
    url: "https://multicuotas-tandil.vercel.app/",
  },
  {
    title: "Belli Deportes",
    description:
      "An e-commerce for an sport store located in my city. User can search products, order and pay with MercadoPago",
    tags: ["React", "TypeScript", "Next.js", "TailwindCss", "Prisma"],
    imageUrl: BelliDeportes,
    url: "https://belli-deportes.vercel.app/",
  },
] as const;

export const languajes = [
  { title: "TypeScript", icon: React.createElement(SiTypescript) },
  { title: "JavaScript", icon: React.createElement(SiJavascript) },
  { title: "HTML", icon: React.createElement(SiHtml5) },
  { title: "CSS", icon: React.createElement(SiCss3) },
  { title: "SQL", icon: React.createElement(SiMysql) },
  { title: "Rust", icon: React.createElement(SiRust) },
];
export const frontendSkills = [
  { title: "React", icon: React.createElement(SiReact) },
  { title: "Next.js", icon: React.createElement(SiNextdotjs) },
  { title: "TailwindCSS", icon: React.createElement(SiTailwindcss) },
  { title: "Vite", icon: React.createElement(SiVite) },
  { title: "React Native", icon: React.createElement(SiReact) },
  { title: "Expo", icon: React.createElement(SiExpo) },
] as const;

export const backendSkills = [
  { title: "Express js", icon: React.createElement(SiExpress) },
  { title: "Nest.js", icon: React.createElement(SiNestjs) },
  { title: "Rocket.rs", icon: React.createElement(SiRust) },
  { title: "Stellar Smart Contracts", icon: React.createElement(SiStellar) },
];

export const databaseSkills = [
  { title: "Prisma", icon: React.createElement(SiPrisma) },
  { title: "Sequelize", icon: React.createElement(SiSequelize) },
  { title: "TypeORM", icon: React.createElement(SiTypeorm) },
  { title: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { title: "MySQL", icon: React.createElement(SiMysql) },
  { title: "SQLite", icon: React.createElement(SiSqlite) },
];

export const devOpsSkills = [
  { title: "Docker", icon: React.createElement(SiDocker) },
  { title: "Nginx", icon: React.createElement(SiNginx) },
  {
    title: "Coolify",
    icon: React.createElement("img", {
      src: "/coolify.svg",
      className: "w-8 h-8",
      alt: "Coolify",
      width: 32,
      height: 32,
      id: "coolify",
    }),
  },
  { title: "Vercel", icon: React.createElement(SiVercel) },
  { title: "S3 backups", icon: React.createElement(SiAmazon) },
  { title: "DNS configurations", icon: React.createElement(SiCloudflare) },
];

export const testingSkills = [
  { title: "Jest", icon: React.createElement(SiJest) },
  { title: "Cypress", icon: React.createElement(SiCypress) },
  { title: "Detox", icon: null },
  { title: "Maestro", icon: null },
  { title: "Wiremock", icon: null },
];

export const integrationSkills = [
  { title: "Stripe", icon: React.createElement(SiStripe) },
  { title: "MercadoPago", icon: React.createElement(SiMercadopago) },
  { title: "Auth0", icon: React.createElement(SiAuth0) },
  { title: "Cognito", icon: React.createElement(SiAmazon) },
  { title: "Amplify", icon: React.createElement(SiAwsamplify) },
  { title: "Google Maps", icon: React.createElement(SiGooglemaps) },
  { title: "Resend", icon: React.createElement(SiResend) },
  { title: "Nodemailer", icon: React.createElement(CgMail) },
];
