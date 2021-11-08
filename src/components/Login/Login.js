import { useState } from "react";

const LoginForm = () => {

  // const [userData, setUserData] = useState();
  // // const navigate = useNavigate();

  // const changeUserData = (event)=> {
  //   setUserData(
  //     ...userData,
  //     [event.target.id]: event.target.value
  //   )
  // }

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(loginUserThunk(userData)); // cuando no utilizamos custom hook
  //   // navigate("/list");
  // }

  return (
    <>
      <form  autoComplete="off" noValidate>
        <input type="text" id="name" placeholder="Enter name"/>
        <input type="text" id="username" placehoolder="Enter username" />
        <input type="password" id="password" placeholder="Enter password" />
      </form>
    </>
    
  )

}

export default LoginForm;