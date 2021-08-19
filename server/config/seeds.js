const db = require('./connection');
const { Project } = require('../models');
const mongoose = require('mongoose')

db.once('open', async () => {

  await Project.deleteMany();

  const paramId = new mongoose.Types.ObjectId()

  const project = await Project.insertMany([
    {
      //genereated ID manually 
      _id: paramId,
      name: 'wrkwith-app',
      description:
        'A fully functioning website utilisng MVC model',
      image: 'wrkwith.png',
      repo: 'https://github.com/wa20/wrkwith-app',
      site: 'https://wrkwith-app.herokuapp.com',
    },
    {
      // _id: paramId,
      name: 'BookApp',
      description:
        'Book searching app/library using google books API',
      image: 'bookapp.png',
      repo: 'https://github.com/wa20/BookApp',
      site: 'https://wa20.github.io/BookApp/',
    },
    {
      // _id: paramId,
      name: 'Node README Generator',
      description:
        'asjhdap aojsdgadh aosdjagsdh',
      image: 'codeWallpaper.png',
      repo: 'https://github.com/wa20/7-README-Generator',
      site: '',
    },
    {
      // _id: paramId,
      name: 'The Budget Tracker',
      description:
        'asdfeeeeff',
      image: 'budgetTracker.png',
      repo: 'https://github.com/wa20/budget-tracker',
      site: 'https://thebudget-tracker.herokuapp.com',
    },
    {
      // _id: paramId,
      name: 'The Fitness Tracker',
      description:
        'sdggdd dggg',
      image: 'fitnessTracker.png',
      repo: 'https://github.com/wa20/the-fitness-tracker',
      site: 'https://the-fitnesstracker.herokuapp.com/?id=60e43ebb51bc3a00155d11ac',
    },
    // {
    //   _id: paramId,
    //   name: '',
    //   description:
    //     '',
    //   image: '',
    //   repo: '',
    //   site: '',
    // },
    {
      // _id: paramId,
      name: 'Node Profile Generator',
      description:
        'asdafgge ',
      image: 'codeWallpaper.png',
      repo: 'https://github.com/wa20/8-Team-Profile-Generator"',
      site: '',
    },
    {
      // _id: paramId,
      name: 'Ecom-site Backend',
      description:
        'asdasdn 020828',
      image: 'codeWallpaper.png',
      repo: 'https://github.com/wa20/11-E-Commerce-Site',
      site: '',
    },
    {
      // _id: paramId,
      name: 'Timed Quiz',
      description:
        'dsppdshfhfdh 12e sadad',
      image: 'timedQuiz.png',
      repo: 'https://github.com/wa20/4-Timed-Quiz',
      site: 'https://wa20.github.io/4-Timed-Quiz/',
    },
    {
      // _id: paramId,
      name: 'Daily Planner',
      description:
        'asoosdhdh oaooa',
      image: 'dailyPlanner.png',
      repo: 'https://github.com/wa20/5-Daily-Planner',
      site: 'https://github.com/wa20/5-Daily-Planner/settings/pages',
    },

  
  ])


  console.log('projects seeded');


  process.exit();
});
