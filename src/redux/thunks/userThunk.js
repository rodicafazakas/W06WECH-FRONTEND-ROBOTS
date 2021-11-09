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
    result = await response.json();

  if (response.status===200) {
    const token = result.token;
    console.log(token);
    const user = jwtDecode(token);
    console.log(user);
    dispatch(userLoginAction(user));
    localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify({token:token}));
  }
};