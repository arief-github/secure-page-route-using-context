import useSecurity from "../../hooks/useSecurity";
import Login from "../Login";

const Secure = ({ children }) => {
  const { loggedIn } = useSecurity();

  return loggedIn ? children : <Login />;
};

export default Secure;
