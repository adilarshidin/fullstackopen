const mongoose = require('mongoose');


if (process.argv.length < 3) {
  console.log('Not enough arguments! Provide database password/name/phone number!');
  process.exit(1);
};

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://adiltherunningman_db_user:${password}@cluster0.4qrjl2n.mongodb.net/phoneBook?appName=Cluster0`

mongoose.set('strictQuery', false);
mongoose.connect(url, { family: 4 });

const personSchema = mongoose.Schema({
  name: String,
  number: String
});
const Person = mongoose.model('Person', personSchema);

if (name && number) {
  const newPerson = new Person({
    name: name,
    number: number
  });

  newPerson.save().then(result => {
    console.log(`Saved person ${name} with number ${number} to the phone book.`);
    mongoose.connection.close();
  });
} else if (password) {
  Person.find({}).then(result => {
    result.forEach(person => console.log(person));
    mongoose.connection.close();
  });
};
