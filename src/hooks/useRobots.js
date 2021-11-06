import {useSelector, useDispatch} from "react-redux";
import {useCallback} from "react";
import { loadRobotsThunk } from "../redux/thunks/thunk";

const useRobots = () => {
  const robots = useSelector( (store) => store.robots );
  const dispatch = useDispatch(); 

  const loadRobots = useCallback( () => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return {
    robots,
    loadRobots,
  }
};

export default useRobots;