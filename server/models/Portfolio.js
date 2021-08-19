const mongoose = require('mongoose');

const { Schema } = mongoose;

const portfolioSchema = new Schema({
  name: {
    type: String,
    trim: true
  }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;