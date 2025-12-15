import { useReducer, createContext } from "react";

const userReducer = (state, action) => {
  switch(action.type) {
  case "LOGIN": {
    return action.payload;
  }
  case "LOGOUT": {
    return null;
  }
  default:
    return state;
  };
};

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userData, userDataDispatch] = useReducer(
    userReducer, JSON.parse(window.localStorage.getItem("user")) || null);

  return (
    <UserContext.Provider value={{ userData, userDataDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserContextProvider;
