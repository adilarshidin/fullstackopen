const mongoose = require('mongoose');
const assert = require('node:assert');
const { describe, test, after, beforeEach } = require('node:test');
const listHelper = require('../utils/list_helper');
const Blog = require('../models/blog');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);


beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(listHelper.blogs);
});

test('all blogs', async () => {
  const response = await api.get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  assert.strictEqual(response.body.length, 6);
});

test('blog id format', async () => {
  const response = await api.get('/api/blogs');
  const body = response.body;
  body.forEach(item => {
    const keys = Object.keys(item);
    const containsId = keys.includes('id');
    const doesNotContain_Id = !keys.includes('_id');
    assert.ok(containsId);
    assert.ok(doesNotContain_Id);
  });
});

test('add blog', async () => {
  const currentBlogsResponse = await api.get('/api/blogs');
  const currentBlogs = await currentBlogsResponse.body;

  await api.post('/api/blogs')
    .send(listHelper.newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const newBlogsResponse = await api.get('/api/blogs');
  const newBlogs = await newBlogsResponse.body;

  assert.strictEqual(newBlogs.length, currentBlogs.length + 1);
});

test('add missing likes property', async() => {
  const insertedBlogResponse = await api.post('/api/blogs')
    .send(listHelper.newBlogWithoutLikes)
    .expect(201)
    .expect('Content-Type', /application\/json/);
  const insertedBlog = await insertedBlogResponse.body;
  const includesLikesProperty = Object.keys(insertedBlog).includes('likes');
  assert.ok(includesLikesProperty);
});

test('400 status for no title', async () => {
  const response = await api.post('/api/blogs')
    .send(listHelper.newBlogWithoutTitle)
    .expect(400);
  const statusCode = await response.statusCode;
  assert.strictEqual(statusCode, 400);
});

test('400 status for no url', async () => {
  const response = await api.post('/api/blogs')
    .send(listHelper.newBlogWithoutUrl)
    .expect(400);
  const statusCode = await response.statusCode;
  assert.strictEqual(statusCode, 400);
});

describe('delete endpoint', async () => {
  test('delete with valid id', async () => {
    const blogsResponse = await api.get('/api/blogs');
    const blogs = await blogsResponse.body;

    await api.delete(`/api/blogs/${blogs[0].id}`)
      .expect(204);

    const newBlogsResponse = await api.get('/api/blogs');
    const newBlogs = await newBlogsResponse.body;

    assert.strictEqual(newBlogs.length, blogs.length - 1);
  });

  test('400 for non valid id', async () => {
    const invalidId = '5a3d5da59070081a82a3445';

    await api.delete(`/api/blogs/${invalidId}`)
      .expect(400);
  });

  test('404 for non existing entry', async () => {
    const blogsResponse = await api.get('/api/blogs');
    const blogs = await blogsResponse.body;

    await api.delete(`/api/blogs/${blogs[0].id}`)
      .expect(204);
    await api.delete(`/api/blogs/${blogs[0].id}`)
      .expect(404);
  });
});

describe('put endpoint', async () => {
  test('update with valid id', async () => {
    const blogsResponse = await api.get('/api/blogs');
    const blogs = await blogsResponse.body;
    const id = blogs[0].id;
    const newLikes = 1234;

    await api.put(`/api/blogs/${id}`)
      .send({ likes: newLikes })
      .expect(200);

    const updatedBlogsResponse = await api.get('/api/blogs');
    const updatedBlogs = await updatedBlogsResponse.body;
    const updatedBlog = updatedBlogs.find(blog => blog.id === id);

    assert.strictEqual(updatedBlog.likes, newLikes);
  });

  test('update with invalid id', async () => {
    const invalidId = '5a3d5da59070081a82a3445';

    await api.put(`/api/blogs/${invalidId}`)
      .expect(400);
  });

  test('update non-existing entry', async () => {
    const blogsResponse = await api.get('/api/blogs');
    const blogs = await blogsResponse.body;

    await api.delete(`/api/blogs/${blogs[0].id}`)
      .expect(204);
    await api.put(`/api/blogs/${blogs[0].id}`)
      .send({ likes: 1234 })
      .expect(404);
  });
});

after(async () => {
  await mongoose.connection.close();
});
