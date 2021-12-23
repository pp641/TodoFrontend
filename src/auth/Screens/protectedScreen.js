import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../actions/actionAuth";
const ProtectedScreen = () => {
  let localStorageToken = localStorage.getItem("token");
  const allstates = useSelector((state) => state.AuthReducers);
  //  allstates.isLoggedIn;
  const dispatch = useDispatch();
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    dispatch(isLoggedIn(localStorage.getItem("token")));
    setTobeShow(allstates.isLoggedIn);
  }, [allstates]);
  const [tobeShow, setTobeShow] = React.useState("");
  const ShowSomething = () => {
    return (
      <div>
        <div>Something to be shown</div>
      </div>
    );
  };

  const ShowNothing = () => {
    return (
      <div>
        <div>ShowNothing to be shown</div>
      </div>
    );
  };

  return <div> {tobeShow ? <ShowSomething /> : <ShowNothing />}</div>;
};

export default ProtectedScreen;
