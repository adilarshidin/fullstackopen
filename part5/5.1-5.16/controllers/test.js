const testRouter = require('express').Router();
const User = require('../models/user');
const Blog = require('../models/blog');


testRouter.post('/reset', async (request, response) => {
  try {
    await User.deleteMany({});
    await Blog.deleteMany({});
    await response.json({ result: true });
  } catch {
    await response.json({ result: false });
  };
});

module.exports = testRouter;
