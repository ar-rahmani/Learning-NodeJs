const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/Arezoo-Learning"


async function m_connect() {
  try {
    await mongoose.connect(url)
    console.log('Successfully connected to MongoDB database');
  }
  catch (error) {
    console.error(`Error connecting to MongoDB database: ${error.message}`);
  }
}


module.exports = { m_connect }
