import './App.css';
import RobotsList from './components/RobotsList';
import LoginForm from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Form from './components/Form';
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
// import { useEffect } from 'react';

function App() {
  // const {isAutheticated} = useSelector(({user})=> user);

  // useEffect(()=>{
  //   const token =JSON.parse(localStorage.getItem("pablo"));
  //   if (token) {
  //     dispatch(userLoginAction(jwtDecode(token.token)));
  //   }
  // }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
            <Route path="/robots" element={<RobotsList/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/login" element={<LoginForm /> } /> 
            <Route path="/logout" element={<Logout /> }/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
