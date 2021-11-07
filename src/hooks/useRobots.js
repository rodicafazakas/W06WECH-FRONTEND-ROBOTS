import {useSelector, useDispatch} from "react-redux";
import {useCallback} from "react";
import { loadRobotsThunk, createRobotThunk, deleteRobotThunk } from "../redux/thunks/thunk";

const useRobots = () => {
  const robots = useSelector( (store) => store.robots );
  const dispatch = useDispatch(); 

  const loadRobots = useCallback( () => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const createRobot = (robot) => {
    dispatch(createRobotThunk(robot))
  }

 const deleteRobot = (id) => {
    dispatch(deleteRobotThunk(id));
  };

  return {
    robots,
    loadRobots,
    createRobot,
    deleteRobot,
  }
};

export default useRobots;