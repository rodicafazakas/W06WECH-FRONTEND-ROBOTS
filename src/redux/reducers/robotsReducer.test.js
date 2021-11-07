import robotsReducer from "./robotsReducer";
import actionTypes from "../actions/actionTypes";

describe("Given a robotsReducer", () => {
  describe("When it receives an empty list of robots and a load action with a number of robots", () => {
    test("The it should return a new list with the robots received", ()=> {})
    const initialList = [];
    const robotsList = [
          {
            id: 1,
            name: "R2-D2",
            image: "https://media.istockphoto.com/photos/-picture-id500962582?s=612x612",
            features: {
              speed: 4,
              strength: 9,
              creation_date: 1977,
            }
          },
          { id: 2,
            name: "rodney",
            image: "https://static.wikia.nocookie.net/robotcity/images/7/78/Rodney_Copperbottom.jpg/revision/latest?cb=20120220191544",
            features: {
              speed: 10,
              strength: 9,
              creation_date: 2015,
            }
          }
        ];
    const action = {
      type: actionTypes.loadRobots,
      robots: robotsList,
    }

    const newList = robotsReducer(initialList, action);

    expect(newList).toEqual(robotsList);
  })
})