import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecurityProvider from "./context/SecurityProvider";
import { SecureRoute } from "./components/Secure";
import Home from "./components/Home";
import Private1 from "./components/Private1";
import Private2 from "./components/Private2";
import Public from "./components/Public";

export default function App() {
  return (
    <div className="App">
      <Router>
        <SecurityProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <SecureRoute path="/private1">
              <Private1 />
            </SecureRoute>
            <SecureRoute path="/private2">
              <Private2 />
            </SecureRoute>
            <Route exact path="/public">
              <Public />
            </Route>
          </Switch>
        </SecurityProvider>
      </Router>
    </div>
  );
}
