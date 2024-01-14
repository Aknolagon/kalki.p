import htmlImg from "/src/assets/skills/html.svg";
import sassImg from "/src/assets/skills/sass.svg";
import reactImg from "../assets/skills/react.svg";
import javascriptImg from "../assets/skills/javascript.svg";
import gitImg from "/src/assets/skills/git.svg";
import visual from "/src/assets/skills/visual.svg";
import figma from "/src/assets/skills/figma.svg";
import nodejs from "/src/assets/skills/nodejs.svg";
import mysql from "/src/assets/skills/mysql-icon.svg";
import google from "/src/assets/skills/google.png";
import express from "/src/assets/skills/expressjs.svg";
import babyplace from "/src/assets/history/babyplace.webp";
import juracine from "/src/assets/history/juracine.webp";
import portfolio from "/src/assets/history/portfolio.webp";

export const skillsFrontData = [
  {
    id: 1,
    img: htmlImg,
    title: "HTML",
  },
  {
    id: 2,
    img: javascriptImg,
    title: "Javascript",
  },
  {
    id: 3,
    img: sassImg,
    title: "Sass",
  },
  {
    id: 4,
    img: reactImg,
    title: "React",
  },
];

export const skillsBackData = [
  {
    id: 1,
    img: mysql,
    title: "MySQL",
  },
  {
    id: 2,
    img: nodejs,
    title: "NodeJs",
  },
  {
    id: 3,
    img: express,
    title: "EspressJs",
  },
];

export const skillsToolsData = [
  {
    id: 1,
    img: figma,
    title: "Figma",
  },
  {
    id: 2,
    img: gitImg,
    title: "Git/Github",
  },
  {
    id: 3,
    img: google,
    title: "Google Drive",
  },
  {
    id: 4,
    img: visual,
    title: "VS Code",
  },
];

export const projetsData = [
  {
    id: 1,
    img: babyplace,
    title: "Babyplace (En cours)",
    text: "Projet Front-End (HTML, Javascript, ReactJs, SASS) et Back-End (NodeJs, MySQL, ExpressJs)",
    url: "https://baby.remote-6.wilders.dev",
    github:
      "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P3-Babyplace.git",
  },
  {
    id: 2,
    img: juracine,
    title: "Juraciné (Fini)",
    text: "Projet Front-End (HTML, Javascript, SASS, ReactJs) et Back-End (API)",
    url: "https://juracine.vercel.app/home",
    github: "https://github.com/Aknolagon/Juracine.git",
  },
  {
    id: 3,
    img: portfolio,
    title: "Portfolio (Fini)",
    text: "Projet Front-End (HTML, SASS, JS, ReactJs)",
    url: "https://projet-portfolio-kappa.vercel.app/",
    github: "https://github.com/Aknolagon/projet-portfolio.git",
  },
];
