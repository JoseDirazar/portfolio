import {
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
export type DevCardProps = {
  name: string;
  role: string;
  description: string;
  avatar: string;
  href: string;
};

export const devsData = [
  {
    name: "José Dirazar",
    role: "ForgeBytesLab DevOps, Web and Mobile Developer",
    description:
      "I am a passionate software developer dedicated to transforming client's ideas into reliable, efficient, and high-quality software.",
    avatar: "/jose-avatar.jpg",
    href: "https://jose-dirazar.forgebyteslab.com",
  },
] satisfies DevCardProps[];

export const navbarLinks = [
  {
    name: "Home",
    href: "#home",
    icon: AiOutlineHome,
  },
  {
    name: "Team",
    href: "#team",
    icon: AiOutlineTeam,
  },
  {
    name: "About",
    href: "#about",
    icon: AiOutlineInfoCircle,
  },
] as const;

export const clientsData = [
  {
    name: "deacá",
    img: "/deaca-white-logo.png",
    width: 1600 * 0.35,
    height: 839 * 0.35,
    url: "https://deaca-farmacias-de-turno.forgebyteslab.com/",
  },
  {
    name: "Belli Deportes",
    img: "/belli-deportes-logo-no-bg.png",
    width: 612,
    height: 407,
    url: "https://belli-deportes.forgebyteslab.com/",
  },
  {
    name: "Tu Bienestar",
    img: "/sa-massages-logo.png",
    width: 500,
    height: 500,
    url: "https://tu-bienestar.forgebyteslab.com/",
  },
  {
    name: "Pawdlink",
    img: "/pawdlink-logo.svg",
    width: 339,
    height: 62,
    url: "https://pawdlink-web.forgebyteslab.com/",
  },
] as const;
