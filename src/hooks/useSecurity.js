import { useContext } from "react";
import SecurityContext from "../context/SecurityContext";

const useSecurity = () => useContext(SecurityContext);

export default useSecurity;
