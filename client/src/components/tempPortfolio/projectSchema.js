// import React from "react"
// import {codeWallpaper} from "./assets/codeWallpaper.png"

const codeWallpaper = require("../../assets/projectImages/codeWallpaper.png")
  .default;
const dailyPlanner = require("../../assets/projectImages/dailyPlanner.png")
  .default;
const FitnessApp = require("../../assets/projectImages/fitnessTracker.png")
  .default;
const PWGen = require("../../assets/projectImages/PWGenerator.png").default;
const TimedQuiz = require("../../assets/projectImages/timedQuiz.png").default;
const wrkWith = require("../../assets/projectImages/wrkwith.png").default;
const BookApp = require("../../assets/projectImages/bookapp.png").default;
const bdgTracker = require("../../assets/projectImages/budgetTracker.png")
  .default;
const outgrown = require("../../assets/projectImages/outgrown.png").default;
const tripper = require("../../assets/projectImages/tripper.png").default;

//temp solution to query projects
const ProjectSchema = [
  {
    name: "outgrown",
    image: outgrown,
    site: "https://outgrown-app.herokuapp.com",
    description:
      "A Full Stack MERN app, that provides a solution for parents to sell and buy outgrown kids products.",
    repo: "https://github.com/wa20/outgrown",
  },

  {
    name: "wrkwith-app",
    image: wrkWith,
    description:
      "A Project sharing app, built using MVC model. SQL to Store DATA and CRUD to provide functionality.",
    site: "https://wrkwith-app.herokuapp.com",
    repo: "https://github.com/wa20/wrkwith-app",
  },
  {
    name: "BookApp",
    image: BookApp,
    description:
      "BookApp uses APIs to give users the ability to create their own virtual book library.",
    site: "https://wa20.github.io/BookApp/",
    repo: "https://github.com/wa20/BookApp",
  },
  {
    name: "tripper",
    image: tripper,
    site: "https://app-tripper.herokuapp.com/",
    description:
      "A React app, using Google API and a Travel API to show local attractions to you",
    repo: "https://github.com/wa20/tripper",
  },
  {
    name: "The Budget Tracker",
    image: bdgTracker,
    description:
      "A PWA app developed using service worker, manifest and an indexedDB to allow offline functionality.",
    site: "https://thebudget-tracker.herokuapp.com",
    repo: "https://github.com/wa20/budget-tracker",
  },
  {
    name: "The Fitness Tracker",
    image: FitnessApp,
    description:
      "A fitness tracking app to record exercises. backend is built using node.js, express, mongoose and MongoDB.",
    site:
      "https://the-fitnesstracker.herokuapp.com/?id=60e43ebb51bc3a00155d11ac",
    repo: "https://github.com/wa20/the-fitness-tracker",
  },

  {
    name: "Node README Generator",
    image: codeWallpaper,
    site: "",
    description:
      " A command-line application utilising node.js to generate markdown templates for GitHub applications.",
    repo: "https://github.com/wa20/7-README-Generator",
  },

  {
    name: "Node Profile Generator",
    image: codeWallpaper,
    site: "",
    description:
      "A Command line tool that allows you to output front end data.",
    repo: "https://github.com/wa20/8-Team-Profile-Generator",
  },
  {
    name: "Ecom-site Backend",
    image: codeWallpaper,
    site: "",
    description:
      "Using node JS, express, sequalize and MySql to refactor and build the backend of an ecommerce site.",
    repo: "https://github.com/wa20/11-E-Commerce-Site",
  },
  {
    name: "Employee CRM Tracker",
    image: codeWallpaper,
    site: "",
    description:
      "A content management system to manage employee’s data. Built using node, inquirer & MySQL.",
    repo: "https://github.com/wa20/10-Employee-Tracker-MySQL",
  },
  {
    name: "Password Generator",
    image: PWGen,
    description:
      "An app utilising vanilla JavaScript to generate a randomized password.",
    site: "https://wa20.github.io/3-Password-Generator/",
    repo: "https://github.com/wa20/3-Password-Generator",
  },
  {
    name: "Timed Quiz",
    image: TimedQuiz,
    description:
      "A timed quiz where you have to answer as many questions as you can in 60sec. Built using JavaScript.",
    site: "https://wa20.github.io/4-Timed-Quiz/",
    repo: "https://github.com/wa20/4-Timed-Quiz",
  },
  {
    name: "Daily Planner",
    image: dailyPlanner,
    description:
      "A responsive daily work planning app to save events for each working hour of the day. Built using JavaScript.",
    site: "https://wa20.github.io/5-Daily-Planner/",
    repo: "https://github.com/wa20/5-Daily-Planner",
  },

  {
    name: "What is 'Regex'?",
    image: codeWallpaper,
    site: "https://github.com/wa20/regex-tutorial",
    description:
      "A GitHub gist explaining a specific or regex function, breaking down each part of the expression.",
    repo: "",
  },
];

export default ProjectSchema;


