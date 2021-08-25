// import React from "react"
// import {codeWallpaper} from "./assets/codeWallpaper.png"

const codeWallpaper = require("../../assets/projectImages/codeWallpaper.png").default;
const dailyPlanner = require("../../assets/projectImages/dailyPlanner.png").default;
const FitnessApp = require("../../assets/projectImages/fitnessTracker.png").default;
const PWGen = require("../../assets/projectImages/PWGenerator.png").default;
const TimedQuiz = require("../../assets/projectImages/timedQuiz.png").default;
const wrkWith = require("../../assets/projectImages/wrkwith.png").default;
const BookApp = require("../../assets/projectImages/bookapp.png").default;
const bdgTracker = require("../../assets/projectImages/budgetTracker.png").default;


//temp solution to query projects
const ProjectSchema =  [



    
    {
        id: 1,
        name: "wrkwith-app",
        image: wrkWith,
        description:"A fully functioning website utilisng MVC model",
        site: "https://wrkwith-app.herokuapp.com",
        repo: "https://github.com/wa20/wrkwith-app",
        detail: "A fully functioning website utilisng MVC model",

    },
    {
        id: 2,
        name: "BookApp",
        image: BookApp,
        description:"",
        site: "https://wa20.github.io/BookApp/",
        repo: "https://github.com/wa20/BookApp",
        detail: "",

    },
    {
        id: 3,
        name: "Node README Generator",
        image: codeWallpaper,
        site: "",
        description:"",
        repo: "https://github.com/wa20/7-README-Generator",
        detail: "",

    },
    {
        id: 4,
        name: "The Budget Tracker",
        image: bdgTracker,
        description:"",
        site: "https://thebudget-tracker.herokuapp.com",
        repo: "https://github.com/wa20/budget-tracker",
        detail: "",

    },
    {
        id: 5,
        name: "The Fitness Tracker",
        image: FitnessApp,
        description:"",
        site: "https://the-fitnesstracker.herokuapp.com/?id=60e43ebb51bc3a00155d11ac",
        repo: "https://github.com/wa20/the-fitness-tracker",
        detail: "",

    },

    {
        id: 6,
        name: "What is 'Regex'?",
        image: codeWallpaper,
        site: "",
        description:"",
        repo: "https://github.com/wa20/regex-tutorial",
        detail: "",

    },

    {
        id: 7,
        name: "Node Profile Generator",
        image: codeWallpaper,
        site: "",
        description:"",
        repo: "https://github.com/wa20/8-Team-Profile-Generator",
        detail: "",

    },
    {
        id: 8,
        name: "Ecom-site Backend",
        image: codeWallpaper,
        site: "",
        description:"",
        repo: "https://github.com/wa20/11-E-Commerce-Site",
        detail: "",

    },
    {
        id: 9,
        name: "Password Generator",
        image: PWGen,
        description:"",
        site: "https://wa20.github.io/3-Password-Generator/",
        repo: "https://github.com/wa20/3-Password-Generator",
        detail: "",

    },
    {
        id: 10,
        name: "Timed Quiz",
        image: TimedQuiz,
        description:"",
        site: "https://wa20.github.io/4-Timed-Quiz/",
        repo: "https://github.com/wa20/4-Timed-Quiz",
        detail: "",

    },
    {
        id: 11,
        name: "Daily Planner",
        image: dailyPlanner,
        description:"",
        site: "https://github.com/wa20/5-Daily-Planner/settings/pages",
        repo: "https://github.com/wa20/5-Daily-Planner",
        detail: "",

    },


]

export default ProjectSchema