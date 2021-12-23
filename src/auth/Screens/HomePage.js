import React from "react";
import useEffect from "react";
const HomePage = () => {
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const [token, setToken] = React.useState("");
  return token ? (
    <>
      <div>Now we Are Signin</div>
    </>
  ) : (
    <>
      <div>We Are not Signin</div>
    </>
  );
};

export default HomePage;
