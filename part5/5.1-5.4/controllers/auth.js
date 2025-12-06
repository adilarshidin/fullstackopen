const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../utils/config');

const User = require('../models/user');


authRouter.post('/', async (request, response) => {
  if (!request.body || !request.body.username || !request.body.password) {
    return await response.status(400).json({
      result: false,
      message: 'Missing username and/or password.'
    });
  };

  const { username, password } = request.body;

  const user = await User.findOne({ username });
  if (!user) {
    return await response.status(404).json({
      result: false,
      message: 'User does not exist'
    });
  };

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

  if (!passwordCorrect) {
    return await response.status(401).json({
      result: false,
      message: 'Invalid username and/or password'
    });
  };

  const userForToken = {
    username: user.username,
    id: user._id
  };

  const token = jwt.sign(userForToken, config.SECRET, { expiresIn: 60*60 });

  return await response.json({
    result: true,
    data: {
      token: token,
      id: user.id,
      name: user.name
    }
  });
});

module.exports = authRouter;
