import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  localStorage.clear();
  return navigate("/about");
};

export default Logout;
