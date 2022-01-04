import TaskReducers from "../task/reducers/reducerOne";
import AuthReducers from "../auth/reducers/reducersAuth";
import collaboratorReducers from "../collaboration/reducers/collaboratorReducer";
import { combineReducers } from "redux";

export default combineReducers({
  TaskReducers,
  AuthReducers,
  collaboratorReducers,
});
