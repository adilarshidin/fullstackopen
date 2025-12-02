const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const calculateLikes = (sum, blog) => sum + blog.likes;
  return blogs.reduce(calculateLikes, 0);
};

const favouriteBlog = (blogs) => {
  let maxLikes = 0;
  let blogId = null;

  blogs.forEach(blog => {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes;
      blogId = blog._id;
    }
  });

  return blogId;
};

const mostBlogs = (blogs) => {
  let authorsToBlogs = {};

  blogs.forEach(blog => {
    if (!authorsToBlogs[blog.author]) {
      authorsToBlogs[blog.author] = 0;
    };

    authorsToBlogs[blog.author] += 1;
  });

  let maxBlogs = 0;
  let maxBlogsAuthor = '';

  Object.entries(authorsToBlogs).forEach(entry => {
    if (entry[1] > maxBlogs) {
      maxBlogs = entry[1];
      maxBlogsAuthor = entry[0];
    }
  });

  return maxBlogsAuthor;
};

const mostLikes = (blogs) => {
  let authorsToLikes = {};

  blogs.forEach(blog => {
    if (!authorsToLikes[blog.author]) authorsToLikes[blog.author] = 0;
    authorsToLikes[blog.author] += blog.likes;
  });

  let maxLikes = 0;
  let maxLikesAuthor = '';

  Object.entries(authorsToLikes).forEach(entry => {
    if (entry[1] > maxLikes) {
      maxLikes = entry[1];
      maxLikesAuthor = entry[0];
    };
  });

  return {
    author: maxLikesAuthor,
    likes: maxLikes
  };
};

module.exports = { dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes };
