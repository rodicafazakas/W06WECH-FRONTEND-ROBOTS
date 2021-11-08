import { useState } from "react";


const LoginForm = () => {

const [userData, setUserData] = useState();
const navigate = useNavigate();

const changeUserData = (event)=> {
  setUserData(
    ...userData,
    [event.target.id]: event.target.value
  )
}

const onSubmit = (event) => {
  event.preventDefault();
  dispatch(loginUserThunk(userData)); // cuando no utilizamos custom hook
  navigate("/list");
}

}