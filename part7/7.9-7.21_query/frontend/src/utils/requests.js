const loginRequest = async (username, password) => {
  const loginResponse = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await loginResponse.json();
  if (!loginResponse.ok) throw { ...data };
  return data;
};

const getBlogsRequest = async () => {
  const getBlogsResponse = await fetch("/api/blogs");
  const data = await getBlogsResponse.json();

  if (!getBlogsResponse.ok) throw { ...data };

  return data;
};

const deleteBlogRequest = async (id, token) => {
  const deleteBlogResponse = await fetch(`/api/blogs/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await deleteBlogResponse.json();

  if (!deleteBlogResponse.ok) throw { ...data };

  return data;
};

const postBlogRequest = async (newBlog, id, token) => {
  const addBlogResponse = await fetch("/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      author: newBlog.author,
      title: newBlog.title,
      url: newBlog.url,
      user: id,
    }),
  });
  const data = await addBlogResponse.json();

  if (!addBlogResponse.ok) throw { ...data };

  return data;
};

const updateBlogRequest = async (blog, token) => {
  const updateBlogResponse = await fetch(`/api/blogs/${blog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(blog),
  });
  const data = await updateBlogResponse.json();

  if (!updateBlogResponse.ok) throw { ...data };

  return data;
};

const getUsersRequest = async () => {
  const getUsersResponse = await fetch("/api/users");

  const data = await getUsersResponse.json();

  if (!getUsersResponse.ok) throw { ...data };

  return data;
};

export {
  loginRequest,
  getBlogsRequest,
  deleteBlogRequest,
  postBlogRequest,
  updateBlogRequest,
  getUsersRequest
};
