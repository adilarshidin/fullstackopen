import { createSlice, current } from "@reduxjs/toolkit";

import { getBlogsRequest, postBlogRequest } from "../utils/requests";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    createBlog(state, action) {
      return [...state, { ...action.payload.data, user: { id: action.payload.data.user } }];
    },
    deleteBlogRequest(state, action) {
      const data = action.payload;
      console.log(data);
      return state;
    }
  }
});

export const { setBlogs, createBlog, deleteBlogRequest } = blogsSlice.actions;

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

export { getBlogsThunkAction, createBlogThunkAction };
export default blogsSlice.reducer;
