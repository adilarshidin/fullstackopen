const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
if (Blog) console.log('Blog model loaded');


blogsRouter.get('/', async (request, response) => {
  await response.json(await Blog.find({}));
});

blogsRouter.post('/', async (request, response) => {
  let blog = new Blog(request.body);

  if (!blog.url || !blog.title) {
    return await response.status(400).end();
  } else if (!blog.likes) {
    blog['likes'] = 0;
  };

  const result = await blog.save();
  await response.status(201).json(result);
});

blogsRouter.delete('/:id', async (request, response) => {
  const id = request.params.id;

  try {
    const deletionResult = await Blog.findByIdAndDelete(id);
    if (deletionResult) {
      return await response.status(204).end();
    } else {
      return await response.status(404).end();
    };
  } catch (error) {
    if (error.name === 'CastError') {
      return await response.status(400).end();
    };
  };
});

blogsRouter.put('/:id', async (request, response) => {
  const id = request.params.id;

  if (!request.body || !request.body.likes) {
    return await response.status(400).end();
  };

  const body = request.body;

  try {
    const blog = await Blog.findById(id);
    if (blog) {
      Object.assign(blog, body);
      await blog.save();
      return await response.status(200).end();
    } else {
      return await response.status(404).end();
    }
  } catch (error) {
    if (error.name === 'CastError') {
      return await response.status(400).end();
    };
  };
});

module.exports = blogsRouter;
