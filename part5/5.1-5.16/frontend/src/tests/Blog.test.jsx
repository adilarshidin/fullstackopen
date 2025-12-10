import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Blog from '../components/Blog';
import { updateBlogRequest } from '../utils/requests';


vi.mock('../utils/requests', () => ({
  updateBlogRequest: vi.fn()
}));


test('render with only title and author', async () => {
  const blog = {
    title: 'Gospel of John',
    author: 'John The Apostle',
    url: 'new-testament/4',
    likes: 777,
    user: {
      name: 'John'
    }
  };
  const blogs = null;
  const setBlogs = null;
  const userData = {
    id: '123'
  };
  const setNotificationObject = null;

  render(<Blog blog={blog}
    blogs={blogs}
    setBlogs={setBlogs}
    userData={userData}
    setNotificationObject={setNotificationObject} />);

  const blogTitle = screen.getByText(blog.title);
  const blogAuthor = screen.getByText(`Author: ${blog.author}`);
  const blogUrl = screen.getByText('link');
  const blogLikes = screen.getByText(`Likes: ${blog.likes}`);

  expect(blogTitle).toBeVisible();
  expect(blogAuthor).toBeVisible();
  expect(blogUrl).not.toBeVisible();
  expect(blogLikes).not.toBeVisible();
});

test('url and likes visible when view button is clicked', async () => {
  const blog = {
    title: 'Gospel of John',
    author: 'John The Apostle',
    url: 'new-testament/4',
    likes: 777,
    user: {
      name: 'John'
    }
  };
  const blogs = null;
  const setBlogs = null;
  const userData = {
    id: '123'
  };
  const setNotificationObject = null;

  render(<Blog blog={blog}
    blogs={blogs}
    setBlogs={setBlogs}
    userData={userData}
    setNotificationObject={setNotificationObject} />);

  const user = userEvent.setup();
  const viewButton = screen.getByText('View');
  await user.click(viewButton);

  const blogUrl = screen.getByText('link');
  const blogLikes = screen.getByText(`Likes: ${blog.likes}`);

  expect(blogUrl).toBeVisible();
  expect(blogLikes).toBeVisible();
});

test('liked twice', async () => {
  updateBlogRequest.mockResolvedValue({
    result: true,
    data: 'some data'
  });

  const blog = {
    title: 'Gospel of John',
    author: 'John The Apostle',
    url: 'new-testament/4',
    likes: 777,
    user: {
      name: 'John'
    }
  };
  const blogs = [
    {
      title: 'Gospel of John',
      author: 'John The Apostle',
      url: 'new-testament/4',
      likes: 777,
      user: {
        name: 'John'
      }
    },
    {
      title: 'Gospel of Matthew',
      author: 'Matthew The Apostle',
      url: 'new-testament/1',
      likes: 777,
      user: {
        name: 'Matthew'
      }
    }
  ];
  const setBlogs = vi.fn();
  const userData = {
    id: '123'
  };
  const setNotificationObject = null;

  render(<Blog blog={blog}
    blogs={blogs}
    setBlogs={setBlogs}
    userData={userData}
    setNotificationObject={setNotificationObject} />);

  const user = userEvent.setup();
  const viewButton = screen.getByText('View');
  await user.click(viewButton);

  const likeButton = screen.getByText('❤️ Like');
  await user.click(likeButton);
  await user.click(likeButton);

  expect(updateBlogRequest).toHaveBeenCalledTimes(2);
});
