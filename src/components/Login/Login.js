import { useState } from "react";
import {useNavigate} from "react-router-dom";
import useUser from "../../hooks/useUser";

const LoginForm = () => {

  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const {loginUser} = useUser();

  const changeUserData = (event)=> {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(userData);
    //dispatch(loginUserThunk(userData)); // cuando no utilizamos custom hook
    navigate("/robots");
  }

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off" noValidate>
        {/* <input type="text" id="name" placeholder="Enter name"/> */}
        <input type="text" id="username" placehoolder="Enter username" onChange={changeUserData}/>
        <input type="password" id="password" placeholder="Enter password" onChange={changeUserData} />
        <button type="submit"> SUBMIT </button>
      </form>
    </>
    
  )

}

export default LoginForm;