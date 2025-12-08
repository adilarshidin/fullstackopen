const loginRequest = async (username, password) => {
  const loginResponse = await fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return await loginResponse.json();
};

const getBlogsRequest = async (token) => {
  const getBlogsResponse = await fetch('/api/blogs', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return await getBlogsResponse.json();
};

const deleteBlogRequest = async (id, token) => {
  const deleteBlogResponse = await fetch(`/api/blogs/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return await deleteBlogResponse.json();
};

const addBlogRequest = async (title, author, url, id, token) => {
  const addBlogResponse = await fetch('/api/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ author: author, title: title, url: url, user: id })
  });
  return await addBlogResponse.json();
};

const updateBlogRequest = async (data, token) => {
  const updateBlogResponse = await fetch(`/api/blogs/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  return await updateBlogResponse.json();
};

export {
  loginRequest,
  getBlogsRequest,
  deleteBlogRequest,
  addBlogRequest,
  updateBlogRequest
};
