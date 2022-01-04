import axios from "axios";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { ActionType } from "redux-promise-middleware";

export const createNewAccount = (data) => async (dispatch) => {
  await axios
    .post("/api/users/register", { data: data })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: "CREATE_NEW_ACCOUNT",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "CREATE_NEW_ACCOUNT_FAILED",
        payload: error,
      });
    });
};

export const loginIntoAccount = (data) => async (dispatch) => {
  await axios
    .post("/api/users/login", { data: data })
    .then((response) => {
      console.log("this is  resp", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.payload.id);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "LOGIN_FAILED",
        payload: error,
      });
    });
};

export const isLoggedIn = (data) => async (dispatch) => {
  return dispatch({
    type: "IS_LOGGED_IN",
    payload: data ? true : false,
  });
};
