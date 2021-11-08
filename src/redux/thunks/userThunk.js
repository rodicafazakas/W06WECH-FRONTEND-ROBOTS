import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";

export const loginUserThunk = (user) => async(dispatch) => {
  const response = await axios.post 

  if (Response.status===200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem("pablo", JSON.stringify({token:token}));
  }
}