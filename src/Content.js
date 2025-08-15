// import images
import Hero_person from "./assets/images/Hero/person.png";

import sqlserver from "./assets/images/Skills/icons8-sql-server-48.png";
import figma from "./assets/images/Skills/figma.png";
import mysql from "./assets/images/Skills/icons8-mysql-24.png";
import reactjs from "./assets/images/Skills/react.png";
import java from "./assets/images/Skills/icons8-java-50.png";
import springboot from "./assets/images/Skills/icons8-spring-boot-48.png";
import python from "./assets/images/Skills/icons8-python-48.png";
import nextjs from "./assets/images/Skills/icons8-nextjs-48.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Backend Developer",
    firstName: "DUC ANH",
    LastName: "PHAN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Studying in Web development",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "Using  Java core for backend development",
        logo: java,
      },
      {
        name: "MySQL",
        para: "Using MySQL for database management",
        logo: mysql,
      },
      {
        name: "SQL Server",
        para: "Using SQL Server for database management",
        logo: sqlserver,
      },
      {
        name: "Spring Boot",
        para: "Using Spring Boot for backend development",
        logo: springboot,
      },
      {
        name: "Python",
        para: "Using Python fundamentals for backend development",
        logo: python,
      },
      {
        name: "NextJS",
        para: "Using NextJS for web development",
        logo: nextjs,
      },
      {
        name: "React js",
        para: "Using React js for web development",
        logo: reactjs,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Backend Development",
        para: "Design and develop web applications using Java Spring Boot",
        logo: services_logo1,
      },
      {
        title: "Frontend Development",
        para: "Design and develop web applications using React js",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Hotel Management System",
        image: project1,
        link: "https://github.com/anhpdhe180659/SWP391.git",
      },
      {
        title: "Class Management System",
        image: project2,
        link: "https://github.com/ducanhwork/PetProject1.git",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    link: "https://drive.usercontent.google.com/download?id=19BM0nUAxgn3sb2SaCMVUyvYwLc6PuCe9&export=download&authuser=0&confirm=t&uuid=11e1e65f-daf8-4280-b466-23004ae5c3db&at=AN8xHorwQrS-V7E1P_LKI4JoN8kw:1750263890033",
    para: "I am a backend developer with 4 years of experience in web development. I have worked on various projects using Java Spring Boot and React js. I am passionate about coding and always eager to learn new technologies.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "pdanh.work@gmail.com",
        icon: GrMail,
        link: "mailto:pdanh.work@gmail.com",
      },
      {
        text: "+84867 806 182",
        icon: MdCall,
        link: "https://zalo.me/0867806182",
      },
      {
        text: "Đức Anh",
        icon: BsInstagram,
        link: "https://www.instagram.com/ducanh.912/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
