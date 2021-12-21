import axios from "axios";

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
