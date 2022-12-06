import axios from "axios";
import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [userCookies, setUserCookies, removeUserCookies] = useCookies(["user"]);
  const [login, setLogin] = React.useState(
    userCookies && userCookies?.login ? userCookies.login : false
  );
  const [token, setToken] = React.useState(
    userCookies && userCookies?.token ? userCookies.token : ""
  );


  React.useEffect(() => {
    if (token !== "") {
      let time = 3 * 3600;
      setUserCookies("token", token, { path: "/", maxAge: time });
      setUserCookies("login", login, { path: "/", maxAge: time });
    } else {
      removeUserCookies("token");
      removeUserCookies("login");
    }
  }, [token, login]);


  const handleLogin = async (username, password) => {
    if (username === "") alert("Please enter username");
    //else if (password === "") alert("Please enter password");
    else {
      const data = JSON.stringify({
        username: username,
        password: password,
      });
      const config = {
        method: "post",
        url: "http://localhost/database/Ass2_HCSDL/User/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios(config);
      if (response.data?.token) {
        setToken(response.data.token);
        setLogin(true);
      } else alert(response.data.message);
    }
    console.log(login);

  };


  return (
    <CookiesProvider>
      <UserContext.Provider
        value={{
          login,
          setLogin,
          token,
          setToken,
          handleLogin,
        }}
      >
        {children}
      </UserContext.Provider>
    </CookiesProvider>
  );
};

export default UserContext;
