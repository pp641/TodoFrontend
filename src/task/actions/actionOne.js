import axios from "axios";

export const setData = (data, token) => async (dispatch) => {
  console.log("setDatasss", data, token);
  await axios
    .post("/api/postTodo",{
      data: data} , {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: "SET_DATA",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "SET_DATA_FAILED",
        payload: error,
      });
    });
};

export const getAllData = () => async (dispatch) => {
  await axios
    .get("/api/getTodoAll", {
      headers: {
      Accept : 'application/json',
      'Content-Type' : 'application/json',
      Authorization : localStorage.getItem("token") 
    }
  })
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
    .get("/api/getTodo", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data: data,
    })
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

export const deleteOneRecord = (data2) => async (dispatch) => {

  const headers =  {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")

  }
  const data  = {
    data : `${data2}`
  }
  await axios
    .delete("/api/deleteTodo", {
          headers,data}
    )
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
    .patch("/api/updateTodo",{id : id , data: data}, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }
    })
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
