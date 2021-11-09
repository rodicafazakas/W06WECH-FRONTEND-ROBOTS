import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunk";
import { userLogoutAction } from "../redux/actions/actionCreators";

const useUser = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback( (user) => {
      dispatch(loginUserThunk(user));
    }, [dispatch]
  );

  const logoutUser = useCallback( () => {
    dispatch(userLogoutAction());
  }, [dispatch]
  );

  return {
    user,
    loginUser,
    logoutUser
  }
}

export default useUser;