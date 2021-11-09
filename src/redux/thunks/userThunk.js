import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";

const apiUrl="https://robots-app.herokuapp.com"; 

export const loginUserThunk = (user) => async(dispatch) => {
  let result = null;
  const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
 

  if (response.status===200) {
    result = await response.json();
    const token = result.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem(user.username, JSON.stringify({token:token}));
  }
};