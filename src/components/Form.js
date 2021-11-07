import useRobots from "../hooks/useRobots";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const {createRobot} = useRobots();
  
  const initialData = {
      name: "",
      image: "",
      speed: "",
      strength: "",
      creation_date: "",
      
  }

  const [robotData, setRobotData] = useState(initialData);

  const changeData = (event) => {
    setRobotData({
      ...robotData,
      [event.target.id]: event.target.value,
    });
  };

  const onCreateRobot = (event) => {
    event.preventDefault();
    const newRobot = {
      name: robotData.name,
      image: robotData.image,
      features: {
        speed: robotData.speed,
        strength: robotData.strength,
        creation_date: robotData.creation_date,
      },
    };

    createRobot(newRobot);

    setRobotData(initialData);
  }

  return (
    <div className="create__robot">
      <form onSubmit={onCreateRobot} autoComplete="off">
        <h4>Add a robot</h4>
        <div className="form-control">
        <input type="text" 
              id="name"
              //  value={robotData.name} 
               placeholder="Enter name" 
               onChange={changeData} /> 
        </div>

        <div className="form-control">
        <input type="text" 
              id="image"
              //  value={robotData.image} 
               placeholder="Image url" 
               onChange={changeData} />
        </div>
        
        <div className="form-control">
        <input type="text" 
              id="speed"
              //  value={robotData.features.speed} 
               placeholder="Enter speed" 
               onChange={changeData} 
               min="0"
               max="10"
               required /> 
        </div>
        <div className="form-control">  
        <input type="text" 
              id="strength"
              //  value={robotData.features.strength} 
               placeholder="Enter strength" 
               onChange={changeData} 
               min="0"
               max="10"
               required />
        </div>
        <div className="form-control">
        <input type="date" 
              id="creation_date"
              //  value={robotData.features.creation_date} 
               placeholder="Enter creation date" 
               onChange={changeData} />  
        </div>
        <div className="form-control">
           <button type="submit"> Add </button>
        </div>
      </form>
   
    </div>
  )
}

export default Form;