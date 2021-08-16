const db = require('./connection');
const { Project } = require('../models');
const mongoose = require('mongoose')

db.once('open', async () => {

  await Project.deleteMany();

  const paramId = new mongoose.Types.ObjectId()

  const projects = await Project.insertMany([
    {
      //genereated ID manually 
      _id: paramId,
      name: '',
      description:
        '',
      image: '',
    },
   

    // {
    //   name: '',
    //   description:
    //     "",
    //   image: '',
    // },
 
  ])


  console.log('projects seeded');


  process.exit();
});
