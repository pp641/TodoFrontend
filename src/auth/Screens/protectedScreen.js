import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentOne from "../../task/Components/componentOne";
import { isLoggedIn } from "../actions/actionAuth";
const ProtectedScreen = () => {
  let localStorageToken = localStorage.getItem("token");
  const allstates = useSelector((state) => state.AuthReducers);
  const dispatch = useDispatch();
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  React.useEffect(() => {
    setTobeShow(localStorage.getItem("token"));
    dispatch(isLoggedIn(localStorage.getItem("token")));
  }, []);
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

  return <div> {token ? <ComponentOne /> : <ShowNothing />}</div>;
};

export default ProtectedScreen;
