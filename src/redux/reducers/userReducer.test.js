import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given an userReducer", ()=>{
  describe("When it receives an empty, not authenticated user and a login action", ()=>{
    test("Then it should change isAuthenticated to true and return the logged user", ()=>{
      const initialValue = {
        isAuthenticated: false, 
        user: {}
      };
      const loggedUser = {
        isAuthenticated: true, 
        user: {
          username: "luis",
          password: "luisin"
        }
      };
      const action = {
        type: actionTypes.loginUser,
        user: {
        isAuthenticated: true, 
        user: {
          username: "luis",
          password: "luisin"
        },
      }
    };

    const newUser = userReducer(initialValue, action);

    expect(newUser).toEqual(loggedUser);

    })
  })
})