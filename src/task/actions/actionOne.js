import axios from "axios";

export const setData = (data) => async (dispatch) => {
  console.log("setData", data);
  await axios
    .post("/api/postTodo", { data: data })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: "SET_USERS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "SET_USERS_FAILED",
        payload: error,
      });
    });
};

export const getAllData = () => async (dispatch) => {
  await axios
    .get("/api/getTodoAll")
    .then((response) => {
      dispatch({
        type: "GET_ALL_USERS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ALL_USERS_FAILED",
        payload: error,
      });
    });
};

export const getUserById = (data) => async (dispatch) => {
  await axios
    .get("/api/getTodo", { data: data })
    .then((response) => {
      dispatch({
        type: "GET_USER_BY_ID",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_USER_BY_ID_FAILED",
        payload: error,
      });
    });
};

export const deleteOneRecord = (data) => async (dispatch) => {
  await axios
    .delete("/api/deleteTodo", {
      headers: {
        "Content-type": "application/json",
      },

      body: data,
    })
    .then((response) => {
      console.log("response ::: ", response);
      dispatch({
        type: "DELETE_RECORD",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "DELETE_RECORD_FAILED",
        payload: error,
      });
    });
};

export const updateRecord = (id, data) => async (dispatch) => {
  await axios
    .patch("/api/updateTodo", { id: id, data: data })
    .then((response) => {
      dispatch({
        type: "UPDATE_RECORD",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "UPDATE_RECORD_FAILED",
        payload: error,
      });
    });
};
