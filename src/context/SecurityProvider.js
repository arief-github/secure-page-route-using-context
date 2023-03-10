import { useState } from "react";
import SecurityContext from "./SecurityContext";

const SecurityProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SecurityContext.Provider
      value={{
        login: (username, password) => {
          if (username === "fred" && password === "very123") {
            setLoggedIn(true);
          }
        },
        logout: () => setLoggedIn(false),
        loggedIn
      }}
    >
      {props.children}
    </SecurityContext.Provider>
  );
};

export default SecurityProvider;
