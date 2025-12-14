import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App.jsx";
import notificationReducer from "./reducers/notification.js";
import blogsReducer from "./reducers/blogs.js";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogsReducer
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
