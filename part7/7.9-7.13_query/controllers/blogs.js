const blogsRouter = require("express").Router();
const mongoose = require("mongoose");

const Blog = require("../models/blog");
const User = require("../models/user");

blogsRouter.get("/", async (request, response) => {
  await response.json(
    await Blog.find({}).populate("user", { username: true, name: true }),
  );
});

blogsRouter.post("/", async (request, response) => {
  const token = request.token;

  if (!token)
    return await response.status(401).json({
      result: false,
      message: "Missing bearer token.",
    });

  let blog = new Blog(request.body);

  if (!blog.url || !blog.title || !blog.user) {
    return await response.status(400).json({
      result: false,
      message: "Missing blog info.",
    });
  } else if (!blog.likes) {
    blog["likes"] = 0;
  }

  try {
    const requestUserId = request.user;

    if (!requestUserId)
      return await response.result(401).json({
        result: false,
        message: "Invalid token.",
      });
  } catch {
    return await response.status(401).json({
      result: false,
      message: "Invalid token.",
    });
  }

  const user = await User.findById(blog.user);

  if (!user)
    return await response.status(404).json({
      result: false,
      message: "User for this blog was not found.",
    });

  const savedBlog = await blog.save();
  user.blogs.push(savedBlog._id);
  await user.save();

  await response.status(201).json({
    result: true,
    data: savedBlog,
    message: "Successfully added a new blog.",
  });
});

blogsRouter.delete("/:id", async (request, response) => {
  const token = request.token;

  if (!token)
    return await response.status(401).json({
      result: false,
      message: "Missing bearer token.",
    });

  const id = request.params.id;

  if (!request.user) {
    return await response.status(401).json({
      result: false,
      message: "Invalid token.",
    });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog)
      return await response.status(404).json({
        result: false,
        message: "Blog was not found.",
      });

    if (blog.user.toString() !== request.user)
      return await response.status(401).json({
        result: false,
        message: "Invalid user for this operation.",
      });
  } catch (error) {
    if (error.name === "CastError") {
      return await response.status(400).json({
        result: false,
        message: "Invalid id.",
      });
    }
  }

  const deletionResult = await Blog.findByIdAndDelete(id);
  if (deletionResult) {
    return await response.status(200).json({
      result: true,
      message: "Blog successfully deleted.",
    });
  } else {
    return await response.status(404).json({
      result: false,
      message: "Blog was not found.",
    });
  }
});

blogsRouter.put("/:id", async (request, response) => {
  const token = request.token;
  const id = request.params.id;
  const body = request.body;

  if (!mongoose.isValidObjectId(id)) {
    return await response.status(400).json({
      result: false,
      message: "Invalid id.",
    });
  }

  if (!token)
    return await response.status(401).json({
      result: false,
      message: "Missing bearer token.",
    });

  if (!body) {
    return await response.status(400).json({
      result: false,
      message: "Invalid payload.",
    });
  }

  const updatedBlog = await Blog.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
    context: "query",
  }).populate("user", { username: true, name: true });

  if (updatedBlog) {
    return await response.status(200).json({ result: true, data: updatedBlog });
  } else {
    return await response.status(404).json({
      result: false,
      message: "Blog was not found.",
    });
  }
});

module.exports = blogsRouter;
