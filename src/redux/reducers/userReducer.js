import actionTypes from "../actions/actionTypes";

const userReducer = (user={
  isAuthenticated: false,
  user:{}
}, action) => {
   let newReducer;


   switch (action.type):
    case actionTypes.loginUser:
      user = {
        isAuteticated: true,
        user: action.user
      };
    break;
    case actionTypes.logoutUser:
      newUser = {
        isAutheticated: false,
        user: {}
      }
    break;
      
   return newReducer;
}
