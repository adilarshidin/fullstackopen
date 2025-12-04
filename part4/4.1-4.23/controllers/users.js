const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();

const config = require('../utils/config');
const User = require('../models/user');


usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs');
  await response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body;

  if (password.length < 3) {
    return await response.status(400).json({ result: false, message: 'Password must be 3 characters or longer.' });
  };

  const user = await User.findOne({ username: username }).exec();
  if (user) {
    return await response.json({ result: false, message: 'Such username already exists.' });
  };

  const passwordHash = await bcrypt.hash(password, config.SALT);
  const newUser = new User ({
    username: username,
    name: name,
    passwordHash: passwordHash
  });

  await newUser.save();

  return await response.status(201).json({ result: true });
});

module.exports = usersRouter;
