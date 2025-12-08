const supertest = require('supertest');
const mongoose = require('mongoose');
const assert = require('node:assert');
const { describe, test, after, beforeEach } = require('node:test');

const listHelper = require('../utils/list_helper');
const Blog = require('../models/blog');
const User = require('../models/user');
const app = require('../app');

const api = supertest(app);


beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(listHelper.blogs);
  await User.deleteMany({});
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

describe('POST /api/blogs', async () => {
  test('valid blog', async () => {
    const currentBlogsResponse = await api.get('/api/blogs');
    const currentBlogs = await currentBlogsResponse.body;

    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlog;
    newBlog.user = userResponse.body.userId;

    await api.post('/api/blogs')
      .set('Authorization', `Bearer ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const newBlogsResponse = await api.get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const newBlogs = await newBlogsResponse.body;
    assert.strictEqual(newBlogs.length, currentBlogs.length + 1);
  });

  test('add missing likes property', async() => {
    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlogWithoutLikes;
    newBlog.user = userResponse.body.userId;

    const insertedBlogResponse = await api.post('/api/blogs')
      .set('Authorization', `Bearer ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const insertedBlog = await insertedBlogResponse.body;
    const includesLikesProperty = Object.keys(insertedBlog.data).includes('likes');

    assert.ok(includesLikesProperty);
  });

  test('400 status for no title', async () => {
    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlogWithoutTitle;
    newBlog.user = userResponse.body.userId;

    await api.post('/api/blogs')
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(400);
  });

  test('400 status for no url', async () => {
    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlogWithoutUrl;
    newBlog.user = userResponse.body.userId;

    await api.post('/api/blogs')
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(400);
  });
});

describe('DELETE /api/blogs', async () => {
  test('valid id', async () => {
    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlog;
    newBlog.user = userResponse.body.userId;

    const newBlogResponse = await api.post('/api/blogs')
      .set('Authorization', `Bearer ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    const newBlogId = newBlogResponse.body.data.id;

    const blogsResponse = await api.get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const blogDeletionResponse = await api.delete(`/api/blogs/${newBlogId}`)
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    assert.ok(blogDeletionResponse.body.result);
    assert.strictEqual(blogDeletionResponse.body.message, 'Blog successfully deleted.');

    const newBlogsResponse = await api.get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    assert.strictEqual(newBlogsResponse.body.length, blogsResponse.body.length - 1);
  });

  test('400 for non valid id', async () => {
    const invalidId = '5a3d5da59070081a82a3445';

    await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const blogDeletionResponse = await api.delete(`/api/blogs/${invalidId}`)
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    assert.ok(!blogDeletionResponse.body.result);
    assert.strictEqual(blogDeletionResponse.body.message, 'Invalid id.');
  });

  test('404 for non existing entry', async () => {
    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlog;
    newBlog.user = userResponse.body.userId;

    const newBlogResponse = await api.post('/api/blogs')
      .set('Authorization', `Bearer ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    const newBlogId = newBlogResponse.body.data.id;

    await api.get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    await api.delete(`/api/blogs/${newBlogId}`)
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const secondBlogDeletionResponse = await api.delete(`/api/blogs/${newBlogId}`)
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .expect(404)
      .expect('Content-Type', /application\/json/);

    assert.ok(!secondBlogDeletionResponse.body.result);
    assert.strictEqual(secondBlogDeletionResponse.body.message, 'Blog was not found.');
  });
});

describe('PUT /api/blogs', async () => {
  test('update with valid id', async () => {
    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlog;
    newBlog.user = userResponse.body.userId;

    const newBlogResponse = await api.post('/api/blogs')
      .set('Authorization', `Bearer ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    const newBlogId = newBlogResponse.body.data.id;
    const newLikes = 1234;

    await api.put(`/api/blogs/${newBlogId}`)
      .set({ 'Authorization': `Bearer ${authResponse.body.data.token}` })
      .send({ likes: newLikes })
      .expect(200);

    const updatedBlogsResponse = await api.get('/api/blogs');
    const updatedBlogs = await updatedBlogsResponse.body;
    const updatedBlog = updatedBlogs.find(blog => blog.id === newBlogId);

    assert.strictEqual(updatedBlog.likes, newLikes);
  });

  test('update with invalid id', async () => {
    const invalidId = '5a3d5da59070081a82a3445';

    await api.put(`/api/blogs/${invalidId}`)
      .expect(400);
  });

  test('update non-existing entry', async () => {
    const userResponse = await api.post('/api/users')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const authResponse = await api.post('/api/auth')
      .send({ username: 'petertheapostle', password: '777' })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newBlog = listHelper.newBlog;
    newBlog.user = userResponse.body.userId;

    const newBlogResponse = await api.post('/api/blogs')
      .set('Authorization', `Bearer ${authResponse.body.data.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    const newBlogId = newBlogResponse.body.data.id;

    await api.get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    await api.delete(`/api/blogs/${newBlogId}`)
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const blogUpdateResponse = await api.put(`/api/blogs/${newBlogId}`)
      .set('Authorization', `Bearer: ${authResponse.body.data.token}`)
      .send({ likes: 1234 })
      .expect(404)
      .expect('Content-Type', /application\/json/);

    assert.ok(!blogUpdateResponse.body.result);
    assert.strictEqual(blogUpdateResponse.body.message, 'Blog was not found.');
  });
});

after(async () => {
  await mongoose.connection.close();
});
