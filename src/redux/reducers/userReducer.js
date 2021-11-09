import actionTypes from "../actions/actionTypes";

const userReducer = (user={
  isAuthenticated: false,
  user: {}
}, action) => {

  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = {
        isAuthenticated: true,
        user: action.user
      };
    break;
    case actionTypes.logoutUser:
      newUser = {
        isAuthenticated: false,
        user: {}
      }
    break;
    case actionTypes.loggedUser:
      newUser = { isAuthenticated: true, user: action.user };
      break;
    default:
      newUser = {...user};
      break;
  }

   return newUser;
};

export default userReducer;
