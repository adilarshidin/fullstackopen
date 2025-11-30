const mongoose = require('mongoose');
require('dotenv').config();


const url = process.env.MONGO_DB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url, { family: 4 })
  .then(result => console.log("Connected to Mongo DB."))
  .catch(error => console.log(`Error connecting to Mongo DB: ${error}`));

const personSchema = mongoose.Schema({
  name: String,
  number: String
});

module.exports = mongoose.model('Person', personSchema);
