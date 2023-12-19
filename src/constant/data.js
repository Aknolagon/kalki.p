import htmlImg from "/src/assets/skills/html.svg";
import sassImg from "/src/assets/skills/sass.svg";
import reactImg from "../assets/skills/react.svg";
import javascriptImg from "../assets/skills/javascript.svg";
import gitImg from "/src/assets/skills/git.svg";
import visual from "/src/assets/skills/visual.svg";
import figma from "/src/assets/skills/figma.svg";
import nodejs from "/src/assets/skills/nodejs.svg";
import mysql from "/src/assets/skills/mysql-icon.svg";
import express from "/src/assets/skills/expressjs.svg";
import babyplace from "/src/assets/history/babyplace.png";
import juracine from "/src/assets/history/juracine.png";
import portfolio from "/src/assets/history/portfolio.png";



export const skillsData = [
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
    id: 4,
    img: sassImg,
    title: "Sass",
  },
  {
    id: 5,
    img: reactImg,
    title: "React",
  },
  {
    id: 6,
    img: mysql,
    title: "MySQL",
  },
  {
    id: 7,
    img: nodejs,
    title: "NodeJs",
  },
  {
    id: 8,
    img: express,
    title: "EspressJs",
  },
  {
    id: 9,
    img: figma,
    title: "Figma",
  },
  {
    id: 10,
    img: gitImg,
    title: "Git/Github",
  },
  {
    id: 12,
    img: visual,
    title: "VS",
  },
];


export const projetsData = [
  {
    id: 1,
    img: babyplace,
    title: "Babyplace (En cours)",
    text: "Projet Front-End (HTML, Javascript, ReactJs, SASS) et Back-End (NodeJs, MySQL, ExpressJs)",
    url: "in progress",
    github:
      "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P3-Babyplace.git",
  },
  {
    id: 2,
    img: juracine,
    title: "Juraciné (Fini)",
    text: "Projet Front-End (HTML, Javascript, SASS, ReactJs) et Back-End (API)",
    url: "https://jurastream.vercel.app",
    github: "https://github.com/Aknolagon/Juracine.git",
  },
  {
    id: 3,
    img: portfolio,
    title: "Portfolio (Fini)",
    text: "Projet Front-End (HTML, SASS, JS, ReactJs)",
    url: "in progress",
    github: "in progress",
  },
];
