require('dotenv').config();


const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.NODEENV === 'test' ?
  process.env.MONGO_DB_URI_TEST : process.env.MONGO_DB_URI;
const SALT = Number(process.env.SALT) || 10;

module.exports = { PORT, MONGO_DB_URI, SALT };
