import { Navigate } from "react-router";
import { userLogoutAction } from "../../redux/actions/actionCreators";

const Logout = () => {
  const logout = ()=> {
    dispatch(userLogoutAction());
    localStorage.removeItem("pablo");
    Navigate("/login");
  }
}