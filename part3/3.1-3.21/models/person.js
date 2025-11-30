const mongoose = require('mongoose');
require('dotenv').config();


const url = process.env.MONGO_DB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url, { family: 4 })
  .then(result => console.log(`Connected to Mongo DB: ${result}.`))
  .catch(error => console.log(`Error connecting to Mongo DB: ${error}`));

const personSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
    validate: {
      validator: function(num) {
        return /\d{2,3}-\d{5,}/.test(num);
      },
      message: props => `${props.value} is not a valid phone number.`
    }
  }
});

module.exports = mongoose.model('Person', personSchema);
