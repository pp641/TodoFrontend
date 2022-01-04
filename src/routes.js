import * as React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import SignIn from "./auth/Screens/login";
import SignUp from "./auth/Screens/register";
import Logout from "./auth/Screens/logout";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./auth/actions/actionAuth";
import ProtectedScreen from "./auth/Screens/protectedScreen";
import Collaborator from "./collaboration/Component/headComponent";
import AllCollaborator from "./collaboration/Component/seeAllCollaborators";
export default function NewApp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = React.useState("");
  const AuthReduxStates = useSelector((state) => state.AuthReducers);
  React.useEffect(() => {
    // dispatch(isLoggedIn(localStorage.getItem("token")));
  }, [AuthReduxStates]);

  const logoutFunctionality = () => {
    localStorage.clear();
    // dispatch(isLoggedIn(localStorage.getItem("token")));
    navigate("/about");
  };

  return (
    <div>
      {console.log(AuthReduxStates)}
      <button
        onClick={logoutFunctionality}
        style={{
          display: `${!localStorage.getItem("token") ? "none" : "inline"}`,
          color: "blue",
          borderRadius: "10px",
          background: "green",
          fontSize: "100%",
          width: "150px",
          height: "50px",
        }}
      >
        {" "}
        Logout
      </button>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/protected" element={<ProtectedScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li
            style={{
              display: !localStorage.getItem("token") ? "block" : "none",
            }}
          >
            <Link to="/signin">Signin</Link>
          </li>
          <li
            style={{
              display: !localStorage.getItem("token") ? "block" : "none",
            }}
          >
            <Link to="/signup">Signup</Link>
          </li>
          <li
            style={{
              display: localStorage.getItem("token") ? "block" : "none",
            }}
          >
            <Link to="/dashboard">User DashBoard</Link>
          </li>
          <li
            style={{
              display: localStorage.getItem("token") ? "block" : "none",
            }}
          >
            <Link to="/protected">Protected</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>This is our Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
