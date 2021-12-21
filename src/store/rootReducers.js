import TaskReducers from "../task/reducers/reducerOne";
import AuthReducers from "../auth/reducers/reducersAuth";
import { combineReducers } from "redux";

export default combineReducers({
  TaskReducers,
  AuthReducers,
});
