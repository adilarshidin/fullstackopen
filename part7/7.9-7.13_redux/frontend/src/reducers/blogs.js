import { createSlice } from "@reduxjs/toolkit";

import {
  getBlogsRequest,
  postBlogRequest,
  deleteBlogRequest,
  updateBlogRequest,
} from "../utils/requests";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    createBlog(state, action) {
      return [
        ...state,
        { ...action.payload.data, user: { id: action.payload.data.user } },
      ];
    },
    deleteBlog(state, action) {
      const data = action.payload;
      const newBlogs = state.filter((blog) => (blog.id === data ? "" : blog));
      return newBlogs;
    },
    updateBlog(state, action) {
      const data = { ...action.payload, user: { id: action.payload.user } };
      const newBlogs = state.map((blog) => (blog.id === data.id ? data : blog));
      return newBlogs;
    },
  },
});

export const { setBlogs, createBlog, deleteBlog, updateBlog } =
  blogsSlice.actions;

const getBlogsThunkAction = (token) => {
  return async (dispatch) => {
    const response = await getBlogsRequest(token);
    dispatch(setBlogs(await response));
  };
};

const createBlogThunkAction = (blog, id, token) => {
  return async (dispatch) => {
    const response = await postBlogRequest(blog, id, token);
    dispatch(createBlog(await response));
  };
};

const deleteBlogThunkAction = (id, token) => {
  return async (dispatch) => {
    await deleteBlogRequest(id, token);
    dispatch(deleteBlog(id));
  };
};

const updateBlogThunkAction = (blog, token) => {
  return async (dispatch) => {
    const response = await updateBlogRequest(blog, token);
    const data = await response;
    dispatch(updateBlog(data.data));
  };
};

export {
  getBlogsThunkAction,
  createBlogThunkAction,
  deleteBlogThunkAction,
  updateBlogThunkAction,
};
export default blogsSlice.reducer;
